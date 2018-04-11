export default (value, value1) => ( {
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
        }
      ],
    },
  },
})