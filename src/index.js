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
import { injectStore } from './lib/api/client';
import { setToken } from './modules/auth';

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
const persistor = persistStore(store);

injectStore(store);
serviceWorkerRegistration.register();

sagaMiddleware.run(rootSaga);

const params = new URLSearchParams(window.location.search);
const accessToken = params.get('accessToken');
const refreshToken = params.get('refreshToken');
if (accessToken && refreshToken) {
  store.dispatch(setToken({ accessToken, refreshToken }));
  window.history.replaceState({}, '', '/');
  console.log(jose.decodeJwt(accessToken));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
