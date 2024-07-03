import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../api/auth";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["handleLogout"],
    mutationFn: () => logout(),
    onSuccess: () => {
      setUser(false);
      navigate("/");
    },
  });

  return (
    <nav className="bg-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">Foodiez</span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              {user ? (
                <>
                  <NavLink
                    to="/profile"
                    className="text-gray-300 hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </NavLink>

                  <NavLink
                    to="/categories"
                    className="text-gray-300 hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Categories
                  </NavLink>

                  <button
                    className="text-gray-300 hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={mutate}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-gray-300 hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
