import 'colors'

export default bot => (req, res) => {
  if (!req.body) {
    res.end(JSON.stringify({
      status: 'the post request do not have the body'
    }))
  } else {
    const { activists, message: text } = req.body
    const check = activists && activists.constructor === Array && text

    check && activists.forEach(
      recipientId => bot.sendMessage(recipientId, { text })
    )
    res.end(JSON.stringify({ status: 'ok' }))
  }
}
