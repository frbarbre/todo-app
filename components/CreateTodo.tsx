'use client';

import { createTodo } from '@/lib/actions/todo.actions';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function CreateTodo({
  userId,
  darkMode,
}: {
  userId: string;
  darkMode: boolean | null;
}) {
  const pathname = usePathname();
  const [inputValue, setInputValue] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue !== '') {
      await createTodo({
        author: userId,
        isDone: false,
        text: inputValue,
        path: pathname,
      });
      setInputValue('');
    } else {
      console.log('Cant be empty string');
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`flex gap-[13px] md:gap-[24px] items-center px-[20px] md:px-[24px] rounded-[4px] h-[48px] md:h-[64px] ${
          darkMode ? 'bg-dark-600 text-dark-100' : 'bg-light-100 text-light-500'
        }`}
      >
        <div className="rounded-full border-[2px] border-solid border-light-300 h-[20px] aspect-square"></div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Create a new todo..."
          className={`w-full text-[12px] tracking-[-0.18px] md:text-[18px] md:tracking-[-0.46px] translate-y-[2.5px] bg-transparent outline-none`}
        />
      </form>
    </div>
  );
}
