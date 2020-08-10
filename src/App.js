import React from "react";
import "./App.css";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <InputForm />
        <TodoList />
      </div>
    </React.Fragment>
  );
}

export default App;
