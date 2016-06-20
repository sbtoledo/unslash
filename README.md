# Unslash

Connect/Express middleware to remove a trailing slash from a url and redirect the request. It will intercept only GET and HEAD requests, and will do a 301 redirect.

## Install

```bash
$ npm install unslash
```

## Use

Tip: it's better to set Unslash before any other route or middleware.

```js
var express = require('express');
var unslash = require('unslash');

// Create Express application
var application = express();

// Set Unslash as a middleware
application.use(unslash);
```
