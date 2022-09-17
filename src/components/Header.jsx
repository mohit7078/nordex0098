import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import logo_white from "../assets/images/logo-white.png";

import { NavLink, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header id="header" className="header tra-menu navbar-dark bg-dark">
        <div className="header-wrapper bg-dark">
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
          <div className="wsmainfull menu clearfix bg-dark">
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
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive ? "active red" : "inactive"
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink
                      to="/contacts"
                      className={({ isActive }) =>
                        isActive ? "active purple" : "inactive"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>

                  {/* SIMPLE NAVIGATION LINK */}

                
                    

                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink
                      to="/aboutus"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink
                      to="/Pricing"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      Pricing
                    </NavLink>
                  </li>

                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink
                      to="/Faq"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nl-simple" aria-haspopup="true">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                     Blog
                    </NavLink>
                  </li>

                  {/* SIMPLE NAVIGATION LINK */}
                
                  {/* SIMPLE NAVIGATION LINK */}
                 
                  {/* SIMPLE NAVIGATION LINK */}
                  
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
