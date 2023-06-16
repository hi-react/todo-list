import { useState } from "react";

const SubmitForm = ({ todo, setTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Add 버튼
  const addTodoItemHandler = (event) => {
    event.preventDefault();
    const setId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
    const newTodo = {
      id: setId,
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <form className="add-form" onSubmit={addTodoItemHandler}>
      <div>
        <label className="add-title">제목: </label>
        <input
          className="input-value"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={(event) => setTitle(event.target.value)}
        />
        &nbsp; &nbsp;
        <label className="add-title">내용: </label>
        <input
          className="input-value input-content"
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};

export default SubmitForm;
