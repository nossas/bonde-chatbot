import { Node } from '../types'
import { Validate } from '../validate'

export default (node: Node, campaign: any) => {
  const validate = new Validate(node)
  if (validate.is('message') && !validate.next()) {
    return {
      [node.id]: node.text
    }
  } else if (validate.is('message') && validate.next()) {
    // should sequence messages
  }
}
