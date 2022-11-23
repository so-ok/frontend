import axios from 'axios';
import * as jose from 'jose';

const client = axios.create({
  baseURL: 'https://api.so-ok.cf',
});

const getCurrentTimestamp = () => Math.floor(+new Date() / 1000);
const shouldRenewAccessToken = (exp) => {
  const criterion = 60 * 60 * 3;
  return exp - getCurrentTimestamp() < criterion;
};

const renew = async (refreshToken) => {
  const data = await client.get(`/auth/renew/${refreshToken}`);
  const newAccessToken = data?.accessToken;
  if (newAccessToken) {
    localStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
  }
  throw new Error("can't renew access token...");
};

client.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

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
