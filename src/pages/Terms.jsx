import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png"  
import appstore from "../assets/images/appstore.png"

export class Terms extends Component {
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
          {/* TERMS & PRIVACY
			============================================= */}
          <section id="terms-page" className="bg_whitesmoke hero-offset-nav pb-70 terms-section division">
            <div className="container">
              <div className="row">
                {/* TERMS CONTENT */}
                <div className="col-lg-10 offset-lg-1">
                  {/* TERMS TITLE */}
                  <div className="terms-title text-center">
                    {/* Title */}
                    <h2 className="h2-md">Our Terms &amp; Privacy</h2>
                    {/* Text */}
                    <p className="p-xl grey-color">Last Modified: April 04, 2021</p>
                  </div>	{/* END TERMS TITLE */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Text */}
                    <p className="p-lg">Donec sodales, nibh vel (the <span className="txt-700">"Terms"</span>) tristique aliquet, 
                      nisi libero suscipit diam, sed tempus ante nulla purus. Donec dolor magna, suscipit in magna dignissim, porttitor
                      an hendrerit diam. Nunc gravida ultrices faucibus. Aliquet lorem purus, quis mollis nisi laoreet at vitae. Mauris consequat tortor duis fermentum a massa 
                    </p>
                    {/* Text */}
                    <p className="p-lg">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus 
                      efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur undo dapibus 
                      libero. Quisque eu tristique neque blandit tristique justo aliquam. Aliquam <a href="#" className="skyblue-color">molestie nunc sapien justo</a>, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia 
                      elit. Vestibulum tincidunt tincidunt massa, et porttitor justo suscipit in magna dignissim
                    </p>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Processing of your data</h4>
                    {/* Text */}
                    <p className="p-lg">Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut 
                      purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a 
                      felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor
                    </p>
                    {/* Text */}
                    <p className="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor 
                      congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor 
                      gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                    </p>
                    {/* List */}	
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Email address</span> euismod purus pretium purus pretium ligula 
                          rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra 
                          a augue eget
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Payment data</span> vitae auctor a congue magna tempor sapien gravida
                          laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec, dictum tempor
                        </p>
                      </li>
                    </ul>
                    {/* Text */}
                    <p className="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue
                      magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                    </p>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Collection of information</h4>
                    {/* Text */}  
                    <p className="p-lg">In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate mullam molestie 
                      bibendum quis, aliquet massa elementum. Vestibulum ut sagittis massa lorem fusce cursus est.  Fusce non nulla vitae massa placerat vulputate vel purus. Aliqum blandit tempor undo sapien pulvinar consectetur nibh, vel imperdiet dui varius viverra.
                    </p>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX #3 */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Authorized user accounts and account security</h4>
                    {/* Text */}
                    <p className="p-lg">Suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. 
                      Praesent aliquet lorem purus, quis mollis nisi laoreet vitae. <a href="#" className="skyblue-color"> Mauris nec consequat tortor.</a> Duis fermentum a massa in convallis quisque eu interdum augue.
                    </p>
                    {/* Text */}  
                    <p className="p-lg">In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate mullam molestie 
                      bibendum quis, aliquet massa elementum. Vestibulum ut sagittis massa lorem fusce cursus est. Fusce non nulla vitae massa placerat vulputate vel purus. Aliqum blandit tempor undo
                    </p>	
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Prohibited conduct and content</h4>
                    {/* Text */}
                    <p className="p-lg">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus 
                      efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabiturac dapibus libero. Quisque 
                      eu tristique neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae <a href="#" className="skyblue-color">molestie nunc sapien justo</a>, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor justo.
                    </p>
                    {/* List */}	
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> 
                          vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue,  viverra a augue 
                          eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum  primis in cubilia laoreet augue donec
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Nemo ipsam egestas volute turpis dolores</span> ut aliquam quaerat
                          sodales sapien congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia undo pretium a purus pretium ligula
                        </p>
                      </li>
                    </ul>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX #5 */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Your responsibilities</h4>
                    {/* Text */}
                    <p className="p-lg">Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue
                      magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                    </p>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida
                          ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius congue cursus
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">Aliquam varius neque commodo purus vulputate pharetra bibendum in ante ornare metus</p></li>
                      <li className="list-item">
                        <p className="p-lg">Morbi dui lectus, lobortis sit amet felis nec, suscipit imperdiet sapien semper ultrices</p></li>
                      <li className="list-item">
                        <p className="p-lg">Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus 
                          et netus et malesuada famesa augue suscipit, luctus neque purus ipsum neque dolor primis
                        </p>
                      </li>
                    </ul>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Availability of services</h4>
                    {/* List */}	
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Nemo ipsam egestas volute turpis dolores</span> ut aliquam quaerat 
                          sodales sapien congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia undo pretium a purus pretium ligula
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> 
                          vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Fringilla risus nec, luctus mauris orci auctor</span> euismod purus
                          pretium purus pretium ligula  rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo
                          quis vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur and placerat imperdiet dui varius viverra
                        </p>
                      </li>
                    </ul>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Term for storing personal data</h4>
                    {/* Text */}
                    <p className="p-lg">Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla
                      purus. Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida
                    </p>
                    {/* Text */}
                    <p className="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue
                      magna impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida a donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                    </p>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Warranty limitations</h4>
                    {/* Text */}
                    <p className="p-lg">Ut non mauris libero. Sed consequat posuere nunc, eu porttitor neque dignissim donec bibendum a
                      sodales elit blandit. Suspendisse at finibus metus. Integer nulla quam, pulvinar fermentum a commodo undo pulvinar sed nisi. Sed augue turpis, mollis a vehicula ornare, dapibus
                    </p>
                    {/* Text */}
                    <p className="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue 
                      magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida an donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet egestas and luctus donec purus and blandit sodales
                    </p>								
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX #9 */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Notices</h4>
                    {/* Text */}
                    <p className="p-lg">Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet turpis urna 
                      augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur and placerat imperdiet dui varius viverra. Pellentesque ac massa lorem fusce cursus aliquet elementum 
                    </p>
                    {/* List */}	
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> 
                          vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg"><span className="txt-500">Fringilla risus nec, luctus mauris orci auctor</span> euismod purus
                          pretium purus pretium ligula  rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo quis vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur and placerat imperdiet dui varius viverra
                        </p>	
                      </li>
                    </ul>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Third Party Beneficiary</h4>
                    {/* Text */}
                    <p className="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue 
                      magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida at donec enim ipsum porta justo integer odio velna a purus ipsum primis in cubilia laoreet undo augue egestas luctus donec purus and blandit sodales
                    </p>
                    {/* Text */}
                    <p className="p-lg">Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla purus. Donec dolor suscipit and magna, in magna dignissim, porttitor hendrerit nunc gravida ultrices felis. Quisque eleifend arcu ac tellus cursus, nec vehicula diam tempus. Nam ut sapien et mi congue tincidunt. Phasellus in exneque.
                    </p>
                  </div>	{/* END TERMS BOX */}
                  {/* TERMS BOX */}
                  <div className="terms-box">
                    {/* Title */}
                    <h4 className="h4-sm">Other Terms</h4>
                    {/* Text */}
                    <p className="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue
                      magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien congue tempor gravida a
                      donec enim ipsum porta justo integer velna a purus efficitur ipsum primis in cubilia laoreet an augue egestas
                      luctus donec purus and blandit sodales
                    </p>
                    {/* Text */}
                    <p className="p-lg">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus 
                      efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus  ibero. Quisque 
                      undo tristique neque phasellus blandit non tristique justo ut aliquam. Aliquam vitae <a href="#" className="skyblue-color"> molestie nunc sapien justo</a>, aliquet molestie sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt
                    </p>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida 
                          ultrices a faucibus felis. Praesent aliquet tempus, blandit posuere ligula varius congue cursus
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">Aliquam varius neque commodo purus vulputate pharetra bibendum in ante ornare metus</p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">Morbi dui lectus, lobortis sit amet felis nec, suscipit imperdiet sapien semper ultrices. 
                          Nulla tincidunt purus volutpat at tincidunt. Habitant morbi tristique senectus et netus malesuada famesa augue suscipit a luctus neque purus ipsum neque dolor
                        </p>
                      </li>
                    </ul>
                    {/* Text */}
                    <p className="p-lg">Suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                      Praesent and aliquet lorem purus, quis mollis nisi laoreet vitae. <a href="#" className="skyblue-color"> Mauris nec consequat tortor</a>
                    </p>
                  </div>	{/* END TERMS BOX */}
                </div>	{/* END TERMS CONTENT */}
              </div>     {/* End row */}		
            </div>	    {/* End container */}
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	 {/* END TERMS & PRIVACY */}
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
                          <img className="googleplay-original"src={appstore} alt="googleplay-badge" />
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

export default Terms
