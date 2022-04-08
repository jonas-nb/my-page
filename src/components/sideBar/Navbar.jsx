import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex items-center justify-center w-10/12 lg:w-4/12">
      <ul className="flex justify-around w-full">
        <li>
          <Link
            className="text-white rounded bg-red-500 w-20 h-7 flex justify-center items-center "
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-white rounded bg-red-500 w-20 h-7 flex justify-center items-center "
            to="/work"
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
  );
}

export default Navbar;
