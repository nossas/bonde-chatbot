import apm from 'elastic-apm-node/start'
import 'colors'
import axios from 'axios'
import querystring from 'querystring'

export default ({ botData }) => {
  if (botData.data.pressure) {
    const {
      custom_domain: customDomain,
      widget_id: widgetId,
      slug
    } = botData.data.pressure

    const qs = customDomain ? { custom_domain: customDomain } : { slug }
    const url = `${process.env.API_URL}/widgets?${querystring.stringify(qs)}`

    axios(url)
      .then(({ data: widgets }) => {
        if (widgets.constructor === Array) {
          const widget = widgets[widgets.findIndex(w => w.id === widgetId)]
          global.widgets[widgetId] = widget
        } else apm.captureError('The API result is not an array'.red)
      })
      .catch(err => apm.captureError(`${JSON.stringify(err)}`.red))
  } else apm.captureError('No pressure object defined on bot config data'.red)
}
