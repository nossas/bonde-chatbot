import 'colors'

export const verifyValidationToken = (bot) => (req, res) => {
  bot._verify(req, res)
}

export const handleMessage = (bot) => (req, res) => {
  bot._handleMessage(req.body)
  res.end(JSON.stringify({ status: 'ok' }))
}

export const sendMassMessage = bot => (req, res) => {
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
