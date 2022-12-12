import React from 'react';
import ToDoList from './ToDoList';

function App() {
  const todos = [
    {
      id: "1",
      title: "Clean bathroom",
      content: "Need to buy washing things"
    },
    {
      id: "2",
      title: "Prepare homework",
      content: "Prepare homework for Dan"
    },
    {
      id: "3",
      title: "Bake a cake",
      content: "Birthday party cake"
    }
  ]

  return (
    <div>
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
