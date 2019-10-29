/* const messageWithGif = (node, edges) => {
  const message = {
    attachment: {
      type: 'image',
      payload: { url: node.text }
    }
  }

  if (edges && edges.length > 0) {
    message.quick_replies = node.children.edges.map((edge) => ({
      content_type: 'text',
      payload: edge.node.action,
      title: edge.node.text
    }))
  }

  return message
} */

export const reply = (port, campaign) => {
  const newLinks = campaign.links.filter((link) => port.links[0] === link.id)
  if (newLinks.length !== 0) {
    return {
      content_type: 'text',
      payload: newLinks[0].target,
      title: port.text
    }
  }
  throw new Error(`Port "${port.text}" has no target link.`)
}

export const quickReply = (node, campaign) => ({
  text: node.text,
  quick_replies: node.ports.filter(p => !p.in).map((port) => reply(port, campaign))
})

export const hasQuickReply = (node) => node && node.type === 'reply'

export const hasTexts = (node) => {
  const hasText = node && node.type === 'message'
  // verifica se possue mensagens subsequentes
  const ports = node.ports.filter(p => !p.in && !!p.links[0])
  return hasText && ports.length > 0
}

export const messageSequential = (node, campaign, store, actions) => {
  // TODO: verificar se existem mensagens subsequentes
  const ports = node.ports.filter(p => !p.in && !!p.links[0])
  if (ports.length > 0) {
    const link = ports[0].links[0]
    const target = campaign.links.filter(l => l.id === link)[0].target
    const child = campaign.nodes.filter(node => node.id === target)[0]

    if (node.type === 'message') {
      store.push(node.text)
      if (child) {
        // continue with flux only if link exists
        messageSequential(child, campaign, store, actions)
      }
    } else if (node.type === 'reply') {
      const reply = quickReply(node, campaign)
      store.push(reply)
    } else if (node.type === 'action') {
      // TODO: entendender melhor a complexidade de cada acao
      const successfully = node.ports.filter(p => !p.in && p.success)[0].links[0]
      const failure = node.ports.filter(p => !p.in && !p.success)[0].links[0]
      const successfullyTarget = campaign.links.filter(l => l.id === successfully)[0].target
      const failureTarget = campaign.links.filter(l => l.id === failure)[0].target
      store.push(node.text)
      actions.push({ [node.id]: { node, successfullyTarget, failureTarget } })
    } else {
      throw new Error(`${node.type} message node type not supported.`)
    }
  } else {
    store.push(node.text)
  }
}

export const writeSpeech = (campaign: any) => {
  const diagram = campaign.diagram

  // Filter links and nodes on bonde-diagram
  const links = Object.values(
    diagram
      .layers
      .filter(m => m.type === 'diagram-links')[0]
      .models
  )
  const nodes = Object.values(
    diagram
      .layers
      .filter(m => m.type === 'diagram-nodes')[0]
      .models
  )
  const actionList = []
  // Parse diagram to speech structure
  const messageList = nodes.map((node: any) => {
    if (hasQuickReply(node)) {
      return {
        [node.id]: quickReply(node, { links, nodes })
      }
    } else if (hasTexts(node)) {
      // TODO: retornar lista de mensagens até checar no próximo quick_reply
      const store = []
      messageSequential(node, { links, nodes }, store, actionList)
      return {
        [node.id]: store
      }
    } else if (node.type === 'action') {
      const store = []
      messageSequential(node, { links, nodes }, store, actionList)
      return {
        [node.id]: store
      }
    } else {
      return {
        [node.id]: node.text
      }
    }
  })

  // Change speech list to messages object.
  const toOBJ = (array, obj) => {
    array.forEach(node => {
      Object.keys(node).forEach(uuid => {
        obj[uuid] = node[uuid]
      })
    })
  }

  const messages = {}
  toOBJ(messageList, messages)

  const actions = {}
  toOBJ(actionList, actions)

  return {
    actions,
    messages,
    // First message always more left position x
    started: campaign.get_started ? (nodes.sort(
      function (a: any, b: any): number {
        return a.x - b.x
      }
    )[0] as object)['id'] : false
  }
}
