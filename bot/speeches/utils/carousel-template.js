export default (...elements) => ( console.log(value2),{
  attachment: {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements,
    },
  },
})