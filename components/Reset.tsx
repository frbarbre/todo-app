'use client';

import { resetTodos } from '@/lib/actions/todo.actions';
import { usePathname } from 'next/navigation';

export default function Reset({
  userId,
  darkMode,
}: {
  userId: string;
  darkMode: boolean | null;
}) {
  const pathname = usePathname();

  async function handleReset() {
    await resetTodos(userId, pathname);
  }

  return (
    <div className="justify-self-end">
      <div
        onClick={handleReset}
        className={`text-[14.5px] tracking-[-0.723px]  ${
          darkMode ? 'text-dark-400' : 'text-light-400'
        }`}
      >
        Clear Completed
      </div>
    </div>
  );
}
