import React, { Component } from "react";
import iphone_logo from "../assets/images/iphone_logo.png";

export class Applewatch extends Component {
  render() {
    return (
      <div className="three_iphone_watch spacing_container" >
        <div className="container"      >
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6" style={{ padding: "100px 0" }}>
              <img
                src={iphone_logo}
                className="three_iphone_watch_logo"
                style={{ marginBottom: "10px" }}
              />
              <br />
          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Applewatch;
