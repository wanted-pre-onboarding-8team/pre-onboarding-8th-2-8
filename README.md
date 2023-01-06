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
    - [4. 사용자의 중복 액션을 방지하기 위한 딜레이 적용](#4-사용자의-중복-액션을-방지하기-위한-딜레이-적용)
    - [5. 에러를 고려한 처리 방법](#5-에러를-고려한-처리)

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
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=Redux&logoColor=white" />
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />  
  
<br/>
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
</div>

<br>

## 🏃‍♂️ 실행방법
----
```
yarn start
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

- 구현 조건
  * 이슈의 상태는 “할 일”, “진행 중”, "완료”가 존재하며 칸반보드와 같이 상태별로 분류된다.
  * 이슈 상태별 목록은 기본적으로 고유번호 순서대로 "오름차순" 정렬한다.
  * 이슈는 각각 "고유번호, 제목, 내용, 마감일, 상태, 담당자"가 존재한다.
  * 이슈의 작성 폼에서는 "제목, 내용, 마감일, 상태, 담당자"를 입력할 수 있다.
    * 추가 조건: 담당자는 사전에 임의의 목록을 구성하고, 검색하여 담당자를 선택할 수 있도록 한다.
  

**Component**
* 구현에 필요한 common 컴포넌트를 정의 및 구현


```javascript
코드 넣을 곳
```
**Hooks**
* custom hook으로 SignIn/SignUp 컴포넌트의 input의 이벤트와 값의 valid, 에러 메시지 등을 핸들링

```javascript
코드 넣을 곳


```

<br>

### 2. Drag & Drop 이벤트를 활용한 Issue의 순서 변경

- 구현 조건
  * 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 
    * 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.

**Component**
* 구현에 필요한 common 컴포넌트를 정의 및 구현


```javascript
코드 넣을 곳
```
**Hooks**
* useInput custom hook으로 SignIn/SignUp 컴포넌트의 input의 이벤트와 값의 valid, 에러 메시지 등을 핸들링
```javascript
코드 넣을 곳

```

<br>

### 3. 데이터가 로딩 중일 때, UX를 고려한 UI 구현

  * 데이터를 처리하는 중,

**Component**
* 구현에 필요한 common 컴포넌트를 정의 및 구현


```javascript
코드 넣을 곳
```
**Hooks**
* useInput custom hook으로 SignIn/SignUp 컴포넌트의 input의 이벤트와 값의 valid, 에러 메시지 등을 핸들링

```javascript
코드 넣을 곳

```

<br>

### 4. 사용자의 중복 액션을 방지하기 위한 딜레이 적용

  * 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 
    * 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.

**Component**
* 구현에 필요한 common 컴포넌트를 정의 및 구현


```javascript
코드 넣을 곳
```
**Hooks**
* useInput custom hook으로 SignIn/SignUp 컴포넌트의 input의 이벤트와 값의 valid, 에러 메시지 등을 핸들링

```javascript
코드 넣을 곳

```

<br>

### 5. 에러를 고려한 처리

  * 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 


**Component**
* 구현에 필요한 common 컴포넌트를 정의 및 구현


```javascript
코드 넣을 곳
```
**Hooks**
* useInput custom hook으로 SignIn/SignUp 컴포넌트의 input의 이벤트와 값의 valid, 에러 메시지 등을 핸들링

```javascript
코드 넣을 곳

```

<br>


