import { Link, NavLink } from "react-router-dom";
import "../component/styles/header.css";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { links } from "../data";

export const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header className={"header"}>
      <Link to="/" className="logo">
        Food<span>App</span>
      </Link>
      <nav className={click ? "navbar active" : "navbar"}>
        {links.map(({ id, link, to }) => (
          <NavLink
            to={to}
            key={id}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? "activee" : "unactive")}
          >
            {link}
          </NavLink>
        ))}
      </nav>
      <Link to="login">
        <FaUserCircle size={30} style={{ color: "#fff" }} />
      </Link>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};
