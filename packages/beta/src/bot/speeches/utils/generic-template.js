export default ({ title, subtitle, imageURL, buttons }) => ({
  attachment: {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements: [
        { title, subtitle, image_url: imageURL, buttons }
      ]
    }
  }
})
