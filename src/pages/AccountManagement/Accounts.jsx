import OverView from "./components/OverView";
import TableView from "./components/TableView";
import { Routes, Route } from "react-router-dom";

const Accounts = () => {
  return (
    <Routes>
      {/* Default route for Accounts */}
      <Route path="/" element={<TableView />} />

      {/* Route for viewing account details */}
      <Route path="detail/:id" element={<OverView />} />
    </Routes>
  );
};

export default Accounts;
