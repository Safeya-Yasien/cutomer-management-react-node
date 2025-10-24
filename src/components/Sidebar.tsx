import { House, UserRoundPlus } from "lucide-react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className=" text-white">
      <h1 className="text-center text-2xl pb-6 border-b border-b-gray-500 mb-6">
        System
      </h1>

      <ul className="flex flex-col gap-4 px-4">
        <li>
          <Link
            to="/"
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <House className="w-4 h-4" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/add-customers"
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <UserRoundPlus className="w-4 h-4" />
            Add Customers
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
