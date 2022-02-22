import React from "react";
import "./Contact.css";
import logoInstagram from "../images/IG.png";
import logoTwitter from "../images/Twitter.png";
import logoYoutube from "../images/Youtube.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-left">
          <p className="contact-text">Lorem ipsum dolor sit amet consectetur</p>
          <div className="contact-wrap">
            <p className="contact-phone">+62 812 1234 5678</p>
            <p className="contact-email">mail@hdro.com</p>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-social">
            <a href="#">
              <img width={30} src={logoTwitter} alt="twitter" />
            </a>
          </div>

          <div className="contact-social">
            <a href="#">
              <img width={30} src={logoYoutube} alt="Youtube" />
            </a>
          </div>
          <div className="contact-social">
            <a href="#">
              <img width={30} src={logoInstagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-line"></div>
    </div>
  );
};

export default Contact;
