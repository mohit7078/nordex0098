import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png"  
import hera from "../assets/images/hero-7-img.png"
import appstore from "../assets/images/appstore.png"
import twophone from "../assets/images/img-12.png"
import dolarimg from "../assets/images/img-21.png"
import browsers from "../assets/images/browsers.png"
import facebook from   "../assets/images/img-01.png"
import tablet from  "../assets/images/tablet.png"
import threeimg from "../assets/images/img-03.png"
import brands from "../assets/images/brand-1.png"
 

export class Demo_7 extends Component {
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
                  <div className="desktoplogo"><a href="#hero-7" className="logo-black"><img src={logo} alt="header-logo" /></a></div>
                  <div className="desktoplogo"><a href="#hero-7" className="logo-white"><img src= {logo_white} alt="header-logo" /></a></div>
                  {/* MAIN MENU */}
                  <nav className="wsmenu clearfix">
                    <ul className="wsmenu-list nav-blue-hover">
                      {/* DROPDOWN MENU */}
                      <li aria-haspopup="true"><a href="#">About <span className="wsarrow" /></a>
                        <ul className="sub-menu">
                          <li aria-haspopup="true"><a href="#features-7">About NordEx</a></li>
                          <li aria-haspopup="true"><a href="#content-3">Best Solutions</a></li>
                          <li aria-haspopup="true"><a href="#content-13">Why Choose Us</a></li>
                          <li aria-haspopup="true"><a href="#content-11">App Integration</a></li>	
                          <li aria-haspopup="true"><a href="#brands-2">Our Partners</a></li>	  
                        </ul>
                      </li>
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true"><a href="#features-6">Features</a></li>
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
                      <li className="nl-simple" aria-haspopup="true"><a href="#reviews-2">Reviews</a></li>
                      {/* SIMPLE NAVIGATION LINK */} 
                      <li className="nl-simple" aria-haspopup="true"><a href="#faqs-2">FAQs</a></li>
                      {/* HEADER BUTTON */}
                      <li className="nl-simple" aria-haspopup="true">
                        <a href="#content-5" className="btn btn-skyblue tra-skyblue-hover last-link">Let's Started</a>
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
          {/* HERO-7
			============================================= */}	
          <section id="hero-7" className="bg_fixed hero-section division">
            <div className="container">						
              <div className="row d-flex align-items-center">
                {/* HERO IMAGE */}
                <div className="col-md-5 col-lg-6">	
                  <div className="hero-7-img pc-15 text-center mb-40">				
                    <img className="img-fluid" src={hera} alt="hero-image" />
                  </div>
                </div>
                {/* HERO TEXT */}
                <div className="col-md-7 col-lg-6">
                  <div className="hero-7-txt pc-35 mb-40">
                    {/* Title */}
                    <h2 className="h2-xl">Smart &amp; Secure Mobile Banking</h2>
                    {/* Text */}
                    <p className="p-xl grey-color">Feugiat primis ligula risus and auctor augue egestas mauri viverra tortor in iaculis 
                      magna feugiat mauris an ipsum placerat viverra tortor gravida purus
                    </p> 
                    {/* STORE BADGES */}												
                    <div className="stores-badge mb-20">
                      {/* AppStore */}
                      <a href="#" className="store">
                        <img className="appstore" src={appstore} alt="appstore-badge" />
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
                    {/* OS Prerequisite */}
                    <p className="os-version grey-color">Current Release: NordEx 2.1.09</p>
                  </div>
                </div>	{/* END HERO TEXT */}
              </div>
            </div>    {/* End row */}
          </section>	{/* END HERO-7 */}
          {/* FEATURES-7
			============================================= */}
          <section id="features-7" className="pt-20 pb-100 features-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                  <div className="section-title text-center mb-70">		
                    {/* Title */}	
                    <h2 className="h2-md">Manage all your payments with NordEx mobile App</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius
                    </p>
                  </div>	
                </div>
              </div>
              {/* FEATURES-7 WRAPPER */}
              <div className="fbox-7-wrapper">
                <div className="row">
                  {/* FEATURE BOX #1 */}
                  <div id="fb-7-1" className="col-sm-6 col-md-3">
                    <div className="fbox-7 text-center wow fadeInUp" data-wow-delay="0.4s">
                      {/* Icon */}
                      <div className="fbox-7-ico ico-75 skyblue-color"><span className="flaticon-mobile-2" /></div>
                      {/* Title */}
                      <h5 className="h5-xs">Virtual Wallet</h5>
                    </div>
                  </div>	
                  {/* FEATURE BOX #2 */}
                  <div id="fb-7-2" className="col-sm-6 col-md-3">
                    <div className="fbox-7 text-center wow fadeInUp" data-wow-delay="0.6s">
                      {/* Icon */}
                      <div className="fbox-7-ico ico-75 skyblue-color"><span className="flaticon-mobile-payment" /></div>
                      {/* Title */}
                      <h5 className="h5-xs">Money Tracker</h5>
                    </div>
                  </div>	
                  {/* FEATURE BOX #3 */}
                  <div id="fb-7-3" className="col-sm-6 col-md-3">
                    <div className="fbox-7 text-center wow fadeInUp" data-wow-delay="0.8s">
                      {/* Icon */}
                      <div className="fbox-7-ico ico-75 skyblue-color"><span className="flaticon-currency" /></div>
                      {/* Title */}
                      <h5 className="h5-xs">Multi-Currency</h5>
                    </div>
                  </div>	
                  {/* FEATURE BOX #4 */}
                  <div id="fb-7-4" className="col-sm-6 col-md-3">
                    <div className="fbox-7 text-center wow fadeInUp" data-wow-delay="1s">
                      {/* Icon */}
                      <div className="fbox-7-ico ico-75 skyblue-color"><span className="flaticon-fingerprint" /></div>
                      {/* Title */}
                      <h5 className="h5-xs">Online Verification</h5>
                    </div>
                  </div>	
                </div>  {/* End row */}	
              </div>	{/* END FEATURES-7 WRAPPER */}
            </div>	   {/* End container */}		
          </section>	{/* END FEATURES-7 */}
          {/* CONTENT-12
			============================================= */}
          <section id="content-12" className="mb-60 content-section division">
            <div className="container">
              <div className="lavender_gradient content-12-wrapper">
                <div className="row d-flex align-items-center">
                  {/* TEXT BLOCK */}	
                  <div className="col-lg-5">
                    <div className="txt-block left-column mb-40 wow fadeInRight" data-wow-delay="0.6s">
                      {/* Title */}	
                      <h2 className="h2-xs">Work smarter with powerful automation</h2>
                      {/* Text */}	
                      <p className="p-lg">Quaerat sodales sapien euismod purus at blandit and purus ipsum primis and cubilia laoreet 
                        augue a luctus magna dolor luctus mauris pretium a sapien egestas luctus
                      </p>
                      {/* Text */}	
                      <p className="p-lg">Fringilla risus, luctus mauris auctor a purus euismod orci pretium purus pretium undo ligula 
                        rutrum tempor magna dolor 
                      </p>
                    </div>
                  </div>	{/* END TEXT BLOCK */}	
                  {/* IMAGE BLOCK */}
                  <div className="col-lg-7">
                    <div className="content-12-img right-column wow fadeInLeft" data-wow-delay="0.6s">
                      <img className="img-fluid" src={twophone} alt="content-image" />
                    </div>
                  </div>
                </div>
              </div>    {/* End row */}
            </div>	   {/* End container */}	
          </section>	{/* END CONTENT-12 */}
          {/* CONTENT-3
			============================================= */}
          <section id="content-3" className="wide-60 content-section division">
            <div className="container">
              {/* CONTENT BOX-1 */}
              <div id="cb-1-1" className="cbox-1">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div className="img-block left-column pc-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                      <img className="img-fluid" src={dolarimg} alt="content-image" />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}	
                  <div className="col-md-7 col-lg-6">
                    <div className="txt-block right-column pc-30 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                      {/* Section ID */}	
                      <span className="section-id grey-color">Perfect Integration</span>
                      {/* Title */}	
                      <h2 className="h2-md">Banking has never been so rewarding</h2>
                      {/* List */}	
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium 
                            ligula rutrum tempor sapien
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Quaerat sodales sapien euismod purus blandit</p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo 
                            pretium a purus mauris
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>	{/* END TEXT BLOCK */}	
                </div>	  {/* End row */}	
              </div>	{/* END CONTENT BOX-1 */}
              {/* CONTENT BOX-2 */}
              <div id="cb-1-2" className="cbox-1">
                <div className="row d-flex align-items-center m-row">
                  {/* TEXT BLOCK */}	
                  <div className="col-md-7 col-lg-6 m-bottom">
                    <div className="txt-block left-column mb-40 wow fadeInRight" data-wow-delay="0.6s">
                      {/* Section ID */}	
                      <span className="section-id grey-color">Register in 30 Seconds</span>
                      {/* Title */}	
                      <h2 className="h2-md">Lightning fast and super powerful</h2>
                      {/* Text */}	
                      <p className="p-lg">Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet augue 
                        luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat 
                        sodales a sapien
                      </p>
                    </div>
                  </div>	{/* END TEXT BLOCK */}	
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6 m-top">
                    <div className="img-block right-column pc-15 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                      <img className="img-fluid" src={facebook} alt="content-image" />
                    </div>
                  </div>
                </div>  {/* End row */}	
              </div>	{/* END CONTENT BOX-2 */}
            </div>     {/* End container */}
          </section>	{/* END CONTENT-3 */}	
          {/* PROCESS-2
			============================================= */}	
          <section id="process-2" className="bg_bank_01 wide-100 process-section division">
            <div className="container white-color">	
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                  <div className="section-title text-center mb-60">		
                    <h3 className="h3-sm">Online invoices, payments, transfer funds — all in one solution</h3>	
                  </div>	
                </div>
              </div>
              <div className="row">
                <ul className="process-skyblue processbar pc-35">
                  {/* PROCESS BOX #1 */}
                  <li id="step-2-1" className="col-md-4">
                    <div className="pbox-2 pc-20 text-center">
                      <h5 className="h5-sm">Create an Account</h5>							
                      <p className="p-lg">Nemo ipsam egestas volute dolores quaerat sodales</p>		
                    </div>		
                  </li>
                  {/* PROCESS BOX #2 */}
                  <li id="step-2-2" className="col-md-4">
                    <div className="pbox-2 pc-20 text-center">
                      <h5 className="h5-sm">Customize Profile</h5>											
                      <p className="p-lg">Nemo ipsam egestas volute dolores quaerat sodales</p>
                    </div>		
                  </li>
                  {/* PROCESS BOX #3 */}
                  <li id="step-2-3" className="col-md-4">
                    <div className="pbox-2 pc-20 text-center">
                      <h5 className="h5-sm">Get Access</h5>		
                      <p className="p-lg">Nemo ipsam egestas volute dolores quaerat sodales</p>
                    </div>		
                  </li>
                </ul>											
              </div>	  {/* End row */}
            </div>	   {/* End container */}
          </section>	{/* END PROCESS-2 */}
          {/* CONTENT-14
			============================================= */}
          <section id="content-14" className="whitesmoke_shape content-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-40">		
                    {/* Title */}	
                    <h2 className="h2-md">Accessible for All Platforms</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
                    </p>
                  </div>	
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="row">
                <div className="col-md-12">
                  <div className="img-block text-center wow fadeInUp" data-wow-delay="0.6s">
                    <img className="img-fluid" src={browsers} alt="content-image" />
                  </div>
                </div>	
              </div>	{/* END TEXT BLOCK */}	
            </div>     {/* End container */}
          </section>	{/* END CONTENT-14 */}
          {/* FEATURES-5
			============================================= */}
          <section id="features-5" className="wide-50 features-section division">
            <div className="container">
              {/* FEATURES-5 WRAPPER */}
              <div className="fbox-5-wrapper pc-30">
                <div className="row">
                  {/* FEATURE BOX #1 */}
                  <div id="fb-5-1" className="col-md-6">
                    <div className="fbox-5 pc-25 mb-40 wow fadeInUp" data-wow-delay="0.4s">
                      {/* Icon */}
                      <div className="fbox-ico ico-70 skyblue-color"><span className="flaticon-online-banking" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Mobile Banking</h5>
                        {/* Text */}
                        <p className="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat 
                          at impedit felis undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>	
                  {/* FEATURE BOX #2 */}
                  <div id="fb-5-2" className="col-md-6">
                    <div className="fbox-5 pc-25 mb-40 wow fadeInUp" data-wow-delay="0.4s">
                      {/* Icon */}
                      <div className="fbox-ico ico-70 skyblue-color"><span className="flaticon-credit-card" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Prepaid Visa Card</h5>
                        {/* Text */}
                        <p className="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat 
                          at impedit felis undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #3 */}
                  <div id="fb-5-3" className="col-md-6">
                    <div className="fbox-5 pc-25 mb-40 wow fadeInUp" data-wow-delay="0.6s">
                      {/* Icon */}
                      <div className="fbox-ico ico-70 skyblue-color"><span className="flaticon-payment" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Card Lock &amp; Unlock</h5>
                        {/* Text */}
                        <p className="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat 
                          at impedit felis undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #4 */}
                  <div id="fb-5-4" className="col-md-6">
                    <div className="fbox-5 pc-25 mb-40 wow fadeInUp" data-wow-delay="0.6s">
                      {/* Icon */}
                      <div className="fbox-ico ico-70 skyblue-color"><span className="flaticon-chat-4" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Real-Time Notifications</h5>
                        {/* Text */}
                        <p className="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat 
                          at impedit felis undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #5 */}
                  <div id="fb-5-5" className="col-md-6">
                    <div className="fbox-5 pc-25 mb-40 wow fadeInUp" data-wow-delay="0.8s">
                      {/* Icon */}
                      <div className="fbox-ico ico-70 skyblue-color"><span className="flaticon-contactless" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Payments Activity</h5>
                        {/* Text */}
                        <p className="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat 
                          at impedit felis undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FEATURE BOX #6 */}
                  <div id="fb-5-6" className="col-md-6">
                    <div className="fbox-5 pc-25 mb-40 wow fadeInUp" data-wow-delay="0.8s">
                      {/* Icon */}
                      <div className="fbox-ico ico-70 skyblue-color"><span className="flaticon-ads" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Homescreen Widget</h5>
                        {/* Text */}
                        <p className="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat 
                          at impedit felis undo auctor augue mauris
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  {/* End row */}	
              </div>	{/* END FEATURES-5 HOLDER */}
            </div>	   {/* End container */}		
          </section>	{/* END FEATURES-5 */}
          {/* CONTENT-13
			============================================= */}
          <section id="content-13" className="rel crocus_gradient bg_shape_02 wide-60 content-section division">
            <div className="container white-color">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}		
                <div className="col-md-6 col-xl-6">
                  <div className="txt-block left-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                    {/* Section ID */}	
                    <span className="section-id">Totally Optimized</span>
                    {/* Title */}	
                    <h2 className="h2-xs">Intuitive features, powerful results</h2>
                    {/* Text */}	
                    <p className="p-lg">Quaerat sodales sapien euismod purus at blandit purus ipsum primis and cubilia laoreet 
                      augue at luctus magna dolor luctus mauris pretium a sapien egestas luctus
                    </p>
                    {/* Text */}	
                    <p className="p-lg">Fringilla risus, luctus mauris auctor a purus euismod orci pretium purus pretium undo ligula 
                      rutrum tempor
                    </p>
                  </div>	
                </div>	{/* END TEXT BLOCK */}		
                {/* IMAGE BLOCK */}	
                <div className="col-md-6 col-xl-6">
                  <div className="content-13-img wow fadeInRight" data-wow-delay="0.6s">
                    <img className="img-fluid" src={tablet} alt="content-image" />
                  </div>	
                </div>
              </div>	  {/* End row */}
            </div>	   {/* End container */}
          </section>	{/* END CONTENT-13 */}
          {/* CONTENT-2
			============================================= */}
          <section id="content-2" className="wide-50 content-section division">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block left-column pc-20 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                    <img className="img-fluid" src={threeimg} alt="content-image" />
                  </div>
                </div>
                {/* TEXT BLOCK */}	
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                    {/* Section ID */}	
                    <span className="section-id grey-color">Beauty of Simplicity</span>
                    {/* Title */}	
                    <h2 className="h2-md">Beautiful, award-winning design</h2>
                    {/* List */}	
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium 
                          ligula rutrum tempor sapien
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">Quaerat sodales sapien euismod purus blandit</p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo 
                          pretium a purus mauris
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>	{/* END TEXT BLOCK */}	
              </div>	   {/* End row */}
            </div>	   {/* End container */}
          </section>	{/* END CONTENT-2 */}
          {/* PRICING-2
			============================================= */}
          <section id="pricing-2" className="pb-100 pricing-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">		
                    {/* Title */}	
                    <h2 className="h2-md">Simple and Flexible Pricing</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
                    </p>
                  </div>	
                </div>
              </div>
              {/* PRICING TABLES */}
              <div className="row pricing-row">
                {/* FREE PLAN */}
                <div className="col-md-4">
                  <div className="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.4s">	
                    {/* Plan Price  */}
                    <div className="pricing-plan bg_white">
                      <h5 className="h5-xs">NordEx Free</h5>									
                      <sup className="dark-color">$</sup>								
                      <span className="dark-color">0</span>
                      <sup className="validity dark-color"><span>.00</span> / month</sup>
                      <p className="p-sm">The price per one user. Change or cancel your plan anytime</p>
                      {/* Pricing Table Button  */}
                      <a href="#" className="btn btn-tra-grey skyblue-hover">Download Now</a>
                    </div>	
                  </div>
                </div>	{/* END FREE PLAN */}
                {/* MONTHLY PLAN */}
                <div className="col-md-4">
                  <div className="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.6s">	
                    {/* Plan Price  */}
                    <div className="pricing-plan bg_white">
                      <h5 className="h5-xs">Monthly Billing</h5>	
                      <sup className="dark-color">$</sup>								
                      <span className="dark-color">6</span>
                      <sup className="validity dark-color"><span>.25</span> / month</sup>
                      <p className="p-sm">The price per one user. Change or cancel your plan anytime</p>
                      {/* Pricing Table Button */}
                      <a href="#" className="btn btn-tra-grey skyblue-hover">Select Plan</a>
                    </div>	
                  </div>
                </div>	{/* END MONTHLY PLAN  */}
                {/* ANNUAL PLAN */}
                <div className="col-md-4">
                  <div className="pricing-table rel mb-40 wow fadeInUp" data-wow-delay="0.8s">
                    {/* Hightlight Badge */}
                    <div className="badge-wrapper">
                      <div className="highlight-badge bg_skyblue white-color">
                        <h6 className="h6-sm">Save up to 25%</h6>
                      </div>
                    </div>	
                    {/* Plan Price  */}
                    <div className="pricing-plan highlight bg_whitesmoke">
                      <h5 className="h5-xs">Annual Billing</h5>	
                      <sup className="dark-color">$</sup>								
                      <span className="dark-color">5</span>
                      <sup className="validity dark-color"><span>.69</span> / month</sup>
                      <p className="p-sm">The price per one user. Change or cancel your plan anytime</p>
                      {/* Pricing Table Button */}
                      <a href="#" className="btn btn-tra-grey skyblue-hover">Select Plan</a>
                    </div>	
                  </div>
                </div>	{/* END ANNUAL PLAN */}
              </div>	{/* END PRICING TABLES */}
              {/* DOWNLOAD BUTTON */}		
              <div className="row">
                <div className="col-md-12">
                  <div className="pricing-2-download-btn mt-20 text-center wow fadeInUp" data-wow-delay="0.8s">
                    {/* Button */}
                    <a href="pricing.html" className="btn btn-md btn-tra-grey skyblue-hover mb-10">Start Free 14-day Trial</a>
                    {/* OS Prerequisite */}
                    <span className="os-version">Request OS X 10.10 or later</span>
                  </div>
                </div>
              </div>	{/* END DOWNLOAD BUTTON */}	
            </div>	   {/* End container */}
          </section>	{/* END PRICING-2 */}
          {/* TESTIMONIALS-2
			============================================= */}
          <section id="reviews-2" className="rel reviews-section division">
            <div className="container">
              <div className="row">
                {/* TESTIMONIALS TITLE */}
                <div className="col-lg-4">
                  <div className="reviews-2-title pc-10">
                    {/* Section ID */}	
                    <span className="section-id grey-color">Reviews</span>
                    {/* Title */}
                    <h2 className="h2-md mb-20">Our Happy Customers</h2>
                    {/* Text */}	
                    <p className="p-lg">Aliquam augue suscipit luctus neque purus ipsum neque dolor primis undo tempus, blandit and 
                      cursus varius
                    </p>
                  </div>
                </div>
                {/* TESTIMONIALS CAROUSEL */}
                <div className="col-lg-8">					
                  <div className="owl-carousel owl-theme reviews-2-wrapper">
                    {/* TESTIMONIAL #1 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Etiam sapien sem at sagittis congue an augue massa varius egestas undo 
                          suscipit magna tempus undo aliquet				   
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Scott Boxer</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #1 */}
                    {/* TESTIMONIAL #2 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">At sagittis congue augue undo egestas magna ipsum vitae purus and ipsum 
                          primis suscipit
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Wendy T.</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #2 */}
                    {/* TESTIMONIAL #3 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Mauris donec ociis magnis and sapien etiam sapien congue undo augue pretium 
                          and ligula augue a lectus aenean magna
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- pebz13</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #3 */}
                    {/* TESTIMONIAL #4 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">An augue in cubilia laoreet magna and suscipit egestas magna ipsum purus ipsum 
                          and suscipit
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Scott Boxer</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #4 */}
                    {/* TESTIMONIAL #5 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Mauris donec magnis sapien undo etiam sapien and congue augue egestas ultrice 
                          a vitae purus velna integer tempor
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- John Sweet</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #5 */}
                    {/* TESTIMONIAL #6 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">An augue cubilia laoreet undo magna a suscipit undo egestas magna ipsum ligula 
                          vitae purus ipsum primis cubilia blandit
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Leslie D.</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #6 */}
                    {/* TESTIMONIAL #7 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Augue egestas volutpat and egestas augue in cubilia laoreet magna undo 
                          suscipit luctus
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- Marisol19</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #7 */}
                    {/* TESTIMONIAL #8 */}
                    <div className="review-2 radius-08">
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
                      <div className="review-2-txt">
                        {/* Text */}
                        <p className="p-lg grey-color">Aliquam augue suscipit luctus neque purus ipsum neque dolor primis libero tempus 
                          at blandit posuere varius magna
                        </p>
                        {/* Testimonial Author */}
                        <h5 className="h5-xs">- AJ</h5>	
                      </div>	
                    </div>	{/* END TESTIMONIAL #8 */}
                  </div>
                </div>	{/* END TESTIMONIALS CAROUSEL */} 
              </div>	
            </div>     {/* End container */}
          </section>	{/* END TESTIMONIALS-2 */}
          {/* BRANDS-2
			============================================= */}
          <section id="brands-2" className="wide-60 brands-section division">
            <div className="container">	
              {/* BRANDS TITLE */}
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="brands-title text-center">
                    <h4 className="h4-sm">Trusted by companies large and small:</h4>
                  </div>
                </div>
              </div>
              {/* BRANDS-2 WRAPPER */}
              <div className="brands-2-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={brands} alt="brand-logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>  {/* END BRANDS-2 WRAPPER */}
            </div>     {/* End container */}
          </section>	{/* END BRANDS-2 */}
          {/* SECTION DIVIDER
			============================================= */}
          <div className="divider-wrapper text-center"><div className="section-divider" /></div>
          {/* FAQs-2
			============================================= */}
          <section id="faqs-2" className="wide-100 faqs-section division">				
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
                        <h5 className="h5-sm">Can I see NordEx in action before purchasing it?</h5>
                        {/* Answer */}
                        <p className="p-lg">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit 
                          ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae
                        </p>
                      </div>	
                      {/* QUESTION #2 */}					
                      <div className="question wow fadeInUp" data-wow-delay="0.6s">
                        {/* Question */}
                        <h5 className="h5-sm">What are the requirements for using NordEx?</h5>
                        {/* Answer */}
                        <p className="p-lg">An enim nullam tempor sapien gravida donec ipsum enim an porta justo integer at velna 
                          vitae auctor integer congue undo magna at pretium purus pretium ligula 
                        </p>
                      </div>
                      {/* QUESTION #3 */}					
                      <div className="question wow fadeInUp" data-wow-delay="0.8s">
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
                    </div>
                  </div>	{/* END QUESTIONS HOLDER */}
                  {/* QUESTIONS HOLDER */}
                  <div className="col-lg-6">
                    <div className="questions-holder pc-10">
                      {/* QUESTION #4 */}					
                      <div className="question wow fadeInUp" data-wow-delay="0.4s">
                        {/* Question */}
                        <h5 className="h5-sm">Do you have a free trial?</h5>
                        {/* Answer */}
                        <p className="p-lg">Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and 
                          quisque gravida donec neque. Blandit justo aliquam molestie nunc sapien justo
                        </p>
                      </div>
                      {/* QUESTION #5 */}
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
                      {/* QUESTION #6 */}
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
                    </div>
                  </div>	{/* END QUESTIONS HOLDER */}
                </div>	{/* End row */}
              </div>	{/* END FAQs-2 QUESTIONS */}	
              {/* MORE QUESTIONS BUTTON */}	
              <div className="row">
                <div className="col-md-12">	
                  <div className="more-questions text-center mt-40">
                    <h5 className="h5-sm"><span className="flaticon-check" /> 
                      Have more questions? <a href="mailto:yourdomain@mail.com" className="skyblue-color">Ask your question here</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>	   {/* End container */}		
          </section>	{/* END FAQs-2 */}
          {/* DOWNLOAD-6
			============================================= */}
          <section id="download-6" className="bg_bank_02 wide-100 download-section division">
            <div className="container white-color">
              <div className="row">	
                {/* DOWNLOAD TXT */}	
                <div className="col-lg-6">	
                  <div className="download-6-txt pl-20 wow fadeInUp" data-wow-delay="0.6s">
                    {/* Section ID */}	
                    <span className="section-id">Powerful Settings</span>
                    {/* Title */}
                    <h2 className="h2-md">Your payments are secure, every time</h2>
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque at purus ipsum neque dolor primis libero tempus, blandit 
                      posuere orci auctor purus euismod an aliquam quaerat purus
                    </p>
                    {/* STORE BADGES */}												
                    <div className="stores-badge">
                      {/* AppStore */}
                      <a href="#" className="store">
                        <img className="appstore" src={appstore} alt="appstore-badge" />
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
          {/* FOOTER-2
			============================================= */}
          <footer id="footer-2" className="footer division">
            <div className="container">
              {/* FOOTER CONTENT */}
              <div className="row">
                {/* FOOTER INFO */}
                <div className="col-lg-4">
                  <div className="footer-info mb-40">
                    {/* Footer Logo */}
                    <img className="footer-logo mb-25" src={logo} alt="footer-logo" />
                    {/* Text */}	
                    <p className="p-md">Aliquam nullam tempor sapien donec gravida congue ipsum and porta justo undo velna auctor a 
                      magna laoreet
                    </p>
                  </div>	
                </div>	
                {/* FOOTER LINKS */}
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="footer-links mb-40">
                    {/* Title */}
                    <h5 className="h5-xs">Company</h5>
                    {/* Footer Links */}
                    <ul className="foo-links clearfix">
                      <li><p className="p-md"><a href="#">About Us</a></p></li>
                      <li><p className="p-md"><a href="#">Careers</a></p></li>
                      <li><p className="p-md"><a href="#">Terms &amp; Privacy</a></p></li>
                      <li><p className="p-md"><a href="#">Privacy Policy</a></p></li>								
                    </ul>
                  </div>
                </div>
                {/* FOOTER LINKS */}
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="footer-links mb-40">
                    {/* Title */}
                    <h5 className="h5-xs">Discover</h5>
                    {/* Footer List */}
                    <ul className="foo-links clearfix">
                      <li><p className="p-md"><a href="#">Our Blog</a></p></li>	
                      <li><p className="p-md"><a href="#">Press &amp; Media</a></p></li>								
                      <li><p className="p-md"><a href="#">Advertising</a></p></li>
                      <li><p className="p-md"><a href="#">Site Map</a></p></li>								
                    </ul>
                  </div>	
                </div>
                {/* FOOTER LINKS */}
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="footer-links mb-40">
                    {/* Title */}
                    <h5 className="h5-xs">Download</h5>
                    {/* Footer List */}
                    <ul className="foo-links clearfix">
                      <li><p className="p-md"><a href="#">Android</a></p></li>																
                      <li><p className="p-md"><a href="#">iPhone &amp; iPad</a></p></li>
                      <li><p className="p-md"><a href="#">Windows</a></p></li>
                      <li><p className="p-md"><a href="#">MacOS</a></p></li>						
                    </ul>
                  </div>
                </div>
                {/* FOOTER LINKS */}
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="footer-links mb-40">
                    {/* Title */}
                    <h5 className="h5-xs">Help</h5>
                    {/* Footer Links */}
                    <ul className="foo-links clearfix">
                      <li><p className="p-md"><a href="#">Support</a></p></li>
                      <li><p className="p-md"><a href="#">Community</a></p></li>																
                      <li><p className="p-md"><a href="#">Life Chatting</a></p></li>									
                    </ul>
                  </div>
                </div>
              </div> {/* END FOOTER CONTENT */}
              {/* BOTTOM FOOTER */}
              <div className="bottom-footer">
                <div className="row d-flex align-items-center">
                  {/* FOOTER COPYRIGHT */}
                  <div className="col-md-6">
                    <div className="footer-copyright">
                      <p>© 2021 NordEx. All Rights Reserved</p>
                    </div>
                  </div>
                  {/* BOTTOM FOOTER LINKS */}
                  <div className="col-md-6">
                    <ul className="bottom-footer-list text-right clearfix">
                      <li className="first-li"><a href="#">Facebook</a></li>	
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">LinkedIn</a></li>		
                      <li className="last-li"><a href="#">Dribbble</a></li>
                    </ul>
                  </div>
                </div>  {/* End row */}
              </div>	{/* END BOTTOM FOOTER */}
            </div>	    {/* End container */}
          </footer>	{/* END FOOTER-2 */}
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

export default Demo_7
