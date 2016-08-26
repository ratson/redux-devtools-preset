import React from 'react'
import ReactDOM from 'react-dom'

import DevTools from '../DevTools'

export default ({rootNode, store}) => {
  const debugNode = document.createElement('DIV')
  rootNode.parentNode.insertBefore(debugNode, rootNode.nextSibling)
  ReactDOM.render(<DevTools store={store}/>, debugNode)
}
