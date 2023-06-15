import "./style/Reset.css";
import "./style/App.css";
import { useEffect, useState } from "react";
import HaveTodo from "HaveTodo";
import WorkDone from "WorkDone";

function App() {
  // state
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 입문 공부하기",
      content: "개인과제",
      isDone: false,
    },
    {
      id: 2,
      title: "슬슬 하기 싫은데..",
      content: "개인과제",
      isDone: true,
    },
  ]);
  // state 상세
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // onChange -> input 쓰면 state값 바꿔주기
  const todoTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const todoContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // Add 버튼 -> 새로운 state로 바꿔주기
  const addTodoItemHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todo[todo.length - 1].id + 1,
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  // [로컬 스토리지] 새로고침해도 할일 목록이 유지되도록

  // 1. 로컬 스토리지 데이터 가져오기 (get)
  // todoList라는 key 만들어서, value값에 배열을 받는다. 그 배열을 todoListData에 담아준다.
  // todoListData를 파싱해서 todo 상태를 설정한다.(setTodo) => 새로고침해도 입력했던 todo가 유지됨
  useEffect(() => {
    const todoListData = localStorage.getItem("todoList");
    if (todoListData) {
      setTodo(JSON.parse(todoListData));
    }
  }, []);

  // 2. 로컬 스토리지 저장 (set)
  // todo state에 변화가 생길 때마다 실행된다. (todo 아이템 하나하나 추가/삭제/상태 변경 시)
  // todo 상태가 바뀌면 그걸 문자열로 변환하여 local storage의 "todoList"라는 key의 value로 저장
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);
  // console.log(todo);

  // Delete 버튼 -> 누른 id만 제외하고 새로운 state값 만들어주기
  const deleteButtonHandler = (id) => {
    const newTodoList = todo.filter((todoItem) => todoItem.id !== id);
    setTodo(newTodoList);
  };

  // stateChange 버튼 -> 누른 id는 state의 isDone값을 반대로 바꿔서 state 세팅
  const stateChangeButtonHandler = (id) => {
    const changeTodo = todo.filter((todoItem) => {
      if (todoItem.id === id) {
        todoItem.isDone = !todoItem.isDone;
      }
      return todoItem;
    });
    setTodo(changeTodo);
  };

  // state 중 isDone 기준으로 상태 값 나누기
  const haveToDo = todo.filter(function (todoItem) {
    return todoItem.isDone === false;
  });
  const workDone = todo.filter((todoItem) => {
    return todoItem.isDone === true;
  });

  return (
    <div className="layout">
      <header className="title">My Todo List</header>
      <form className="add-form" onSubmit={addTodoItemHandler}>
        <div>
          <label className="add-title">제목: </label>
          <input
            className="input-value"
            value={title}
            onChange={todoTitleChangeHandler}
          />
          &nbsp; &nbsp;
          <label className="add-title">내용: </label>
          <input
            className="input-value input-content"
            value={content}
            onChange={todoContentChangeHandler}
          />
        </div>
        <button className="add-button">추가하기</button>
      </form>

      <main className="todo-container">
        <h1 className="todo-menu">해야할 일 ✍🏻</h1>
        <ul className="todo-list">
          {haveToDo.map(({ id, title, content }) => {
            return (
              <HaveTodo
                key={id}
                id={id}
                title={title}
                content={content}
                stateChangeButtonHandler={stateChangeButtonHandler}
                deleteButtonHandler={deleteButtonHandler}
              />
            );
          })}
        </ul>

        <h1 className="todo-menu">완료한 일 🛠️</h1>
        <ul className="todo-list">
          {workDone.map(({ id, title, content }) => {
            return (
              <WorkDone
                key={id}
                id={id}
                title={title}
                content={content}
                stateChangeButtonHandler={stateChangeButtonHandler}
                deleteButtonHandler={deleteButtonHandler}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
