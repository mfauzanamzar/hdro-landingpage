import React from "react";
import "./TopHero.css";
import Community from "../images/Community.png";
import Crypto from "../images/Crypto.png";
import Transparancy from "../images/Transparancy.png";
import Authenticity from "../images/Authenticity.png";
import { HiArrowSmDown } from 'react-icons/hi';

const TopHero = () => {
  const items = [
    {
      id: 1,
      name: "Community",
      text: "HMN is a 100% community driven project led by professional team",
      image: Community,
      width: 80,
    },
    {
      id: 2,
      name: "Crypto",
      text: "HMN is a smart contract based crypto which uses BEP-20 interface.",
      image: Crypto,
      width: 50,
    },
    {
      id: 3,
      name: "Transparancy",
      text: "HMN has nothing to hide. Everything the project does and hopes to do is clearly outlined.",
      image: Transparancy,
      width: 50,
    },
    {
      id: 4,
      name: "Authenticity",
      text: "who want to make a real difference to activate energy of everyone on the planet.",
      image: Authenticity,
      width: 50,
    },
  ];
  return (
    <div className="tophero-container">
      <div className="tophero">
        <div className="tophero-flex">
          <div className="tophero-text">
            <div className="tophero-other"></div>
            <div className="tophero-heading">
              <h1 className="tophero-heading__text">HMN token</h1>
              <h1 className="tophero-heading__text">
                using cryptopcurrency to help anak bangsa.
              </h1>
            </div>
            <p className="tophero-subheading">
              HMN is dedicated to using the power of decentralized finance to
              help rid the planet lack of energy
            </p>
            <div className="tophero-button">
              <button className="button donate">Donate Now</button>
              <button className="button discover">Discover <HiArrowSmDown/></button>
            </div>
          </div>
          <div className="tophero-left">
            <h1 className="tophero-left-heading">
              142 <span>Lorem</span>
            </h1>
            <div className="tophero-left-detail">
              <p>Lorem Ipsum Dolor Si</p>
            </div>
          </div>
        </div>

        <div className="tophero-items">
        <div className="tophero-line">
            <img  src="/Line.png" alt="line" />
          </div>
          {items.map((item, index) => (
            <div key={index} className="item">
              <div className="item-image">
                <img
                  width={item.width}
                  className="item-image"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <p className="item-heading">{item.name}</p>
              <p className="item-subheading">{item.text}</p>
            </div>
          ))}
          <div className="tophero-line">
            <img src="/Line.png" alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
