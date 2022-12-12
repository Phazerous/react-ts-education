import React from "react";

interface ToDoProps {
  id: string,
  title: string,
  content: string
}

const ToDoItem: React.FC<ToDoProps> = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </>
  );
}

export default ToDoItem;