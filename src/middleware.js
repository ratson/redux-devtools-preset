if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  module.exports = require('./middleware.dev')
} else {
  module.exports = function() {
    return []
  }
}
