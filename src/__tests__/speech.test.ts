import { hasQuickReply, hasTexts, quickReply, reply } from '../playground/speech'

test('hasQuickReply should return true when receiving node with attrs type reply', () => {
  const node = { type: 'reply' }
  expect(hasQuickReply(node)).toBe(true)
})

test('hasQuickReply should return false when receiving node with attrs type != reply', () => {
  const node = { type: 'message' }
  expect(hasQuickReply(node)).toBe(false)
})

test('hasQuickReply should return false when receiving node undefined', () => {
  const node = { type: 'message' }
  expect(hasQuickReply(node)).toBe(false)
})

test('hasTexts should return true when receiving message type node and sequential message node', () => {
  const link = { id: 'dummy-hash-link-id' }
  const port = { id: 'dummy-hash-node-id', in: false, links: [link.id] }
  const node = { type: 'message', ports: [port] }
  expect(hasTexts(node)).toBe(true)
})

test('hasTexts should return false when receiving node without sequential message', () => {
  const port = { id: 'dummy-hash-node-id', in: false, links: [] }
  const node = { type: 'message', ports: [port] }
  expect(hasTexts(node)).toBe(false)
})

test('hasTexts should return false when receiving node with attrs type != message', () => {
  const node = { type: 'action', ports: [] }
  expect(hasTexts(node)).toBe(false)
})

test('reply should return object as template expected by Facebook', () => {
  const link = { id: 'dummy-hash-link-id', target: 'dummy-hash-node-id' }
  const port = { text: 'Next stage', links: [link.id] }
  const campaign = { links: [link] }

  expect(reply(port, campaign)).toEqual({
    content_type: 'text',
    payload: link.target,
    title: port.text
  })
})

test('reply should throw exception when there is no target for campaign flux', () => {
  const port = { text: 'Next stage', links: [] }
  const campaign = { links: [] }

  expect(() => reply(port, campaign)).toThrow(new Error(`Port "${port.text}" has no target link.`))
})

test('quickReply should return object model accepted by Facebook', () => {
  const link = { id: 'dummy-hash-link-id', target: 'dummy-hash-node-id' }
  const port = { text: 'Next stage', in: false, links: [link.id] }
  const campaign = { links: [link] }
  const node = { text: 'Lorem ipsum dolor', ports: [port] }

  expect(quickReply(node, campaign)).toEqual({
    text: node.text,
    quick_replies: [
      { content_type: 'text', payload: link.target, title: port.text }
    ]
  })
})
