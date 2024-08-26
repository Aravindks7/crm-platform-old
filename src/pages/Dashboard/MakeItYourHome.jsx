import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const MakeItYourHome = ({ removeWidget }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md h-full p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Make It Your Home</h2>
        <div className="relative">
          <ChevronDownIcon
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-1 w-28 bg-white border border-gray-300 rounded shadow-lg z-10">
              <li
                className="p-2 hover:bg-red-500 hover:text-white cursor-pointer"
                onClick={removeWidget}
              >
                Remove
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="flex justify-center items-center">
        <img src="/path-to-image.png" alt="Home Illustration" className="w-16 h-16" />
      </div>
      <p className="text-center text-gray-500 mt-4">
        To replace a card, click its action menu and select Change Home Card. Use the filters on cards to personalize your view even more.
      </p>
    </div>
  );
};

export default MakeItYourHome;
