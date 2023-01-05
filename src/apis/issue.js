import { client } from './index';

export const getIssue = async () => {
  const res = await client.get('/issueList');
  return res.data;
};

export const createIssue = async issue => {
  return await client.post('/issueList', issue);
};

export const patchIssue = detail => {
  return client.patch(`/issueList/${detail.id}`, detail);
};
