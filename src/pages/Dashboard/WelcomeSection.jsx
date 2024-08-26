import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import icon4 from '/images/icon4.png';
import { MdClose } from "react-icons/md"; // Using React Icons for close button

const WelcomeSection = () => {
  // States to manage visibility of the cards
  const [isFirstLeadCardVisible, setIsFirstLeadCardVisible] = useState(true);
  const [isFirstDealCardVisible, setIsFirstDealCardVisible] = useState(true);
  const [isImportContactsCardVisible, setIsImportContactsCardVisible] =
    useState(true);

  // Functions to handle closing each card
  const handleCloseFirstLead = () => {
    setIsFirstLeadCardVisible(false); // Close the first lead card
  };

  const handleCloseFirstDeal = () => {
    setIsFirstDealCardVisible(false); // Close the first deal card
  };

  const handleCloseImportContacts = () => {
    setIsImportContactsCardVisible(false); // Close the import contacts card
  };

  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-lg mb-8">
      <div className="mb-4 flex justify-left">
        <IoIosArrowDown className="text-2xl cursor-pointer" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Welcome Text Section */}
        <div className="flex flex-col col-span-1">
          <h1 className="text-2xl font-semibold mb-2">
            Welcome, Sabu John Bosco
          </h1>
          <p className="text-gray-600 mb-6">
            Check out these suggestions to kick off your day.
          </p>
          <p className="text-blue-500 cursor-pointer">
            View All Cards
          </p>
        </div>

        {/* Cards Section */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {isFirstLeadCardVisible && (
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <img src={icon4} alt="Avatar" className="w-8 h-8 rounded-full" />
              <MdClose
                onClick={handleCloseFirstLead}
                className="absolute top-2 right-2 text-blue-600 hover:text-red-500 cursor-pointer"
                size={24}
              />
              <h3 className="font-normal text-xl text-blue-600">Create your first lead</h3>
              <p>
                Let us show you how easy it is to convert your leads into
                contacts, accounts, and opportunities.
              </p>
            </div>
          )}

          {isFirstDealCardVisible && (
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <img src={icon4} alt="Avatar" className="w-8 h-8 rounded-full" />
              <MdClose
                onClick={handleCloseFirstDeal}
                className="absolute top-2 right-2 text-blue-600 hover:text-red-500 cursor-pointer"
                size={24}
              />
              <h3 className="font-normal text-xl text-blue-600">Create your first deal</h3>
              <p>
                Add an opportunity and see how easy it is to track stages as
                your deals move forward.
              </p>
            </div>
          )}

          {isImportContactsCardVisible && (
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <img src={icon4} alt="Avatar" className="w-8 h-8 rounded-full" />
              <MdClose
                onClick={handleCloseImportContacts}
                className="absolute top-2 right-2 text-blue-600 hover:text-red-500 cursor-pointer"
                size={24}
              />
              <h3 className="font-normal text-xl text-blue-600">Import your contacts</h3>
              <p>
                Start managing your relationships and deals in Salesforce by
                syncing or uploading your contacts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
