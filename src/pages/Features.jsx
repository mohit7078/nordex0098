import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png" 
import appstore from "../assets/images/appstore.png"
import facebook from   "../assets/images/img-01.png"
import  Africa from "../assets/images/img-02.png"
import threeimg from "../assets/images/img-03.png"
import tablet from  "../assets/images/tablet.png"
import browsers from "../assets/images/browsers.png" 
import Chillax from "../assets/images/img-08.png"



export class Features extends Component {
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
          <header id="header" className="header white-menu navbar-dark">
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
          {/* CONTENT-3
			============================================= */}
          <section id="content-3" className="bg_whitesmoke hero-offset-nav pb-60 content-section division">
            <div className="container">
              {/* CONTENT BOX-1 */}
              <div id="cb-1-1" className="cbox-1 pb-25">
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
              </div>	{/* END CONTENT BOX-1 */}
              {/* CONTENT BOX-2 */}
              <div id="cb-1-2" className="cbox-1">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div className="img-block left-column pc-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                      <img className="img-fluid" src={Africa} alt="content-image" />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}	
                  <div className="col-md-7 col-lg-6">
                    <div className="txt-block right-column pc-30 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                      {/* Section ID */}	
                      <span className="section-id grey-color">Perfect Integration</span>
                      {/* Title */}	
                      <h2 className="h2-md">Work smarter with powerful features</h2>
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
              </div>	{/* END CONTENT BOX-2 */}
            </div>     {/* End container */}
          </section>	{/* END CONTENT-3 */}	
          {/* CONTENT-1
			============================================= */}
          <section id="content-1" className="bg_whitesmoke pb-60 content-section division">
            <div className="container">
              <div className="row d-flex align-items-center m-row">
                {/* TEXT BLOCK */}	
                <div className="col-md-7 col-lg-6 m-bottom">
                  <div className="txt-block left-column mb-40 wow fadeInRight" data-wow-delay="0.6s">
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
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6 m-top">
                  <div className="img-block right-column pc-20 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                    <img className="img-fluid" src={threeimg} alt="content-image" />
                  </div>
                </div>
              </div>	   {/* End row */}
            </div>	   {/* End container */}
          </section>	{/* END CONTENT-1 */}
          {/* FEATURES-5
			============================================= */}
          <section id="features-5" className="bg_whitesmoke pb-50 features-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">		
                    {/* Title */}	
                    <h2 className="h2-md">Get Ready to Be Surprised</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
                    </p>
                  </div>	
                </div>
              </div>
              {/* FEATURES-5 WRAPPER */}
              <div className="fbox-5-wrapper pc-30">
                <div className="row">
                  {/* FEATURE BOX #1 */}
                  <div id="fb-5-1" className="col-md-6">
                    <div className="fbox-5 pc-25 mb-40 wow fadeInUp" data-wow-delay="0.4s">
                      {/* Icon */}
                      <div className="fbox-ico ico-70 stateblue-color"><span className="flaticon-ads" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Friendly Interface</h5>
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
                      <div className="fbox-ico ico-70 stateblue-color"><span className="flaticon-switch" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Powerful Options</h5>
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
                      <div className="fbox-ico ico-70 stateblue-color"><span className="flaticon-pantone" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Customization</h5>
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
                      <div className="fbox-ico ico-70 stateblue-color"><span className="flaticon-user-1" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Multiple Accounts</h5>
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
                      <div className="fbox-ico ico-70 stateblue-color"><span className="flaticon-browser" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Online Verification</h5>
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
                      <div className="fbox-ico ico-70 stateblue-color"><span className="flaticon-spam" /></div>
                      {/* Text */}
                      <div className="fbox-txt">
                        {/* Title */}
                        <h5 className="h5-sm">Spam Protection</h5>
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
          <section id="content-13" className="bg_purple_img wide-60 content-section division">
            <div className="container white-color">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}		
                <div className="col-md-6 col-xl-6">
                  <div className="txt-block left-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                    {/* Section ID */}	
                    <span className="section-id">Totally Optimized</span>
                    {/* Title */}	
                    <h2 className="h2-md">Intuitive features, powerful results</h2>
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
                    {/* Button */}	
                    <a href="#content-11" className="btn btn-tra-white skyblue-hover">Find Out More</a>
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
          {/* CONTENT-11
			============================================= */}
          <section id="content-11" className="bg_whitesmoke wide-100 content-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-60">		
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
              </div>
              {/* DOWNLOAD BUTTON */}		
              <div className="row">
                <div className="col-md-12">
                  <div className="content-11-btn ico-20 ico-right mt-60 wow fadeInUp" data-wow-delay="0.6s">
                    {/* Button */}
                    <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="video-popup2 btn btn-md btn-tra-grey skyblue-hover">
                      See NordEx in Action <span className="flaticon-play-button" />
                    </a> 
                    {/* OS Prerequisite */}
                    <span className="os-version">Available on Android, iOS and macOS</span>
                  </div>
                </div>
              </div>	{/* END DOWNLOAD BUTTON */}
            </div>	   {/* End container */}
          </section>	{/* END CONTENT-11 */}
          {/* CONTENT-2
			============================================= */}
          <section id="content-2" className="bg_whitesmoke pb-50 content-section division">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block left-column pc-20 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                    <img className="img-fluid" src={Chillax} alt="content-image" />
                  </div>
                </div>
                {/* TEXT BLOCK */}	
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                    {/* CONTENT BOX #1 */}
                    <div className="cbox mb-30">
                      {/* Icon */}
                      <div className="cbox-ico ico-65 stateblue-color"><span className="flaticon-tasks" /></div> 
                      {/* Text */}
                      <div className="cbox-txt">
                        <h5 className="h5-sm">Add Notes &amp; Tags</h5>
                        <p className="p-lg">Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum primis potenti at
                          suscipit quaerat ultrice tellus viverra
                        </p>
                      </div>
                    </div>	
                    {/* CONTENT BOX #2 */}
                    <div className="cbox mb-30">
                      {/* Icon */}
                      <div className="cbox-ico ico-65 stateblue-color"><span className="flaticon-sync" /></div> 
                      {/* Text */}
                      <div className="cbox-txt">
                        <h5 className="h5-sm">Convert Photo &amp; Video</h5>
                        <p className="p-lg">Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum primis potenti at
                          suscipit quaerat ultrice tellus viverra
                        </p>
                      </div>
                    </div>	
                    {/* CONTENT BOX #3 */}
                    <div className="cbox">
                      {/* Icon */}
                      <div className="cbox-ico ico-65 stateblue-color"><span className="flaticon-image" /></div> 
                      {/* Text */}
                      <div className="cbox-txt">
                        <h5 className="h5-sm">Share Files &amp; Media</h5>
                        <p className="p-lg">Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum primis potenti at
                          suscipit quaerat ultrice tellus viverra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>	{/* END TEXT BLOCK */}	
              </div>	   {/* End row */}
            </div>	   {/* End container */}
          </section>	{/* END CONTENT-2 */}
          {/* DOWNLOAD-6
			============================================= */}
          <section id="download-6" className="bg_mobile wide-100 download-section division">
            <div className="container white-color">
              <div className="row">	
                {/* DOWNLOAD TXT */}	
                <div className="col-lg-6">	
                  <div className="download-6-txt pl-20 wow fadeInUp" data-wow-delay="0.6s">
                    {/* Section ID */}	
                    <span className="section-id">Powerful Settings</span>
                    {/* Title 	*/}	
                    <h2 className="h2-md">Take Full Advantage of Smart Features</h2>	
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
          <footer id="footer-2" className="bg_whitesmoke footer division">
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

export default Features
