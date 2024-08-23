import { Button, Select } from "antd";
import { PiFunnel } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/ui/Modal";
import "../../../assets/styles/tailwind.css";
import ContactsForm from "../../../components/forms/contacts/ContactsForm";
import FilterDropdown from "../../../components/ui/FilterDropdown";
import IconDropdown from "../../../components/ui/IconDropdown";
import DropdownMenu from "../../../components/ui/DropdownMenu";

const Header = ({ toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false); // State for filter button

  const contactOptions = [
    "All Contacts",
    "All Locked Contacts",
    "Converted Contacts",
    "Junk Contacts",
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
      <header className="flex justify-between items-center px-6 py-3 border-b border-gray-300 bg-white" style={{marginLeft:"70px"}}>
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
            <FilterDropdown
              options={contactOptions}
              placeholder="All Contacts"
            />
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
                  Create Contact
                </button>

                {/* Modal */}
                <Modal
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  title="Create Contact"
                >
                  <ContactsForm closeModal={closeModal} />
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
      </header>
      <div className="flex items-center justify-between py-2 pl-8" style={{marginLeft:"70px"}}>
        <h1 className="text-sm">
          Total Records: <span className="text-neutral-700 font-bold">10</span>
        </h1>
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
    </>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
