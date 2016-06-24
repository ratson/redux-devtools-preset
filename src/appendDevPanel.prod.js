if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  module.exports = require('./appendDevPanel.dev')
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./appendDevPanel.prod')
}
