import Dashboard from "./pages/Dashboard/Dashboard";
import Accounts from "./pages/AccountManagement/Accounts";
import Leads from "./pages/LeadManagement/Leads";
import Contacts from "./pages/ContactManagement/Contacts";
import Opportunities from "./pages/OpportunityManagement/Opportunities";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1 mt-16">
          <Sidebar />
          <div className="flex-1 ">
            <Routes>
              <Route path="/*" element={<Dashboard />} />
              <Route path="/accounts/*" element={<Accounts />} />
              <Route path="/leads/*" element={<Leads />} />
              <Route path="/contacts/*" element={<Contacts />} />
              <Route path="/deals/*" element={<Opportunities />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
