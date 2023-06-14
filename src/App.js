import "./style/Reset.css";
import "./style/App.css";
import { useState } from "react";

function App() {
  // state
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "리액트 입문 공부하기",
      content: "개인과제",
      isDone: false,
    },
    {
      id: 1,
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
  const addTodoItem = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

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
      <form className="add-form" onSubmit={addTodoItem}>
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
              <li className="todo-item" key={id}>
                <div className="todo-item-info">
                  <h3 className="todo-item-title">{title}</h3> <br />
                  <p className="todo-item-content">{content}</p>
                </div>
                <div className="button-set">
                  <button
                    className="button complete-button"
                    onClick={() => {
                      stateChangeButtonHandler(id);
                    }}
                  >
                    완료
                  </button>
                  <button
                    className="button delete-button"
                    onClick={() => {
                      deleteButtonHandler(id);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <h1 className="todo-menu">완료한 일 🛠️</h1>
        <ul className="todo-list">
          {workDone.map(({ id, title, content }) => {
            return (
              <li className="todo-item" key={id}>
                <div className="todo-item-info">
                  <h3 className="todo-item-title">{title}</h3> <br />
                  <p className="todo-item-content">{content}</p>
                </div>
                <div className="button-set">
                  <button
                    className="button complete-button"
                    onClick={() => {
                      stateChangeButtonHandler(id);
                    }}
                  >
                    취소
                  </button>
                  <button
                    className="button delete-button"
                    onClick={() => {
                      deleteButtonHandler(id);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
