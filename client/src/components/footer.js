import React, { Component } from "react";

class Footer extends Component {

  render() {

    return (
      <footer>
          <div className="meetTeam">

             <div className="personContainer">
              <div className="personHeader">
                <img src="images/Richard.png" width="50" alt="" />
                <span className="personTitle">Richard Fenix</span>
              </div>
              <ul className="personBody">
                <a href="mailto:richard.fenix@gmail.com" target="_blank"><li>richard.fenix@gmail.com</li></a>
                <a href="https://github.com/rfenix3"><li>GitHub Profile</li></a>
                <a href="https://www.linkedin.com/in/richard-fenix/"><li>LinkedIn Profile</li></a>
              </ul>
            </div>

             <div className="personContainer">
              <div className="personHeader">
                <img src="images/Brice.png" width="50" alt="" />
                <span className="personTitle">Brice Nguoghia</span>
              </div>
              <ul className="personBody">
                <a href="mailto:Bricen@gmail.com" target="_blank"><li>Bricen@gmail.com</li></a>
                <a href="https://github.com/ngbricen"><li>GitHub Profile</li></a>
                <a href="https://www.linkedin.com/in/bricenguoghia/"><li>LinkedIn Profile</li></a>
              </ul>
            </div> 

             <div className="personContainer">
              <div className="personHeader">
                <img src="images/Mauricio.png" width="50" alt="" />
                <span className="personTitle">Mauricio Ramirez</span>
              </div>
              <ul className="personBody">

                <a href="https://github.com/marez111"><li>GitHub Profile</li></a>
 
              </ul>
            </div>

             <div className="personContainer">
              <div className="personHeader">
                <img src="images/David.png" width="50" alt="" />
                <span className="personTitle">David Rosenberg</span>
              </div>
              <ul className="personBody">
                <a href="mailto:dsr0116@yahoo.com" target="_blank"><li>dsr0116@yahoo.com</li></a>
                <a href="https://github.com/davesrose"><li>GitHub Profile</li></a>
                <a href="https://www.linkedin.com/in/david-s-rosenberg/"><li>LinkedIn Profile</li></a>
              </ul>
            </div>

            <div className="personContainer">
              <div className="personHeader">
                <img src="images/Hajar.png" width="50" alt="" />
                <span className="personTitle">Hajar Zemzem</span>
              </div>
              <ul className="personBody">
                <a href="mailto:hajar.zemzem@gmail.com" target="_blank"><li>hajar.zemzem@gmail.com</li></a>
                <a href="https://github.com/hzemzem"><li>GitHub Profile</li></a>
                <a href="https://www.linkedin.com/in/hajarzemzem/"><li>LinkedIn Profile</li></a>
              </ul>
            </div>
          </div>

          <div className="left">&copy;2017 | MS Connect</div>
          <div className="meetTeamLink">Meet the Team</div>
      </footer>
    )
  }
}
export default Footer;