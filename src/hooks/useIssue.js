import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAIL } from 'slices/issueSlice';

const useIssue = () => {
  const dispatch = useDispatch();
  const { ISSUE_LIST } = useSelector(state => state.issue);

  // 이슈 클릭 시 이슈의 상세 정보를 가져와 Redux에 저장
  const handleShowDetailIssue = (id, state) => {
    // id값을 통해 해당하는 이슈를 찾음
    const findId = issue => {
      if (issue.id === Number(id)) return true;
    };

    // 찾은 이슈 상세정보를 Redux에 저장
    if (state === 'todo') dispatch(SET_ISSUE_DETAIL(ISSUE_LIST.TODOS.find(findId)));
    else if (state === 'working') dispatch(SET_ISSUE_DETAIL(ISSUE_LIST.WORKINGS.find(findId)));
    else if (state === 'complete') dispatch(SET_ISSUE_DETAIL(ISSUE_LIST.COMPLETES.find(findId)));
  };

  return { handleShowDetailIssue };
};

export default useIssue;
