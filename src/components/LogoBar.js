import React from "react";
import "./LogoBar.css";

import { IoIosArrowDown } from "react-icons/io";

const LogoBar = () => {
  return (
    <div className="logobar-container">
      <div className="logobar">
        <img width={140} src="/LogoHDRO.png" alt="logo" />
        <a href="#">
          <IoIosArrowDown />
        </a>
      </div>
    </div>
  );
};

export default LogoBar;
