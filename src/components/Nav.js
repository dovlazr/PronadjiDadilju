import React from "react";
import logo from "../images/logic.png";

const Nav = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-6 md:px-10 px-6 ml-20">
        <div className="font-bold text-2xl cursor-pointer items-center theme-f1 flex">
          <img
            src={logo}
            alt="logo-image"
            style={{
              width: 36.22,
              height: 32,
              marginRight_: "10px",
            }}
          />
          <span className="flex-grow ml-4">Pronađi Dadilju</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
