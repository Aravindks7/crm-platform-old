import React, { useState } from 'react';
import icon4 from '/images/icon4.png';
import graphics2 from '/images/graphics2.png';
import { SearchIcon, ChevronDownIcon, RefreshIcon } from '@heroicons/react/outline';

const AllNewCasesByPriority = ({ removeWidget }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const data = [
    {
      key: '1',
      priority: 'High',
      caseName: 'Case 1234',
      status: 'Open',
    },
    {
      key: '2',
      priority: 'Medium',
      caseName: 'Case 5678',
      status: 'Open',
    },
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 mx-2 flex flex-col justify-between h-full ${expanded ? 'max-w-lg' : 'max-w-md'}`}>
      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10  rounded-full flex items-center justify-center">
            <img src={icon4} alt="Avatar" className="w-8 h-8 rounded-full" />
          </div>
        
          <div className="flex mx-auto justify-center flex-grow max-w-xs relative">
            <input
              type="text"
              placeholder="All New Cases By Priority"
              className="w-full px-4 py-2 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <button className="bg-white text-blue-500 px-4 py-1 rounded-full flex items-center space-x-1">
            New
          </button>
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
      </div>

      {/* Middle Section */}
      {!expanded && (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <img src={graphics2} alt="Cases Illustration" className="h-30" />
          </div>
          <p className="text-gray-600 text-center">Tackle service issues when cases come in.</p>
        </div>
      )}

      {/* Table Section */}
      {expanded && (
        <div className="mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="p-2 text-left">Priority</th>
                <th className="p-2 text-left">Case Name</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.key} className="border-b border-gray-300">
                  <td className="p-2">{item.priority}</td>
                  <td className="p-2">{item.caseName}</td>
                  <td className="p-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-500 cursor-pointer" onClick={toggleExpanded}>
          {expanded ? 'Collapse' : 'View All'}
        </a>
        <div className="flex items-center text-gray-500 text-sm">
          <span>As of Today at 0:47 AM</span>
          <RefreshIcon className="w-5 h-5 ml-2 cursor-pointer" />
        </div>
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="mt-4">
          <p className="text-gray-700">Additional details or drill-down options can be added here.</p>
        </div>
      )}
    </div>
  );
};

export default AllNewCasesByPriority;
