import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import { persistState } from 'redux-devtools'

import DevTools from './DevTools'

function getDebugSessionKey() {
  if (!canUseDOM) {
    return null
  }
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

export default () => {
  return [
    DevTools.instrument(),
    persistState(getDebugSessionKey()),
  ]
}
