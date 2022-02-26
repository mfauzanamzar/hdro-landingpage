import React from "react";
import "./Whitepaper.css";
import picture from "../images/SizePhoto2.png";

const Whitepaper = () => {
  return (
    <div className="whitepaper-container">
      <div  className="whitepaper">
        <div data-aos="fade-right" className="whitepaper-img">
          <img  width={400} src={picture} alt="pitcure" />
        </div>
        <div data-aos="fade-left" className="whitepaper-text">
          <h1 className="whitepaper-heading">Whitepaper & Roadmap</h1>
          <p className="whitepaper-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            perferendis vel quisquam nemo possimus dignissimos ex facere, nam id
            fuga mollitia necessitatibus.
          </p>
          <ul className="whitepaper-detail__list">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit maecenas varius</li>
            <li>Tortor nibh sit amet tempor nibh finibus et</li>
            <li>Aenean eu enim justo</li>
          </ul>
          <div className="whitepaper-button">
            <button className="read">Read the Whitepaper</button>
          </div>

          <p className="whitepaper-othertext">*Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
