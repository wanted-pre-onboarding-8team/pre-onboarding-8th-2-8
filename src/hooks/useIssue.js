import { useEffect, useState } from 'react';
import { getIssue, patchIssue } from 'apis/issue';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SHOW_ISSUE_DETAIL } from 'slices/issueSlice';

const useIssue = () => {
  const dispatch = useDispatch();
  const [issueList, setIssueList] = useState([]);
  const { ISSUE_DETAIL } = useSelector(state => state.issue);

  useEffect(() => {
    handleGetIssue();
  }, []);

  // 이슈 리스트를 가져옴 (json-server에서)
  const handleGetIssue = async () => {
    setIssueList(await getIssue());
  };

  // 이슈 클릭 시 이슈의 상세 정보를 가져와 Redux에 저장
  const handleShowDetailIssue = id => {
    const findNum = issue => {
      if (issue.id === Number(id)) return true;
    };
    // 이슈의 상세 정보
    const issueDetailInfo = issueList.find(findNum);
    dispatch(SET_SHOW_ISSUE_DETAIL(issueDetailInfo));
  };

  // 이슈 상세정보 Patch
  const handlePatchIssue = async () => {
    await patchIssue(ISSUE_DETAIL);
  };

  return {
    issueList,
    handleGetIssue,
    handleShowDetailIssue,
    handlePatchIssue,
  };
};

export default useIssue;
