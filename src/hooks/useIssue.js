import { useEffect, useState } from 'react';
import { getIssue } from 'apis/issue';

const useIssue = () => {
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    handleGetIssue();
  }, []);

  const handleGetIssue = async () => {
    setIssueList(await getIssue());
  };

  return {
    issueList,
    handleGetIssue,
  };
};

export default useIssue;
