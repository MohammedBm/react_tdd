import React from "react";
import { render } from 'react-dom'
import { createStore } from 'redux'
import rootReducer from './reducer/balance'
import { Provider } from 'react-redux'
import App from './components/App'

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);