  import React, { useContext } from "react";
  import { Link } from "react-router-dom";
  import { DsaContext} from "../context/DsaContext";

  function Nav() {
    const { title } = useContext(DsaContext); // Destructure the context value

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
                    className="text-white hover:text-gray-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addquestion"
                    className="text-white hover:text-gray-300"
                  >
                    Add Question
                  </Link>
                </li>
                <li>
                  <Link
                    to="/viewquestion"
                    className="text-white hover:text-gray-300"
                  >
                    View Question
                  </Link>
                </li>
                {/* Add more navigation links as needed */}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

  export default Nav;
