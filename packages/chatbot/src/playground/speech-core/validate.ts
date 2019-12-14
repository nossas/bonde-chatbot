import { Node } from './types'

export class Validate {
  node: Node

  constructor (node: Node) {
    this.node = node
  }

  is (kind: string): boolean {
    return this.node.type === kind
  }

  next () {
    return this.node.ports.filter(p => !p.in && !!p.links[0]).length > 0
  }
}
