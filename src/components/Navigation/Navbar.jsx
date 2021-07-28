import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

export default function Navbar() {
  return (
    <nav className="bg-purple-600 p-5 shadow-md">
      <ul className="flex">
        <li>
          <h1 className="hidden text-white text-2xl md:block">Open Library</h1>
        </li>
        <li className="w-full md:max-w-md md:ml-auto">
          <div className="flex items-center border-b-2 border-white">
            <input placeholder="Search Books..." className="p-1.5 bg-transparent outline-none text-white w-full" />
            <SearchIcon className="text-white" />
          </div>
        </li>
      </ul>
    </nav>
  );
}
