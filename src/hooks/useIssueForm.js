import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIssueDetails } from 'slices/issueDetailSlice';

const useIssueForm = () => {
  const dispatch = useDispatch();

  return {
    issueState: useSelector(state => state.issueDetail),
    handleSetIssueDetail: useCallback(state => dispatch(setIssueDetails(state)), [dispatch]),
  };
};

export default useIssueForm;
