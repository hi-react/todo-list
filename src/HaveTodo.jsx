import Button from "Button";

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
      <Button
        id={id}
        stateChangeButtonHandler={stateChangeButtonHandler}
        deleteButtonHandler={deleteButtonHandler}
        todoItemState="완료"
      />
    </li>
  );
};

export default HaveTodo;
