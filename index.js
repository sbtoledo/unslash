const TRAILING_SLASHES = /\/+$/

module.exports = function middleware(request, response, next) {
  /* Request value will be the middleware configuration */
  if (!response) {
    return middleware.bind(request || {})
  }
  /* If it's not an acceptable method, ignore the request */
  else if (!(this.methods || ['GET', 'HEAD']).includes(request.method)) {
    return next()
  }

  const url = request.originalUrl.split('?', 2)

  /* If there are no trailing slashes */
  if (!url[0].endsWith('/')) {
    return next()
  }

  url[0] = url[0].replace(TRAILING_SLASHES, '')
  response.redirect(this.status || 302, url.join('?'))
}.bind({})
