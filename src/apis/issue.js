import { client } from './index';

export const getIssue = () => {
  return client.get('/issueList');
};

export const addIssue = async issue => {
  return await client.post('/issueList', issue);
};

export const patchIssue = async changePoint => {
  return await client.patch(`/issueList/${changePoint.id}`, changePoint);
};
