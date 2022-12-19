import client from './client';

export const requestPillList = ({ category }) => client.post('/api/pill/search', { attentions: [category] });

export const requestPillDetail = ({ id }) => client.get(`/api/pill/${[id]}`);

export const requestPillIngredient = ({ id }) => client.post('/api/ingredients', [id]);
