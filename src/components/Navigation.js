import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiPlusCircle, BiLogOut } from "react-icons/bi";
import { LocaleContext } from "../context/LocaleContext";

function Navigation({ logout }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button onClick={toggleLocale}>
            {locale === "id" ? "en" : "id"}
          </button>
        </li>
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
        <li>
          <button onClick={logout}>
            <BiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
