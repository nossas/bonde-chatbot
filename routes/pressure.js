import express from 'express'

const router = express.Router()

router.get('/:widget_id/message', (req, res) => {
  res.render(
    './pressure/message',
    { pageTitle: 'Mensagem aos deputados' }
  )
})

export default router
