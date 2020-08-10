import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./InputForm.css";

function InputForm({ setInput, input, addTodo }) {
  console.log(input);
  return (
    <div className="input__form">
      <TextField
        id="standard-basic"
        variant="outlined"
        size="small"
        label="Type next todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        className="inputform__button"
        variant="contained"
        color="primary"
        onClick={addTodo}
      >
        Add Todo
      </Button>
    </div>
  );
}

export default InputForm;
