import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png"  
import appstore from "../assets/images/appstore.png"
import hike from   "../assets/images/hike.png"

export class Moreapps extends Component {
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
          {/* MORE APPS-1
			============================================= */}
          <section id="more-apps-1" className="bg_whitesmoke hero-offset-nav pb-70 moreapps-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">		
                    {/* Title */}	
                    <h2 className="h2-md">Other Apps by DSAThemes</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
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
                        <div className="app-version"><span>2.0.1</span></div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">	
                          <img className="img-fluid" src={hike} alt="app-logo" />
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
                  </div>	{/* END APP #1 LINK */}
                  {/* APP #2 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}		
                        <div className="app-version"><span>1.3.9</span></div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">	
                          <img className="img-fluid" src={hike} alt="app-logo" />
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
                  </div>	{/* END APP #2 LINK */}
                  {/* APP #3 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}		
                        <div className="app-version"><span>4.1.6</span></div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">	
                          <img className="img-fluid" src={hike} alt="app-logo" />
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
                  </div>	{/* END APP #3 LINK */}
                  {/* APP #4 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="1s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}		
                        <div className="app-version"><span>14.1.0</span></div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">	
                          <img className="img-fluid" src={hike} alt="app-logo" />
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
                  </div>	{/* END APP #4 LINK */}
                  {/* APP #5 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="1.2s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}		
                        <div className="app-version"><span>2.2.1</span></div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">	
                          <img className="img-fluid" src={hike} alt="app-logo" />
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
                  </div>	{/* END APP #5 LINK */}
                  {/* APP #6 LINK */}
                  <div className="col-md-6 wow fadeInUp" data-wow-delay="1.4s">
                    <a href="#">
                      <div className="row abox-1 d-flex align-items-center">
                        {/* App Version */}		
                        <div className="app-version"><span>2.3.5</span></div>
                        {/* Logo */}
                        <div className="col-sm-3 col-md-4 col-lg-3 abox-1-logo">	
                          <img className="img-fluid" src={hike} alt="app-logo" />
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
                  </div>	{/* END APP #6 LINK */}
                </div>    {/* End row */}
              </div>	{/* END MORE APPS-1 WRAPPER */}	
            </div>	   {/* End container */}
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	{/* END MORE APPS-1 */}
          {/* DOWNLOAD-6
			============================================= */}
          <section id="download-6" className="bg_mobile wide-100 download-section division">
            <div className="container white-color">
              <div className="row">	
                {/* DOWNLOAD TXT */}	
                <div className="col-lg-6">	
                  <div className="download-6-txt pl-20 wow fadeInUp" data-wow-delay="0.6s">
                    {/* Section ID */}	
                    <span className="section-id">Best Solutions</span>
                    {/* Title 	*/}	
                    <h2 className="h2-md">Solutions Rooted in Code and Design</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque at purus ipsum neque dolor primis libero tempus, blandit 
                      posuere orci auctor purus euismod an aliquam quaerat purus
                    </p>
                    {/* STORE BADGES */}												
                    <div className="stores-badge">
                      {/* AppStore */}
                      <a href="#" className="store">
                        <img className="appstore"src={appstore} alt="appstore-badge" />
                      </a>
                      {/* Google Play */}
                      <a href="#" className="store">
                        <img className="googleplay" src={appstore} alt="googleplay-badge" />
                      </a> 
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
                    </div>	{/* END STORE BADGES */}	
                  </div>
                </div>	{/* END DOWNLOAD TXT */}	
              </div>    {/* End row */}
            </div>	   {/* End container */}	
          </section>	{/* END  DOWNLOAD-6 */}
          {/* TESTIMONIALS-1
			============================================= */}
          <section id="reviews-1" className="bg_whitesmoke wide-100 reviews-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-60">		
                    {/* Title */}	
                    <h2 className="h2-md">Why Customers Love Us</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
                    </p>
                  </div>	
                </div>
              </div>
              {/* TESTIMONIALS CONTENT */}
              <div className="row">
                <div className="col-md-12">					
                  <div className="owl-carousel owl-theme reviews-1-wrapper">
                    {/* TESTIMONIAL #1 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Great Flexibility!</h5>
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Etiam sapien sem at sagittis congue an augue massa varius egestas undo 
                          suscipit magna tempus undo aliquet				   
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Scott Boxer</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #1 */}
                    {/* TESTIMONIAL #2 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star-half-empty" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Simple and Useful!</h5>	
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">At sagittis congue augue undo egestas magna ipsum vitae purus and ipsum 
                          primis suscipit
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Wendy T.</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #2 */}
                    {/* TESTIMONIAL #3 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">I love this App!</h5>
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Mauris donec ociis magnis and sapien etiam sapien congue undo augue pretium 
                          and ligula augue a lectus aenean magna
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- pebz13</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #3 */}
                    {/* TESTIMONIAL #4 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star-1" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Best App for iOS!</h5>
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">An augue in cubilia laoreet magna and suscipit egestas magna ipsum purus ipsum 
                          and suscipit
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Scott Boxer</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #4 */}
                    {/* TESTIMONIAL #5 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star-half-empty" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Awesome Design!</h5>
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Mauris donec magnis sapien undo etiam sapien and congue augue egestas ultrice 
                          a vitae purus velna integer tempor
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- John Sweet</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #5 */}
                    {/* TESTIMONIAL #6 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Simply Amazing App!</h5>
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">An augue cubilia laoreet undo magna a suscipit undo egestas magna ipsum ligula 
                          vitae purus ipsum primis cubilia blandit
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Leslie D.</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #6 */}
                    {/* TESTIMONIAL #7 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star-half-empty" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Powerful Features!</h5>
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Augue egestas volutpat and egestas augue in cubilia laoreet magna undo 
                          suscipit luctus
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Marisol19</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #7 */}
                    {/* TESTIMONIAL #8 */}
                    <div className="review-1 radius-08">
                      {/* App Rating */}
                      <div className="app-rating ico-20 yellow-color">
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star" />
                        <span className="flaticon-star-half-empty" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Super Support!</h5>
                      {/* Testimonial Text */}
                      <div className="review-1-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Aliquam augue suscipit luctus neque purus ipsum neque dolor primis libero tempus 
                          at blandit posuere varius magna
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- AJ</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #8 */}
                  </div>
                </div>									
              </div>	{/* END TESTIMONIALS CONTENT */} 
            </div>     {/* End container */}
          </section>	{/* END TESTIMONIALS-1 */}
          {/* NEWSLETTER-1
			============================================= */}
          <section id="newsletter-1" className="bg_whitesmoke pb-20 newsletter-section division">
            <div className="container">
              <div className="newsletter-wrapper bg-white">
                <div className="row d-flex align-items-center">
                  {/* SECTION TITLE */}	
                  <div className="col-lg-6">
                    <div className="newsletter-txt">	
                      {/* Section ID */}	
                      <span className="section-id">Subscribe to Our Newsletter</span>
                      {/* Title */}	
                      <h4 className="h4-xl">Stay up to date with our news, ideas and updates</h4>	
                    </div>								
                  </div>
                  {/* NEWSLETTER FORM */}
                  <div className="col-lg-6">
                    <form className="newsletter-form">
                      <div className="input-group">
                        <input type="email" autoComplete="off" className="form-control" placeholder="Your email address" required id="s-email" />								
                        <span className="input-group-btn">
                          <button type="submit" className="btn btn-md btn-skyblue tra-skyblue-hover">Subscribe Now</button>
                        </span>										
                      </div>
                      {/* Newsletter Form Notification */}	
                      <label htmlFor="s-email" className="form-notification" />
                    </form>							
                  </div>	  {/* END NEWSLETTER FORM */}
                </div>	  {/* End row */}
              </div>    {/* End newsletter-holder */}
            </div>	   {/* End container */}	
          </section>	{/* END NEWSLETTER-1 */}
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
                          <img className="googleplay-original" src={appstore} alt="googleplay-badge" />
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

export default Moreapps
