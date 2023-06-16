import Button from "Button";

const TodoList = ({
  todo,
  stateChangeButtonHandler,
  deleteButtonHandler,
  isDone,
}) => {
  return (
    <>
      <h1 className="todo-menu">{isDone ? "완료한 일 🛠️" : "해야할 일 ✍🏻"}</h1>
      <ul className="todo-list">
        {todo
          .filter((todoItem) => todoItem.isDone === isDone)
          .map(({ id, title, content }) => {
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
                  todoItemState={isDone ? "취소" : "완료"}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default TodoList;
