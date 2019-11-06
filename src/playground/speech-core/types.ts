export interface Model {
  id: string
  type: string
}

export interface Point extends Model {
  x?: number
  y?: number
}

export interface Port extends Point {
  in: boolean
  text?: string
  name?: string
  links: string[]
  alignment?: string
  parentNode?: string
  // TODO: remove this and mount ActionPort
  success?: bool
}

export interface Link extends Model {
  color?: string
  width?: number
  labels?: string[]
  points?: Point[]
  source?: string
  target: string
}

export interface Node extends Point {
  text: string
  ports: Port[]
  locked?: boolean
  selected?: false
}

export interface Campaign {
  nodes: Node[]
  links: Link[]
  started?: bool
}

export interface Reply {
  // eslint-disable-next-line camelcase
  content_type: 'text'
  payload: string
  title: string
}

export interface Message {
  text: string
  // eslint-disable-next-line camelcase
  quick_replies: Reply[]
}
