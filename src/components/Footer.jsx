import React, { Component } from 'react'
import logo from "../assets/images/logo.png";


export class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer-1" className="footer division">
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
          </footer>
      </div>
    )
  }
}

export default Footer
