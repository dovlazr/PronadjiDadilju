import React from "react";
import logo from "../images/logic.png";

const Nav = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      Nav
      <div className="md:flex bg-white py-6">
        <div className="font-bold text-2xl cursor-pointer items-center theme-f1">
          <span>
            <img
              src={logo}
              alt="logo-image"
              style={{ width: 36.22, height: 32 }}
            />
            Pronađi dadilju
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
