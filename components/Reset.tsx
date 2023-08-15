"use client";

import { resetTodos } from "@/lib/actions/todo.actions";
import { setDarkMode } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";

export default function Reset({
  userId,
  currentDarkMode,
  id,
}: {
  userId: string;
  currentDarkMode: boolean;
  id: string;
}) {
  const pathname = usePathname();

  async function handleCreate(darkMode?: boolean) {
    await setDarkMode({
      id: id,
      darkMode: darkMode || false,
      path: pathname,
    });
  }

  async function handleReset() {
    await resetTodos(userId, pathname);
  }

  return (
    <div>
      <div onClick={handleReset}>Reset</div>
      <div onClick={() => handleCreate(!currentDarkMode)}>Set Dark Mode!</div>
    </div>
  );
}
