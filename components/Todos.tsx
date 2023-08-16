'use client';

import { Filter, TodoProps } from '@/types';
import Todo from './Todo';

export default function Todos({
  result,
  darkMode,
  filter,
}: {
  result: TodoProps[];
  darkMode: boolean | null;
  filter: Filter;
}) {
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
              darkMode={darkMode}
            />
          ))}
        </>
      ) : (
        <p className="p-[32px] md:px-[24px] md:pt-[48px] text-center text-[12px] md:text-[18px]">
          You currently don't have any{" "}
          {filter === Filter.all
            ? 'todos...'
            : filter === Filter.active
            ? 'active todos.'
            : 'completed todos'}
        </p>
      )}
    </div>
  );
}
