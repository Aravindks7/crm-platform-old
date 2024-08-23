import { useState } from "react";
// import { data } from "../../../data/accounts";
import Header from "./TableViewHeader";
import Sidebar from "./TableViewSidebar";
// import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { BsClipboardCheck } from "react-icons/bs";

const cards = [
  {
    title: "Qualification",
    count: 1,
    percentage: "10%",
    amount: "$250,000.00",
    deals: [
      {
        company: "Benton",
        contact: "Sabu John Bosco",
        value: 250000,
        date: "03/07/2024",
        icon: <BsClipboardCheck />,
      },
    ],
  },
  {
    title: "Needs Analysis",
    count: 2,
    percentage: "20%",
    amount: "$100,000.00",
    deals: [
      {
        company: "Truhlar And Truhlar Attys",
        contact: "Sabu John Bosco",
        value: 45000,
        date: "03/07/2024",
        icon: <BsClipboardCheck />,
      },
      {
        company: "Chanay",
        contact: "Josephine Darakjy",
        value: 55000,
        date: "04/07/2024",
      },
    ],
  },
  {
    title: "Value Proposition",
    count: 1,
    percentage: "40%",
    amount: "$70,000.00",
    deals: [
      {
        company: "Chemel",
        contact: "Sabu John Bosco",
        value: 70000,
        date: "03/07/2024",
      },
    ],
  },
  {
    title: "Indentify Decision Makers",
    count: 2,
    percentage: "60%",
    amount: "$105,000.00",
    deals: [
      {
        company: "King",
        contact: "Sabu John Bosco",
        value: 60000,
        date: "05/07/2024",
      },
      {
        company: "Feltz Printing Service",
        contact: "Sabu John Bosco",
        value: 45000,
        date: "06/07/2024",
        icon: <BsClipboardCheck />,
      },
    ],
  },
];

const TableView = () => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // const [visibleColumns, setVisibleColumns] = useState(allColumns.map((col) => col.key));

  // const navigate = useNavigate();

  // const handleFilterChange = (selectedFilters) => {
  //   setVisibleColumns(selectedFilters.length === 0 ? allColumns.map((col) => col.key) : selectedFilters);
  // };

  // const getNestedValue = (obj, key) => {
  //   if (!obj || !key) return null;

  //   if (key.startsWith("billing_")) {
  //     return obj.address_information ? obj.address_information[key] : null;
  //   }

  //   return obj[key];
  // };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // const handleSelectAllChange = (e) => {
  //   if (e.target.checked) {
  //     setSelectedRowKeys(data.map((record) => record.id));
  //   } else {
  //     setSelectedRowKeys([]);
  //   }
  // };

  // const isSelected = (recordId) => selectedRowKeys.includes(recordId);

  return (
    <main className="ml-20 mt-28">
      <div className="flex flex-col h-screen">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar isVisible={isSidebarVisible} />
          <main
            className={`flex-1 overflow-x-auto overflow-y-auto transition-all duration-300 ${
              isSidebarVisible ? "ml-0" : "-ml-80"
            }`}
          >
            <div className="overflow-x-auto overflow-y-hidden bg-gray-100 min-h-screen">
              <div className="flex space-x-4">
                {cards.map((card, index) => (
                  <div key={index} className="flex-shrink-0 w-80">
                    <Card {...card} />
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};

export default TableView;
