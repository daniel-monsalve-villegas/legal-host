import { NavLink } from "react-router-dom";
import "../index.css";

const NavLinks = () => {
  return (
    <>
      <ul className="text-center flex flex-col items-center h-screen md:h-auto md:block">
        <li className="inline-block">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "nav-active nav-opt"
                : "nav-opt text-legal-green";
            }}
            to="/"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </NavLink>
        </li>
        <li className="inline-block mx-8">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "nav-opt nav-active nav-service"
                : "nav-opt nav-service text-legal-green";
            }}
            to="/servicios"
            spy={true}
            smooth={true}
            duration={500}
          >
            Servicios
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "nav-opt nav-active"
                : "nav-opt text-legal-green";
            }}
            to="/blog"
            spy={true}
            smooth={true}
            duration={500}
          >
            Blog
          </NavLink>
        </li>
        <li className="inline-block mx-8">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "nav-opt nav-active nav-contact"
                : "nav-opt nav-contact text-legal-green";
            }}
            to="/contacto"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
