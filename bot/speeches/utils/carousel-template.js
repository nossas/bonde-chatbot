export default (value, value1, value2, value3) => ( console.log(value2),{
  attachment: {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements: [
        {
          title: value.title,
          subtitle: value.subtitle,
          image_url: value.imageURL,
          buttons: value.buttons
        }, 
        {
          title: value1.title,
          subtitle: value1.subtitle,
          image_url: value1.imageURL,
          buttons: value1.buttons
        }, 
        {
          title: value2.title,
          subtitle: value2.subtitle,
          image_url: value2.imageURL,
          buttons: value2.buttons
        }, 
        {
          title: value3.title,
          subtitle: value3.subtitle,
          image_url: value3.imageURL,
          buttons: value3.buttons
        }
      ],
    },
  },
})