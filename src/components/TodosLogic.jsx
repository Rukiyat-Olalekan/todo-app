import React from "react";

function TodosLogic() {
  const todos = [
    {
      id: 1,
      title: "Setup development environment",
      completed: true,
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false,
    },
  ];

  return (
    <ul>
      {todos.map((todo) => {
        return <li id={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
}

export default TodosLogic;
