import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import logo_white from "../assets/images/logo-white.png";

import { NavLink, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header id="header" className="header tra-menu navbar-dark">
        <div className="header-wrapper">
          {/* MOBILE HEADER */}
          <div className="wsmobileheader clearfix">
            <span className="smllogo">
              <img src="images/logo-01.png" alt="mobile-logo" />
            </span>
            <a id="wsnavtoggle" className="wsanimated-arrow">
              <span />
            </a>
          </div>
          {/* NAVIGATION MENU */}
          <div className="wsmainfull menu clearfix">
            <div className="wsmainwp clearfix">
              {/* HEADER LOGO */}
              <div className="desktoplogo">
                <a href="demo-1.html" className="logo-black">
                  <img src={logo} alt="header-logo" />
                </a>
              </div>
              <div className="desktoplogo">
                <a href="demo-1.html" className="logo-white">
                  <img src={logo_white} alt="header-logo" />
                </a>
              </div>
              {/* MAIN MENU */}
              <nav className="wsmenu clearfix">
                <ul className="wsmenu-list nav-skyblue-hover">
                  {/* SIMPLE NAVIGATION LINK */}
                  
                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink to="/home"  className={({ isActive }) => (isActive ? 'active red' : 'inactive')}>
                        Home
                    </NavLink>
                  </li> 
                  
                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active purple' : 'inactive')}>
                        Contact
                    </NavLink>
                  </li> 

                  {/* SIMPLE NAVIGATION LINK */}
                  
                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink to="/Bloglisting" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    Bloglisting
                    </NavLink>
                  </li> 
                  {/* DROPDOWN MENU */}
                  {/* <li aria-haspopup="true"><a href="#">Pages <span className="wsarrow" /></a>
                    <div className="wsmegamenu clearfix halfmenu">
                      <div className="container-fluid">
                        <div className="row">
                          <ul className="col-lg-6 link-list">	
                            <li><a href="about.html">About NordEx</a></li>							                  
                            <li><a href="features.html">Core Features</a></li>
                            <li><a href="pricing.html">Pricing Plans</a></li>
                            <li><a href="reviews.html">Testimonials</a></li>
                            <Link to= "/moreapps">More Apps</Link>
                          </ul>
                          <ul className="col-lg-6 link-list">							                  
                            
                            <li><a href="blog-listing.html">Blog Listing</a></li>
                            <li><a href="single-post.html">Single Blog Post</a></li>
                            <li><a href="terms.html">Terms &amp; Privacy</a></li>
                            <li><a href="contacts.html">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>	 */}
                  {/* SIMPLE NAVIGATION LINK */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a href="pricing.html">Pricing</a>
                  </li>
                  {/* SIMPLE NAVIGATION LINK */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a href="faqs.html">FAQs</a>
                  </li>
                  {/* SIMPLE NAVIGATION LINK */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a href="blog-listing.html">Blog</a>
                  </li>
                  {/* HEADER BUTTON */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a
                      href="pricing.html"
                      className="btn btn-skyblue tra-grey-hover last-link"
                    >
                      Let's Started
                    </a>
                  </li>
                  {/* APPSTORE BADGE 
                                <li class="nl-simple" aria-haspopup="true">
                                    <a href="#" class="store header-store">
                                        <img class="appstore-header" src="images/appstore.png" alt="appstore-logo">
                                    </a>
                                </li> */}
                  {/* GOOGLE PLAY BADGE 
                                <li class="nl-simple" aria-haspopup="true">
                                    <a href="#" class="store header-store">
                                        <img class="googleplay-header" src="images/googleplay.png" alt="googleplay-logo">
                                    </a>
                                </li>  */}
                  {/* HEADER SOCIAL LINKS 													
                                <li class="nl-simple white-color header-socials ico-20 clearfix" aria-haspopup="true">
                                    <span><a href="#" class="ico-facebook"><span class="flaticon-facebook"></span></a></span>
                                    <span><a href="#" class="ico-twitter"><span class="flaticon-twitter"></span></a></span>
                                    <span><a href="#" class="ico-instagram"><span class="flaticon-instagram"></span></a></span>
                                    <span><a href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></a></span>	
                                </li> */}
                </ul>
              </nav>{" "}
              {/* END MAIN MENU */}
            </div>
          </div>{" "}
          {/* END NAVIGATION MENU */}
        </div>{" "}
        {/* End header-wrapper */}
      </header>
    );
  }
}

export default Header;
