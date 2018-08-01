import 'colors'
import axios from 'axios'
import querystring from 'querystring'

export default ({ botData }) => {
  if (botData.data.pressure) {
    const {
      custom_domain: customDomain,
      widget_id: widgetId,
      slug,
    } = botData.data.pressure

    const qs = customDomain ? { custom_domain: customDomain } : { slug }
    const url = `${process.env.API_URL}/widgets?${querystring.stringify(qs)}`

    axios(url)
      .then(({ data: widgets }) => {
        if (widgets.constructor === Array) {
          const widget = widgets[widgets.findIndex(w => w.id === widgetId)]
          global.widgets[widgetId] = widget
          console.log('WIDGET INFO SAVED')
        }
        else console.error('The API result is not an array'.red)
      })
      .catch(err => console.error(`${JSON.stringify(err)}`.red))
  }
  else console.error('No pressure object defined on bot config data'.red)
}
