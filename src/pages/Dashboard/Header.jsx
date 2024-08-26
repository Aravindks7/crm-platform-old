import React, { useState, useRef, useEffect } from 'react';
import logo from '/images/logo.png';
import user from '/images/user.png';
import { SearchIcon, QuestionMarkCircleIcon, CogIcon, BellIcon, PencilIcon } from '@heroicons/react/outline';

const Header = ({ addWidget }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleAddWidget = (widgetName) => {
    addWidget(widgetName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white flex flex-col px-4 py-2 shadow-md border-b border-blue-300 relative">

      {/* Bottom section: Editor Icon */}
      <div className="flex justify-end mt-2 relative">
        <PencilIcon 
          className="w-5 h-5 text-blue-600 cursor-pointer" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
        />

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-8 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
          >
            <div 
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 relative"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            >
              Add Widgets

              {isSubMenuOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => handleAddWidget('My Leads')}
                        className="block px-4 py-2 text-blue-500 hover:bg-gray-100 w-full text-left"
                      >
                        My Leads
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleAddWidget('My Opportunities')}
                        className="block px-4 py-2 text-blue-500 hover:bg-gray-100 w-full text-left"
                      >
                        My Opportunities
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleAddWidget('My Contacts')}
                        className="block px-4 py-2 text-blue-500 hover:bg-gray-100 w-full text-left"
                      >
                        My Contacts
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleAddWidget('Recent Records')}
                        className="block px-4 py-2 text-blue-500 hover:bg-gray-100 w-full text-left"
                      >
                        Recent Records
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleAddWidget('All New Cases By Priority')}
                        className="block px-4 py-2 text-blue-500 hover:bg-gray-100 w-full text-left"
                      >
                        Cases By Priority
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleAddWidget('Make It Your Home')}
                        className="block px-4 py-2 text-blue-500 hover:bg-gray-100 w-full text-left"
                      >
                        Make It Your Home
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
