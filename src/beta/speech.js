const messageWithGif = (node, edges) => {
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
}

const quickReply = (node, campaign) => ({
  text: node.text,
  quick_replies: node.ports.filter(p => !p.in).map((port) => {
    const newLinks = campaign.links.filter((link) => port.links[0] === link.id)
    return {
      content_type: 'text',
      // Payload é o identificador do link de uma relação entre ports
      // e nodes
      payload: newLinks.length !== 0 ? newLinks[0].target : 'payload default sem resposta',
      title: port.text
    }
  })
})

const hasQuickReply = (node) => node && node.kind === 'quick_reply'

const hasTexts = (node, campaign) => {
  const hasText = node && node.kind === 'text'
  // verifica se possue mensagens subsequentes
  const ports = node.ports.filter(p => !p.in && !!p.links[0])
  return hasText && ports.length > 0
}

const messageSequential = (node, campaign, store) => {
  // TODO: verificar se existem mensagens subsequentes
  const ports = node.ports.filter(p => !p.in && !!p.links[0])
  if (ports.length > 0) {
    const link = ports[0].links[0]
    const target = campaign.links.filter(l => l.id === link)[0].target
    const child = campaign.nodes.filter(node => node.id === target)[0]

    if (node.kind === 'text') {
      store.push(node.text)
      messageSequential(child, campaign, store)
    } else {
      const reply = quickReply(node, campaign)
      store.push(reply)
    }
  } else {
    store.push(node.text)
  }

}

export const writeSpeech = (campaign) => {
  const speech = campaign.nodes.map(node => {
    if (hasQuickReply(node)) {
      return {
        [node.id]: quickReply(node, campaign)
      }
    } else if (hasTexts(node, campaign)) {
      // TODO: retornar lista de mensagens até checar no próximo quick_reply
      const store = []
      messageSequential(node, campaign, store)
      return {
        [node.id]: store
      }
    } else {
      return {
        [node.id]: node.text
      }
    }
  })
  return speech
}