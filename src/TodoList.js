import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./TodoList.css";
import Icon from "@material-ui/core/Icon";
import DoneAllIcon from "@material-ui/icons/DoneAll";

function TodoList({ todos, deleteHandler }) {
  return (
    <div className="todolist">
      {todos.map((todo) => {
        return (
          <Card className="todolist__card">
            <CardContent className="card__content">
              <Typography color="textSecondary">{todo.data.text}</Typography>
            </CardContent>
            <div className="icons">
              <Icon className="icon done__icon">
                <DoneAllIcon
                  color="primary"
                  onClick={() => deleteHandler(todo.id)}
                />
              </Icon>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default TodoList;
