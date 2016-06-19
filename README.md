# redux-devtools-preset

Opinionated Redux DevTools.

## Installation

```
npm install redux-devtools-preset --save
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { appendDevPanel, devMiddleware } from 'redux-devtools-preset'
import { createStore, compose } from 'redux'
import rootReducer from '<project-path>/reducers'

const store = createStore(rootReducer, undefined, compose(
  applyMiddleware(thunk),
  ...devMiddleware(),
))

const App = () => {
  return (
    <p>
      Hello World!
    </p>
  )
}

const rootNode = document.getElementById('container')
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), rootNode)
appendDevPanel({ rootNode, store })
```

Then you can use `Ctrl-h` to toggle the development panel.

By setting `process.env.NODE_ENV = 'production'` and JavaScript compressor to eliminate unused code, the debug code will not be included in production build.
