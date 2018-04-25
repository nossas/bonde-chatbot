export default (...elements) => ({
  attachment: {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements,
    },
  },
})