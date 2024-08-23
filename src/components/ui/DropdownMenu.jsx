import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const DropdownMenu = ({
  options,
  onOptionSelect,
  placeholder,
  placeholderImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onOptionSelect(option); // Notify parent of the selected option
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-sm text-gray-600 border border-gray-300 px-4 py-1.5 rounded-md hover:border-blue-400 transition-colors duration-150 flex items-center justify-center"
      >
        {placeholderImage && (
          <img
            src={placeholderImage}
            alt="Placeholder"
            width={20}
            height={20}
            className="mr-2"
          />
        )}
        {placeholder}
        <div
          className={`ml-3 transition-transform duration-100 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </div>
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50 w-48">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionSelect: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderImage: PropTypes.string,
};

export default DropdownMenu;
