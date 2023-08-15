'use client';

import { createTodo } from '@/lib/actions/todo.actions';

export default function Create({ userId }: { userId: string }) {
  async function handleCreate() {
    await createTodo({
      author: userId,
      isDone: false,
      text: 'Feed the Dog',
      path: '/',
    });
  }

  return <div onClick={handleCreate}>Create</div>;
}
