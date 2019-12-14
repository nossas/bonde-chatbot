import { Validate } from '../../playground/speech-core/validate'

test('is(kind: string) should return true if node.type equals kind', () => {
  const node = { id: 'dummy-hash-node-id', type: 'reply', text: 'Lorem ipsum', ports: [] }
  const validate = new Validate(node)

  expect(validate.is('reply')).toBe(true)
  expect(validate.is('message')).toBe(false)
})

test('next() should return true when node has link in out port', () => {
  const link = { id: 'dummy-hash-link-id' }
  const port = { id: 'dummy-hash-port-id', in: false, links: [link.id], type: 'port' }
  const node = { id: 'dummy-hash-node-id', type: 'message', text: 'Lorem ipsum', ports: [port] }
  const validate = new Validate(node)

  expect(validate.next()).toBe(true)
})

test('validate(node: any).next() should return false when receiving node without link in out port', () => {
  const port = { id: 'dummy-hash-port-id', in: false, links: [], type: 'port' }
  const node = { id: 'dummy-hash-node-id', type: 'message', text: 'Lorem ipsum', ports: [port] }
  const validate = new Validate(node)

  expect(validate.next()).toBe(false)
})
