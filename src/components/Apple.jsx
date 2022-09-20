import React, { Component } from "react";
import iphone_logo from "../assets/images/iphone_logo.png"

export class Apple extends Component {
  render() {
    return (
        <div className="watch_img">
      <div className="container ">
        <div className="row">
          <div className="col-md-6" style={{padding:"100px 0"}}>
            <img src={iphone_logo}  style={{marginBottom:"10px"}} /><br />
            <p id="watch_txt">
              Whether it’s training for a marathon or swimming laps at the pool,
              Apple Watch Series 4 has something for everyone. Now including
              yoga and hiking, the Workout app works every way you want to
              exercise. You can set individual goals, measure your calorie burn,
              and track your progress over time in the Activity app on your
              iPhone. Ready? Go.

              
            </p>
            <br />
            <input className="btn btn-primary watchbtn" type="submit" defaultValue="Submit" placeholder="readmore" />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Apple;
