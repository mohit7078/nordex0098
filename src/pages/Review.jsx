import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png" 
import appstore from "../assets/images/appstore.png"
import hastag from "../assets/images/app-logo.png"

export class Review extends Component {
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
                  <div className="desktoplogo"><a href="demo-1.html" className="logo-white"><img src={logo_white}alt="header-logo" /></a></div>
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
          {/* TESTIMONIALS-4
			============================================= */}
          <section id="reviews-4" className="bg_whitesmoke  hero-offset-nav pb-60 reviews-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-60">		
                    {/* Title */}	
                    <h2 className="h2-md">Why People Use NordEx®</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
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
                      <div className="review-4 wow fadeInUp" data-wow-delay="0.4s">
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>Etiam sapien sem at sagittis congue an augue massa varius an egestas suscipit magna a tempus aliquet 
                            blandit <span className="txt-highlight">tempor sapien gravida donec</span> ipsum porta	 			   
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
                      </div>	{/* END TESTIMONIAL #1 */}
                      {/* TESTIMONIAL #2 */}
                      <div className="review-4 wow fadeInUp" data-wow-delay="1s">
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>An augue cubilia laoreet undo magna a suscipit egestas magna ipsum at ligula vitae 
                            <span className="txt-highlight">purus ipsum primis</span> cubilia
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
                      </div>	{/* END TESTIMONIAL #2 */}
                      {/* TESTIMONIAL #3 */}
                      <div className="review-4 wow fadeInUp" data-wow-delay="0.4s">
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>Etiam sapien sem at sagittis congue an <span className="txt-highlight">augue massa and varius </span>
                            undo egestas suscipit magna a tempus aliquet blandit tempor sapien gravida donec ipsum 	 
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
                          <h5 className="h5-sm">John W. Stucky</h5>
                          <p>Mac Store Review, UK</p>	
                        </div>
                      </div>	{/* END TESTIMONIAL #3 */}
                      {/* TESTIMONIAL #4 */}
                      <div className="review-4 wow fadeInUp" data-wow-delay="1s">
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>An augue cubilia laoreet undo magna a suscipit <span className="txt-highlight">egestas magna ipsum</span> 
                            at ligula vitae purus ipsum primis cubilia
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
                          <h5 className="h5-sm">Justin T. Roberto</h5>
                          <p>Marketing Manager, Company</p>	
                        </div>
                      </div>	{/* END TESTIMONIAL #4 */}
                    </div>
                  </div>	{/* END TESTIMONIALS LEFT COLUMN */}
                  {/* TESTIMONIALS RIGHT COLUMN */}
                  <div className="col-lg-6">
                    <div className="reviews-4-column">
                      {/* TESTIMONIAL #5 */}
                      <div className="review-4 mt-25 wow fadeInUp" data-wow-delay="0.8s">
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>Mauris donec ociis magnis undo sapien etiam sapien congue augue pretium and ligula augue lectus 
                            aenean  ociis magna donec and magnis sapien sagittis ipsum <span className="txt-highlight">sapien congue tempor gravida </span> a donec ipsum porta justo integer a velna mollis laoreet vitae mauris undo 
                            tortor tempor sapien gravida donec ipsum porta
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
                      </div>	{/* END TESTIMONIAL #5 */}
                      {/* TESTIMONIAL #6 */}
                      <div className="review-4 wow fadeInUp" data-wow-delay="1s">
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>An augue cubilia laoreet undo <span className="txt-highlight">magna a suscipit egestas magna ipsum</span>
                            at ligula vitae purus ipsum primis cubilia
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
                          <h5 className="h5-sm">Becky Sterling</h5>
                          <p>Interior Designer</p>	
                        </div>
                      </div>	{/* END TESTIMONIAL #6 */}
                      {/* TESTIMONIAL #7 */}
                      <div className="review-4 mt-25 wow fadeInUp" data-wow-delay="0.8s">
                        {/* Testimonial Text */}
                        <div className="review-4-txt">
                          <p>Mauris donec ociis magnis undo sapien etiam sapien congue augue pretium and ligula augue lectus 
                            aenean  ociis magna donec and magnis sapien sagittis ipsum <span className="txt-highlight">sapien congue tempor gravida </span> a donec ipsum porta justo integer a velna mollis laoreet vitae mauris undo 
                            tortor tempor sapien gravida donec ipsum porta
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
                          <h5 className="h5-sm">Kally Brooks</h5>
                          <p>Web Developer</p>	
                        </div>
                      </div>	{/* END TESTIMONIAL #7 */}
                    </div>
                  </div>	{/* END TESTIMONIALS RIGHT COLUMN */}
                </div>  {/* End row */}
              </div>	{/* END TESTIMONIALS-4 WRAPPER */}
            </div>     {/* End container */}
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	{/* END TESTIMONIALS-4 */}
          {/* PAGE PAGINATION
			============================================= */}
          <div className="bg_whitesmoke pb-100 page-pagination division">
            <div className="container">
              <div className="row">	
                <div className="col-md-12">
                  <nav aria-label="Page navigation">
                    <ul className="pagination ico-20 justify-content-center">
                      <li className="page-item disabled"><a className="page-link" href="#" tabIndex={-1}>
                          <span className="flaticon-chevron-pointing-to-the-left" />
                        </a></li>
                      <li className="page-item active"><a className="page-link" href="#">1 <span className="sr-only">(current)</span></a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#"><span className="flaticon-right-chevron" /></a></li>
                    </ul>	
                  </nav>					
                </div>
              </div>  {/* End row */}	
            </div> {/* End container */}
          </div>	{/* END PAGE PAGINATION */}
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
                        <img className="img-fluid" src={hastag} alt="app-logo" />
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

export default Review
