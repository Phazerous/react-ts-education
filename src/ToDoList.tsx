import React from "react";
import ToDoItem  from "./TodoItem";

interface ToDoListProps {
  todos: {id: string, title: string, content: string}[];
}

const ToDoList: React.FC<ToDoListProps> = ({todos}) => {
  return (
    <div>
      {todos.map(todo => {
        return <ToDoItem {...todo} />
      })}
    </div>
  );
}

export default ToDoList;