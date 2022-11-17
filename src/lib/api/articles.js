import client from './client';

export const requestPillList = ({ category }) => client.post('/api/pill/search', { attentions: [category] });

