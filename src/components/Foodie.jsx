import React, { Component } from "react";
import food from "../assets/images/Food.jpg";
export class Foodie extends Component {
  render() {
    return (
      <div className="bg-color-food">
        <div className="container">
          <div className="row"style={{ padding: "150px 0" }}>
            <div className="col-md-6"  style={{ padding: "100px 0" }} >
              <h5>FAST FOOD</h5>
              <h2 id="food_txt">Best fast food restaurants in </h2>
              <button type="button" class="btn read-more-btn btn-primary">
                Read more
              </button>{" "}
              <br /> <br />
              <ul className="socialmedia">
                <li>
                  <i class="fa-brands fa-i fa-instagram"></i>
                </li>
                <li>
                  <i class="fa-brands fa-f fa-facebook"></i>
                </li>
                <li>
                  <i class="fa-brands fa-t fa-twitter"></i>
                </li>
                <li>
                  <i class="fa-brands fa-tok fa-tiktok"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={food} className="foods" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Foodie;
