import { updateUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function WelcomePage() {
  const user = await currentUser();
  if (!user) return null;

  await updateUser({
    userId: user.id,
    image: user.imageUrl,
    username: user.username || user.emailAddresses[0].emailAddress,
    name: user.firstName || "",
    darkMode: false,
    onboarded: true,
    path: "/",
  });

  return <Link href={"/"}>Welcome!</Link>;
}
