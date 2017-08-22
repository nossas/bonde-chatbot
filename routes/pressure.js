import express from 'express'

const router = express.Router()

router.get('/message-text', (req, res) => {
  res.render(
    './pressure/message-text',
    { pageTitle: 'Mensagem aos deputados' }
  )
})

export default router
