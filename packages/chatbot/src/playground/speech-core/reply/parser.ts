import { Node, Message, Port, Reply } from '../types'

export const reply = (port: Port, campaign: any): Reply => {
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

export default (node: Node, campaign: any): Message => ({
  text: node.text,
  quick_replies: node.ports.filter(p => !p.in).map((port) => reply(port, campaign))
})
