import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import iphone_logo from "../assets/images/iphone_logo.png";
import games from "../assets/images/games.jpg";




const options={
  autoPlay:true,
  showIndicators:false,


}

export class Iphone_slider extends Component {
  render() {
    return (
        <Carousel {...options} className="spacing_container">

      
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
      
     



            </Carousel>
    )
  }
}

export default Iphone_slider
