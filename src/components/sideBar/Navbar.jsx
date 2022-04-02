import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex w-64 h-10 justify-around items-center ">
          <li>
            <Link
              className="text-white rounded bg-red-500 w-20 h-7 flex justify-center items-center "
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-white rounded bg-red-500 w-20 h-7 flex justify-center items-center "
              to="/about"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="text-white rounded bg-red-500 w-20 h-7 flex justify-center items-center "
              to="/about"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
