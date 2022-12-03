import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './modules';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import * as jose from 'jose';
import { setListStyle } from './modules/listStyle';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const loadListStyle = () => {
  const listStyle = localStorage.getItem('listStyle');
  if (!listStyle) return;
  store.dispatch(setListStyle(JSON.parse(listStyle)));
};

loadListStyle();
serviceWorkerRegistration.register();

sagaMiddleware.run(rootSaga);


const url = window.location.search;
const params = new URLSearchParams(url);

const accessToken = params.get('accessToken');
const refreshToken = params.get('refreshToken');

if (accessToken && refreshToken) {
  localStorage.setItem('acecssToken', accessToken);
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