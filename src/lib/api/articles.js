import client from './client';

export const requestPillList = () => client.post('/api/pill/search', { attentions: ['위 건강'] });

