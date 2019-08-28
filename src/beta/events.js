import 'colors'

export const error = (bot, conversation, botData) => err => {
  console.error(`Beta handle error ${err.message}`.red)
}

const replyStrategy = (bot, conversation, payload, reply) => {
  const action = payload.message.quick_reply
    ? payload.message.quick_reply.payload
    : payload.message.payload
  console.log('action', action)
  const message = conversation.filter(edge => edge.node.id === action)[0]

  const answer = { text: message.node.text }
  if (message.node.children.edges && message.node.children.edges.filter(edge => edge.node.kind === 'quick_reply').length != 0) {
    answer.quick_replies = message.node.children.edges.map(edge => ({
      content_type: 'text',
      payload: edge.node.id,
      title: edge.node.text
    }))
    return reply(answer)
  }
  if (message.node.children.edges && message.node.children.edges.filter(edge => edge.node.kind === 'task').length != 0) {
    const task = message.node.children.edges.filter(edge => edge.node.kind === 'task')[0]
    const newTask = conversation.filter(edge => edge.node.id === task.node.id)[0]

    const senderId = payload.sender.id
    bot.sendSenderAction(senderId, 'typing_on')
    reply({ text: newTask.node.text })

    return replyStrategy(newTask, reply, conversation)
  }
}

export const message = (bot, speech, botData) => (payload, reply, actions) => {
  console.log('message payload', payload)
}

export const postback = (bot, speech, botData) => (payload, reply, actions) => {
  const action = payload.postback.payload
  const message = speech.filter(obj => action in Object.keys(obj))
  console.log(message)
  reply(message[action])
}
