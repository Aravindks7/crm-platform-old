import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import PropTypes from "prop-types";

const Sidebar = ({ isVisible, onFilterChange }) => {
  const [isSystemFiltersOpen, setSystemFiltersOpen] = useState(false);
  const [isFieldFiltersOpen, setFieldFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFieldFilters, setSelectedFieldFilters] = useState([]);

  const toggleSystemFilters = () => {
    setSystemFiltersOpen(!isSystemFiltersOpen);
  };

  const toggleFieldFilters = () => {
    setFieldFiltersOpen(!isFieldFiltersOpen);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFieldFilterChange = (filterKey) => {
    const updatedFilters = selectedFieldFilters.includes(filterKey)
      ? selectedFieldFilters.filter((key) => key !== filterKey)
      : [...selectedFieldFilters, filterKey];

    setSelectedFieldFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const systemFilters = [
    { label: "Touched Records", key: "account_name" },
    { label: "Untouched Records", key: "phone" },
    { label: "Record Action", key: "website" },
    { label: "Related Records Action", key: "account_number" },
    { label: "Locked", key: "account_owner" },
    { label: "Latest Email Status", key: "rating" },
    { label: "Activities", key: "account_site" },
    { label: "Notes", key: "account_type" },
    { label: "Cadences", key: "annual_revenue" },

  ];

  const fieldFilters = [
    { label: "Account Name", key: "account_name" },
    { label: "Amount", key: "phone" },
    { label: "Campaign Source", key: "website" },
    { label: "Closing Date", key: "account_number" },
    { label: "Contact Name", key: "account_owner" },
    { label: "Created By", key: "rating" },
    { label: "Created Time", key: "account_site" },
    { label: "Deal Name", key: "account_type" },
    { label: "Deal Owner", key: "annual_revenue" },
    { label: "Expected Revenue", key: "billing_city" },
    { label: "Last Activity Time", key: "billing_code" },
    { label: "Lead Conversion Time", key: "billing_country" },
    { label: "Lead Source", key: "billing_state" },
  ];

  const filteredFieldFilters = fieldFilters.filter((filter) =>
    filter.label.toLowerCase().includes(searchTerm)
  );
  const filteredSystemFilters = systemFilters.filter((filter) =>
    filter.label.toLowerCase().includes(searchTerm)
  );

  return (
    <aside
      className={`top-0 left-0 min-h-full w-80 border bg-white rounded-lg px-8 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-64">
        <div className="flex flex-col my-8 items-center gap-4">
          <h3 className="text-sm font-semibold">Filter Accounts by</h3>
          <div className="relative">
            <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              onChange={handleSearch}
              className="text-sm text-gray-600 border border-gray-400 px-9 py-1.5 rounded-md hover:border-blue-400 focus:outline-none focus:border-blue-400 transition-colors duration-150"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="my-4">
            <span
              className="cursor-pointer flex items-center"
              onClick={toggleSystemFilters}
            >
              {isSystemFiltersOpen ? (
                <IoIosArrowUp className="mr-2" />
              ) : (
                <IoIosArrowDown className="mr-2" />
              )}
              <h4 className="text-sm font-semibold mt-2">
                System Defined Filters
              </h4>
            </span>
          </div>
          {isSystemFiltersOpen && (
            <div className="flex flex-col ml-6 mt-3 space-y-2">
              {filteredSystemFilters.map((filter) => (
                <label key={filter.key} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{filter.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="mb-6">
          <div className="my-4">
            <span
              className="cursor-pointer flex items-center"
              onClick={toggleFieldFilters}
            >
              {isFieldFiltersOpen ? (
                <IoIosArrowUp className="mr-2" />
              ) : (
                <IoIosArrowDown className="mr-2" />
              )}
              <h4 className="text-sm font-semibold mt-2">Filter By Fields</h4>
            </span>
          </div>
          {isFieldFiltersOpen && (
            <div className="flex flex-col ml-6 mt-3 space-y-2">
              {filteredFieldFilters.map((filter) => (
                <label key={filter.key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedFieldFilters.includes(filter.key)}
                    onChange={() => handleFieldFilterChange(filter.key)}
                  />
                  <span>{filter.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func,
  visibleColumns: PropTypes.array,
};

export default Sidebar;
