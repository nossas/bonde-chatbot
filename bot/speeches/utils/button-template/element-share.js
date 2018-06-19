export default () => ({
    type: 'element_share',
    share_contents: {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [{
                    title: "A maior aliada feminista nas redes",
                    subtitle: "Chama a Beta no inbox",
                    image_url: 'https://goo.gl/hzZfHA',
                    default_action: {
                        type: 'web_url',
                        url: "https://m.me/beta.staging"
                    },
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://m.me/beta.staging",
                            title: "Chama a Beta no inbox"
                        }
                    ]
                }
                ]
            }
        }
    }
})