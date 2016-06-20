const TRAILING_SLASH_REGEXP = /\/(\?|$)/;

module.exports = function (request, response, next) {

    if ('GET' !== request.method && 'HEAD' !== request.method) {
        return next();
    }

    var url = request.originalUrl || request.url;

    if (!TRAILING_SLASH_REGEXP.test(url) || '/' === url.split('?')[0]) {
        return next();
    }

    response.redirect(301, url.replace(TRAILING_SLASH_REGEXP, '$1'));

};
