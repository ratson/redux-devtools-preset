import React from 'react'

import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'
import SliderMonitor from 'redux-slider-monitor'

const DevTools = createDevTools(
  <DockMonitor
    changeMonitorKey="ctrl-m"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
    toggleVisibilityKey="ctrl-h"
  >
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
)

export default DevTools
