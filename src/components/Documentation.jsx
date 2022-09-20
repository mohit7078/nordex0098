import React, { Component } from "react";
import book from "../assets/images/book.png";

export class Documentation extends Component {
  render() {
    return (
     <div className="container">
         <div className="row booksitting "  >
        <div className="col-md-3">
          <img src={book} className="bookimg" alt="" />
          <h2>
            Pixel Perfect Design Lorem ipsum dolor sit amet, consectetur
          </h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</h6>
        </div>
        <div className="col-md-3"> <img src={book} className="bookimg" alt="" />
          <h6>
            Pixel Perfect Design Lorem ipsum dolor sit amet, consectetur
     
          </h6></div>
        <div className="col-md-3"> <img src={book} className="bookimg" alt="" />
          <h6>
            Pixel Perfect Design Lorem ipsum dolor sit amet, consectetur
     
          </h6></div>
        <div className="col-md-3"> <img src={book} className="bookimg" alt="" />
          <h6>
            Pixel Perfect Design Lorem ipsum dolor sit amet, consectetur
     
          </h6></div>
      </div>
     </div>
    );
  }
}

export default Documentation;
