import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import logo_white from "../assets/images/logo-white.png";
import appstore from "../assets/images/appstore.png";
import Driving from "../components/Driving";

export class Faq extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    this.setState({ open: true });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* PRELOADER SPINNER
		============================================= 
        <div id="loader-wrapper">
          <div id="loading">
            <span className="cssload-loader"><span className="cssload-loader-inner" /></span>
          </div>
        </div>
        {/* PAGE CONTENT
		============================================= */}
        <div id="page" className="page">
          {/* HEADER
			============================================= */}
           {/* END HEADER */}
          {/* FAQs-2
			============================================= */}
          <section
            id="faqs-2"
            className="bg_whitesmoke hero-offset-nav pb-100 faqs-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">
                    {/* Title */}
                    <h2 className="h2-md">Frequently Bugged About</h2>
                    {/* Text */}
                  </div>
                </div>
              </div>
              {/* FAQs-2 QUESTIONS */}
              <div className="faqs-2-questions pc-15">
                <div className="row">
                  {/* QUESTIONS HOLDER */}
                  <div className="col-lg-6">
                    <div className="questions-holder pc-10">
                      {/* QUESTION #1 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">How do I get started?</h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">
                              Fringilla risus, luctus mauris orci auctor purus
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">
                              Quaerat sodales sapien euismod blandit purus and
                              ipsum primis in cubilia laoreet augue luctus
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* QUESTION #2 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">
                          Can I see NordEx in action before purchasing it?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Etiam amet mauris suscipit in odio integer congue
                          metus vitae arcu mollis blandit ultrice ligula egestas
                          and magna suscipit lectus magna suscipit luctus
                          blandit vitae
                        </p>
                      </div>
                      {/* QUESTION #3 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">
                          What are the requirements for using NordEx?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          An enim nullam tempor sapien gravida donec ipsum enim
                          an porta justo integer at velna vitae auctor integer
                          congue undo magna at pretium purus pretium ligula
                        </p>
                      </div>
                      {/* QUESTION #4 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="1s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">
                          Can I use NordEx on different devices?
                        </h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">
                              Fringilla risus, luctus mauris orci auctor purus
                              ligula euismod pretium purus pretium rutrum tempor
                              sapien
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">
                              Nemo ipsam egestas volute turpis dolores ut
                              aliquam quaerat sodales sapien undo pretium a
                              purus
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* QUESTION #5 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="1.2s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">Do you have a free trial?</h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Cubilia laoreet augue egestas and luctus donec
                          curabite diam vitae dapibus libero and quisque gravida
                          donec neque. Blandit justo aliquam molestie nunc
                          sapien justo
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END QUESTIONS HOLDER */}
                  {/* QUESTIONS HOLDER */}
                  <div className="col-lg-6">
                    <div className="questions-holder pc-10">
                      {/* QUESTION #6 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">Troubles with verification</h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Cubilia laoreet augue egestas and luctus donec
                          curabite diam vitae dapibus libero and quisque gravida
                          donec neque. Blandit justo aliquam molestie nunc
                          sapien justo
                        </p>
                      </div>
                      {/* QUESTION #7 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">
                          How does NordEx handle my privacy?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Etiam amet mauris suscipit sit amet in odio. Integer
                          congue leo metus. Vitae arcu mollis blandit ultrice
                          ligula
                        </p>
                        {/* Answer */}
                        <p className="p-lg">
                          An enim nullam tempor sapien gravida donec congue leo
                          metus. Vitae arcu mollis blandit integer at velna
                        </p>
                      </div>
                      {/* QUESTION #8 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">
                          I have an issue with my account
                        </h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">
                              Fringilla risus, luctus mauris orci auctor purus
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">
                              Quaerat sodales sapien euismod blandit purus and
                              ipsum primis in cubilia laoreet augue luctus
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* QUESTION #9 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="1s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">
                          What is the NordEx Membership?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Etiam amet mauris suscipit in odio integer congue
                          metus vitae arcu mollis blandit ultrice ligula egestas
                          and magna suscipit lectus magna suscipit luctus
                          blandit vitae
                        </p>
                      </div>
                      {/* QUESTION #10 */}
                      <div
                        className="question wow fadeInUp"
                        data-wow-delay="1.2s"
                      >
                        {/* Question */}
                        <h5 className="h5-sm">
                          How do I cancel my Membership?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          An enim nullam tempor sapien gravida donec ipsum enim
                          an porta justo integer at velna vitae auctor integer
                          congue undo magna at pretium purus pretium ligula
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END QUESTIONS HOLDER */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FAQs-2 QUESTIONS */}
              {/* MORE QUESTIONS BUTTON */}
              <div className="row">
                <div className="col-md-12">
                  <div className="more-questions text-center mt-40">
                    <h5 className="h5-sm">
                      <span className="flaticon-check" />
                      Have more questions?{" "}
                      <a href="contacts.html" className="skyblue-color">
                        Ask your question here
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End container */}
            {/* GEOMETRIC OVERLAY */}
            <div className="bg_fixed geometric_overlay" />
          </section>{" "}
          {/* END FAQs-2 */}
          {/* DOWNLOAD-2
			============================================= */}
          <section
            id="download-2"
            className="bg_whitesmoke pb-20 download-section division"
          >
            <div className="container white-color">
              <div className="rel purple_gradient bg_shape_01 downloads-2-wrapper">
                <div className="row d-flex align-items-center">
                  {/* DOWNLOAD TEXT */}
                  <div className="col-lg-7 col-lg-7">
                    <div className="download-2-txt white-color">
                      {/* Icon */}
                      <div className="download-2-logo">
                        <img className="img-fluid" src={logo} alt="app-logo" />
                      </div>
                      {/* Title */}
                      <div className="d2-txt">
                        <h4 className="h4-md"></h4>
                      </div>
                    </div>
                  </div>
                  {/* STORE BADGES */}
                  <div className="col-lg-5 text-right">
                    <div className="stores-badge">
                      {/* AppStore */}
                      <a href="#" className="store">
                        <img
                          className="appstore"
                          src={appstore}
                          alt="appstore-logo"
                        />
                      </a>
                      {/* Google Play */}
                      <a href="#" className="store">
                        <img
                          className="googleplay"
                          src={appstore}
                          alt="googleplay-logo"
                        />
                      </a>
                    </div>
                  </div>{" "}
                  {/* END STORE BADGES */}
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END DOWNLOAD-2 */}
          {/* FOOTER-1
			============================================= */}
          {/* END FOOTER-1 */}
        </div>{" "}
        {/* END PAGE CONTENT */}
        {/* EXTERNAL SCRIPTS
		============================================= */}
        {/* Custom Script */}
        {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}
        {/*
		
		*/}
   
          <Driving />
    
      </div>
    );
  }
}

export default Faq;
