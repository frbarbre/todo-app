import CreateTodo from '@/components/CreateTodo';
import TodoContainer from '@/components/TodoContainer';
import { fetchTodos } from '@/lib/actions/todo.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function TodoPage() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user?.id);
  if (!userInfo?.onboarded) redirect('/welcome');

  const result = await fetchTodos(userInfo?._id);

  return (
    <section className="flex flex-col gap-[16px] md:gap-[24px] w-full">
      <CreateTodo
        userId={userInfo?._id.toString()}
        darkMode={userInfo?.darkMode}
      />
      <TodoContainer
        result={result}
        userId={userInfo?._id.toString()}
        darkMode={userInfo?.darkMode}
      />
    </section>
  );
}
