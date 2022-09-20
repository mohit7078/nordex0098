import React, { Component } from "react";
import games from "../assets/images/games.jpg";

export class Contactform extends Component {
  render() {
    return (
      <div className="container" style={{ padding: "50px 0" }}>
        <div className="row">
          <div className="col-md-6">
            <img src={games} className="gamesimg" alt="" srcset="" />
          </div>
          <div className="col-md-6" style={{ padding: "120px 0" }}>
            <h1>Contact form</h1>
            <label htmlFor="exampleFormControlInput1">Enter Your name</label>
            <input
              type="txt"
              className="form-control bg-light"
              placeholder="Enter Your name"
            />{" "}
            <br />
            <label for="exampleFormControlTextarea1">Enter your message</label>
            <textarea
              class="form-control bg-light"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <br />
            <button class="btn btn-primary form_btn" type="submit">
              Submit
            </button>
            <div className="row" style={{ padding: "10px 0" }} >
           
          </div>
          </div>
       
        </div>
      </div>
    );
  }
}

export default Contactform;
