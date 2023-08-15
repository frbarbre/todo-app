'use client';

import {
  deleteTodo,
  resetTodos,
  setTodoDone,
} from '@/lib/actions/todo.actions';
import { usePathname } from 'next/navigation';

export default function Todo({
  text,
  isDone,
  id,
  userId,
}: {
  text: string;
  isDone: boolean;
  id: string;
  userId: string;
}) {
  const pathname = usePathname();

  async function handleIsDone(isDone: boolean) {
    await setTodoDone({ todoId: id, isDone: isDone, path: pathname });
    console.log(isDone);
  }

  async function handleDelete() {
    await deleteTodo(id, pathname);
  }

  async function handleReset() {
    await resetTodos(userId, pathname);
  }

  return (
    <div className={isDone ? 'text-red-500' : 'text-green-500'}>
      <div onClick={() => handleIsDone(isDone ? false : true)}>
        {isDone.toString()}
      </div>
      <div onClick={handleDelete}>Delete</div>
      <div onClick={handleReset}>Reset</div>
    </div>
  );
}
