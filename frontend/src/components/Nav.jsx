import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DsaContext } from "../context/DsaContext";

import Logout from "./Logout";

function Nav() {
  const { title } = useContext(DsaContext); // Destructure the context value

  // Check if token exists in local storage
  const tokenExists = localStorage.getItem("token");

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-bold">
              {title}
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/addquestion"
                  className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  Add Question
                </Link>
              </li>
              <li>
                <Link
                  to="/viewquestion"
                  className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  View Question
                </Link>
              </li>
              {/* Render Logout component only if token exists */}
              {tokenExists && (
                <li>
                  <Logout />
                </li>
              )}
              {/* Render SignIn and SignUp links only if token doesn't exist */}
              {!tokenExists && (
                <>
                  <li>
                    <Link
                      to="/signin"
                      className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                    >
                      SignIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
