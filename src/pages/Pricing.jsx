import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png"  
import app_logo from "../assets/images/app-logo.png"

import appstore from "../assets/images/appstore.png"

export class Pricing extends Component {



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
         	{/* END HEADER */}
          {/* PRICING-3
			============================================= */}
          <section id="pricing-3" className="bg_whitesmoke hero-offset-nav pb-50 pricing-section division">
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
              <div className="row text-center">
                {/* FREE PLAN */}
                <div className="col-md-4">
                  <div className="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.4s">	
                    {/* Plan Price  */}
                    <div className="pricing-plan bg_white">
                      <h5 className="h5-md">NordEx Free</h5>									
                      <sup className="dark-color">$</sup>								
                      <span className="dark-color">0.00</span>
                      <p className="dark-color">Get NordEx For Free</p> 
                      <p className="p-sm">The price per one user. Change or cancel your plan anytime</p>
                      {/* Pricing Table Button  */}
                      <a href="#" className="btn btn-tra-grey skyblue-hover mb-15">Download Now</a>
                      {/* Pricing Trial Link */}	
                      <a href="#" className="pricing-trial-link">Read the FAQs</a>
                    </div>	
                    {/* Plan Description */}
                    <div className="pricing-description bg_white">
                      <ul className="features">
                        <li><p className="p-lg">Sync 1 Account</p></li>
                        <li><p className="p-lg">2 GB of Cloud Storage</p></li>
                        <li><p className="p-lg">Weekly Data Backup</p></li>
                        <li><p className="p-lg">Files Sharing</p></li>
                        <li><p className="p-lg">SPAM Protection</p></li>							
                        <li><p className="p-lg">12/5 Email Support</p></li>	
                      </ul>
                    </div>
                  </div>
                </div>	{/* END PFREE PLAN */}
                {/* MONTHLY PLAN */}
                <div className="col-md-4">
                  <div className="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.6s">	
                    {/* Plan Price  */}
                    <div className="pricing-plan bg-white">
                      <h5 className="h5-md">Monthly Billing</h5>	
                      <sup className="dark-color">$</sup>								
                      <span className="dark-color">6.25</span>
                      <p className="dark-color">Per Month</p>
                      <p className="p-sm">The price per one user. Change or cancel your plan anytime</p>
                      {/* Pricing Table Button */}
                      <a href="#" className="btn btn-tra-grey skyblue-hover mb-15">Select Plan</a>
                      {/* Pricing Trial Link */}	
                      <a href="#" className="pricing-trial-link">Download 14-day trial</a>
                    </div>	
                    {/* Plan Description */}
                    <div className="pricing-description bg-white">
                      <ul className="features">
                        <li><p className="p-lg">Sync Unlimited Accounts</p></li>
                        <li><p className="p-lg">20 GB of Cloud Storage</p></li>
                        <li><p className="p-lg">Daily Data Backup</p></li>
                        <li><p className="p-lg">Files Sharing</p></li>
                        <li><p className="p-lg">SPAM Protection</p></li>
                        <li><p className="p-lg">No Ads. No Trackers</p></li>								
                        <li><p className="p-lg">24/7 Email Support</p></li>
                      </ul>
                    </div>
                  </div>
                </div>	{/* END MONTHLY PLAN */}
                {/* ANNUAL PLAN */}
                <div className="col-md-4">
                  <div className="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.8s">	
                    {/* Plan Price  */}
                    <div className="pricing-plan highlight crocus_gradient white-color">
                      <h5 className="h5-md">Annual Billing</h5>	
                      <sup>$</sup>								
                      <span>5.69</span>
                      <p>Per Month</p>
                      <p className="p-sm">The price per one user. Change or cancel your plan anytime</p>
                      {/* Pricing Table Button */}
                      <a href="#" className="btn btn-tra-white white-hover mb-15">Select Plan</a>
                      {/* Pricing Trial Link */}	
                      <a href="#" className="pricing-trial-link">Download 14-day trial</a>
                    </div>	
                    {/* Plan Description */}
                    <div className="pricing-description bg-white">
                      <ul className="features">
                        <li><p className="p-lg">Sync Unlimited Accounts</p></li>
                        <li><p className="p-lg">20 GB of Cloud Storage</p></li>
                        <li><p className="p-lg">Daily Data Backup</p></li>
                        <li><p className="p-lg">Files Sharing</p></li>
                        <li><p className="p-lg">SPAM Protection</p></li>
                        <li><p className="p-lg">No Ads. No Trackers</p></li>								
                        <li><p className="p-lg">24/7 Email Support</p></li>
                      </ul>
                    </div>
                  </div>
                </div>	{/* END ANNUAL PLAN */}
              </div>	{/* END PRICING TABLES */}
            </div>	   {/* End container */}
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	{/* END PRICING-3*/}
          {/* ABOUT-2
			============================================= */}
          <div id="about-2" className="bg_whitesmoke pb-80 about-section division">
            <div className="container">
              {/* TEXT BLOCK */}	
              <div className="about-2-txt pc-50">
                {/* SMALL TITLE */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="txt-block text-center mb-40">
                      <h5 className="h5-xl">All of our pricing plans include:</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* LEFT COLUMN */}
                  <div className="col-md-6">
                    <div className="txt-block top-box">
                      {/* List */}	
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">Fringilla risus, luctus mauris orci auctor purus euismod and pretium purus pretium ligula
                            rutrum tempor
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Aliqum mullam blandit tempor sapien gravida a donec ipsum, porta justo. Velna vitae 
                            auctor a congue magna and donec nihil impedit ligula risus.mauris donec
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Quaerat sodales sapien an euismod purus blandit purus ipsum primis in cubilia laoreet 
                            augue luctus dolor 
                          </p>
                        </li>
                      </ul>	{/* End List */}	
                    </div>
                  </div>	{/* END LEFT COLUMN */}
                  {/* RIGHT COLUMN */}
                  <div className="col-md-6">
                    <div className="txt-block">
                      {/* List */}	
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">Aliqum mullam blandit tempor sapien gravida a donec ipsum, porta justo. Velna vitae 
                            auctor a congue magna and donec nihil impedit ligula risus.mauris donec
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Fringilla risus, luctus mauris orci auctor purus euismod and pretium purus pretium ligula
                            rutrum tempor
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Quaerat sodales sapien an euismod purus blandit purus ipsum primis in cubilia laoreet 
                            augue luctus dolor 
                          </p>
                        </li>
                      </ul>	{/* End List */}	
                    </div>
                  </div>	{/* END RIGHT COLUMN */}	
                </div>
              </div>	{/* END TEXT BLOCK */}	
            </div>	   {/* End container */}	
          </div>	{/* END ABOUT-2 */}
          {/* STATISTIC-1
			============================================= */}
          <div id="statistic-1" className="bg_whitesmoke pb-100 statistic-section division">
            <div className="container">
              {/* STATISTIC-1 WRAPPER */}
              <div className="statistic-1-wrapper text-center">
                <div className="row">
                  {/* STATISTIC BLOCK #1 */}
                  <div id="sb-1-1" className="col-sm-6 col-lg-3">							
                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.4s">	
                      {/* Icon */}
                      <div className="statistic-1-ico ico-70 grey-color"><span className="flaticon-mobile-phone" /></div>
                      {/* Digit */}
                      <h2 className="h2-xl statistic-number"><span className="count-element">28</span>%</h2>
                      {/* Text */}
                      <h5 className="h5-xs">Faster Access</h5>
                    </div>								
                  </div>
                  {/* STATISTIC BLOCK #2 */}
                  <div id="sb-1-2" className="col-sm-6 col-lg-3">										
                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.6s">	
                      {/* Icon */}
                      <div className="statistic-1-ico ico-70 grey-color"><span className="flaticon-analytics-1" /></div>
                      {/* Digit */}
                      <h2 className="h2-xl statistic-number"><span className="count-element">47</span>%</h2>
                      {/* Text */}
                      <h5 className="h5-xs">App Productivity</h5>
                    </div>							
                  </div>
                  {/* STATISTIC BLOCK #3 */}
                  <div id="sb-1-3" className="col-sm-6 col-lg-3">							
                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.8s">
                      {/* Icon */}
                      <div className="statistic-1-ico ico-70 grey-color"><span className="flaticon-padlock" /></div>
                      {/* Digit */}
                      <h2 className="h2-xl statistic-number"><span className="count-element">54</span>%</h2>
                      {/* Text */}
                      <h5 className="h5-xs">Secure Access</h5>	
                    </div>						
                  </div>
                  {/* STATISTIC BLOCK #4 */}
                  <div id="sb-1-4" className="col-sm-6 col-lg-3">							
                    <div className="statistic-block wow fadeInUp" data-wow-delay="1s">		
                      {/* Icon */}
                      <div className="statistic-1-ico ico-70 grey-color"><span className="flaticon-phone-2" /></div>
                      {/* Digit */}
                      <h2 className="h2-xl statistic-number"><span className="count-element">36</span>%</h2>
                      {/* Text */}	
                      <h5 className="h5-xs">Battery Saving</h5>	
                    </div>						
                  </div>
                </div>	{/* End row */}
              </div>	{/* END STATISTIC-1 WRAPPER */}
            </div>	 {/* End container */}		
          </div>	 {/* END STATISTIC-1 */}	
          {/* FAQs-2
			============================================= */}
          <section id="faqs-2" className="bg_whitesmoke pb-100 faqs-section division">				
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
                      <div className="question wow fadeInUp" data-wow-delay="1s">
                        {/* Question */}
                        <h5 className="h5-sm">Do you have a free trial?</h5>
                        {/* Answer */}
                        <p className="p-lg">Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and 
                          quisque gravida donec neque. Blandit justo aliquam molestie nunc sapien justo
                        </p>
                      </div>
                      {/* QUESTION #5 */}
                      <div className="question wow fadeInUp" data-wow-delay="1.2s">
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
                      <div className="question wow fadeInUp" data-wow-delay="1.4s">
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
                      Have more questions? <a href="contacts.html" className="skyblue-color">Ask your question here</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>	   {/* End container */}		
          </section>	{/* END FAQs-2 */}
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

export default Pricing
