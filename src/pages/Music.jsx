import React, { Component } from "react";
import Music1 from "../components/Music1";
import Smart from "../components/Smart";
import Contactform from "../components/Contactform";
import Apple from "../components/Apple";
import Applewatch from "../components/Applewatch";
import Iphone_slider from "../components/Iphone_slider";
import Pizza from "../components/Pizza";
import Foodie from "../components/Foodie";

export class Music extends Component {
  render() {
    return (
      <>
        <Music1 />
        <Smart />
        <Contactform />

        <Apple />
        <Applewatch />
        <Iphone_slider />
        <Pizza/>
        <Foodie/>
      </>
    );
  }
}

export default Music;
