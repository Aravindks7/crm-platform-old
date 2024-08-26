import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const RecentRecords = ({ removeWidget }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const data = [
    { key: '1', name: 'Sabu John', type: 'User' },
    { key: '2', name: 'ds', type: 'Organization' },
    { key: '3', name: 'My Open Cases', type: 'File' },
    { key: '4', name: 'My Service Dashboard', type: 'Dashboard' },
    { key: '5', name: 'My Open Cases by Priority', type: 'Tasks' },
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 mx-2 flex flex-col justify-between h-full ${expanded ? 'max-w-lg' : 'max-w-md'}`}>
      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent Records</h2>
        <div className="relative">
          <ChevronDownIcon
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-1 w-28 bg-white border border-gray-300 rounded shadow-lg z-10">
              {/* Other dropdown options can be added here */}
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

      {/* Records List or Table Section */}
      {!expanded ? (
        <div className="flex flex-col items-center justify-center py-6">
          <ul className="space-y-3 w-full">
            {data.map(record => (
              <li className="flex items-center" key={record.key}>
                <div
                  className={`w-8 h-8 flex items-center justify-center 
                  ${record.type === 'User' ? 'bg-purple-500' 
                   : record.type === 'Organization' ? 'bg-blue-500' 
                   : record.type === 'File' ? 'bg-green-500' 
                   : record.type === 'Dashboard' ? 'bg-indigo-500' 
                   : 'bg-teal-500'} rounded-full text-white`}
                >
                  <i className={`fas ${record.type === 'User' ? 'fa-user' 
                        : record.type === 'Organization' ? 'fa-building' 
                        : record.type === 'File' ? 'fa-file-alt' 
                        : record.type === 'Dashboard' ? 'fa-chart-line' 
                        : 'fa-tasks'}`}></i>
                </div>
                <a href="#" className="ml-3 text-blue-600">{record.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-4">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {data.map(record => (
                <tr key={record.key}>
                  <td className="border px-4 py-2">{record.name}</td>
                  <td className="border px-4 py-2">{record.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-500 items-center" onClick={toggleExpanded}>
          {expanded ? 'Collapse' : 'View All'}
        </a>
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

export default RecentRecords;
