'use client';

import { setDarkMode } from '@/lib/actions/user.actions';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function ThemeSwitcher({
  id,
  currentDarkMode,
}: {
  id: string;
  currentDarkMode: boolean | null;
}) {
  const pathname = usePathname();

  async function handleDarkMode(darkMode?: boolean) {
    await setDarkMode({
      id: id,
      darkMode: darkMode || false,
      path: pathname,
    });
  }

  return (
    <Image
      src={currentDarkMode ? '/icon-sun.svg' : '/icon-moon.svg'}
      width={26}
      height={26}
      alt="theme switcher"
      onClick={() => handleDarkMode(!currentDarkMode)}
      className="w-[20px] aspect-square md:w-[26px] cursor-pointer"
    />
  );
}
