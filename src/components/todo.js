import React from "react";

export default function TODO(props) {
  const deleteTodo = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id)); // it use for both filter and also for exclude the array
  };

  const completeTodo = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item, // this means remain the same the item just change which is in 2nd argument
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      {/* for making below text cut because of complete we attach the property in css with name of completed already. Just here we have to check true or false and then do addition or remvoval */}
      <li className={`todo-item ${props.todo.isCompleted ? "completed" : ""}`}>
        {props.text}
      </li>
      <button onClick={completeTodo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
