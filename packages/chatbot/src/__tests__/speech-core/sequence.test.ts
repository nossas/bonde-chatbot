import sequence from '../../playground/speech-core/sequence'
import { diagram } from '../speech.dummy'

test('sequence should return object model for more fluid conversation with facebook api', () => {
  const campaign = {
    links: Object.values(
      diagram
        .layers
        .filter(m => m.type === 'diagram-links')[0]
        .models
    ),
    nodes: Object.values(
      diagram
        .layers
        .filter(m => m.type === 'diagram-nodes')[0]
        .models
    )
  }

  const speech = sequence(campaign)

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
