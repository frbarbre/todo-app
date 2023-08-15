// 'use client';

import { deleteAllTodos, setTodoDone } from '@/lib/actions/todo.actions';
import Todo from './Todo';
import { usePathname } from 'next/navigation';

export default function Todos({
  todos,
  userId,
}: {
  todos: any[];
  userId: string;
}) {
  //   async function handleReset() {
  //     deleteAllTodos({ path: pathname, userId: userId });
  //   }

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          userId={userId}
          key={todo._id}
          text={todo.text}
          id={todo.id}
          isDone={todo.isDone}
        />
      ))}
      {/* <h1 onClick={handleReset}>Reset</h1> */}
    </div>
  );
}
