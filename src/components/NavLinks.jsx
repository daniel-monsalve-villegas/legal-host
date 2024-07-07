import { useLocation, Link } from "react-router-dom";
import "../index.css";

const NavLinks = (toggle) => {
  const location = useLocation();
  const { pathname } = location;
  const splitlocation = pathname.split("/");

  return (
    <>
      <ul className="text-center flex flex-col items-center h-screen md:h-auto md:block">
        <li
          className={splitlocation[1] === "" ? "nav-opt nav-active" : "nav-opt"}
        >
          <Link to="/" onClick={toggle}>
            Home
          </Link>
        </li>
        <li
          className={
            splitlocation[1] === "servicios"
              ? "nav-opt nav-active nav-service"
              : "nav-opt nav-service"
          }
        >
          <Link to="/servicios" onClick={toggle}>
            Servicios
          </Link>
        </li>
        <li
          className={
            splitlocation[1] === "blog" ? "nav-opt nav-active" : "nav-opt"
          }
        >
          <Link to="/blog" onClick={toggle}>
            Blog
          </Link>
        </li>
        <li
          className={
            splitlocation[1] === "contacto"
              ? "nav-opt nav-active nav-contact"
              : "nav-opt nav-contact"
          }
        >
          <Link to="/contacto" onClick={toggle}>
            Contacto
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
