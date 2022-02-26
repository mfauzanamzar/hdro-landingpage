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
          <p data-aos="fade-up" className="contact-text">Lorem ipsum dolor sit amet consectetur</p>
          <div className="contact-wrap">
            <p data-aos="fade-right" className="contact-phone">+62 812 1234 5678</p>
            <p data-aos="fade-left"className="contact-email">mail@hdro.com</p>
          </div>
        </div>
        <div data-aos="fade-up" className="contact-right">
          <div  className="contact-social">
            <a href="#">
              <img className="twitter" width={28} src={logoTwitter} alt="twitter" />
            </a>
          </div>

          <div className="contact-social">
            <a href="#">
              <img className="youtube" width={30} src={logoYoutube} alt="Youtube" />
            </a>
          </div>
          <div className="contact-social">
            <a href="#">
              <img className="instagram" width={24} src={logoInstagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-container">
        <div className="border-line"></div>
      </div>
    </div>
  );
};

export default Contact;
