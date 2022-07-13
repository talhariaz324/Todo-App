import { useEffect, useState } from "react";
import "./App.css";
import FORM from "./components/form";
import TODOLIST from "./components/todoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);
  // use Effect is a function which is render whenever page reloads. It takes two parameter. 1st function and 2nd is on which state changes you want to call that function again. Mean it will absolutly run at 1st time and also run on the base of 2nd argu if the the 2nd argu is empty array then it will run only once
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterTodos(todos.filter((todo) => todo.isCompleted === true));
          break;
        case "uncompleted":
          setFilterTodos(todos.filter((todo) => todo.isCompleted === false));
          break;

        default:
          setFilterTodos(todos);
          break;
      }
    };
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  // Local Storage
  // Save to local storage

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos)); // This will store the our todo list in string and in key value pair. 1st argu is key and 2nd argu is list of todos which we convert into string using JSON.stringfy
    // Call that function in useEffect where useEffect calling on every 1st time with also the state of todos and status... As we are calling it in useEffect which is also called on state changing so we should define it in the useEffect but here for understanding i left like that
  };
  // We simply fix this by using it in useState and things are fine with it.
  //const getLocalTodos = () => {
  // if (localStorage.getItem("todos") === null) {
  //   localStorage.setItem("todos", JSON.stringify([])); // If null then set empty array
  // } else {
  //   let getLocal = JSON.parse(localStorage.getItem("todos")); // get using key and also parse the string while getting
  //   setTodos(getLocal); // here simply after getting, we pass to state so that reflect on UI.
  // }
  // We use this function in new useEffect because we want to get only once when 1st time or reloaded. Not for all states
  //};
  return (
    <div className="App">
      <header>
        <h1>Talha's Todo List</h1>
      </header>
      <FORM
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TODOLIST
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
