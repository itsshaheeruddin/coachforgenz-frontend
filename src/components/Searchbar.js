import React, { useState } from 'react';

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value); // Pass query to the parent
  };

  return (
    <>
      <div className="relative z-10 mt-6 w-full max-w-lg mx-auto px-4 sm:px-0"> {/* Add padding for smaller screens */}
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-pink-500 dark:text-pink-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-pink-500 rounded-lg bg-pink-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
              placeholder="Search Courses"
              value={query}
              onChange={handleChange} // Update query state on change
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Searchbar;
