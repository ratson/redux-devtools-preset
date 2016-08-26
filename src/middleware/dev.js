import {canUseDOM} from 'fbjs/lib/ExecutionEnvironment'
import {persistState} from 'redux-devtools'
import React from 'react'
import ReactDOM from 'react-dom'

import DevTools from '../DevTools'

function getDebugSessionKey() {
  if (!canUseDOM) {
    return null
  }
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

function appendDevPanel({rootNode}) {
  return (next) => (reducer, finalInitialState, enhancer) => {
    const store = next(reducer, finalInitialState, enhancer)
    if (rootNode) {
      const debugNode = document.createElement('DIV')
      rootNode.parentNode.insertBefore(debugNode, rootNode.nextSibling)
      ReactDOM.render(<DevTools store={store}/>, debugNode)
    }
    return store
  }
}

export default ({rootNode}) => {
  return [
    appendDevPanel({rootNode}),
    DevTools.instrument(),
    persistState(getDebugSessionKey()),
  ]
}
