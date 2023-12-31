'use client';

import { Filter, TodoProps } from '@/types';
import Todos from './Todos';
import { useState } from 'react';
import ControlPanel from './ControlPanel';

export default function TodoContainer({
  result,
  userId,
  darkMode,
}: {
  result: TodoProps[];
  userId: string;
  darkMode: boolean | null;
}) {
  const [filter, setFilter] = useState<Filter>(Filter.all);
  const sortedResult = result.sort((a, b) => b.createdAt - a.createdAt);
  const activeTodos = sortedResult.filter((todo) => !todo.isDone);
  const doneTodos = sortedResult.filter((todo) => todo.isDone);

  return (
    <section
      className={`${
        darkMode ? 'bg-dark-600 text-dark-100' : 'bg-light-100 text-light-500'
      } rounded-[4px] shadow-lg`}
    >
      <Todos
        result={
          filter === Filter.all
            ? sortedResult
            : filter === Filter.active
            ? activeTodos
            : doneTodos
        }
        darkMode={darkMode}
        filter={filter}
      />

      <ControlPanel
        filter={filter}
        setFilter={setFilter}
        userId={userId}
        itemsLeft={activeTodos.length}
        darkMode={darkMode}
      />
    </section>
  );
}
