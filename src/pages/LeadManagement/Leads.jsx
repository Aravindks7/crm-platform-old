import OverView from "./components/OverView";
import TableView from "./components/TableView";
import { Routes, Route } from "react-router-dom";

const Leads = () => {
  return (
    <Routes>
      <Route path="/" element={<TableView />} />
      <Route path="detail/:id" element={<OverView />} />
    </Routes>
  );
};

export default Leads;
