import { updateUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

export default async function WelcomePage() {
  const user = await currentUser();
  if (!user) return null;

  await updateUser({
    userId: user.id,
    image: user.imageUrl,
    username: user.username || user.emailAddresses[0].emailAddress,
    name: user.firstName || '',
    darkMode: false,
    onboarded: true,
    path: '/',
  });

  return (
    <article className="h-full mx-auto max-h-[400px] w-full max-w-[400px] bg-light-100 shadow-lg rounded-[4px] p-[32px] flex flex-col gap-5">
      <section className="flex flex-col items-center gap-5">
        <Image
          src={user?.imageUrl}
          alt="profile picture"
          width={100}
          height={100}
          className="rounded-full object-cover aspect-square"
        />
        <h1 className="font-bold text-[28px]">Hello {user?.firstName}</h1>
      </section>
      <p className="max-w-[300px] text-center mx-auto">
        Welcome to TODO, <br /> are you ready to get started?
      </p>
      <Link
        href={'/'}
        className="bg-gradient-to-br from-grad-start to-grad-end hover:from-grad-start/80 hover:to-grad-end/80 transition-all w-full h-[48px] rounded-full mt-6 flex items-center justify-center text-light-100 font-bold"
      >
        Get Started
      </Link>
    </article>
  );
}
