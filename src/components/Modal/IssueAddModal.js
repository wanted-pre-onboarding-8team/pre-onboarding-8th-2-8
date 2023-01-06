import { useAddTodosMutation, useGetTodosQuery } from 'apis/apiSlice';
import InputContent from 'components/Input/InputContent';
import InputDeadline from 'components/Input/InputDeadline';
import InputPerson from 'components/Input/InputPerson';
import InputState from 'components/Input/InputState';
import InputTitle from 'components/Input/InputTitle';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ADD_ISSUE_FLAG } from 'slices/issueSlice';
import utilClickOutside from 'utils/utilClickOutside';

import S from './Modal.Styled';

const IssueAddModal = () => {
  const dispatch = useDispatch();
  const { modalRef, handleClickOutside } = utilClickOutside();
  const [addIssue] = useAddTodosMutation();
  const { data: issueList } = useGetTodosQuery();

  // 이슈 모달 창 외부 클릭 시 모달 창 끄기 이벤트 등록 및 삭제
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // InputState에서 이슈 상태를 가져옴
  const [state, setIssueState] = useState(undefined);
  const bringState = state => {
    setIssueState(state);
  };
  // 이슈 추가
  const onAddIssue = () => {
    const id =
      issueList
        .slice()
        .sort((a, b) => a.id - b.id)
        ?.at(-1)?.id + 1 || 1;
    const title = document.getElementsByName('title')[0].value;
    const contents = document.getElementsByName('content')[0].value;
    const deadline = document.getElementsByName('deadline')[0].value;
    const person = document.getElementsByName('person')[0].value;
    // 비어있지 않은지 확인, 안비어있으면 이슈 추가
    if ((id && title && contents && deadline && state && person) ?? true)
      addIssue({ id, title, contents, deadline, state, person });
    else alert('추가할 이슈의 내용이 비었는지 확인하세요');
    dispatch(SET_ADD_ISSUE_FLAG(false));
  };

  return (
    <S.DetailContainer id="addModal" className="modal" ref={modalRef}>
      <InputTitle />
      <InputContent />
      <InputDeadline />
      <InputState bringState={bringState} />
      <InputPerson />
      <S.SubmitButton onClick={onAddIssue}>이슈 추가</S.SubmitButton>
    </S.DetailContainer>
  );
};

export default IssueAddModal;
