import { filters } from '@/constants';
import { Filter } from '@/types';

export default function FilterPicker({
  filter,
  setFilter,
  darkMode,
}: {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  darkMode: boolean | null;
}) {
  return (
    <div className="md:justify-self-center absolute bottom-0 md:relative translate-y-[100%] md:translate-y-0 w-full flex items-center justify-center">
      <div
        className={`flex items-center justify-center gap-[21px] translate-y-[16px] md:translate-y-0 w-full md:bg-transparent shadow-lg rounded-[4px] md:shadow-none py-[16px] md:py-0 ${
          darkMode ? 'bg-dark-600 text-dark-100' : 'bg-light-100 text-light-500'
        }`}
      >
        {filters.map((item) => (
          <h2
            className={`${
              item === filter ? 'text-primary' : ''
            } capitalize font-bold text-[14.5px] tracking-[-0.723px] cursor-pointer transition-colors ${
              darkMode && item !== filter
                ? 'text-dark-400 hover:text-dark-200'
                : !darkMode && item !== filter
                ? 'text-light-400 hover:text-light-500'
                : ''
            }`}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
}
