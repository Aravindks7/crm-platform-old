import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const CustomSelect = ({ options, selected, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected || options[0]);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
        className="text-sm bg-white text-gray-600 border border-gray-300 px-4 py-1.5 rounded-md hover:border-blue-400 transition-colors duration-150 flex items-center"
      >
        {selectedOption}
        <div
          className={`ml-3 transition-transform duration-100 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </div>
      </button>

      {isOpen && (
        <ul className="grid items-center absolute p-1 left-0 w-28 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50">
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

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onOptionSelect: PropTypes.func,
};

export default CustomSelect;
