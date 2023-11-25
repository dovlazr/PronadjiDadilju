import React from "react";
import logo from "../images/logo-dark.svg";

const Nav = () => {
  const links = [
    { name: "Ideja", link: "/" },
    { name: "Plan", link: "/" },
    { name: "Projekat", link: "/" },
    { name: "O nama", link: "/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-6 md:px-10 px-6 ml-20">
        <div className="font-bold text-2xl cursor-pointer items-center font-theme-f1 flex">
          <img
            src={logo}
            alt="logo-image"
            width="36.22"
            height="32"
            className="mr-4"
          />
          <span className="flex-grow ml-4 ">Pronađi Dadilju</span>
        </div>
        <ul className="hidden md:flex md:items-center mr-20 gap-12">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="md:ml-8 font-theme-f1 text-lg text-nav-bar-text "
              >
                <a
                  href={link.link}
                  className="hover:font-semibold duration-800"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
