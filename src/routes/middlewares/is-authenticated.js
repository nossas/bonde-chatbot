export default (req, res, next) => {
  if (req.session.login && req.session.login.token) return next()
  res.redirect('/login')
}
