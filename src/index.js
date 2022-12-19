import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import rootReducer, { rootSaga } from './modules';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import * as jose from 'jose';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { setListStyle } from './modules/listStyle';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const loadLocalStorage = () => {
  const listStyle = localStorage.getItem('listStyle');
  const cart = localStorage.getItem('cart');
  if (!cart) {
    localStorage.setItem('cart', []);
  }

  if (!listStyle) return;
  store.dispatch(setListStyle(JSON.parse(listStyle)));
};

loadLocalStorage();
serviceWorkerRegistration.register();

sagaMiddleware.run(rootSaga);

const url = window.location.search;
const params = new URLSearchParams(url);

const accessToken = params.get('accessToken');
const refreshToken = params.get('refreshToken');

if (accessToken && refreshToken) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  window.history.replaceState({}, '', '/');
  console.log(jose.decodeJwt(accessToken));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
