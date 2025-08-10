import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import ThemeToggle from "../../components/ThemeToggle";
import logo from "../../assets/logo.png";

const Header = () => {
  const { user, logoutUser } = use(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#0EA106] font-bold m-2" : "m-2"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive ? "text-[#0EA106] font-bold m-2" : "m-2"
          }
        >
          Assignment
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/pendingassignment"
              className={({ isActive }) =>
                isActive ? "text-[#0EA106] font-bold m-2" : "m-2"
              }
            >
              Pending Assignment
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="Aboutus"
          className={({ isActive }) =>
            isActive ? "text-[#0EA106] font-bold my-2" : "my-2"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="navbar shadow-sm w-xl md:w-3xl lg:w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img className="w-22" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <ThemeToggle></ThemeToggle>{" "}
          {user && (
            <>
              <a
                href="/login"
                className="btn btn-error text-white"
                onClick={handleLogout}
              >
                Logout
              </a>
            </>
          )}
          {user ? (
            <>
              {" "}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">{user.displayName}</a>
                  </li>
                  <li>
                    <a className="justify-between">{user.email}</a>
                  </li>
                  <li>
                    <NavLink to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <NavLink className="btn" to="/login">
                Login
              </NavLink>
              <NavLink className="btn bg-green-600 text-white" to="/register">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
