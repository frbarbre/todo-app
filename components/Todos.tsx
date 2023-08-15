"use client";

import { TodoProps } from "@/types";
import Todo from "./Todo";

export default function Todos({ result }: { result: TodoProps[] }) {
  const activeTodos = result.filter((todo) => !todo.isDone);
  const doneTodos = result.filter((todo) => todo.isDone);

  return (
    <div>
      <h2 className="font-bold text-orange-400 text-[24px]">Done</h2>
      {doneTodos.map((todo) => (
        <Todo
          key={todo._id.toString()}
          text={todo.text}
          id={todo._id.toString()}
          isDone={todo.isDone}
        />
      ))}
      <h2 className="font-bold text-orange-400 text-[24px]">Active</h2>
      {activeTodos.map((todo) => (
        <Todo
          key={todo._id.toString()}
          text={todo.text}
          id={todo._id.toString()}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
}
