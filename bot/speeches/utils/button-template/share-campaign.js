export default ({title, subtitle, imageUrl, url}) => ({
    type: 'element_share',
    share_contents: {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [{
                    title,
                    subtitle,
                    image_url: imageUrl,
                    default_action: {
                        type: 'web_url',
                        url
                    },
                    buttons: [
                        {
                            type: "web_url",
                            url,
                            title: "Clique aqui"
                        }
                    ]
                }
                ]
            }
        }
    }
})