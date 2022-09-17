import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png" 
import appstore from "../assets/images/appstore.png"

export class Faq extends Component {
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
          {/* FAQs-2
			============================================= */}
          <section id="faqs-2" className="bg_whitesmoke hero-offset-nav pb-100 faqs-section division">				
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">		
                    {/* Title */}	
                    <h2 className="h2-md">Got Questions? Look Here</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
                    </p>
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
                      <div className="question wow fadeInUp" data-wow-delay="0.4s">
                        {/* Question */}
                        <h5 className="h5-sm">How do I get started?</h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">Fringilla risus, luctus mauris orci auctor purus</p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">Quaerat sodales sapien euismod blandit purus and ipsum primis in cubilia laoreet 
                              augue luctus
                            </p>
                          </li>
                        </ul>
                      </div>	
                      {/* QUESTION #2 */}
                      <div className="question wow fadeInUp" data-wow-delay="0.6s">
                        {/* Question */}
                        <h5 className="h5-sm">Can I see NordEx in action before purchasing it?</h5>
                        {/* Answer */}
                        <p className="p-lg">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit 
                          ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae
                        </p>
                      </div>	
                      {/* QUESTION #3 */}					
                      <div className="question wow fadeInUp" data-wow-delay="0.8s">
                        {/* Question */}
                        <h5 className="h5-sm">What are the requirements for using NordEx?</h5>
                        {/* Answer */}
                        <p className="p-lg">An enim nullam tempor sapien gravida donec ipsum enim an porta justo integer at velna 
                          vitae auctor integer congue undo magna at pretium purus pretium ligula 
                        </p>
                      </div>
                      {/* QUESTION #4 */}					
                      <div className="question wow fadeInUp" data-wow-delay="1s">
                        {/* Question */}
                        <h5 className="h5-sm">Can I use NordEx on different devices?</h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus
                              pretium rutrum tempor sapien
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo 
                              pretium a purus
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* QUESTION #5 */}					
                      <div className="question wow fadeInUp" data-wow-delay="1.2s">
                        {/* Question */}
                        <h5 className="h5-sm">Do you have a free trial?</h5>
                        {/* Answer */}
                        <p className="p-lg">Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and 
                          quisque gravida donec neque. Blandit justo aliquam molestie nunc sapien justo
                        </p>
                      </div>
                    </div>
                  </div>	{/* END QUESTIONS HOLDER */}
                  {/* QUESTIONS HOLDER */}
                  <div className="col-lg-6">
                    <div className="questions-holder pc-10">
                      {/* QUESTION #6 */}					
                      <div className="question wow fadeInUp" data-wow-delay="0.4s">
                        {/* Question */}
                        <h5 className="h5-sm">Troubles with verification</h5>
                        {/* Answer */}
                        <p className="p-lg">Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and 
                          quisque gravida donec neque. Blandit justo aliquam molestie nunc sapien justo
                        </p>
                      </div>
                      {/* QUESTION #7 */}
                      <div className="question wow fadeInUp" data-wow-delay="0.6s">
                        {/* Question */}
                        <h5 className="h5-sm">How does NordEx handle my privacy?</h5>
                        {/* Answer */}
                        <p className="p-lg">Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis 
                          blandit ultrice ligula
                        </p>
                        {/* Answer */}
                        <p className="p-lg">An enim nullam tempor sapien gravida donec congue leo metus. Vitae arcu mollis blandit 
                          integer at velna
                        </p>
                      </div>
                      {/* QUESTION #8 */}
                      <div className="question wow fadeInUp" data-wow-delay="0.8s">
                        {/* Question */}
                        <h5 className="h5-sm">I have an issue with my account</h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">Fringilla risus, luctus mauris orci auctor purus</p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">Quaerat sodales sapien euismod blandit purus and ipsum primis in cubilia laoreet 
                              augue luctus
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* QUESTION #9 */}
                      <div className="question wow fadeInUp" data-wow-delay="1s">
                        {/* Question */}
                        <h5 className="h5-sm">What is the NordEx Membership?</h5>
                        {/* Answer */}
                        <p className="p-lg">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit 
                          ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae
                        </p>
                      </div>	
                      {/* QUESTION #10 */}					
                      <div className="question wow fadeInUp" data-wow-delay="1.2s">
                        {/* Question */}
                        <h5 className="h5-sm">How do I cancel my Membership?</h5>
                        {/* Answer */}
                        <p className="p-lg">An enim nullam tempor sapien gravida donec ipsum enim an porta justo integer at velna 
                          vitae auctor integer congue undo magna at pretium purus pretium ligula 
                        </p>
                      </div>
                    </div>
                  </div>	{/* END QUESTIONS HOLDER */}
                </div>	{/* End row */}
              </div>	{/* END FAQs-2 QUESTIONS */}	
              {/* MORE QUESTIONS BUTTON */}	
              <div className="row">
                <div className="col-md-12">	
                  <div className="more-questions text-center mt-40">
                    <h5 className="h5-sm"><span className="flaticon-check" /> 
                      Have more questions? <a href="contacts.html" className="skyblue-color">Ask your question here</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>	   {/* End container */}	
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	{/* END FAQs-2 */}
          {/* DOWNLOAD-2
			============================================= */}
          <section id="download-2" className="bg_whitesmoke pb-20 download-section division">
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
                        <h4 className="h4-md">Download NordEx to create your beautiful landing page</h4>
                      </div>
                    </div>
                  </div>
                  {/* STORE BADGES */}
                  <div className="col-lg-5 text-right">
                    <div className="stores-badge">
                      {/* AppStore */}
                      <a href="#" className="store">
                        <img className="appstore" src={appstore} alt="appstore-logo" />
                      </a>
                      {/* Google Play */}
                      <a href="#" className="store">
                        <img className="googleplay" src={appstore} alt="googleplay-logo" />
                      </a>
                    </div>	
                  </div>	{/* END STORE BADGES */}
                </div>
              </div>    {/* End row */}
            </div>	   {/* End container */}	
          </section>	{/* END DOWNLOAD-2 */}
          {/* FOOTER-1
			============================================= */}
          <footer id="footer-1" className="bg_whitesmoke footer division">
            <div className="container">
              {/* FOOTER CONTENT */}
              <div className="row">
                {/* FOOTER INFO */}
                <div className="col-md-12 col-lg-3">	
                  <div className="footer-info mb-40">
                    {/* Footer Logo */}	
                    <img className="footer-logo" src={logo} alt="footer-logo" />
                  </div>	
                </div>
                {/* FOOTER LINKS */}
                <div className="col-sm-4 col-md-4 col-lg-3 offset-lg-1">
                  <div className="footer-links">
                    {/* Title */}
                    <h5 className="h5-xs">Product</h5>
                    {/* Footer Links */}
                    <ul className="foo-links clearfix">
                      <li><p className="p-md"><a href="#">How It Works?</a></p></li>
                      <li><p className="p-md"><a href="#">Privacy Policy</a></p></li>
                      <li><p className="p-md"><a href="#">Terms of Service</a></p></li>
                      <li><p className="p-md"><a href="#">Site Map</a></p></li>
                    </ul>						
                  </div>	
                </div>
                {/* FOOTER LINKS */}
                <div className="col-sm-4 col-md-4 col-lg-3">
                  <div className="footer-links">
                    {/* Title */}
                    <h5 className="h5-xs">Connect</h5>
                    {/* Footer Links */}
                    <ul className="foo-links clearfix">
                      <li><p className="p-md"><a href="#">FAQs</a></p></li>									
                      <li><p className="p-md"><a href="#">Editor Help</a></p></li>							
                      <li><p className="p-md"><a href="#">Life Chatting</a></p></li>
                      <li><p className="p-md"><a href="#">Contact Us</a></p></li>
                    </ul>
                  </div>	
                </div>
                {/* FOOTER SOCIAL LINKS */}
                <div className="col-sm-4 col-md-4 col-lg-2">
                  <div className="footer-socials-links text-right mb-25">
                    {/* Social Links */}
                    <h5 className="h5-xs"><a href="#" className="foo-facebook">Facebook</a></h5>
                    <h5 className="h5-xs"><a href="#" className="foo-twitter">Twitter</a></h5>
                    <h5 className="h5-xs"><a href="#" className="foo-instagram">Instagram</a></h5>
                    <h5 className="h5-xs"><a href="#" className="foo-dribbble">Dribbble</a></h5>														
                    {/*	
								<h5 class="h5-sm"><a href="#" class="foo-behance">Facebook</a></h5>
								<h5 class="h5-sm"><a href="#" class="foo-pinterest">Twitter</a></h5>
								<h5 class="h5-sm"><a href="#" class="foo-linkedin">Instagram</a></h5>
								<h5 class="h5-sm"><a href="#" class="google-plus">Dribbble</a></h5>
								<h5 class="h5-sm"><a href="#" class="youtube">Twitter</a></h5>
								<h5 class="h5-sm"><a href="#" class="foo-tumblr">Instagram</a></h5>
								<h5 class="h5-sm"><a href="#" class="foo-vk">Dribbble</a></h5>	
								*/}
                  </div>
                </div>
              </div>	 {/* END FOOTER CONTENT */}
              {/* BOTTOM FOOTER */}
              <div className="bottom-footer">
                <div className="row">
                  {/* FOOTER COPYRIGHT */}
                  <div className="col-md-12">
                    <div className="footer-copyright">
                      <p>© 2021 NordEx. All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </div>	{/* END BOTTOM FOOTER */}
            </div>	    {/* End container */}
          </footer>	{/* END FOOTER-1 */}
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

export default Faq
