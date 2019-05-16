# Facebook Bot Service

Enable activist to pressure through facebook

## Before Start

* Must have admin permission to facebook application and to facebook page
* Setup proxy local to test - https://localtunnel.github.io/www/
* Setup Bonde Install - http://github.com/nossas/install

## Requirements

* Generate JWT_TOKEN from BONDE api-v2 - ```curl 'https://api-v2.bonde.devel/graphql' --data '{"query":"mutation authenticate($email: String!, $password: String!) {\n  authenticate(input: {email: $email, password: $password}) {\n    jwtToken\n    __typename\n  }\n}\n","variables":{"email":"admin_foo@bar.com","password":"foobar!!"},"operationName":"authenticate"}'```

* Copy ```messenger_app_secret``` from facebook developer page:

* Generate ```messenger_page_access_token``` from facebook developer page before create webhook

* Before create webhook, you must check if database have tables configurations and facebook_bot_configurations and they have at leat one record, if not you must create.

```sql
insert into facebook_bot_configurations (
    community_id, messenger_app_secret, messenger_validation_token,
    messenger_page_access_token, data, created_at, updated_at
) values (
    '73', 'APP_SECRET', 'VALIDATIONSTRING', 'ACCESS_TOKEN',
    '{"pressure":{"slug":"teste","widget_id":1},"name":"BOT","m_me":"https://m.me/bot"}',
    now(), now()
);
```

* When creating facebook webhook you must inform ```URL``` ( must have a /1 or /X) and ```messenger_validation_token```

* Copy ```.env.example``` to ```.env``` and change values to current env

## Install

```npm install```

### Development

```npm run dev```

### Production

```npm start```

### Test

```npm test```

## Webhook

More details are available at the [reference docs](https://developers.facebook.com/docs/messenger-platform/webhook-reference).

https://developers.facebook.com/docs/graph-api/webhooks#setup

## License

See the LICENSE file in the root directory of this source tree. Feel free to useand modify the code.
