import React, { Component } from "react";
import first_img from "../assets/images/cv1.jpg";
import second_img from "../assets/images/cv2.jpg";

import third_img from "../assets/images/cv3.jpg";
import fav_chat_img from "../assets/images/chat_fav_icon.png"



export class Companyinfo extends Component {
  render() {
    return (
      <div className="container  companyinfo_container">
        <div className="row">
          <div className="col-md-4">
            <img src={first_img} className="contact_info_img1" alt="" />
          </div>
          <div className="col-md-4">
          <img src={fav_chat_img} className="fav_img_chat" alt="" />
            <h1 id ="development_heading">Development</h1>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="col-md-4">
            <img src={second_img} className="contact_info_img2" alt="" />
          </div>
          <div className="col-md-4">
            <img src={fav_chat_img} className="fav_img_chat" alt="" />
            <h1 id ="development_heading">Development</h1>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="col-md-4">
            <img src={third_img} className="contact_info_img3" alt="" />
          </div>
          <div className="col-md-4">
          <img src={fav_chat_img} className="fav_img_chat" alt="" />
            <h1 id ="development_heading">Development</h1>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Companyinfo;
