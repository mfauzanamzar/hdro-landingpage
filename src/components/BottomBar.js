import React from "react";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottombar-container">
      <div className="bottombar">
        <img width={140} src="/LogoHDRO.png" alt="logo" />
        <div className="bottombar-menu">
          <a href="#">Business</a>
          <a href="#">Whitepaper</a>
          <a href="#">Donate</a>
        </div>
        <div className="bottombar-button">
          <button className="contact-button button">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
