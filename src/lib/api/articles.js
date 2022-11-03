import client from "./client";
import { list } from "./pills";

// export const get = ({ _id }) => client.get(`/api/v1/articles/${_id}`);

// export const list = ({ page, tag }) => {
//   const queryString = qs.stringify({
//     page,
//     tag,
//   });
//   return client.get(`/api/v1/articles?${queryString}`);
// };

// export const save = ({ url, tags = [] }) =>
//   client.post('/api/v1/articles', { url, tags });

// export const update = ({ _id, tags }) =>
//   client.patch(`/api/v1/articles/${_id}`, { tags });

// export const remove = ({ _id }) => client.delete(`/api/v1/articles/${_id}`);

export const getlist = () => {
  list();
};
