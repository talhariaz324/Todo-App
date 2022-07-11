import React from "react";
import TODO from "./todo.js";
export default function TODOLIST(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => {
          return (
            <TODO
              key={todo.id}
              text={todo.text}
              todo={todo}
              setTodos={props.setTodos}
              todos={props.todos}
            />
          );
        })}
      </ul>
    </div>
  );
}
