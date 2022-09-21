import React, { Component } from "react";
import games2 from "../assets/images/sky.jpg";

export class Skygames extends Component {
  render() {
    return (
      <div className="container spacing_container">
        <div className="row">
          <div className="col-md-5">
            <img src={games2} className="games2" />
          </div>
          <div className="col-md-7" style={{padding:"62px 0"}}>
            <h6>TECHNOLOGY</h6>
            <h1>Virtual Reality</h1>
            <p>
              There are only some symptoms such as dizziness, depression, and
              collapse that appear while the VR experience. The technology is
              still new and requires investigation and research.
            </p>
            <hr />
            <p>
            <i class="fa-solid fa-lightbulb"></i> Sample text. Click to select the text box. <br /> Click again or double
              click to start editing the text. <br /> Duis aute irure dolor.
            </p>{" "}
            <br />
            <p>
            <i class="fa-solid fa-lightbulb"></i> Sample text. Click to select the text box. <br /> Click again or double
              click to start editing the text. <br /> Duis aute irure dolor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skygames;
