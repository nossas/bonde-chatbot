import express from 'express'

const router = express.Router()

router.get('/:widget_id/message', (req, res) => {
  const { widget_id: widgetId } = req.params
  const widget = global.widgets[widgetId]

  res.render('./pressure/message', {
    pageTitle: 'Mensagem aos deputados',
    pressureEmailBody: (widget && widget.settings.pressure_body) || 'Pressão não encontrada!'
  })
})

export default router
