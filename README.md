EAAajJa4WgAMBAFANT7pSIZAPwjrWZCAgYXjAvu4UJyr9qmpA0v0HoGdJwVoKDljMAgK8ZBkLzmBg48kIAzG1uoZAPksgeyVZBIuHE0FRazedlmUShuHw9j7O901cd7UlCPRYNCrMsoaNYk4IJeU4u3jKuQkQvNlQpcUN5fymtUwZDZD

Olá FNAME, sou o bot da resistência e hoje vou te ajudar a se manifestar contra a reforma da previdência.
Para isso, preciso que você me informe seu e-mail.

Ótimo, e-mail anotado. Para melhor direcionar nossos esforços, preciso que me diga qual seu estado, UF.

O ESTADO tem X deputados federais. Vou mandar um e-mail em seu nome apra todos eles.

Já foi enviado um e-mail,se vc quiser botar mais pressão, sugiro que faça também um post de protesto na página pública do deputado federal abaixo.

Nos vemos em outras resistências por aí! 

# Messenger Platform Sample -- node.js

This project is an example server for Messenger Platform built in Node.js. With this app, you can send it messages and it will echo them back to you. You can also see examples of the different types of Structured Messages.

It contains the following functionality:

* Webhook (specifically for Messenger Platform events)
* Send API
* Web Plugins
* Messenger Platform v1.1 features

Follow the [walk-through](https://developers.facebook.com/docs/messenger-platform/quickstart) to learn about this project in more detail.

## Setup

Set the values in `config/default.json` before running the sample. Descriptions of each parameter can be found in `app.js`. Alternatively, you can set the corresponding environment variables as defined in `app.js`.

Replace values for `APP_ID` and `PAGE_ID` in `public/index.html`.

## Run

You can start the server by running `npm start`. However, the webhook must be at a public URL that the Facebook servers can reach. Therefore, running the server locally on your machine will not work.

You can run this example on a cloud service provider like Heroku, Google Cloud Platform or AWS. Note that webhooks must have a valid SSL certificate, signed by a certificate authority. Read more about setting up SSL for a [Webhook](https://developers.facebook.com/docs/graph-api/webhooks#setup).

## Webhook

All webhook code is in `app.js`. It is routed to `/webhook`. This project handles callbacks for authentication, messages, delivery confirmation and postbacks. More details are available at the [reference docs](https://developers.facebook.com/docs/messenger-platform/webhook-reference).

## "Send to Messenger" and "Message Us" Plugin

An example of the "Send to Messenger" plugin and "Message Us" plugin are located at `index.html`. The "Send to Messenger" plugin can be used to trigger an authentication event. More details are available at the [reference docs](https://developers.facebook.com/docs/messenger-platform/plugin-reference).

## License

See the LICENSE file in the root directory of this source tree. Feel free to useand modify the code.
