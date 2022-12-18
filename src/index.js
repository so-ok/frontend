import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import rootReducer, { rootSaga } from './modules';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
