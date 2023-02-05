import client from './client';

export const requestLogin = ({ username, password }) => client.post('/login', { username, password });

export const requestRegister = payload => client.post('/api/user', payload);