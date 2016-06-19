import React from 'react'
import ReactDOM from 'react-dom'

export default ({ rootNode, store }) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const DevTools = require('./DevTools').default
    const debugNode = document.createElement('DIV')
    rootNode.parentNode.insertBefore(debugNode, rootNode.nextSibling)
    ReactDOM.render(<DevTools store={store} />, debugNode)
  }
}
