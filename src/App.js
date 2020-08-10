import React, { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setTodos(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const addTodo = () => {
    db.collection("todos").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  console.log(todos);
  const deleteHandler = (id) => {
    console.log(id);
    db.collection("todos").doc(id).delete();
  };

  return (
    <React.Fragment>
      <div className="app">
        <InputForm setInput={setInput} input={input} addTodo={addTodo} />
        <TodoList todos={todos} deleteHandler={deleteHandler} />
      </div>
    </React.Fragment>
  );
}

export default App;
