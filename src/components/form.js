import React from "react";

export default function FORM(props) {
  const currVal = (e) => {
    props.setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault(); // Not refreshing make sure
    props.setTodos([
      ...props.todos, // This line is for adding the previuos todos (already added by user) in the list.
      {
        text: props.inputText,
        isCompleted: false,
        id: Math.random() * 1000,
      },
    ]);
    props.setInputText(""); // OnSubmit we have to del the input Text from the state. So we make it empty
  };
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={props.inputText}
        onChange={currVal}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
