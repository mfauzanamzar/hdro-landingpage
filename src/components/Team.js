import React from "react";
import './Team.css';
import TeamPic from '../images/SizeTeam.png';

const Team = () => {
  return (
    <div className="team-contaienr">
      <div className="team">
          <h1 className="team-heading">Team</h1>
          <div className="team-wrapper">
              <div className="team1">
                  <img src={TeamPic} alt="team" />
                  <p className="team-name">
                      Kenny Recardo
                  </p>
                  <p className="team-detail">Lorem ipsum</p>
              </div>
              <div className="team2">
                  <img src={TeamPic} alt="team" />
                  <p className="team-name">
                     Johnes Oscar
                  </p>
                  <p className="team-detail">Dolor siamet</p>
              </div>
              <div className="team3">
                  <img src={TeamPic} alt="team" />
                  <p className="team-name">
                      Marcello Grammy
                  </p>
                  <p className="team-detail">Consectur</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Team;
