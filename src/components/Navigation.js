import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiPlusCircle } from "react-icons/bi";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <BiHomeAlt />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <BiPlusCircle />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
