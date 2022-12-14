import React, { Component } from 'react'
import appstore from "../assets/images/appstore.png"

import googleplay from "../assets/images/googleplay.png" 
import Companyinfo from '../components/Companyinfo';

export class Contacts extends Component {

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
         	{/* END FOOTER-3 */}
        </div>	{/* END PAGE CONTENT */}
        {/* EXTERNAL SCRIPTS
		============================================= */}	
        {/* Custom Script */}		
        {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}															
        {/*
		
		*/}
    <Companyinfo/>
      </div>
    
    )
  }
}

export default Contacts
