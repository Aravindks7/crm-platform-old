import React, { useState } from 'react';
import { SearchIcon, ChevronDownIcon, RefreshIcon } from '@heroicons/react/outline';

const Widget = ({ icon, title, description, imgSrc, showTable, removeWidget }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const data = [
    {
      key: '1',
      firstName: 'Sabu',
      lastName: 'John',
      email: '-',
    },
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 mx-2 flex flex-col justify-between h-full ${expanded ? 'max-w-lg' : 'max-w-md'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white-500 flex items-center justify-center">
            {icon}
          </div>
          <div className="flex mx-auto justify-center flex-grow max-w-xs relative">
            <input
              type="text"
              placeholder={title}
              className="w-full px-4 py-2 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-white text-blue-500 px-3 py-1 rounded-full text-sm">
            <span>New</span>
          </button>
          <div className="relative">
            <ChevronDownIcon
              className="w-5 h-5 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-1 w-28 bg-white border border-gray-300 rounded shadow-lg z-10">
                {/* Remove Option */}
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
      </div>

      {!showTable && (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <img src={imgSrc} alt="Graphic" className="h-30" />
          </div>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      )}

      {showTable && (
        <table className="w-full mt-4">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(record => (
              <tr key={record.key}>
                <td className="border px-4 py-2">{record.firstName}</td>
                <td className="border px-4 py-2">{record.lastName}</td>
                <td className="border px-4 py-2">{record.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex items-center justify-between mt-4">
        <button className="text-blue-500" onClick={toggleExpanded}>
          {expanded ? 'Collapse' : 'View Report'}
        </button>
        <div className="flex items-center text-gray-500 text-sm">
          <span>As of today at 5:43</span>
          <RefreshIcon className="w-5 h-5 ml-2 cursor-pointer" />
        </div>
      </div>

      {expanded && (
        <div className="mt-4">
          <p className="text-gray-700">Additional details or drill-down options can be added here.</p>
        </div>
      )}
    </div>
  );
};

export default Widget;
