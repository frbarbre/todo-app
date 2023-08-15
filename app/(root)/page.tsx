import Create from "@/components/Create";
import Reset from "@/components/Reset";
import Todos from "@/components/Todos";
import { fetchTodos } from "@/lib/actions/todo.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function TodoPage() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user?.id);
  if (!userInfo?.onboarded) redirect("/welcome");

  const result = await fetchTodos(userInfo?._id);

  return (
    <main>
      <UserButton afterSignOutUrl="/" />
      <Create userId={userInfo?._id.toString()} />
      <Todos result={result} />
      <Reset
        userId={userInfo?._id.toString()}
        currentDarkMode={userInfo?.darkMode}
        id={userInfo?.id}
      />
      <div>{userInfo?.darkMode.toString()}</div>
    </main>
  );
}
