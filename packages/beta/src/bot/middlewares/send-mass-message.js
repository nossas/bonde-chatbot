import 'colors'

export default bot => (req, res) => {
  if (!req.body) {
    res.end(JSON.stringify({
      status: 'the post request do not have the body'
    }))
  } else {
    const { recipients, message: text } = req.body
    const check = recipients && recipients.constructor === Array && text

    check && recipients.forEach(
      id => bot.sendMessage(id, { text })
    )
    res.end(JSON.stringify({ status: 'ok' }))
  }
}
