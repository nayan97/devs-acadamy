import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  FileText,
  ShoppingBag,
  Boxes,
  ShoppingCart,
  Briefcase,
  UserCog,
  PackagePlus,
  ShieldCheck,
  PackageSearch,
} from "lucide-react";

const Sidebar = ({ isOpen }) => {
  const linkClasses = "flex items-center gap-3 p-2 rounded hover:bg-base-300";

  return (
    <aside
      className={`bg-base-200 h-full p-4 transition-all duration-300 ${
        isOpen ? "w-40 lg:w-64" : "w-16"
      } overflow-hidden`}
    >
      <div className="space-y-2">
        <div className="p-1 mt-[-15px] ml-[-15px]">
          <NavLink to="/" className="flex justify-start p-2 ml-[-8]">
            <span className="flex items-start gap-2">
              <span className="pt-4 pl-2 btn text-center">Home</span>
            </span>
          </NavLink>
        </div>

        <NavLink to="/dashboard" className={linkClasses}>
          <LayoutDashboard className="w-5 h-5" />
          {isOpen && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/dashboard/addassignment" className={linkClasses}>
          <FileText className="w-5 h-5" />
          {isOpen && <span>Add Assignment</span>}
        </NavLink>

        <NavLink to="/dashboard/all-assignment" className={linkClasses}>
          <Boxes className="w-5 h-5" />
          {isOpen && <span>All Assignment</span>}
        </NavLink>
        <NavLink to="/dashboard/pending-assignment" className={linkClasses}>
          <PackagePlus className="w-5 h-5" />
          {isOpen && <span>Pending-Assignment</span>}
        </NavLink>

        <NavLink to="/dashboard/myassignment" className={linkClasses}>
          <UserCog className="w-5 h-5" />
          {isOpen && <span>My Assignment</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
