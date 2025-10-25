import { House, UserRoundPlus } from "lucide-react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className=" text-white">
      <h1 className="text-center text-2xl pb-6 border-b border-b-gray-500 mb-6">
        System
      </h1>

      <ul className="flex flex-col gap-4 px-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-[#2A2F36]"
              }`
            }
          >
            <House className="w-4 h-4" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-customer"
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-[#2A2F36]"
              }`
            }
          >
            <UserRoundPlus className="w-4 h-4" />
            Add Customers
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
