import React from "react";
import "./Team.css";
import TeamPic from "../images/SizeTeam.png";

const Team = () => {
  return (
    <div className="team-contaienr">
      <div data-aos="fade-down" className="team">
        <h1 className="team-heading">Team</h1>
        <div className="team-wrapper">
          <div className="team1">
            <img className="teampicture" src={TeamPic} alt="team" />
            <p className="team-name">Kenny Recardo</p>
            <p className="team-detail">Lorem ipsum</p>
            <div className="splash">
              <img src="/splash/Splash3.png" alt="splash" />
            </div>
          </div>
          <div className="team2">
            <img className="teampicture" src={TeamPic} alt="team" />
            <p className="team-name">Johnes Oscar</p>
            <p className="team-detail">Dolor siamet</p>
          </div>
          <div className="team3">
            <img className="teampicture" src={TeamPic} alt="team" />
            <p className="team-name">Marcello Grammy</p>
            <p className="team-detail">Consectur</p>
            <div className="splashteam2">
              <img src="/splash/Splash9.png" alt="splash" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
