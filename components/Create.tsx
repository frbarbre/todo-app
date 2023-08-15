"use client";

import { createTodo } from "@/lib/actions/todo.actions";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Create({ userId }: { userId: string }) {
  const pathname = usePathname();
  const [inputValue, setInputValue] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue !== "") {
      await createTodo({
        author: userId,
        isDone: false,
        text: inputValue,
        path: pathname,
      });
      setInputValue("");
    } else {
      console.log("Cant be empty string");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write a todo!"
        />
      </form>
    </div>
  );
}
