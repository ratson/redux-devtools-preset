// eslint-disable-next-line global-require
module.exports = process.env.NODE_ENV === 'development' ? require('./dev') : require('./prod')
