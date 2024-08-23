import {
  IoCalendarNumberOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="w-full fixed flex justify-between items-center px-4 py-2 bg-white border-b border-gray-300 shadow-sm z-20">
      <div className="flex items-center justify-between gap-x-32">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />

          <div className="flex items-center ml-2">
            <h1 className="text-logo text-lg font-bold">wotSABot</h1>
          </div>
        </div>
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <IoSearchOutline size={20} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-12 py-1.5 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[.5px] focus:ring-gray-300"
          />
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <div className="text-neutral-700 hover:border-gray-300 rounded-md border border-gray-200 p-1 cursor-pointer active:bg-gray-100 active:shadow-inner">
          <GoPlus size={24} />
        </div>
        <div className="text-neutral-700 hover:border-gray-300 rounded-md border border-gray-200 p-1 cursor-pointer active:bg-gray-100 active:shadow-inner">
          <IoMdNotificationsOutline size={24} />
        </div>
        <div className="text-neutral-700 hover:border-gray-300 rounded-md border border-gray-200 p-1 cursor-pointer active:bg-gray-100 active:shadow-inner">
          <IoCalendarNumberOutline size={24} />
        </div>
        <div className="text-neutral-700 hover:border-gray-300 rounded-md border border-gray-200 p-1 cursor-pointer active:bg-gray-100 active:shadow-inner">
          <IoSettingsOutline size={24} />
        </div>
        <div>
          <img
            src="/images/profile.png"
            width={48}
            height={48}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
