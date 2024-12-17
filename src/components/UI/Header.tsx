import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { FaBars, FaTimes } from "react-icons/fa";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" bg-white py-4 px-6  ">
      <div className=" flex items-center justify-between ">
        <div className="text-gray-900 text-2xl font-bold">
          <NavLink to="/" className="text-gray-900">
            ACD
          </NavLink>
        </div>

        <nav>
          <ul className="hidden md:flex space-x-8 text-gray-900 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="country"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
              >
                Country
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Animation */}
        <div
          className={`${
            isMenuOpen
              ? "block opacity-100 translate-y-0 transition-all duration-[700ms] ease-out"
              : "hidden opacity-0 translate-y-4 transition-all duration-[700ms] ease-out"
          } md:hidden absolute top-14 left-0 w-full bg-white text-gray-900 py-4`}
        >
          <ul className="space-y-4 text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="country"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Country
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "hover:text-gray-700"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
