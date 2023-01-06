import { addIssue, deleteIssue, getIssue, patchIssue } from 'apis/issue';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAIL, SET_ISSUE_LIST } from 'slices/issueSlice';

const useIssue = () => {
  const dispatch = useDispatch();
  const { ISSUE_LIST } = useSelector(state => state.issue);

  // 이슈 가져오고 state에 따라 나누기 CRUD - R
  const handleGetIssue = () => {
    getIssue().then(res => {
      const issueList = res.data;
      console.log(issueList);
      // state에 따라 나누기
      dispatch(
        SET_ISSUE_LIST({
          todos: issueList.filter(issue => issue.state === 'todo'),
          workings: issueList.filter(issue => issue.state === 'working'),
          completes: issueList.filter(issue => issue.state === 'complete'),
        }),
      );
    });
  };

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

  // 이슈 추가 CRUD - C
  const handleAddIssue = issueInfo => {
    addIssue(issueInfo).then(() => handleGetIssue());
  };
  // 이슈 상세내용 변경 CRUD - U
  const handlePatchIssue = changePoint => {
    patchIssue(changePoint).then(() => handleGetIssue());
  };
  // 이슈 삭제 CRUD - D
  const handleDeleteIssue = id => {
    deleteIssue(id).then(() => handleGetIssue());
  };

  return { handleGetIssue, handleShowDetailIssue, handleAddIssue, handlePatchIssue, handleDeleteIssue };
};

export default useIssue;