# unslash

Connect/Express middleware that removes trailing slashes from URLs, redirecting the request.

## Install

```bash
$ npm install --save unslash
```

## Usage

Set unslash as a middleware before the routes you want redirected.

```javascript
import express from 'express'
import unslash from 'unslash'

const app = express()

// Use unslash with default options
app.use(unslash)

// Use unslash with a specific status
app.use(unslash({ status: 302 }))
```

## Options

### status

Set the HTTP status of the redirection. The default value is `301`.

### methods

An array containing the HTTP methods that should be redirected. The default value is `['GET', 'HEAD']`.

## License

[The MIT License](./LICENSE)
