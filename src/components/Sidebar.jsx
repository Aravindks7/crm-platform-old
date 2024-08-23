import {
  IoHomeOutline,
  IoPersonOutline,
  IoBriefcaseOutline,
  IoDocumentTextOutline,
  IoAnalyticsOutline,
  IoFolderOpenOutline,
} from "react-icons/io5";
import { FaRegCalendarAlt, FaTasks } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Tooltip from "./ui/Tooltip";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sections = [
    {
      items: [
        { name: "Dashboard", icon: <IoHomeOutline size={20} />, path: "/dashboard" },
        { name: "Leads", icon: <IoPersonOutline size={20} />, path: "/leads" },
        { name: "Contacts", icon: <IoPersonOutline size={20} />, path: "/contacts" },
        { name: "Accounts", icon: <IoBriefcaseOutline size={20} />, path: "/accounts" },
        { name: "Deals", icon: <IoBriefcaseOutline size={20} />, path: "/deals" },
        { name: "Tasks", icon: <FaTasks size={20} />, path: "/tasks" },
        { name: "Meetings", icon: <FaRegCalendarAlt size={20} />, path: "/meetings" },
        { name: "Calls", icon: <FiPhone size={20} />, path: "/calls" },
        { name: "Reports", icon: <IoDocumentTextOutline size={20} />, path: "/reports" },
        { name: "Analytics", icon: <IoAnalyticsOutline size={20} />, path: "/analytics" },
        { name: "Product", icon: <IoFolderOpenOutline size={20} />, path: "/product" },
      ],
    },
  ];

  return (
    <nav className="min-h-full">
      <div className="fixed h-screen bg-white shadow-sm text-neutral-700 flex flex-col border-r border-gray-300 z-10">
        <div className="">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col items-center m-4 gap-1"
            >
              {section.items.map((item, itemIndex) => (
                <Tooltip key={itemIndex} text={item.name}>
                  <Link
                    key={itemIndex}
                    to={item.path}
                    className="flex items-center text-neutral-700 hover:text-blue-600 px-3 py-2.5 rounded-lg transition-colors duration-300 border border-transparent hover:border-gray-300 active:shadow-inner"
                  >
                    {item.icon}
                  </Link>
                </Tooltip>
              ))}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
