# 📝 Kanban Board(Issue Tracking Tool) 

<!-- <p align="middle">
<img src="./screenshot.png" />
</p> -->

## 📄목차
---
- [🗓️ Todo List Best Practice](#️-todo-list-best-pratice)
  - [📄목차](#목차)
  - [🧑🏻‍💻 팀원 소개](#-팀원-소개)
  - [📚 사용 라이브러리](#-사용-라이브러리)
  - [🏃‍♂️ 실행방법](#️-실행방법)
  - [💡 설계 전략](#-설계-전략)
  - [🏆 Best Practice](#-best-practice)
    - [1. Issue의 CRUD 구현 ](#1-issue의-crud-구현)
    - [2. Drag & Drop 이벤트를 활용한 Issue의 순서 변경](#2-drag--drop-이벤트를-활용한-issue의-순서-변경)
    - [3. 데이터가 로딩 중일 때, UX를 고려한 UI 구현](#3-데이터가-로딩-중일-때-ux를-고려한-ui-구현)

<br>

## 🧑🏻‍💻 팀원 소개
----

|[임준혁](https://github.com/Limttugi)|[김희수](https://github.com/dev-dong-su)|[신민경](https://github.com/minkyung00)|[이건희](https://github.com/leezer94)|[권효진](https://github.com/k1hyojin)|[김정원](https://github.com/k-gardn)|
| :---: | :---: | :---: | :---: | :---: | :---:|
<img src="https://avatars.githubusercontent.com/u/67939901?v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/16986867?s=96&v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/80238096?v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/83988230?v=4" width=200px alt="_"> | <img src="https://avatars.githubusercontent.com/u/100255414?v=4" width=200px alt="_"> | <img src="https://avatars.githubusercontent.com/u/108037773?v=4" width=200px alt="_">|

<br>

## 📚 사용 라이브러리
---
<div align="center">
  
<img src="https://img.shields.io/badge/Redux-7347B6?style=for-the-badge&logo=Redux&logoColor=white" />
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  
<br/>
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
</div>

<br>

## 🏃‍♂️ 실행방법
----
```

yarn start
yarn server

```

<br>

## 💡 설계 전략
---
**Component**
* 원자성을 가진 컴포넌트는 변경과 확장에 유연하고 재사용성이 높게 설계
* common 컴포넌트는 절대경로를 사용해 사용에 용이하게 설계
* 하나의 컴포넌트에서 사용자 경험이 다르다면 다른 컴포넌트로 분리
* 컴포넌트에서 수행해야 하는 기능은 Custom Hook으로 분리


**Hooks**
* 재사용성이 높고 하나의 책임과 역할을 할 수 있도록 설계


**Etc**
* 상수들은 constants 정리
* 이름은 각각의 목적과 역할을 알기 쉽게 작성
* eslint, prettier 사용해 코드 컨벤션 설정

<br>

## 🏆 Best Practice
---

### 1. Issue의 CRUD 구현 

- **구현 조건**
  * 이슈의 상태는 "할 일, 진행 중, 완료"가 존재하며 칸반보드와 같이 **상태별로 분류**된다.
  * 이슈 상태별 목록은 기본적으로 고유번호 순서대로 **오름차순** 정렬한다.
  * 이슈는 각각 **고유번호, 제목, 내용, 마감일, 상태, 담당자**가 존재한다.
  * 이슈의 작성 폼에서는 **제목, 내용, 마감일, 상태, 담당자**를 입력할 수 있다.  
    ➡️ 추가 조건: **담당자**는 사전에 임의의 목록을 구성하고, **검색**하여 담당자를 선택할 수 있도록 한다.
  * 각 이슈를 클릭 시 **상세정보 창**이 표시되며, 정보를 **수정**하고 '저장'버튼을 통해 저장할 수 있도록 한다.


**Component**

* Modal을 사용하여 각 이슈의 '상세정보 창'과 '작성 폼'을 구현
  * **IssueAddModal.js** 에서 Issue를 **Create**
  * **IssueDetailModal.js** 에서 Issue를 **Update**  


```javascript
const Main = () => {
...
  const { ISSUE_LIST, SHOW_ISSUE_DETAIL_FLAG, SHOW_ADD_ISSUE_FLAG } = useSelector(state => state.issue);
...
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <>
          <MainWrapper>
            <IssueContainer id="todo" title={'할 일'} issueList={ISSUE_LIST.TODOS} />
            <IssueContainer id="working" title={'작업 중'} issueList={ISSUE_LIST.WORKINGS} />
            <IssueContainer id="complete" title={'완료'} issueList={ISSUE_LIST.COMPLETES} />
          </MainWrapper>
          <ShowAddIssue onClick={onClickAddIssueModal}>이슈 추가하기</ShowAddIssue>
          {SHOW_ISSUE_DETAIL_FLAG && <IssueDetailModal />}
          {SHOW_ADD_ISSUE_FLAG && <IssueAddModal />}
        </>
      ) : null}
    </>
  );
};
```

* 임의의 담당자목록을 배열로 만든 후, filter를 사용하여 검색 기능을 구현
```javascript
const InputPerson = () => {
...
  const [searchResult, setSearchResult] = useState([]);

  // 담당자 이름 바뀔 시 담당자 검색
  useEffect(() => {
    const filterPerson = PERSON.filter(name => name.includes(person));
    setSearchResult(filterPerson);
  }, [person]);

  return (
    <>
...
        <PersonContainer>
          {searchResult.map(person => (
            <PersonDiv key={person}>{person}</PersonDiv>
          ))}
        </PersonContainer>
      )
    </>
  
};
```

<br>

### 2. Drag & Drop 이벤트를 활용한 Issue의 순서 변경

- 구현 조건
  * 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 
    * 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.

**Component**
* 구현에 필요한 common 컴포넌트를 정의 및 구현


```javascript

// 이슈 리스트들을 담는 컨테이너 컴포넌트
const IssueContainer = ({ id, title, issueList }) => {
  const { DRAG_ISSUE_INFO, DRAG_ENTER_ISSUE_INFO } = useSelector(state => state.issue);
  const [update] = useUpdateTodoMutation();

  // 드래그 놓는 영역 만들기
  const onDragOver = e => {
    e.preventDefault();
  };
  // 드래그 놓을 때
  const onDrop = e => {
    e.preventDefault();

    const dropState = e.currentTarget.closest('article').id;
    console.log(DRAG_ENTER_ISSUE_INFO.id + ' ' + DRAG_ISSUE_INFO.id);
    update({ ...DRAG_ISSUE_INFO, state: dropState, id: DRAG_ENTER_ISSUE_INFO.id });
    update({ ...DRAG_ENTER_ISSUE_INFO, state: dropState, id: DRAG_ISSUE_INFO.id });
  };

  return (
    <Container id={id} onDragOver={onDragOver} onDrop={onDrop}>
      <Title>{title}</Title>
      {issueList.map(issue => (
        <IssueList key={issue.id} issueInfo={issue} />
      ))}
    </Container>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////

// 각 이슈를 보여주는 컴포넌트
const IssueList = ({ issueInfo }) => {
  const dispatch = useDispatch();
  const { id, title, contents, deadline, state, person } = issueInfo;
  const { handleShowDetailIssue } = useIssue();
  const [removeIssue] = useDeleteTodoMutation();

  // 클릭 시 이슈의 상세정보를 보여줌
  const onShowDetail = () => {
    handleShowDetailIssue(id, state);
    dispatch(SET_SHOW_ISSUE_DETAIL_FLAG(true));
  };
  // 이슈 삭제 이벤트
  const onRemoveIssue = () => {
    removeIssue(id);
  };

  // 드래그 시작
  const onDragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    dispatch(SET_DRAG_ISSUE_INFO(issueInfo));
  };
  // 드래그 겹칠 시
  const onDragEnter = () => {
    dispatch(SET_DRAG_ENTER_ISSUE_INFO(issueInfo));
  };

  return (
    <ListWrapper>
      <List onDragEnter={onDragEnter} onClick={onShowDetail} onDragStart={onDragStart} draggable>
        <div>고유번호 : {id}</div>
        <div>제목 : {title}</div>
        <div>내용 : {contents}</div>
        <div>마감일 : {deadline}</div>
        <div>상태 : {state}</div>
        <div>담당자 : {person}</div>
      </List>
      <RemoveButton onClick={onRemoveIssue}>삭제</RemoveButton>
    </ListWrapper>
  );
};

```
**api**
* useInput custom hook으로 SignIn/SignUp 컴포넌트의 input의 이벤트와 값의 valid, 에러 메시지 등을 핸들링
```javascript

// apis 폴더 apiSlice.js의 코드
// Issue를 
updateTodo: builder.mutation({
      query: todo => ({
        url: `/issueList/${todo.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),

```

**Logic**  

세로방향 교환
* 드래그 시작 시 컴포넌트를 1, 1과 겹친 컴포넌트를 2라고 지칭
* 1과 2를 비교하여 id 값을 제외한 값을 교체하여 순서 변경
  
가로방향 교환
* 1이 드롭한 부모 컴포넌트의 id값(todo, working, complete)를 가져와 1의 상태를 patch

<br>

### 3. 데이터가 로딩 중일 때, UX를 고려한 UI 구현

  * 데이터를 처리하는 중,
    - RTK Query 를 사용하여 isLoading 시점에 LoadingSpinner 컴포넌트를 렌더링 해줘 데이터가 로딩된다는 인식을 유저에게 주어 이탈률을 줄일 수 있는 방식으로 UX 를 고려 하였습니다.


**Component**
* 구현에 필요한 common 컴포넌트를 정의 및 구현

```javascript
return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <>
          <MainWrapper>
            <IssueContainer id="todo" title={'할 일'} issueList={ISSUE_LIST.TODOS} />
            <IssueContainer id="working" title={'작업 중'} issueList={ISSUE_LIST.WORKINGS} />
            <IssueContainer id="complete" title={'완료'} issueList={ISSUE_LIST.COMPLETES} />
          </MainWrapper>
          <ShowAddIssue onClick={onClickAddIssueModal}>이슈 추가하기</ShowAddIssue>
          {SHOW_ISSUE_DETAIL_FLAG && <IssueDetailModal />}
          {SHOW_ADD_ISSUE_FLAG && <IssueAddModal />}
        </>
      ) : null}
    </>
  );

```

<br>
