import React, { Component } from "react";
import driving_seat from "../assets/images/seat.png";

export class Driving extends Component {
  render() {
    return (
      <div className="container driving_editng  " >
        <div className="row gy-2  ">
          <div className="col-md-3 driving_box ">
          <h1 className="driving_span_text">Your Saftey</h1>
            <img className="driving_img" src={driving_seat} alt="" srcset="" />
            <h6 className="h6_driving_text">Government of India</h6>
          </div>
          <div className="col-md-3 driving_box">
          <h1 className="driving_span_text">Your Saftey</h1>
            <img
              className="driving_img "
              src={driving_seat}
              alt=""
              srcset=""
            />
            <h6 className="h6_driving_text">Government of India</h6>
            
          </div>

          <div className="col-md-3 driving_box">
          <h1 className="driving_span_text">Your Saftey</h1>
            <img className="driving_img" src={driving_seat} alt="" srcset="" />
            <h6 className="h6_driving_text">Government of India</h6>
          </div>

          <div className="col-md-3 driving_box">
          <h1 className="driving_span_text">Your Saftey</h1>
            <img className="driving_img" src={driving_seat} alt="" srcset="" />
            <h6 className="h6_driving_text">Government of India</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Driving;
