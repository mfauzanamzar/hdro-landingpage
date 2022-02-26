import React from "react";
import "./BottomHero.css";
import WorldMap from '../images/WorldMap2.png'

const BottomHero = () => {
  return (
    <div className="bottomhero-container">
      <div className="bottomhero">
        <div className="bottomhero-left">
          <p data-aos="fade-up" className="bottomhero-othertext">TIME TO GET STARTED</p>
          <div data-aos="fade-up" data-aos-delay="200" className="bottomhero-heading">
            <h1 className="bottomhero-heading__text">So, you want to help?</h1>
            <h1 className="bottomhero-heading__text">Here's how.</h1>
          </div>
          <p data-aos="fade-up" data-aos-delay="400" className="bottomhero-subheading">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="bottomhero-button">
            <button className="button donate">Donate Now</button>
          </div>
        </div>
        <div className="bottomhero-right">
          <img width={700} src={WorldMap} alt="worldmap" />
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
