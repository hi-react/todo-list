const HaveTodo = ({
  id,
  title,
  content,
  stateChangeButtonHandler,
  deleteButtonHandler,
}) => {
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
};

export default HaveTodo;
