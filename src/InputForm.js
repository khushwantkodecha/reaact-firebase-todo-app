import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./InputForm.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function InputForm() {
  const [input, setInput] = useState("");

  console.log(input);
  return (
    <div className="input__form">
      {/* <input type="text" /> */}
      <TextField
        id="standard-basic"
        label="Add ToDo Here..."
        variant="outlined"
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      {/* <Button variant="contained" color="primary">
        Add Todo
      </Button> */}
    </div>
  );
}

export default InputForm;
