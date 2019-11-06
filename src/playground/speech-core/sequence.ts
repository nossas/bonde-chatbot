import { Storage } from './store'
import { Campaign, Node, Link, Port } from './types'
import { Validate } from './validate'
import quickReply from './reply/parser'

function * middleware (node: Node, campaign: Campaign) {
  const store = new Storage()
  // we think at this point that any linked port is connecting a next node
  const ports = node.ports.filter((p: Port) => !p.in && !!p.links[0])
  if (ports.length > 0) {
    const linkID = ports[0].links[0]
    const target = campaign.links.filter((link: Link) => link.id === linkID)[0].target
    const child = campaign.nodes.filter((child: Node) => child.id === target)[0]

    if (node.type === 'message') {
      yield node.text
      if (child) yield * middleware(child, campaign)
    } else if (node.type === 'reply') {
      yield quickReply(node, campaign)
    } else if (node.type === 'action') {
      const successfully = node.ports.filter((p: Port) => !p.in && p.success)[0].links[0]
      const failure = node.ports.filter((p: Port) => !p.in && !p.success)[0].links[0]
      const successfullyTarget = campaign.links.filter((l: Link) => l.id === successfully)[0].target
      const failureTarget = campaign.links.filter((l: Link) => l.id === failure)[0].target
      const action = { [node.id]: { node, successfullyTarget, failureTarget } }
      store.register(action)

      yield node.text
    }
  } else {
    yield node.text
  }
}

const use = (iterator) => {
  const entries = []
  while (true) {
    const next = iterator.next()
    if (!next.done) {
      entries.push(next.value)
    } else {
      break
    }
  }
  return entries
}

const toOBJ = (array, context = {}) => {
  array.forEach(node => {
    Object.keys(node).forEach(uuid => {
      context[uuid] = node[uuid]
    })
  })
  return context
}

export default (campaign: Campaign) => {
  const pipeline = campaign.nodes.map((current: Node) => {
    const validate = new Validate(current)
    if (validate.is('reply')) {
      return { [current.id]: quickReply(current, campaign) }
    } else if ((validate.is('message') && validate.next()) || validate.is('action')) {
      return { [current.id]: use(middleware(current, campaign)) }
    } else {
      return { [current.id]: current.text }
    }
  })

  const messages = toOBJ(pipeline)

  const store = new Storage()
  const actions = toOBJ(store.drop())

  return {
    actions,
    messages,
    started: campaign.started ? (campaign.nodes.sort(
      function (a: any, b: any): number {
        return a.x - b.x
      }
    )[0] as object)['id'] : false
  }
}
