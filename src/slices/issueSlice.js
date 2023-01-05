import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 이슈 리스트
  ISSUE_LIST: {
    TODOS: [],
    WORKINGS: [],
    COMPLETES: [],
  },
  // 이슈의 상세정보
  ISSUE_DETAIL: {
    num: undefined,
    title: undefined,
    contents: undefined,
    deadline: undefined,
    state: undefined,
    person: undefined,
  },
  // 이슈의 상세정보를 띄울지 말지 정하는 플래그
  SHOW_ISSUE_DETAIL_FLAG: false,
  // 이슈 추가 창을 띄울지 말지 정하는 플래그
  SHOW_ADD_ISSUE_FLAG: false,
  // 드래그한 이슈 정보 저장
  DRAG_ISSUE_INFO: {},
};

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    SET_ISSUE_LIST(state, action) {
      state.ISSUE_LIST.TODOS = action.payload.todos;
      state.ISSUE_LIST.WORKINGS = action.payload.workings;
      state.ISSUE_LIST.COMPLETES = action.payload.completes;
    },
    SET_ISSUE_DETAIL(state, action) {
      state.ISSUE_DETAIL = action.payload;
    },
    SET_SHOW_ISSUE_DETAIL_FLAG(state, action) {
      state.SHOW_ISSUE_DETAIL_FLAG = action.payload;
    },
    SET_ADD_ISSUE_FLAG(state, action) {
      state.SHOW_ADD_ISSUE_FLAG = action.payload;
    },
    SET_DRAG_ISSUE_INFO(state, action) {
      state.DRAG_ISSUE_INFO = action.payload;
    },
  },
});

export const { SET_ISSUE_LIST, SET_ISSUE_DETAIL, SET_SHOW_ISSUE_DETAIL_FLAG, SET_ADD_ISSUE_FLAG, SET_DRAG_ISSUE_INFO } =
  issueSlice.actions;

export default issueSlice;
