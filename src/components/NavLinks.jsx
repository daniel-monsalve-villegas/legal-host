import { Link } from "react-scroll";
import "../index.css";

const NavLinks = (toggle) => {
  return (
    <>
      <ul className="text-center flex flex-col items-center h-screen md:h-auto md:block">
        <li className="nav-opt">
          <a href="/">
            <Link
              activeClass="nav-opt nav-active"
              className="px-6 py-1"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggle}
            >
              Home
            </Link>
          </a>
        </li>
        <li className="nav-opt nav-service">
          <a href="/">
            <Link
              activeClass="nav-opt nav-active nav-service"
              to="servicios"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggle}
            >
              Servicios
            </Link>
          </a>
        </li>
        <li className="nav-opt">
          <a href="/">
            <Link
              activeClass="nav-opt nav-active"
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggle}
            >
              Blog
            </Link>
          </a>
        </li>
        <li className="nav-opt nav-contact">
          <a href="/">
            <Link
              activeClass="nav-opt nav-active nav-contact"
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggle}
            >
              Contacto
            </Link>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
