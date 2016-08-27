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
import {devMiddleware} from 'redux-devtools-preset'
import {createStore, compose} from 'redux'
import rootReducer from '<project-path>/reducers'

const rootNode = document.getElementById('container')
const store = createStore(rootReducer, undefined, compose(
  applyMiddleware(thunk),
  ...devMiddleware({rootNode}),
))

const App = () => {
  return (
    <p>
      Hello World!
    </p>
  )
}

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), rootNode)
```

Then you can use `Ctrl-h` to toggle the development panel.

By setting `process.env.NODE_ENV = 'production'` and JavaScript compressor to eliminate unused code, the debug code will not be included in production build.
