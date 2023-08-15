"use client";

import { deleteTodo, setTodoDone } from "@/lib/actions/todo.actions";
import { usePathname } from "next/navigation";

export default function Todo({
  text,
  isDone,
  id,
}: {
  text: string;
  isDone: boolean;
  id: string;
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
    <div>
      <div onClick={() => handleIsDone(isDone ? false : true)}>Switch</div>
      <div className={isDone ? "text-red-500" : "text-green-500"}>
        <div>
          {text}, {isDone.toString()}
        </div>
        <div onClick={handleDelete}>Delete</div>
      </div>
    </div>
  );
}
