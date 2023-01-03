import { client } from './index';

export const getIssue = async () => {
  const res = await client.get('/issueList');
  return res.data;
};
