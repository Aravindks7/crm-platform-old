import { useState, useMemo, useRef } from "react";
import { data } from "../../../data/accounts";
import Header from "./TableViewHeader";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const allColumns = [
  { headerName: "Account Name", field: "account_name", minWidth: 200 },
  { headerName: "Phone", field: "phone", minWidth: 150 },
  { headerName: "Website", field: "website", minWidth: 220 },
  { headerName: "Account Owner", field: "account_owner", minWidth: 180 },
  { headerName: "Rating", field: "rating", minWidth: 100 },
  { headerName: "Account Site", field: "account_site", minWidth: 150 },
  { headerName: "Account Type", field: "account_type", minWidth: 150 },
  { headerName: "Account Number", field: "account_number", minWidth: 180 },
  { headerName: "Annual Revenue", field: "annual_revenue", minWidth: 180 },
  {
    headerName: "Billing City",
    field: "billing_city",
    minWidth: 150,
    valueGetter: (params) => getNestedValue(params.data, "billing_city"),
  },
  {
    headerName: "Billing Code",
    field: "billing_code",
    minWidth: 150,
    valueGetter: (params) => getNestedValue(params.data, "billing_code"),
  },
  {
    headerName: "Billing Country",
    field: "billing_country",
    minWidth: 150,
    valueGetter: (params) => getNestedValue(params.data, "billing_country"),
  },
  {
    headerName: "Billing State",
    field: "billing_state",
    minWidth: 150,
    valueGetter: (params) => getNestedValue(params.data, "billing_state"),
  },
  {
    headerName: "Billing Street",
    field: "billing_street",
    minWidth: 200,
    valueGetter: (params) => getNestedValue(params.data, "billing_street"),
  },
];

const getNestedValue = (obj, key) => {
  if (!obj || !key) return null;

  if (key.startsWith("billing_")) {
    return obj.address_information ? obj.address_information[key] : null;
  }

  return obj[key];
};

const TableView = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(
    allColumns.map((col) => col.field)
  );
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "asc",
  });
  const gridRef = useRef(null);
  const navigate = useNavigate();

  const handleFilterChange = (selectedFilters) => {
    setVisibleColumns(
      selectedFilters.length === 0
        ? allColumns.map((col) => col.field)
        : selectedFilters
    );
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aValue = getNestedValue(a, sortConfig.field);
      const bValue = getNestedValue(b, sortConfig.field);

      if (sortConfig.field && aValue && bValue) {
        if (sortConfig.direction === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      }
      return 0;
    });
  }, [sortConfig]);

  const filteredColumns = useMemo(() => {
    return allColumns.filter((column) => visibleColumns.includes(column.field));
  }, [visibleColumns]);

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

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit(); // Auto size all columns to fit available width
    gridRef.current.api.doLayout(); // Force a layout to ensure everything fits
  };

  const autoSizeAll = () => {
    const allColumnIds = [];
    gridRef.current.columnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds, false);
  };

  return (
    <div className="flex flex-col h-screen sticky">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex items-center justify-between py-2 mt-16 ml-24 "></div>
      <div className="flex flex-1 ml-12">
        <main className={"flex-1 transition-all duration-300 pl-12 pr-4"}>
          <div
            className="ag-theme-alpine flex-1 overflow-hidden w-full h-full"
            ref={gridRef}
          >
            <AgGridReact
              rowData={sortedData}
              columnDefs={filteredColumns}
              onGridReady={onGridReady}
              rowSelection="multiple"
              pagination={true} // Enable pagination
              paginationPageSize={10} // Set the number of rows per page
              domLayout="autoHeight"
              onSelectionChanged={(event) =>
                setSelectedRowKeys(
                  event.api.getSelectedNodes().map((node) => node.data.id)
                )
              }
              onRowClicked={(event) =>
                event.column.colId === "account_name" &&
                navigate(`detail/${event.data.id}`)
              }
              onFirstDataRendered={autoSizeAll}
              suppressColumnVirtualisation={true} // Ensures all columns are rendered
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TableView;
