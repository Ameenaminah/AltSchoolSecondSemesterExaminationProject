import { NavLink, Outlet } from "react-router-dom";
import "../pages/styles/menu.css";
import { menuLinks } from "../data";
export function MenuLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#0ef",
  };

  return (
    <section>
      <nav className="host-nav">
        {menuLinks.map(({ id, link, to }) => (
          <NavLink
            to={to}
            key={id}
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            {link}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </section>
  );
}
