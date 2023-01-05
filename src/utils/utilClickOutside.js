import { ISSUE_DETAIL_INITIALSTATE } from 'constants/issue';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ADD_ISSUE_FLAG, SET_ISSUE_DETAIL, SET_SHOW_ISSUE_DETAIL_FLAG } from 'slices/issueSlice';

const utilClickOutside = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  // ref에 해당하는 엘리먼트 밖을 클릭 시 dispatch
  const handleClickOutside = e => {
    const modal = document.querySelector('.modal');

    if (modalRef && !modalRef.current.contains(e.target)) {
      if (modal.id === 'addModal') dispatch(SET_ADD_ISSUE_FLAG(false));
      else if (modal.id === 'detailModal') {
        dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(false));
        dispatch(SET_ISSUE_DETAIL(ISSUE_DETAIL_INITIALSTATE));
      }
    }
  };

  return { modalRef, handleClickOutside };
};

export default utilClickOutside;
