# @dekproject/snovio

Snov.io interface plugin for DEK

What does this plugin do?

* Control configuration for connection to Snov.io in production development mode in a simplified way with **dotenv**
* Performs connection implementation along the lines ES6 being pre requirement to start the project

## Instalation

To install the bootstrap we recommend using the CLI

```bash
$ yarn add @dekproject/snovio --save
$ nano .env
```

In the .env file add the following settings

```
SNOVIO_USERID=
SNOVIO_SECRET=
```

## Usage

Using direct

```bash
$ npm i @dekproject/scope
```

Using in the standard DEK skeleton

```js
import { $, app, snovio } from "@dekproject/scope";

app.get("emailverifier", (req, res) => {
    snovio.getEmailVerifier(req.query.emails).then((res) => {
        res.send(res).end();
    }).catch((err) => {
        res.status(500).send(err).end();
    });
});

$.wait("snovio").then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
```
