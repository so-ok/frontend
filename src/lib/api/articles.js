import client from './client';

export const requestPillList = ({ category }) => client.post('/api/pill/search', { attentions: [category] });

export const requestPillDetail = ({ id }) => client.get(`/api/pill/${[id]}`);

export const requestCartIngredient = cart => client.post('/api/ingredients', cart);

export const requestCartPillList = cart => client.post('/api/pill', cart);
