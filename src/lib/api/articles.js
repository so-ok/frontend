import client from './client';

export const requestPillList = payload => client.post('/api/pill/search', payload);

export const requestPillDetail = ({ id }) => client.get(`/api/pill/${[id]}`);

export const requestCartIngredient = cart => client.post('/api/ingredients', cart);

export const requestCartPillList = cart => client.post('/api/pill', cart);

export const requestUser = () => client.get('/api/user');