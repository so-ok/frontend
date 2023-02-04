import axios from 'axios';
import * as jose from 'jose';
import { setAccessToken } from '../../modules/auth';

let store;

export const injectStore = _store => {
  store = _store
};

const client = axios.create({
  baseURL: 'https://api.so-ok.cf',
});

const getCurrentTimestamp = () => Math.floor(new Date() / 1000);
const shouldRenewAccessToken = exp => {
  const criterion = 60 * 60 * 3;
  return exp - getCurrentTimestamp() < criterion;
};

const renew = async refreshToken => {
  const response = await axios.post(`${client.defaults.baseURL}/auth/renew`, { refreshToken });
  const newAccessToken = response?.data.accessToken;
  if (newAccessToken) {
    store.dispatch(setAccessToken(newAccessToken));
    return newAccessToken;
  }
  throw new Error("can't renew access token...");
};

client.interceptors.request.use(async config => {
  let accessToken = store.getState().auth.accessToken;
  const refreshToken = store.getState().auth.refreshToken;

  if (!accessToken) {
    config.headers['Authorization'] = null;
  } else {
    const decoded = jose.decodeJwt(accessToken);

    if (shouldRenewAccessToken(decoded?.exp)) {
      accessToken = await renew(refreshToken);
    }

    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default client;
