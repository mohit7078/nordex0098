import React, { Component } from "react";
import pizza_boy from "../assets/images/pizaaboy.jpg";
import red_img from "../assets/images/red.png"

export class Pizza extends Component {
  render() {
    return (
      <div className="container" style={{padding:"100px 0"}}>
        <div className="row">
          <div className="col-md-6">
            <img src={pizza_boy} className="pizza_man"/>
          </div>
          <div className="col-md-6 piza_txt redcircle"   style={{padding:"170px 0"}}>
          
           <h1 id="pizza_heading_txt">Delivery Services</h1>
            
            <p id="pizza_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut
              reprehenderit totam eos sunt repudiandae sapiente rem dolorum,
              voluptatem labore eaque provident, earum cupiditate. Laborum
            
            </p>
            <img src={red_img} className=" redcirle" />
          </div>
        </div>
      </div>
    );
  }
}

export default Pizza;
