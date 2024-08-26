import { Button } from "antd";
import { PiFunnel } from "react-icons/pi";

import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/ui/Modal";
import "../../../assets/styles/tailwind.css";
import DealsForm from "../../../components/forms/deals/DealsForm";
import FilterDropdown from "../../../components/ui/FilterDropdown";
import IconDropdown from "../../../components/ui/IconDropdown";
import DropdownMenu from "../../../components/ui/DropdownMenu";
import CustomSelect from "../../../components/ui/CustomSelect";

const Header = ({ toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false); // State for filter button

  const dealOptions = [
    "All Deals",
    "All Locked Deals",
    "Converted Deals",
    "Junk Deals",
  ];

  const actionOptions = [
    "Mass Delete",
    "Mass Update",
    "Mass Convert",
    "Manage Tags",
    "Drafts",
    "Mass Email",
    "Autoresponders",
    "Approve Leads",
    "Deduplicate Leads",
    "Add to Campaigns",
    "Create Client Script✨",
    "Export Leads",
  ];

  const linesOptions = ["Option 1", "Option 2", "Option 3"];
  const allOptions = ["Option 1", "Option 2", "Option 3"];
  const arrowOptions = ["Option 1", "Option 2", "Option 3"];

  const sortByOptions = ["None", "Option 1", "Option 2", "Option 3"];
  const sortByOrderOptions = ["Asc", "Option 1", "Option 2", "Option 3"];
  const stageViewOptions = ["Stage view", "Option 1", "Option 2", "Option 3"];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterToggle = () => {
    setIsFilterActive(!isFilterActive); // Toggle filter button state
    toggleSidebar(); // Call the toggleSidebar function
  };

  return (
    <>
      <header className="">
        <div className="fixed top-16 left-20 right-0 z-10 flex justify-between items-center px-6 py-3 border-b border-gray-300 bg-white">
          <div className="flex items-center gap-3">
            <div>
              <Button
                className={`py-3 px-2 ${
                  isFilterActive
                    ? "bg-gray-100 text-blue-400 shadow-inner-lg"
                    : ""
                }`}
                onClick={handleFilterToggle} // Toggle sidebar visibility
              >
                <PiFunnel size={20} />
              </Button>
            </div>
            <div>
              <FilterDropdown options={dealOptions} placeholder="All Deals" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Calculate Select */}
            <div>
              <DropdownMenu
                options={linesOptions}
                placeholderImage="/icons/options.svg"
              />
            </div>
            {/* Create Lead Button */}
            <div>
              <div className="flex items-center space-x-[3px]">
                {/* Create Lead Button */}
                <div>
                  <button
                    type="button"
                    className="text-sm text-white px-4 py-1.5 rounded-l-md bg-blue-500 hover:bg-blue-500 transition-colors duration-150 w-full"
                    onClick={openModal}
                  >
                    Create Deal
                  </button>

                  {/* Modal */}
                  <Modal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    title="Create Deal"
                  >
                    <DealsForm closeModal={closeModal} />
                  </Modal>
                </div>

                <IconDropdown options={arrowOptions} />
              </div>
            </div>
            <div>
              <DropdownMenu options={actionOptions} placeholder="Actions" />
            </div>
            <div>
              <DropdownMenu options={allOptions} placeholder="All" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 pl-8 -mt-12">
          <CustomSelect options={stageViewOptions} />
          <div className="flex items-center gap-4 pr-8">
            <div>Sort by</div>
            <CustomSelect options={sortByOptions} />
            <CustomSelect options={sortByOrderOptions} />
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
