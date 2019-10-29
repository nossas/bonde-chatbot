import { hasQuickReply, hasTexts, quickReply, reply, writeSpeech } from '../playground/speech'
import { diagram } from './speech.dummy'

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

test('writeSpeech should parser diagram to speech used on talk server', () => {
  const speech = writeSpeech({ diagram })
  expect(speech).toEqual({
    actions: {},
    messages: {
      '5df00f49-6db8-47f1-a7a0-684cce0ac364': {
        text: 'Lorem ipsum dolor?',
        quick_replies: [
          { content_type: 'text', payload: '7d166697-636f-4295-bd54-c9ca955c5264', title: 'Next stage' },
          { content_type: 'text', payload: 'b11f0261-e380-4b97-b7f3-d9723bdc4d73', title: 'Get out' }] },
      '7d166697-636f-4295-bd54-c9ca955c5264': 'Next stage successfully',
      'b11f0261-e380-4b97-b7f3-d9723bdc4d73': 'Thank you for participate!',
      'b97785d8-a4db-4198-9581-248b447e0760': [
        'Lorem ipsum dolor',
        {
          text: 'Lorem ipsum dolor?',
          quick_replies: [
            { content_type: 'text', payload: '7d166697-636f-4295-bd54-c9ca955c5264', title: 'Next stage' },
            { content_type: 'text', payload: 'b11f0261-e380-4b97-b7f3-d9723bdc4d73', title: 'Get out' }
          ]
        }
      ]
    },
    started: false
  })
})
