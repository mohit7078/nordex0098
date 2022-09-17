import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import logo_white from "../assets/images/logo-white.png";
import hero_1_img from "../assets/images/hero-1-img.png";
import app_logo from "../assets/images/app-logo.png";

import appstore from "../assets/images/appstore.png";

import googleplay from "../assets/images/googleplay.png";
import img_11 from "../assets/images/img-11.png";
import img_05 from "../assets/images/img-05.png";
import img_04 from "../assets/images/img-04.png";
import img_02 from "../assets/images/img-02.png";
import socials from "../assets/images/socials.png";
import img_01 from "../assets/images/img-01.png";

import appstore_white from "../assets/images/appstore-white.png";
import googleplay_white from "../assets/images/googleplay-white.png";
import browsers from "../assets/images/browsers.png";
import post_1 from "../assets/images/blog/post-1-img.jpg";
import post_author from "../assets/images/post-author-1.jpg";
import hike from "../assets/images/hike.png";

export class Home extends Component {
 
 
 
  state = {
    open: false,
  };

  componentDidMount() {
    this.setState({ open: true });
    window.scrollTo(0,0)
  }




  render() {
    return (
      <div>
        {/* PRELOADER SPINNER
  ============================================= */}
        {/* <div id="loader-wrapper">
        <div id="loading">
          <span className="cssload-loader"><span className="cssload-loader-inner" /></span>
        </div>
      </div> */}
        {/* PAGE CONTENT
  ============================================= */}
        <div id="page" className="page">
          {/* HEADER
    ============================================= */}
          <section
            id="hero-1"
            className="purple_gradient bg_shape_01 hero-section division"
          >
            {/* HERO-1 CONTENT */}
            <div className="container white-color">
              <div className="row d-flex align-items-center">
                {/* HERO TEXT */}
                <div className="col-md-7 col-lg-6">
                  <div
                    className="hero-1-txt pl-25 wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    {/* App Logo */}
                    <div className="hero-app-logo">
                      <img
                        className="img-fluid"
                        src={app_logo}
                        alt="hero-app-logo"
                      />
                    </div>
                    {/* Title */}
                    <h2 className="h2-title-xs">
                      Spend Your Time with Loved Ones
                    </h2>
                    {/* Text */}
                    <p>
                      An enim nullam tempor sapien and gravida donec ipsum undo
                      pretium porta integer justo velna
                    </p>
                    {/* STORE BADGES */}
                    <div className="stores-badge">
                      {/* AppStore */}
                      <Button />
                      {/* Aamazon Market 
                <a href="#" class="store">
                  <img class="amazon" src="images/amazon.png" alt="amazon-badge" />
                </a>  */}
                      {/* Mac AppStore 
                <a href="#" class="store">
                  <img class="mac-appstore" src="images/macstore.png" alt="macstore-badge" />
                </a> */}
                      {/* Microsoft Store  
                <a href="#" class="store">
                  <img class="microsoft" src="images/microsoft.png" alt="microsoft-badge" />
                </a> */}
                    </div>{" "}
                    {/* END STORE BADGES */}
                  </div>
                </div>{" "}
                {/* END HERO TEXT */}
                {/* HERO IMAGE */}
                <div className="col-md-5 col-lg-6">
                  <div
                    className="hero-1-img text-center wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src={hero_1_img}
                      alt="hero-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END HERO-1 CONTENT */}
            {/* SECTION OVERLAY */}
            <div className="bg_fixed incline_overlay" />
          </section>{" "}
          {/* END HERO-1 */}
          {/* FEATURES-4
    ============================================= */}
          <section id="features-4" className="pt-50 features-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">
                    {/* Title */}
                    <h2 className="h2-md">Quick, Easy and Secure</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURES-4 WRAPPER */}
              <div className="fbox-4-wrapper">
                <div className="row">
                  {/* FEATURE BOX #1 */}
                  <div id="fb-4-1" className="col-md-6">
                    <div
                      className="fbox-4 bg_whitesmoke mb-30 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="row d-flex align-items-center m-row">
                        {/* TEXT */}
                        <div className="col-lg-8 m-bottom">
                          <div className="fbox-4-txt">
                            {/* Title */}
                            <h5 className="h5-sm">Quick Access</h5>
                            {/* Text */}
                            <p className="p-md">
                              Porta semper lacus cursus risus and feugiat primis
                              undo sodales a sapien magna at vitae congue tempus
                            </p>
                          </div>
                        </div>
                        {/* ICON */}
                        <div className="col-lg-4 m-top">
                          <div className="fbox-4-ico ico-100 text-center">
                            <span className="flaticon-call" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End row */}
                    </div>{" "}
                    {/* End fbox-4 */}
                  </div>{" "}
                  {/* END FEATURE BOX #1 */}
                  {/* FEATURE BOX #2 */}
                  <div id="fb-4-2" className="col-md-6">
                    <div
                      className="fbox-4 bg_whitesmoke mb-30 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="row d-flex align-items-center m-row">
                        {/* TEXT */}
                        <div className="col-lg-8 m-bottom">
                          <div className="fbox-4-txt">
                            {/* Title */}
                            <h5 className="h5-sm">Group Messaging</h5>
                            {/* Text */}
                            <p className="p-md">
                              Porta semper lacus cursus risus and feugiat primis
                              undo sodales a sapien magna at vitae congue tempus
                            </p>
                          </div>
                        </div>
                        {/* ICON */}
                        <div className="col-lg-4 m-top">
                          <div className="fbox-4-ico ico-100 text-center">
                            <span className="flaticon-user-1" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End row */}
                    </div>{" "}
                    {/* End fbox-4 */}
                  </div>{" "}
                  {/* END FEATURE BOX #2 */}
                  {/* FEATURE BOX #3 */}
                  <div id="fb-4-3" className="col-md-6">
                    <div
                      className="fbox-4 bg_whitesmoke wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <div className="row d-flex align-items-center m-row">
                        {/* TEXT */}
                        <div className="col-lg-8 m-bottom">
                          <div className="fbox-4-txt">
                            {/* Title */}
                            <h5 className="h5-sm">
                              Alerts &amp; Notifications
                            </h5>
                            {/* Text */}
                            <p className="p-md">
                              Porta semper lacus cursus risus and feugiat primis
                              undo sodales a sapien magna at vitae congue tempus
                            </p>
                          </div>
                        </div>
                        {/* ICON */}
                        <div className="col-lg-4 m-top">
                          <div className="fbox-4-ico ico-100 text-center">
                            <span className="flaticon-message" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End row */}
                    </div>{" "}
                    {/* End fbox-4 */}
                  </div>{" "}
                  {/* END FEATURE BOX #3 */}
                  {/* FEATURE BOX #4 */}
                  <div id="fb-4-4" className="col-md-6">
                    <div
                      className="fbox-4 bg_whitesmoke wow fadeInUp"
                      data-wow-delay="1s"
                    >
                      <div className="row d-flex align-items-center m-row">
                        {/* TEXT */}
                        <div className="col-lg-8 m-bottom">
                          <div className="fbox-4-txt">
                            {/* Title */}
                            <h5 className="h5-sm">Strong Encryption</h5>
                            {/* Text */}
                            <p className="p-md">
                              Porta semper lacus cursus risus and feugiat primis
                              undo sodales a sapien magna at vitae congue tempus
                            </p>
                          </div>
                        </div>
                        {/* ICON */}
                        <div className="col-lg-4 m-top">
                          <div className="fbox-4-ico ico-100 text-center">
                            <span className="flaticon-chat-bubble" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End row */}
                    </div>{" "}
                    {/* End fbox-4 */}
                  </div>{" "}
                  {/* END FEATURE BOX #4 */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FEATURES-4 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END FEATURES-4 */}
          {/* CONTENT-3
    ============================================= */}
          <section id="content-3" className="wide-60 content-section division">
            <div className="container">
              {/* CONTENT BOX-1 */}
              <div id="cb-1-1" className="cbox-1 pb-25">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div
                      className="img-block left-column pc-25 mb-40 wow fadeInRight"
                      data-wow-delay="0.6s"
                    >
                      <img
                        className="img-fluid"
                        src={img_11}
                        alt="content-image"
                      />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}
                  <div className="col-md-7 col-lg-6">
                    <div
                      className="txt-block right-column pc-30 mb-40 wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      {/* Section ID */}
                      <span className="section-id grey-color">
                        Unlimited Access
                      </span>
                      {/* Title */}
                      <h2 className="h2-md">
                        Stay connected with friends easily
                      </h2>
                      {/* Text */}
                      <p className="p-lg">
                        Quaerat sodales sapien euismod purus blandit a purus
                        ipsum primis in cubilia laoreet augue luctus magna dolor
                        luctus at egestas sapien vitae. Nemo egestas volute and
                        turpis dolores aliquam quaerat sodales a sapien
                      </p>
                      {/* Text */}
                      <p className="p-lg">
                        Quaerat sodales sapien euismod purus blandit a purus
                        ipsum primis in cubilia laoreet augue luctus magna dolor
                        luctus and egestas sapien egestas vitae nemo volute
                      </p>
                    </div>
                  </div>{" "}
                  {/* END TEXT BLOCK */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END CONTENT BOX-1 */}
              {/* CONTENT BOX-2 */}
              <div id="cb-1-2" className="cbox-1 rel">
                <div className="row d-flex align-items-center m-row">
                  {/* TEXT BLOCK */}
                  <div className="col-md-7 col-lg-6 m-bottom">
                    <div
                      className="txt-block left-column mb-40 wow fadeInRight"
                      data-wow-delay="0.6s"
                    >
                      {/* CONTENT BOX #1 */}
                      <div className="cbox mb-30">
                        {/* Icon */}
                        <div className="cbox-ico ico-65 stateblue-color">
                          <span className="flaticon-video-player" />
                        </div>
                        {/* Text */}
                        <div className="cbox-txt">
                          <h5 className="h5-sm">
                            Text, Voice &amp; Video Calls
                          </h5>
                          <p className="p-lg">
                            Ligula risus auctor tempus dolor feugiat undo
                            lacinia purus lipsum primis potenti at suscipit
                            quaerat ultrice tellus viverra
                          </p>
                        </div>
                      </div>
                      {/* CONTENT BOX #2 */}
                      <div className="cbox mb-30">
                        {/* Icon */}
                        <div className="cbox-ico ico-65 stateblue-color">
                          <span className="flaticon-smiley" />
                        </div>
                        {/* Text */}
                        <div className="cbox-txt">
                          <h5 className="h5-sm">Stickers, Emojis, Themes</h5>
                          <p className="p-lg">
                            Ligula risus auctor tempus dolor feugiat undo
                            lacinia purus lipsum primis potenti at suscipit
                            quaerat ultrice tellus viverra
                          </p>
                        </div>
                      </div>
                      {/* CONTENT BOX #3 */}
                      <div className="cbox">
                        {/* Icon */}
                        <div className="cbox-ico ico-65 stateblue-color">
                          <span className="flaticon-image" />
                        </div>
                        {/* Text */}
                        <div className="cbox-txt">
                          <h5 className="h5-sm">Share Files &amp; Media</h5>
                          <p className="p-lg">
                            Ligula risus auctor tempus dolor feugiat undo
                            lacinia purus lipsum primis potenti at suscipit
                            quaerat ultrice tellus viverra
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END TEXT BLOCK */}
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6 m-top">
                    <div
                      className="img-block right-column pc-15 mb-40 wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <img
                        className="img-fluid"
                        src={img_05}
                        alt="content-image"
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
                {/* Transparent Background Elements */}
                <div className="tra-bkg-wrapper">
                  <div
                    className="bg_el_01 wow fadeInRight"
                    data-wow-delay="1s"
                  />
                  <div
                    className="bg_el_05 wow fadeInRight"
                    data-wow-delay="1s"
                  />
                </div>
              </div>{" "}
              {/* END CONTENT BOX-2 */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-3 */}
          {/* CONTENT-5
    ============================================= */}
          <section id="content-5" className="pb-80 content-section">
            <div className="bg-inner bg_purple_img pt-100 division">
              <div className="container white-color">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div
                      className="content-5-img right-column pc-20 text-center wow fadeInRight"
                      data-wow-delay="0.6s"
                    >
                      <img
                        className="img-fluid"
                        src={img_04}
                        alt="content-image"
                      />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}
                  <div className="col-md-7 col-lg-6">
                    <div
                      className="txt-block left-column mb-40 wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      {/* Section ID */}
                      <span className="section-id">Fastest Messaging</span>
                      {/* Title */}
                      <h2 className="h2-md">
                        Unlimited calling, texting and picture messaging
                      </h2>
                      {/* Text */}
                      <p className="p-lg">
                        Aliqum mullam blandit and tempor sapien donec ipsum
                        gravida porta. Velna vitae auctor congue magna impedit
                        ligula risus. Mauris donec ligula and magnis undo sapien
                        sagittis sapien pretium enim gravida purus ligula
                      </p>
                    </div>
                  </div>{" "}
                  {/* END CONTENT TXT */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* End Inner Background */}
          </section>{" "}
          {/* END CONTENT-5 */}
          {/* CONTENT-1
    ============================================= */}
          <section
            id="content-1"
            className="wide-60 mt-inverse-40 content-section division"
          >
            <div className="container">
              <div className="row d-flex align-items-center m-row">
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6 m-bottom">
                  <div
                    className="txt-block left-column mb-40 wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    {/* Section ID */}
                    <span className="section-id grey-color">
                      Perfect Integration
                    </span>
                    {/* Title */}
                    <h2 className="h2-md">
                      Work smarter with powerful features
                    </h2>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum tempor
                          sapien
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Quaerat sodales sapien euismod purus blandit
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium a purus mauris
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6 m-top">
                  <div
                    className="img-block right-column pc-20 mb-40 wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src={img_02}
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-1 */}
          {/* FEATURES-5
    ============================================= */}
          <section id="features-5" className="pb-50 features-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">
                    {/* Title */}
                    <h2 className="h2-md">Get Ready to Be Surprised</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURES-5 WRAPPER */}
              <div className="fbox-5-wrapper pc-30">
                <div className="row">
                  {/* FEATURE BOX #1 */}
                  <div id="fb-5-1" className="col-md-6">
                    <div
                      className="fbox-5 pc-25 mb-40 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {/* Icon */}
                      <div className="fbox-ico ico-70 stateblue-color">
                        <span className="flaticon-ads" />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Friendly Interface</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus auctor tempus feugiat at impedit felis
                          undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #2 */}
                  <div id="fb-5-2" className="col-md-6">
                    <div
                      className="fbox-5 pc-25 mb-40 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {/* Icon */}
                      <div className="fbox-ico ico-70 stateblue-color">
                        <span className="flaticon-switch" />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Powerful Options</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus auctor tempus feugiat at impedit felis
                          undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #3 */}
                  <div id="fb-5-3" className="col-md-6">
                    <div
                      className="fbox-5 pc-25 mb-40 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      {/* Icon */}
                      <div className="fbox-ico ico-70 stateblue-color">
                        <span className="flaticon-pantone" />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Customization</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus auctor tempus feugiat at impedit felis
                          undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #4 */}
                  <div id="fb-5-4" className="col-md-6">
                    <div
                      className="fbox-5 pc-25 mb-40 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      {/* Icon */}
                      <div className="fbox-ico ico-70 stateblue-color">
                        <span className="flaticon-user-1" />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Multiple Accounts</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus auctor tempus feugiat at impedit felis
                          undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #5 */}
                  <div id="fb-5-5" className="col-md-6">
                    <div
                      className="fbox-5 pc-25 mb-40 wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      {/* Icon */}
                      <div className="fbox-ico ico-70 stateblue-color">
                        <span className="flaticon-browser" />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Online Verification</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus auctor tempus feugiat at impedit felis
                          undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #6 */}
                  <div id="fb-5-6" className="col-md-6">
                    <div
                      className="fbox-5 pc-25 mb-40 wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      {/* Icon */}
                      <div className="fbox-ico ico-70 stateblue-color">
                        <span className="flaticon-spam" />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Spam Protection</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus auctor tempus feugiat at impedit felis
                          undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FEATURES-5 HOLDER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END FEATURES-5 */}
          {/* TESTIMONIALS-4
    ============================================= */}
          <section
            id="reviews-4"
            className="bg_aliceblue wide-60 reviews-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-60">
                    {/* Title */}
                    <h2 className="h2-md">Why Customers Love Us</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* TESTIMONIALS-4 WRAPPER */}
              <div className="reviews-4-wrapper">
                <div className="row">
                  {/* TESTIMONIALS LEFT COLUMN */}
                  <div className="col-lg-6">
                    <div className="reviews-4-column">
                      {/* TESTIMONIAL #1 */}
                      <div
                        className="review-4 wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>
                            Etiam sapien sem at sagittis congue an augue massa
                            varius an egestas suscipit magna a tempus aliquet
                            blandit{" "}
                            <span className="txt-highlight">
                              tempor sapien gravida donec
                            </span>{" "}
                            ipsum porta
                          </p>
                        </div>
                        {/* Testimonial Data */}
                        <div className="review-4-data">
                          {/* Rating */}
                          <div className="app-rating ico-20 yellow-color">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                          </div>
                          {/* Author */}
                          <h5 className="h5-sm">John Sweet</h5>
                          <p>Mac Store Review, USA</p>
                        </div>
                      </div>{" "}
                      {/* END TESTIMONIAL #1 */}
                      {/* TESTIMONIAL #2 */}
                      <div
                        className="review-4 wow fadeInUp"
                        data-wow-delay="1s"
                      >
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>
                            An augue cubilia laoreet undo magna a suscipit
                            egestas magna ipsum at ligula vitae
                            <span className="txt-highlight">
                              purus ipsum primis
                            </span>{" "}
                            cubilia
                          </p>
                        </div>
                        {/* Testimonial Data */}
                        <div className="review-4-data">
                          {/* App Rating */}
                          <div className="app-rating ico-20 yellow-color">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                          {/* Author */}
                          <h5 className="h5-sm">Mark Hodges</h5>
                          <p>Marketing Manager, Company</p>
                        </div>
                      </div>{" "}
                      {/* END TESTIMONIAL #2 */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIALS LEFT COLUMN */}
                  {/* TESTIMONIALS RIGHT COLUMN */}
                  <div className="col-lg-6">
                    <div className="reviews-4-column">
                      {/* TESTIMONIAL #3 */}
                      <div
                        className="review-4 mt-25 wow fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>
                            Mauris donec ociis magnis undo sapien etiam sapien
                            congue augue pretium and ligula augue lectus aenean
                            ociis magna donec and magnis sapien sagittis ipsum{" "}
                            <span className="txt-highlight">
                              sapien congue tempor gravida{" "}
                            </span>{" "}
                            a donec ipsum porta justo integer a velna mollis
                            laoreet vitae mauris undo tortor tempor sapien
                            gravida donec ipsum porta
                          </p>
                        </div>
                        {/* Testimonial Data */}
                        <div className="review-4-data">
                          {/* App Rating */}
                          <div className="app-rating ico-20 yellow-color">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                          </div>
                          {/* Author */}
                          <h5 className="h5-sm">Dominic Johnson</h5>
                          <p>Chief Strategist, Company</p>
                        </div>
                      </div>{" "}
                      {/* END TESTIMONIAL #3 */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIALS RIGHT COLUMN */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END TESTIMONIALS-4 WRAPPER */}
              {/* DOWNLOAD BUTTON */}
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="reviews-download-btn wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    {/* STORE BADGES */}
                    <div className="stores-badge mb-5">
                      {/* AppStore */}
                      <Button />
                      {/* Aamazon Market 
                <a href="#" class="store">
                  <img class="amazon-original" src="images/amazon.png" alt="amazon-badge" />
                </a>  */}
                      {/* Mac AppStore 
                <a href="#" class="store">
                  <img class="mac-appstore" src="images/macstore.png" alt="macstore-badge" />
                </a> */}
                      {/* Microsoft Store  
                <a href="#" class="store">
                  <img class="microsoft-original" src="images/microsoft.png" alt="microsoft-badge" />
                </a> */}
                    </div>{" "}
                    {/* END STORE BADGES */}
                    {/* OS Prerequisite */}
                    <span className="os-version">
                      Available for iOS 8 and Android Devices From 5.5
                    </span>
                  </div>
                </div>
              </div>{" "}
              {/* END DOWNLOAD BUTTON */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TESTIMONIALS-4 */}
          {/* CONTENT-11
    ============================================= */}
          <section
            id="content-11"
            className="wide-100 content-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-60">
                    {/* Title */}
                    <h2 className="h2-md">Chat with Your Friends Easily</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="img-block text-center wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src={socials}
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>
              {/* DOWNLOAD BUTTON */}
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="content-11-btn ico-20 ico-right mt-60 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    {/* Button */}
                    <a
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      className="video-popup2 btn btn-md btn-rose tra-rose-hover"
                    >
                      See NordEx in Action{" "}
                      <span className="flaticon-play-button" />
                    </a>
                    {/* OS Prerequisite */}
                    <span className="os-version">
                      Available on Android, iOS and macOS
                    </span>
                  </div>
                </div>
              </div>{" "}
              {/* END DOWNLOAD BUTTON */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-11 */}
          {/* CONTENT-2
    ============================================= */}
          <section id="content-2" className="pb-50 content-section division">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div
                    className="img-block left-column pc-20 mb-40 wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src={img_01}
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div
                    className="txt-block right-column mb-40 wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    {/* Section ID */}
                    <span className="section-id grey-color">
                      Register in 30 Seconds
                    </span>
                    {/* Title */}
                    <h2 className="h2-md">Lightning fast and super powerful</h2>
                    {/* Text */}
                    <p className="p-lg">
                      Quaerat sodales sapien euismod purus blandit a purus ipsum
                      primis in cubilia laoreet augue luctus magna dolor luctus
                      at egestas sapien vitae nemo egestas volute and turpis
                      dolores aliquam quaerat sodales a sapien
                    </p>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-2 */}
          {/* DOWNLOAD-6
    ============================================= */}
          <section
            id="download-6"
            className="bg_selfy wide-100 download-section division"
          >
            <div className="container white-color">
              <div className="row">
                {/* DOWNLOAD TXT */}
                <div className="col-lg-6">
                  <div
                    className="download-6-txt pl-20 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    {/* Section ID */}
                    <span className="section-id">Voice &amp; Video Calls</span>
                    {/* Title 	*/}
                    <h2 className="h2-md">
                      Keep Your Favorite People Close to You
                    </h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque at purus ipsum
                      neque dolor primis libero tempus, blandit posuere orci
                      auctor purus euismod an aliquam quaerat purus
                    </p>
                    {/* STORE BADGES */}
                    <div className="stores-badge">
                      {/* playstore-appstore buttons */}
                      <Button />
                    </div>
                    {/* END STORE BADGES */}
                  </div>
                </div>{" "}
                {/* END DOWNLOAD TXT */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END  DOWNLOAD-6 */}
          {/* CONTENT-14
    ============================================= */}
          <section
            id="content-14"
            className="whitesmoke_shape content-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-40">
                    {/* Title */}
                    <h2 className="h2-md">Accessible for All Platforms</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="img-block text-center wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src={browsers}
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-14 */}
          {/* FAQs-1
    ============================================= */}
          <section id="faqs-1" className="faqs-section division">
            <div className="container">
              <div className="row">
                {/* FAQs TITLE */}
                <div className="col-lg-4">
                  <div className="faqs-1-title pc-10">
                    {/* Section ID */}
                    <span className="section-id grey-color">FAQs</span>
                    {/* Title */}
                    <h2 className="h2-md mb-20">Common Questions</h2>
                    {/* Text */}
                    <p className="p-lg">
                      Aliquam augue suscipit luctus neque purus ipsum neque
                      dolor primis undo tempus, blandit and cursus varius
                    </p>
                  </div>
                </div>
                {/* QUESTIONS ACCORDION */}
                <div className="col-lg-8">
                  <div id="accordion" role="tablist" className="pc-20">
                    {/* QUESTION #1 */}
                    <div className="card grey-color">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingOne">
                        <h5 className="h5-sm">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            role="button"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Can I see NordEx in action before purchasing it?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseOne"
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p className="p-lg">
                            Maecenas gravida porttitor quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Viverra
                            urna augue, a augue dictum tempor. Sed pulvinar nibh
                            consectetur varius viverra. Laoreet augue ac massa
                            lorem nulla
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #1 */}
                    {/* QUESTION #2 */}
                    <div className="card grey-color">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingTwo">
                        <h5 className="h5-sm">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            I’ve got iPhone 5. Is NordEx compatible with it?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseTwo"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p className="p-lg">
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus an
                            efficitur ipsum primis in cubilia laoreet augue
                            egestas luctus donec curabitur dapibus libero tempor
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #2 */}
                    {/* QUESTION #3 */}
                    <div className="card grey-color">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingThree">
                        <h5 className="h5-sm">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What are the requirements for using NordEx?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseThree"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p className="p-lg">
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae purus and
                            efficitur ipsum primis in cubilia laoreet
                          </p>
                          {/* Text */}
                          <p className="p-lg">
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque vitae
                            auctor eros dolor luctus placerat a magna cursus
                            congue magna nihil mpedit ligula sem congue tempor
                            gravida
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #3 */}
                    {/* QUESTION #4 */}
                    <div className="card grey-color">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingFour">
                        <h5 className="h5-sm">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFour"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How does NordEx handle my privacy?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseFour"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p className="p-lg">
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis and augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta tristique phasellus neque blandit and
                            tristique
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #4 */}
                    {/* QUESTION #5 */}
                    <div className="card last-card grey-color">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingFive">
                        <h5 className="h5-sm">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFive"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How can I cancel my account?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseFive"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingFive"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p className="p-lg">
                            Curabitur ac dapibus libero. Quisque eu congue
                            tristique neque. Phasellus blandit tristique justo
                            undo aliquam. Aliquam vitae molestie nunc. Quisque
                            sapien justo, aliquet non molestie sed purus,
                            venenatis sem tempor
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #5 */}
                  </div>{" "}
                  {/* END ACCORDION */}
                  {/* MORE QUESTIONS BUTTON */}
                  <div className="more-questions pc-20 mt-35">
                    <h5 className="h5-sm">
                      <span className="flaticon-check" />
                      Have more questions?{" "}
                      <a href="contacts.html" className="violet-color">
                        Ask your question here
                      </a>
                    </h5>
                  </div>
                </div>{" "}
                {/* End col-x */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END FAQs-1 */}
          {/* MORE APPS-1
    ============================================= */}
          <section
            id="more-apps-1"
            className="bg_aliceblue wide-70 moreapps-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">
                    {/* Title */}
                    <h2 className="h2-md">More Apps by DSAThemes</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* MORE APPS-1 WRAPPER */}
              <div className="abox-1-wrapper">
                <div className="row">
                  {/* APP #1 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}
                        <div className="app-version">
                          <span>2.0.1</span>
                        </div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">
                          <img
                            className="img-fluid"
                            src={hike}
                            alt="app-logo"
                          />
                        </div>
                        {/* Text */}
                        <div className="col-sm-9 col-md-8 col-lg-9 abox-1-txt">
                          <h5 className="h5-xs">FastChat 2</h5>
                          <p>Aliquam an augue luctus undo purus</p>
                          {/* App Rating */}
                          <div className="app-rating ico-20">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star-half-empty mr-5" />
                            4.3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  {/* END APP #1 LINK */}
                  {/* APP #2 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}
                        <div className="app-version">
                          <span>1.3.9</span>
                        </div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">
                          <img
                            className="img-fluid"
                            src={hike}
                            alt="app-logo"
                          />
                        </div>
                        {/* Text */}
                        <div className="col-sm-9 col-md-8 col-lg-9 abox-1-txt">
                          <h5 className="h5-xs">MuMemos</h5>
                          <p>Aliquam an augue luctus undo purus</p>
                          {/* App Rating */}
                          <div className="app-rating ico-20">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star mr-5" />
                            5.0
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  {/* END APP #2 LINK */}
                  {/* APP #3 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}
                        <div className="app-version">
                          <span>4.1.6</span>
                        </div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">
                          <img
                            className="img-fluid"
                            src={hike}
                            alt="app-logo"
                          />
                        </div>
                        {/* Text */}
                        <div className="col-sm-9 col-md-8 col-lg-9 abox-1-txt">
                          <h5 className="h5-xs">Music Player</h5>
                          <p>Aliquam an augue luctus undo purus</p>
                          {/* App Rating */}
                          <div className="app-rating ico-20">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star-half-empty mr-5" />
                            4.65
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  {/* END APP #3 LINK */}
                  {/* APP #4 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="1s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}
                        <div className="app-version">
                          <span>14.1.0</span>
                        </div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">
                          <img
                            className="img-fluid"
                            src={hike}
                            alt="app-logo"
                          />
                        </div>
                        {/* Text */}
                        <div className="col-sm-9 col-md-8 col-lg-9 abox-1-txt">
                          <h5 className="h5-xs">PowerSaver</h5>
                          <p>Aliquam an augue luctus undo purus</p>
                          {/* App Rating */}
                          <div className="app-rating ico-20">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star-half-empty mr-5" />
                            4.21
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  {/* END APP #4 LINK */}
                  {/* APP #5 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="1.2s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}
                        <div className="app-version">
                          <span>2.2.1</span>
                        </div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">
                          <img
                            className="img-fluid"
                            src={hike}
                            alt="app-logo"
                          />
                        </div>
                        {/* Text */}
                        <div className="col-sm-9 col-md-8 col-lg-9 abox-1-txt">
                          <h5 className="h5-xs">StocksHub</h5>
                          <p>Aliquam an augue luctus undo purus</p>
                          {/* App Rating */}
                          <div className="app-rating ico-20">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star-half-empty mr-5" />
                            4.45
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  {/* END APP #5 LINK */}
                  {/* APP #6 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="1.4s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}
                        <div className="app-version">
                          <span>2.3.5</span>
                        </div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">
                          <img
                            className="img-fluid"
                            src={hike}
                            alt="app-logo"
                          />
                        </div>
                        {/* Text */}
                        <div className="col-sm-9 col-md-8 col-lg-9 abox-1-txt">
                          <h5 className="h5-xs">Equalizer 2</h5>
                          <p>Aliquam an augue luctus undo purus</p>
                          {/* App Rating */}
                          <div className="app-rating ico-20">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star mr-5" />
                            4.0
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  {/* END APP #6 LINK */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END MORE APPS-1 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END MORE APPS-1 */}
          {/* BLOG-1
    ============================================= */}
          <section id="blog-1" className="wide-60 blog-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">
                    {/* Title */}
                    <h2 className="h2-md">Our Tips and Latest News</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* BLOG POSTS */}
              <div className="row">
                {/* BLOG POST #1 */}
                <div id="b-post-1" className="col-md-6 col-lg-4">
                  <div
                    className="blog-post mb-40 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <img
                        className="img-fluid"
                        src={post_1}
                        alt="blog-post-image"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="p-md post-tag">NordEx News</p>
                      {/* Post Link */}
                      <h5 className="h5-sm">
                        <a href="single-post.html">
                          Tempor sapien donec gravida ipsum a porta justo vitae
                        </a>
                      </h5>
                      {/* Text */}
                      <p className="p-md">
                        Aliqum mullam blandit vitae tempor sapien a donec lipsum
                        gravida porta velna dolor vitae auctor congue
                      </p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <div className="post-author-avatar">
                          <img src={post_author} alt="author-avatar" />
                        </div>
                        <p>12 min read</p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END  BLOG POST #1 */}
                {/* BLOG POST #2 */}
                <div id="b-post-2" className="col-md-6 col-lg-4">
                  <div
                    className="blog-post mb-40 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <img
                        className="img-fluid"
                        src={post_1}
                        alt="blog-post-image"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="p-md post-tag">Inspiration</p>
                      {/* Post Link */}
                      <h5 className="h5-sm">
                        <a href="single-post.html">
                          Aliquam augue impedit luctus neque purus an ipsum
                          neque and dolor libero risus
                        </a>
                      </h5>
                      {/* Text */}
                      <p className="p-md">
                        Aliqum mullam blandit vitae tempor sapien a donec lipsum
                        gravida porta velna dolor vitae auctor congue
                      </p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <div className="post-author-avatar">
                          <img src={post_author} alt="author-avatar" />
                        </div>
                        <p>8 min read</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>{" "}
                {/* END  BLOG POST #2 */}
                {/* BLOG POST #3 */}
                <div id="b-post-3" className="col-md-6 col-lg-4">
                  <div
                    className="blog-post mb-40 wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <img
                        className="img-fluid"
                        src={post_1}
                        post_author
                        alt="blog-post-image"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="p-md post-tag">Tutorials</p>
                      {/* Post Link */}
                      <h5 className="h5-sm">
                        <a href="single-post.html">
                          Tempor sapien NordEx, donec gravida ipsum a porta
                          justo
                        </a>
                      </h5>
                      {/* Text */}
                      <p className="p-md">
                        Aliqum mullam blandit vitae tempor sapien a donec lipsum
                        gravida porta velna dolor vitae auctor congue
                      </p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <div className="post-author-avatar">
                          <img src={post_author} alt="author-avatar" />
                        </div>
                        <p>22 min read</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>{" "}
                {/* END  BLOG POST #3 */}
              </div>{" "}
              {/* END BLOG POSTS */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END BLOG-1 */}
          {/* NEWSLETTER-1
    ============================================= */}
          <section
            id="newsletter-1"
            className="pb-20 newsletter-section division"
          >
            <div className="container">
              <div className="newsletter-wrapper bg_white">
                <div className="row d-flex align-items-center">
                  {/* SECTION TITLE */}
                  <div className="col-lg-6">
                    <div className="newsletter-txt">
                      {/* Section ID */}
                      <span className="section-id">
                        Subscribe to Our Newsletter
                      </span>
                      {/* Title */}
                      <h4 className="h4-xl">
                        Stay up to date with our news, ideas and updates
                      </h4>
                    </div>
                  </div>
                  {/* NEWSLETTER FORM */}
                  <div className="col-lg-6">
                    <form className="newsletter-form">
                      <div className="input-group">
                        <input
                          type="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Your email address"
                          required
                          id="s-email"
                        />
                        <span className="input-group-btn">
                          <button
                            type="submit"
                            className="btn btn-md btn-rose tra-rose-hover"
                          >
                            Subscribe Now
                          </button>
                        </span>
                      </div>
                      {/* Newsletter Form Notification */}
                      <label htmlFor="s-email" className="form-notification" />
                    </form>
                  </div>{" "}
                  {/* END NEWSLETTER FORM */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End newsletter-holder */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END NEWSLETTER-1 */}
          {/* FOOTER-3
    ============================================= */}
          {" "}
          {/* END FOOTER-3 */}
        </div>{" "}
        {/* END PAGE CONTENT */}
        {/* EXTERNAL SCRIPTS
  ============================================= */}
        {/* Custom Script */}
        {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}
        {/*
  
  */}
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <>
        <a href="#" className="store">
          <img className="appstore" src={appstore} alt="appstore-badge" />
        </a>
        <a href="#" className="store">
          <img className="googleplay" src={googleplay} alt="googleplay-badge" />
        </a>{" "}
      </>
    );
  }
}

export default Home;
