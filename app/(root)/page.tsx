import Create from '@/components/Create';
import Todos from '@/components/Todos';
import { createTodo, fetchTodos } from '@/lib/actions/todo.actions';
import { createUser, fetchUser } from '@/lib/actions/user.actions';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user?.id);

  await createUser({
    userId: user.id,
    image: user.imageUrl,
    username: user.username || user.emailAddresses[0].emailAddress,
    name: user.firstName || '',
  });

  const result = await fetchTodos(userInfo?._id);

  return (
    <main>
      <UserButton afterSignOutUrl="/" />
      <Create userId={userInfo?._id} />
      <Todos todos={result} userId={userInfo?._id} />
    </main>
  );
}
