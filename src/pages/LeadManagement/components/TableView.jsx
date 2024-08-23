import { useState, useMemo } from "react";
import { Select } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { data } from "../../../data/accounts";
import Header from "./TableViewHeader";
import Sidebar from "./TableViewSidebar";
import { useNavigate } from "react-router-dom";

const allColumns = [
  { title: "Lead Name", key: "leadName" },
  { title: "Company", key: "company" },
  { title: "Email", key: "email" },
  { title: "Phone", key: "phone" },
  { title: "Lead Source", key: "leadSource" },
  { title: "Lead Owner", key: "leadOwner" },
  { title: "Title", key: "title" },
  { title: "Industry", key: "industry" },
  { title: "Annual Revenue", key: "annualRevenue" },
  { title: "City", key: "city" },
  { title: "Zip Code", key: "code" },
  { title: "Country", key: "country" },
  { title: "State", key: "state" },
  { title: "Street", key: "street" },
];

const TableView = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(allColumns.map((col) => col.key));
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascend" });
  const navigate = useNavigate();

  const handleFilterChange = (selectedFilters) => {
    setVisibleColumns(selectedFilters.length === 0 ? allColumns.map((col) => col.key) : selectedFilters);
  };

  const getNestedValue = (obj, key) => {
    if (!obj || !key) return null;

    if (key.startsWith("billing_")) {
      return obj.address_information ? obj.address_information[key] : null;
    }

    return obj[key];
  };

  const handleSort = (key) => {
    let direction = "ascend";
    if (sortConfig.key === key && sortConfig.direction === "ascend") {
      direction = "descend";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aValue = getNestedValue(a, sortConfig.key);
      const bValue = getNestedValue(b, sortConfig.key);

      if (sortConfig.key && aValue && bValue) {
        if (sortConfig.direction === "ascend") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      }
      return 0;
    });
  }, [sortConfig]);

  const filteredColumns = useMemo(() => {
    return allColumns.filter((column) => visibleColumns.includes(column.key));
  }, [visibleColumns]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedRowKeys(data.map((record) => record.id));
    } else {
      setSelectedRowKeys([]);
    }
  };

  const isSelected = (recordId) => selectedRowKeys.includes(recordId);

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="max-w-screen-xl flex items-center justify-between py-2 mt-16 ml-24">
        <h1 className="text-sm">
          Total Records: <span className="text-neutral-700 font-bold">10</span>
        </h1>
        <div>
        <div className="flex items-center gap-4 pr-8">
          <div>
            <Select
              placeholder="10 Records Per Page"
              className="custom-select-placeholder"
            />
          </div>
          <div className="bg-black w-1 h-1 rounded-full" />
          <h3 className="font-bold text-sm">1 - 10</h3>
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
        </div>
      </div>
      <div className="flex flex-1 ml-20">
        <Sidebar
          isVisible={isSidebarVisible}
          onFilterChange={handleFilterChange}
          visibleColumns={visibleColumns}
        />
        <main
          className={`flex-1 overflow-x-auto overflow-y-auto transition-all duration-300 ${isSidebarVisible ? "-ml-5" : "-ml-80"
            }`}
        >
          <div className="flex flex-col h-full w-full">
          <div className="flex-1 overflow-scroll">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm ml-12">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={selectedRowKeys.length === data.length}
                      onChange={handleSelectAllChange}
                    />
                  </th>
                  {filteredColumns.map((column) => (
                    <th
                      key={column.key}
                      onClick={() => handleSort(column.key)}
                      className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((record) => (
                  <tr
                    key={record.id}
                    className={`border-t hover:bg-gray-50 cursor-pointer ${isSelected(record.id) ? "bg-gray-100" : ""
                      }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={isSelected(record.id)}
                        onChange={() =>
                          setSelectedRowKeys((prevKeys) =>
                            isSelected(record.id)
                              ? prevKeys.filter((key) => key !== record.id)
                              : [...prevKeys, record.id]
                          )
                        }
                      />
                    </td>
                    {filteredColumns.map((column) => (
                      <td
                        key={column.key}
                        className={`px-6 py-4 whitespace-nowrap ${column.key === "leadName"
                          ? "font-medium text-gray-900"
                          : "text-gray-700"
                          }`}
                        onClick={
                          column.key === "leadName"
                            ? () => navigate(`detail/${record.id}`)
                            : undefined
                        }
                      >
                        {getNestedValue(record, column.key)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TableView;
