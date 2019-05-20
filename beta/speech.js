const hasQuickReplies = (children) => {
  if (children && children.edges) {
    return children.edges.filter(e => e.node.kind === 'quick_reply').length > 0
  }
  return false
}

const hasTalks = (children) => {
  if (children && children.edges) {
    return children.edges.filter(e => e.node.kind === 'talk').length > 0
  }
  return false
}

const messageWithGif = (node, edges) => ({
  attachment: {
    type: 'image',
    payload: { url: node.text }
  },
  quick_replies: node.children.edges.map((edge) => ({
    content_type: 'text',
    payload: edge.node.action,
    title: edge.node.text
  }))
})

const messageWithQuickReply = (node, edges) => ({
  text: node.text,
  quick_replies: node.children.edges.map((edge) => ({
    content_type: 'text',
    payload: edge.node.action,
    title: edge.node.text
  }))
})

export const writeSpeech = (messages) => {
  const speech = messages.map(i => {
    if (hasQuickReplies(i.node.children)) {
      return i.node.kind === 'gif'
        ? {[i.node.action]: messageWithGif(i.node, i.node.children.edges)}
        : {[i.node.action]: messageWithQuickReply(i.node, i.node.children.edges)}
    } else if (hasTalks(i.node.children)) {
      return {
        [i.node.action]: i.node.children.edges.map(edge => {
          const message = messages.filter(e => e.node.id === edge.node.id)[0]
          if (hasQuickReplies(message.node.children)) {
            return message.node.kind === 'gif'
              ? messageWithGif(message.node, message.node.children.edges)
              : messageWithQuickReply(message.node, message.node.children.edges)
          } else {
            return message.node.text
          }
        })
      }
    } else {
      return {
        [i.node.action]: {
          text: i.node.text
        }
      }
    }
  })
  
  return speech
}