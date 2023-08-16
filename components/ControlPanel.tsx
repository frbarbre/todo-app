import { Filter } from '@/types';
import Reset from './Reset';
import ItemsCounter from './ItemsCounter';
import FilterPicker from './FilterPicker';

export default function ControlPanel({
  setFilter,
  filter,
  userId,
  itemsLeft,
  darkMode,
}: {
  setFilter: (filter: Filter) => void;
  filter: Filter;
  userId: string;
  itemsLeft: number;
  darkMode: boolean | null;
}) {
  return (
    <section className="px-[21px] py-[16px] md:px-[26px] md:py-[18px] border-t-[1px] border-t-solid border-t-light-400/40 grid grid-cols-2 md:grid-cols-3 justify-between items-center w-full relative">
      <ItemsCounter darkMode={darkMode} itemsLeft={itemsLeft} />
      <FilterPicker filter={filter} setFilter={setFilter} darkMode={darkMode} />
      <Reset darkMode={darkMode} userId={userId} />
    </section>
  );
}
