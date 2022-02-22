import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          varius tortor nibh, sit amet tempor nibh finibus et Aenean eu enim
          justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi
          sit amet augue accumsan tincidunt Maecenas tincidunt, velit ac
          porttitor pulvinar.
        </p>
        <div className="footer-bar">
          <p>© 2022 lorem ipsum dolor SIAMET</p>
          <div className="footer-bar__menu">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
