'use client';

import { deleteTodo, setTodoDone } from '@/lib/actions/todo.actions';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Todo({
  text,
  isDone,
  id,
  darkMode,
}: {
  text: string;
  isDone: boolean;
  id: string;
  darkMode: boolean | null;
}) {
  const pathname = usePathname();

  async function handleIsDone(isDone: boolean) {
    await setTodoDone({ todoId: id, isDone: isDone, path: pathname });
    console.log(isDone);
  }

  async function handleDelete() {
    await deleteTodo(id, pathname);
  }

  return (
    <article className="flex items-center h-[53px] md:h-[66px] gap-[13px] md:gap-[25px] border-b-[1px] border-b-solid border-b-light-400/40 px-[20px] md:px-[24px] group">
      <div
        onClick={() => handleIsDone(!isDone)}
        className={`${
          isDone
            ? 'bg-gradient-to-br'
            : `${
                darkMode ? 'bg-dark-400' : 'bg-light-300'
              } hover:bg-gradient-to-br`
        } rounded-full h-[20px] aspect-square relative flex justify-center items-center from-grad-start to-grad-end transition-colors`}
      >
        <Image
          src={'/icon-check.svg'}
          alt="checkmark icon"
          width={10}
          height={10}
        />
        <div
          className={`absolute inset-[1.5px] rounded-full ${
            darkMode ? 'bg-dark-600' : 'bg-light-100'
          } aspect-square ${isDone ? 'hidden' : ''}`}
        />
      </div>
      <h2
        className={`w-full text-[12px] tracking-[-0.18px] md:text-[18px] md:tracking-[-0.46px] translate-y-[2.5px] bg-transparent outline-none  ${
          isDone
            ? `${darkMode ? 'text-dark-400' : 'text-light-300'} line-through`
            : ''
        }`}
      >
        {text}
      </h2>
      <Image
        src={'/icon-cross.svg'}
        alt="delete todo"
        width={18}
        height={18}
        onClick={handleDelete}
        className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer w-[13px] aspect-square md:w-[18px]"
      />
    </article>
  );
}
