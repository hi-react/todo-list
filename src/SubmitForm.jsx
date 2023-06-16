const SubmitForm = ({
  title,
  content,
  addTodoItemHandler,
  setTitle,
  setContent,
}) => {
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
