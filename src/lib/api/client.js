import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.so-ok.cf',
});

export default client;
