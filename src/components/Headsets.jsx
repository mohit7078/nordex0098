import React, { Component } from 'react'
import Mobile_game from "../assets/images/virtualgames.jpg"
export class Headsets extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5" style={{padding:"150px 0"}}>
<h1>VR headsets</h1>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

</p>
<button className="read_more_btn_games">Read More</button>
          </div>
          <div className="col-md-7">
<img src={Mobile_game} className="mobilegames" alt="" />
          </div>
        </div>
       
      </div>
    )
  }
}

export default Headsets
