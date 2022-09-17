import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import React, { Component } from "react";
import Bloglisting from "./pages/Blog_listing";
import Contacts from "./pages/Contacts";
import Demo_7 from "./pages/Demo_7";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Moreapps from "./pages/Moreapps";
import Pricing from "./pages/Pricing";
import Review from "./pages/Review";
import Terms from "./pages/Terms";
import Single_post from "./pages/Single_post";
import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path= "/blog" element={<Bloglisting />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Demo_7" element={<Demo_7 />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/features" element={<Features />} />
          <Route path="/moreapps" element={<Moreapps />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/review" element={<Review />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Single_post" element={<Single_post />} />
          <Route path="aboutus" element={<Aboutus/>}/>
        </Routes>

        <Footer/>
      </>
    );
  }
}

export default App;
