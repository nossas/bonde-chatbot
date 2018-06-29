export default () => ({
    type: 'element_share',
    share_contents: {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [{
                    title: "Clique aqui para impedir mais um retrocesso na educação",
                    subtitle: "Um futuro com mais direitos e menos violência começa na escola!",
                    image_url: 'https://goo.gl/v6iX5m',
                    default_action: {
                        type: 'web_url',
                        url: "https://m.me/beta.feminista?ref=escola-sem-partido"
                    },
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://m.me/beta.feminista?ref=escola-sem-partido",
                            title: "Clique aqui"
                        }
                    ]
                }
                ]
            }
        }
    }
})