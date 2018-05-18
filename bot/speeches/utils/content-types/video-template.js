export default url => ({
  attachment: {
    type: 'template',
    payload: {
      template_type: "open_graph",
      elements: [{ url }]
    }
  }
})