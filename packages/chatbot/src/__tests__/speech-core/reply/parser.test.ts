import quickReply, { reply } from '../../../playground/speech-core/reply/parser'

test('reply should return object as template expected by facebook api', () => {
  const link = { id: 'dummy-hash-link-id', target: 'dummy-hash-node-id' }
  const port = { id: 'dummy-hash-port-id', type: 'port', text: 'Next stage', in: false, links: [link.id] }
  const campaign = { links: [link] }

  expect(reply(port, campaign))
    .toEqual({ content_type: 'text', payload: link.target, title: port.text })
})

test('reply should throw exception when there is no target for campaign flux', () => {
  const port = { id: 'dummy-hash-port-id', type: 'port', text: 'Next stage', links: [], in: false }
  const campaign = { links: [] }

  expect(() => reply(port, campaign))
    .toThrow(new Error(`Port "${port.text}" has no target link.`))
})

test('quickReply should return object model accepted by facebook api', () => {
  const link = { id: 'dummy-hash-link-id', target: 'dummy-hash-node-id' }
  const port = { id: 'dummy-hash-port-id', type: 'port', text: 'Next stage', links: [link.id], in: false }
  const campaign = { links: [link] }
  const node = { id: 'dummy-hash-node-id', type: 'message', text: 'Lorem ipsum dolor', ports: [port] }

  expect(quickReply(node, campaign))
    .toEqual({
      text: node.text,
      quick_replies: [
        { content_type: 'text', payload: link.target, title: port.text }
      ]
    })
})
