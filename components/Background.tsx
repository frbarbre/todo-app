export default function Background({
  isDarkMode,
}: {
  isDarkMode: boolean | null;
}) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 h-[200px] md:h-[300px] z-[-1] bg-no-repeat bg-cover flex justify-center ${
        isDarkMode
          ? 'bg-dark-mobile md:bg-dark-desktop'
          : 'bg-light-mobile md:bg-light-desktop'
      }`}
    />
  );
}
