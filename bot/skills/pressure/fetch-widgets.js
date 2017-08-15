import 'colors'
import request from 'request'

export default ({ botData }) => {
  if (botData.data.pressure) {
    const {
      custom_domain: customDomain,
      widget_id: widgetId,
      slug,
    } = botData.data.pressure

    const url = `${process.env.API_URL}/widgets`
    const qs = customDomain ? { custom_domain: customDomain } : { slug }
    const callback = (error, response, widgets) => {
      if (error) return console.error(`${error}`.red)

      if (widgets.constructor === Array) {
        const widget = widgets[widgets.findIndex(w => w.id === widgetId)]
        global.widgets[widgetId] = widget
      }
      else console.error('The API result is not an array'.red)
    }

    request({ url, qs, json: true }, callback)
  }
  else console.error('No pressure object defined on bot config data'.red)
}
