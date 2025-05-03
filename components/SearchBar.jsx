import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Filter Button */}
      <button className="w-[112px] h-[64px] bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <span>Filter</span>
      </button>

      {/* Search Bar */}
      <div className="w-[1152px] h-[64px] bg-white border border-gray-300 rounded-lg flex items-center px-4 divide-x divide-gray-300">
        {/* First Section - Assets dropdown */}
        <div className="flex items-center gap-3 pr-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span className="text-gray-700 font-medium">Assets</span>
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Second Section - Search Input */}
        <div className="flex-1 px-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="search all assets" 
              className="w-full h-full py-2 outline-none text-gray-700 placeholder-gray-400"
            />
            <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Third Section - Search Button */}
        <div className="pl-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;