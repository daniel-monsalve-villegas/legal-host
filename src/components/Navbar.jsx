import logo from "../assets/logoVerde.avif";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavLinks from "./NavLinks";
import useScrolling from "../hooks/useScrolling";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolling();

  const toggleNavbar = () => setIsOpen(!isOpen);

  const scrolled = {
    true: "scrolled",
    false: "static-nav",
  };

  return (
    <>
      <header
        className={`${scrolled[isScrolled]} fixed top-0 z-20 mx-auto flex flex-wrap w-full items-center justify-between pt-4 px-9`}
      >
        <Link
          activeClass=""
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="w-20 h-20"
        >
          <img src={logo} alt="legal host logo" />
        </Link>

        <nav className="flex justify-end">
          <div className="hidden md:flex justify-between">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="flex basis-full flex-col items-center">
            <NavLinks toggle={toggleNavbar} />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
