export default function ItemsCounter({
  itemsLeft,
  darkMode,
}: {
  itemsLeft: number;
  darkMode: boolean | null;
}) {
  return (
    <h3
      className={`text-[14.5px] tracking-[-0.723px] ${
        darkMode ? 'text-dark-400' : 'text-light-400'
      }`}
    >
      {itemsLeft} item{itemsLeft === 1 ? '' : 's'} left
    </h3>
  );
}
