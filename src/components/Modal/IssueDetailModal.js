import { useUpdateTodoMutation } from 'apis/apiSlice';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SET_SHOW_ISSUE_DETAIL_FLAG } from 'slices/issueSlice';
import styled from 'styled-components';
import utilClickOutside from 'utils/utilClickOutside';

import InputContent from '../Input/InputContent';
import InputDeadline from '../Input/InputDeadline';
import InputPerson from '../Input/InputPerson';
import InputTitle from '../Input/InputTitle';
import S from './Modal.Styled';

const IssueDetailModal = () => {
  const dispatch = useDispatch();
  const { modalRef, handleClickOutside } = utilClickOutside();
  const { ISSUE_DETAIL } = useSelector(state => state.issue, shallowEqual);
  const { update } = useUpdateTodoMutation();

  // 이슈 모달 창 외부 클릭 시 모달 창 끄기 이벤트 등록 및 삭제
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onPatchIssue = () => {
    const id = ISSUE_DETAIL.id;
    const title = document.getElementsByName('title')[0].value;
    const contents = document.getElementsByName('content')[0].value;
    const deadline = document.getElementsByName('deadline')[0].value;
    const person = document.getElementsByName('person')[0].value;

    update({ id, title, contents, deadline, person });
    dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(false));
  };

  return (
    <S.DetailContainer id="detailModal" className="modal" ref={modalRef}>
      <ModalTitle>상세정보</ModalTitle>
      <InputTitle />
      <InputContent />
      <InputDeadline />
      <InputPerson />
      <S.SubmitButton onClick={onPatchIssue}>저장</S.SubmitButton>
    </S.DetailContainer>
  );
};

const ModalTitle = styled.h4`
  text-align: center;
  font-size: 20px;
  margin: 14px 0;
`;

export default IssueDetailModal;
