'use client';

import { TodoProps } from '@/types';
import Todo from './Todo';

export default function Todos({ result }: { result: TodoProps[] }) {
  return (
    <div className="h-[60svh] max-h-[387px] overflow-y-scroll">
      {result.length !== 0 ? (
        <>
          {result.map((todo) => (
            <Todo
              key={todo._id.toString()}
              text={todo.text}
              id={todo._id.toString()}
              isDone={todo.isDone}
            />
          ))}
        </>
      ) : (
        <div>No things</div>
      )}
    </div>
  );
}
