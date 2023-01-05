import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SET_SHOW_ISSUE_DETAIL_FLAG } from 'slices/issueSlice';

const utilClickOutside = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  // ref에 해당하는 엘리먼트 밖을 클릭 시 dispatch
  const handleClickOutside = e => {
    const modal = document.querySelector('.modal');

    if (modalRef && !modalRef.current.contains(e.target)) {
      if (modal.id === 'addModal') {
        console.log('addModal');
      } else if (modal.id === 'detailModal') {
        dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(false));
      }
    }
  };

  return { modalRef, handleClickOutside };
};

export default utilClickOutside;
