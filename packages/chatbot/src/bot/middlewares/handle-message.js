export default bot => (req, res) => {
  bot._handleMessage(req.body)
  res.end(JSON.stringify({ status: 'ok' }))
}
