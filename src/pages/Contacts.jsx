import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png" 

import appstore from "../assets/images/appstore.png"

import googleplay from "../assets/images/googleplay.png" 

export class Contacts extends Component {
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
          <header id="header" className="header tra-menu navbar-dark">
            <div className="header-wrapper">
              {/* MOBILE HEADER */}
              <div className="wsmobileheader clearfix">	  	
                <span className="smllogo"><img src="images/logo-01.png" alt="mobile-logo" /></span>
                <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>	
              </div>
              {/* NAVIGATION MENU */}
              <div className="wsmainfull menu clearfix">
                <div className="wsmainwp clearfix">
                  {/* HEADER LOGO */}
                  <div className="desktoplogo"><a href="demo-1.html" className="logo-black"><img src={logo} alt="header-logo" /></a></div>
                  <div className="desktoplogo"><a href="demo-1.html" className="logo-white"><img src={logo_white} alt="header-logo" /></a></div>
                  {/* MAIN MENU */}
                  <nav className="wsmenu clearfix">
                    <ul className="wsmenu-list nav-skyblue-hover">
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true"><a href="demo-1.html">Home</a></li>
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true"><a href="about.html">About</a></li>
                      {/* DROPDOWN MENU */}
                      <li aria-haspopup="true"><a href="#">Pages <span className="wsarrow" /></a>
                        <div className="wsmegamenu clearfix halfmenu">
                          <div className="container-fluid">
                            <div className="row">
                              {/* Links */}
                              <ul className="col-lg-6 link-list">	
                                <li><a href="about.html">About NordEx</a></li>							                  
                                <li><a href="features.html">Core Features</a></li>
                                <li><a href="pricing.html">Pricing Plans</a></li>
                                <li><a href="reviews.html">Testimonials</a></li>
                                <li><a href="more-apps.html">More Apps</a></li>
                              </ul>
                              {/* Links */}
                              <ul className="col-lg-6 link-list">							                  
                                <li><a href="faqs.html">FAQs Page</a></li>
                                <li><a href="blog-listing.html">Blog Listing</a></li>
                                <li><a href="single-post.html">Single Blog Post</a></li>
                                <li><a href="terms.html">Terms &amp; Privacy</a></li>
                                <li><a href="contacts.html">Contact Us</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>	{/* END DROPDOWN MENU */}
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true"><a href="pricing.html">Pricing</a></li>
                      {/* SIMPLE NAVIGATION LINK */} 
                      <li className="nl-simple" aria-haspopup="true"><a href="faqs.html">FAQs</a></li>
                      {/* SIMPLE NAVIGATION LINK */} 
                      <li className="nl-simple" aria-haspopup="true"><a href="blog-listing.html">Blog</a></li>
                      {/* HEADER BUTTON */}
                      <li className="nl-simple" aria-haspopup="true">
                        <a href="pricing.html" className="btn btn-skyblue tra-grey-hover last-link">Let's Started</a>
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
                  </nav>	{/* END MAIN MENU */}
                </div>
              </div>	{/* END NAVIGATION MENU */}
            </div>     {/* End header-wrapper */}
          </header>	{/* END HEADER */}
          {/* CONTACTS-2
			============================================= */}
          <section id="contacts-2" className="bg_whitesmoke hero-offset-nav pb-50 contacts-section division">				
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">		
                    {/* Title */}	
                    <h2 className="h2-md">How Can We Help?</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
                    </p>
                  </div>	
                </div>
              </div>
              {/* CONTACT FORM */}
              <div className="row">
                <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                  <div className="form-holder">
                    <form name="contactform" className="row contact-form">
                      {/* Form Select */}
                      <div id="input-subject" className="col-md-12 input-subject">
                        <p className="p-lg">This question is about: </p>
                        <span>Choose a topic, so we know who to send your request to: </span>
                        <select id="inlineFormCustomSelect1" name="Subject" className="custom-select subject">
                          <option>This question is about...</option>	
                          <option>Registering/Authorising</option>
                          <option>Using Application</option>
                          <option>Troubleshooting</option>
                          <option>Backup/Restore</option>
                          <option>Other</option>
                        </select>
                      </div>
                      {/* Contact Form Input */}
                      <div id="input-name" className="col-md-12">
                        <p className="p-lg">Your Name: </p>
                        <span>Please enter your real name: </span>
                        <input type="text" name="name" className="form-control name" placeholder="Your Name*" /> 
                      </div>
                      <div id="input-email" className="col-md-12">
                        <p className="p-lg">Your Email Address: </p>
                        <span>Please carefully check your email address for accuracy</span>
                        <input type="text" name="email" className="form-control email" placeholder="Email Address*" /> 
                      </div>
                      <div id="input-message" className="col-md-12 input-message">
                        <p className="p-lg">Explain your question in details: </p>
                        <span>Your OS version, NordEx version &amp; build, steps you did. Be VERY precise!</span>
                        <textarea className="form-control message" name="message" rows={6} placeholder="I have a problem with..." defaultValue={""} />
                      </div> 
                      {/* Contact Form Button */}
                      <div className="col-md-12 mt-15 form-btn text-right">	
                        <button type="submit" className="btn btn-skyblue tra-skyblue-hover submit">Submit Request</button>	
                      </div>
                      {/* Contact Form Message */}
                      <div className="col-lg-12 contact-form-msg">
                        <span className="loading" />
                      </div>	
                    </form>	
                  </div>	
                </div>	
              </div>	   {/* END CONTACT FORM */}
            </div>	   {/* End container */}	
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	{/* END CONTACTS-2 */}
          {/* SECTION DIVIDER
			============================================= */}
          <div className="divider-wrapper text-center bg_whitesmoke"><div className="section-divider" /></div>
          {/* FOOTER-3
			============================================= */}
          <footer id="footer-3" className="bg_whitesmoke footer division">
            <div className="container">
              {/* FOOTER CONTENT */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="row">
                    {/* FOOTER LINKS */}
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div className="footer-links mb-40">
                        <ul className="foo-links clearfix">									
                          <li><p className="p-md"><a href="#">App Features</a></p></li>													
                          <li><p className="p-md"><a href="#">Integrations</a></p></li>
                          <li><p className="p-md"><a href="#">App Updates</a></p></li>
                          <li><p className="p-md"><a href="#">Help &amp; Support</a></p></li>
                          <li><p className="p-md"><a href="#">Customer Stories</a></p></li>						
                        </ul>
                      </div>
                    </div>
                    {/* FOOTER LINKS */}
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div className="footer-links mb-40">
                        <ul className="foo-links clearfix">													
                          <li><p className="p-md"><a href="#">Our Blog</a></p></li>	
                          <li><p className="p-md"><a href="#">Customer Stories</a></p></li>
                          <li><p className="p-md"><a href="#">Help &amp; Support</a></p></li>	
                          <li><p className="p-md"><a href="#">Life Chatting</a></p></li>
                          <li><p className="p-md"><a href="#">Resources</a></p></li>	
                        </ul>
                      </div>
                    </div>
                    {/* FOOTER LINKS */}
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div className="footer-links mb-40">
                        <ul className="foo-links clearfix">
                          <li><p className="p-md"><a href="#">About Us</a></p></li>
                          <li><p className="p-md"><a href="#">Press &amp; Media</a></p></li>	
                          <li><p className="p-md"><a href="#">Advertising</a></p></li>
                          <li><p className="p-md"><a href="#">Privacy Policy</a></p></li>		
                          <li><p className="p-md"><a href="#">Terms &amp; Privacy</a></p></li>					
                        </ul>
                      </div>
                    </div>
                    {/* FOOTER STORE BADGES */}
                    <div className="col-sm-6 col-md-8 col-lg-3">
                      <div className="footer-store-badges text-right mb-40">
                        {/* AppStore */}
                        <a href="#" className="store">
                          <img className="appstore-original" src={appstore} alt="appstore-badge" />
                        </a>
                        {/* Google Play */}
                        <a href="#" className="store">
                          <img className="googleplay-original" src={googleplay} alt="googleplay-badge" />
                        </a> 
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
                      </div>
                    </div>	{/* END FOOTER STORE BADGES */}
                  </div>
                </div>
              </div>	  {/* END FOOTER CONTENT */}
              {/* BOTTOM FOOTER */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="bottom-footer footer-copyright text-center">
                    <p>© 2021 NordEx. All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>	   {/* End container */}										
          </footer>	{/* END FOOTER-3 */}
        </div>	{/* END PAGE CONTENT */}
        {/* EXTERNAL SCRIPTS
		============================================= */}	
        {/* Custom Script */}		
        {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}															
        {/*
		
		*/}
      </div>
    )
  }
}

export default Contacts
