import { UserButton } from '@clerk/nextjs';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({
  id,
  currentDarkMode,
}: {
  id: string;
  currentDarkMode: boolean;
}) {
  return (
    <header className="pt-[50px] pb-[40px] md:pb-[50px] md:pt—[78px] flex items-center justify-between">
      <h2 className="font-bold translate-y-[4px] text-white md:text-[40px] md:tracking-[15.13px] text-[28px] tracking-[9.46px]">
        TODO
      </h2>
      <article className="flex items-center gap-10">
        <ThemeSwitcher id={id} currentDarkMode={currentDarkMode} />
        <UserButton
          appearance={{
            elements: {
              userButtonPopoverCard: 'mt-[9px]',
              userButtonTrigger: 'focus:shadow-none',
              userButtonBox:
                'bg-gradient-to-r hover:from-grad-start hover:to-grad-end p-[3px] rounded-full',
            },
          }}
          afterSignOutUrl="/"
        />
      </article>
    </header>
  );
}
