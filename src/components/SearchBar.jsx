import { useEvents } from '../context/EventContext';

const SearchBar = () => {
  const { filters, updateFilters } = useEvents();

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search events by title, description, or host..."
          value={filters.search}
          onChange={(e) => updateFilters({ search: e.target.value })}
          className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
