const SubmitForm = ({
  title,
  content,
  addTodoItemHandler,
  todoTitleChangeHandler,
  todoContentChangeHandler,
}) => {
  return (
    <form className="add-form" onSubmit={addTodoItemHandler}>
      <div>
        <label className="add-title">제목: </label>
        <input
          className="input-value"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={todoTitleChangeHandler}
        />
        &nbsp; &nbsp;
        <label className="add-title">내용: </label>
        <input
          className="input-value input-content"
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={todoContentChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};

export default SubmitForm;
