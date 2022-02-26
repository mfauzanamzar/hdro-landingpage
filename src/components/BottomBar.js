import React from "react";
import "./BottomBar.css";
import { IoIosArrowDown } from "react-icons/io";

const BottomBar = () => {
  return (
    <div className="bottombar-container">
      <div className="bottombar">
        <div className="bottombar-logo">
          <img width={140} src="/LogoHDRO.png" alt="logo" />
          <a href="#">
            <IoIosArrowDown />
          </a>
        </div>
        <div className="bottombar-menu">
          <a href="#">Business</a>
          <a href="#">Whitepaper</a>
          <a href="#">Donate</a>
        </div>
        <p data-aos="fade-up" className="bottombar-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          varius tortor nibh, sit amet tempor nibh finibus et Aenean eu enim
          justo.
        </p>
        <div data-aos="fade-up" className="bottombar-button">
          <button className="contact-button button">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
