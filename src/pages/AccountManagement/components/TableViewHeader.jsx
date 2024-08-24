
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/ui/Modal";
import "../../../assets/styles/tailwind.css";
import AccountsForm from "../../../components/forms/accounts/AccountsForm";
import FilterDropdown from "../../../components/ui/FilterDropdown";
import IconDropdown from "../../../components/ui/IconDropdown";
import DropdownMenu from "../../../components/ui/DropdownMenu";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accountOptions = [
    "All Accounts",
    "All Locked Accounts",
    "Converted Accounts",
    "Junk Accounts",
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



  return (
    <>
      <header className="fixed top-16 left-20 right-0 z-10">
        <div className="flex justify-between items-center px-6 py-3 border-b border-gray-300 bg-white">
          <div className="flex items-center gap-3 -ml-6">
            <div>
              
            </div>
            <div>
              <FilterDropdown
                options={accountOptions}
                placeholder="All Accounts"
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
                    Create Account
                  </button>

                  {/* Modal */}
                  <div >
                  <Modal
                    className="container"
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    title="Create Account"
                  >
                    <AccountsForm closeModal={closeModal} />
                  </Modal>
                  </div>
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
      </header>
    </>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
