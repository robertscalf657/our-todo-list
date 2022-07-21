import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import FlipMove from "react-flip-move";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <section className="mx-auto min-w-full px-10 pb-12">
      <FlipMove className="space-y-3" typeName="ul">
        {todos.map(({ id, text, completed }) => (
          <TodoItem id={id} key={id} text={text} completed={completed} />
        ))}
      </FlipMove>

      {todos.length === 0 && (
        <p className="text-xl text-center font-bold">Feed Me Seymore</p>
      )}
    </section>
  );
};

export default TodoList;
