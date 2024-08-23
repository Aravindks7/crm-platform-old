import { useState } from "react";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
<div className="relative">
      <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="text-sm text-gray-600 border border-gray-400 px-9 py-1.5 rounded-md hover:border-blue-400 focus:outline-none focus:border-blue-400 transition-colors duration-150"
        placeholder="Search..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
