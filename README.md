# Bot for facebook

Enable activist to pressure through facebook

## Setup

* Must have admin permission to facebook application
* Must have admin permission to facebook page
* [Setup webhook](https://developers.facebook.com/docs/graph-api/webhooks#setup) configuration
* Setup proxy to local test - https://ngrok.com/
* Install dependencies ```npm install```
* Setup enviroment variables:

```
MESSENGER_APP_SECRET <- 
MESSENGER_VALIDATION_TOKEN <-
MESSENGER_PAGE_ACCESS_TOKEN <-
SERVER_URL <-
```

## Run

### Development

```npm run dev```

### Production

```npm start```

### Test

```npm test```

## Webhook

More details are available at the [reference docs](https://developers.facebook.com/docs/messenger-platform/webhook-reference).

## License

See the LICENSE file in the root directory of this source tree. Feel free to useand modify the code.
