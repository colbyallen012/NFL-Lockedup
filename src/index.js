import React from 'react';
import ReactDOM from 'react-dom';
import { rootReducer } from './Reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer, composeWithDevTools()
)

const router = (
  <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider> 
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
