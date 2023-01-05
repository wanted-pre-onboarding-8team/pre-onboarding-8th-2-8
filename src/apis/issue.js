import { client } from './index';

export const getIssue = () => {
  return client.get('/issueList');
};

export const createIssue = async issue => {
  return await client.post('/issueList', issue);
};

export const patchIssue = changePoint => {
  return client.patch(`/issueList/${changePoint.id}`, changePoint);
};
