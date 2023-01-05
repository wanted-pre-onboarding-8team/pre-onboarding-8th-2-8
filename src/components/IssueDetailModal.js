import useIssue from 'hooks/useIssue';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SET_SHOW_ISSUE_DETAIL_FLAG } from 'slices/issueSlice';
import styled from 'styled-components';
import InputContent from './Input/InputContent';
import InputDeadline from './Input/InputDeadline';
import InputPerson from './Input/InputPerson';
import InputState from './Input/InputState';
import InputTitle from './Input/InputTitle';

const IssueDetailModal = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const { handlePatchIssue } = useIssue();

  // 이슈 상세정보 모달 창 외부 클릭 시 모달 창 끄기
  const handleClickOutside = e => {
    if (modalRef && !modalRef.current.contains(e.target)) {
      dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(false));
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  // 이슈 상세정보 업데이트
  const onClickPatchIssue = () => {
    handlePatchIssue();
    dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(false));
  };

  return (
    <DetailContainer ref={modalRef}>
      <ModalTitle>상세정보</ModalTitle>
      <InputTitle />
      <InputContent />
      <InputDeadline />
      <InputState />
      <InputPerson />
      <SubmitButton onClick={onClickPatchIssue}>저장</SubmitButton>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 9999px;
  background-color: white;
`;

const ModalTitle = styled.h4`
  text-align: center;
  font-size: 20px;
  margin: 14px 0;
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 5px 5px 0;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;

export default IssueDetailModal;
