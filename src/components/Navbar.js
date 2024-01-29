import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

// react icons
import { FaXmark, FaBars } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toogle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //setIsMenuOpen(true)
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  // navItems array
  const navItems = [
    { link: "Ideja", path: "ideja" },
    { link: "Plan", path: "plan" },
    { link: "Projekat", path: "projekat" },
    { link: "O nama", path: "o_nama" },
  ];

  return (
    <header className="w-full md:bg-transparent fixed top-0 left-0 right-0 gap-12">
      <nav
        className={`py-6 lg:px-16 px-6 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-[18px] leading-[18px]">
          <a href="" className="text-2xl font-bold flex items-center space-x-4">
            <img
              src={logo}
              alt="logo slika"
              className="w-9 inline-block items-center"
            />
            <span>Pronađi Dadilju</span>
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-[18px] leading-[18px] text-navBarTextColor hover:font-semibold first:font-semibold cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-navBarTextColor "
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6 text-navBarTextColor" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7  bg-white text-navBarTextColor ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-[18px] leading-[18px] text-navBarTextColor hover:font-semibold first:font-semibold cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
