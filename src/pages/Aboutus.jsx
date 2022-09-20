import React, { Component } from 'react'
import about_hero_group_img from "../assets/images/team.webp"
import about_brand_1 from "../assets/images/brand-1.png"
import Beauty_Simplicity from   "../assets/images/img-02.png"
import team_1 from "../assets/images/aman.png"
import logo from "../assets/images/logo.png"

export class Aboutus extends Component {

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
       
        <div id="page" className="page">
         
          {/* PAGE HERO
			============================================= */}	
          <div id="about-page" className="rel purple_gradient bg_shape_01 page-hero-section division">
            <div className="container">	
              <div className="row">	
                <div className="col-lg-8 offset-lg-2">
                  <div className="hero-txt text-center white-color">
                    {/* Title */}
                    <h2 className="h2-md">Some Words About Us</h2>
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna
                    </p>
                  </div>
                </div>	
              </div>	  {/* End row */}
            </div>	   {/* End container */} 
          </div>	{/* END PAGE HERO */}	
          {/* ABOUT-2
			============================================= */}
          <div id="about-2" className="wide-90 about-section division">
            <div className="container">
              {/* TEXT BLOCK */}	
              <div className="about-2-txt pc-50">
                {/* SMALL TITLE */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="txt-block mb-35">
                      <h5 className="h5-lg">We believe in the power of simple design</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* LEFT COLUMN */}
                  <div className="col-md-6">
                    <div className="txt-block top-box">
                      {/* Text */}
                      <p className="p-lg">Gravida porta velna vitae auctor congue undo impedit nihil ligula risus. Mauris donec 
                        and ligula magnis sapien. Sagittis congue augue egestas volutpat egestas suscipit egestas a magna 
                        ipsum vitae a purus efficitur ipsum
                      </p>
                      {/* Text */}
                      <p className="p-lg">Gravida porta and vitae auctor congue magna an impedit nihil ligula risus mauris donec 
                        ligula magnis aliqum undo mullam at ligula risus. Vitae donec ligula magnis 
                      </p>
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
              {/* IMAGE BLOCK */}	
              <div className="row">
                <div className="col-md-12">
                  <div className="img-block mt-50 mb-70">
                    <img className="img-fluid" src={about_hero_group_img} alt="content-image" />
                  </div>
                </div>	
              </div>
              {/* TEXT BLOCK */}	
              <div className="about-2-txt pc-50">
                <div className="row">
                  {/* LEFT COLUMN */}
                  <div className="col-md-6">
                    <div className="txt-block top-box">
                      {/* Title */}	
                      <h5 className="h5-lg">We care about the details</h5>
                      {/* Text */}
                      <p className="p-lg">Gravida porta velna vitae auctor congue undo impedit nihil ligula risus. Mauris donec 
                        and ligula magnis sapien. Sagittis congue augue egestas volutpat egestas suscipit egestas a magna 
                        ipsum vitae a purus efficitur ipsum
                      </p>
                      {/* Text */}
                      <p className="p-lg">Gravida porta and vitae auctor congue magna an impedit nihil ligula risus mauris donec 
                        ligula magnis aliqum undo mullam at ligula risus. Vitae donec ligula magnis 
                      </p>
                    </div>
                  </div>	{/* END LEFT COLUMN */}
                  {/* RIGHT COLUMN */}
                  <div className="col-md-6">
                    <div className="txt-block">
                      {/* Title */}	
                      <h5 className="h5-lg">With knowledge, skill and hard work</h5>
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
              {/* BUTTON */}		
              <div className="row">
                <div className="col-md-12">
                  <div className="about-2-btn text-center mt-40">
                    <a href="#" className="btn btn-md btn-skyblue tra-skyblue-hover">Read the Reviews</a> 
                  </div>
                </div>
              </div>	{/* END BUTTON */}
            </div>	   {/* End container */}	
          </div>	{/* END ABOUT-2 */}
          {/* TESTIMONIALS-1
			============================================= */}
          <section id="reviews-1" className="rel bg_whitesmoke wide-100 reviews-section division">
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
          {/* CONTENT-2
			============================================= */}
          <section id="content-2" className="wide-50 content-section division">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block left-column pc-20 mb-40 wow fadeInRight" data-wow-delay="0.6s">

                  {/* All we do is dream left side image  */}
                    <img className="img-fluid" src={Beauty_Simplicity} alt="content-image" />
                  </div>
                </div>
                {/* TEXT BLOCK */}	
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                    {/* Section ID */}	
                    <span className="section-id grey-color">Beauty of Simplicity</span>
                    {/* Title */}	
                    <h2 className="h2-md">All we do is dream and craft amazing digital products</h2>
                    {/* Text */}	
                    <p className="p-lg">Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet augue 
                      luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat 
                      sodales a sapien
                    </p>
                  </div>
                </div>	{/* END TEXT BLOCK */}	
              </div>	   {/* End row */}
            </div>	   {/* End container */}
          </section>	{/* END CONTENT-2 */}
          {/* BRANDS-2
			============================================= */}
          <section id="brands-2" className="pb-60 brands-section division">
            <div className="container">	
              {/* BRANDS TITLE */}
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="brands-title text-center">
                    <h4 className="h4-md">You might know NordEx from:</h4>
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
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
                      </a>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="brand-logo">
                      <a href="#">
                        <img className="img-fluid" src={about_brand_1} alt="brand-logo" />
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
          {/* TEAM-1
			============================================= */}
          <section id="team-1" className="wide-60 team-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-70">		
                    {/* Title */}	
                    <h2 className="h2-md">One Team Many Talents</h2>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius magna tempus a dolor
                    </p>
                  </div>	
                </div>
              </div>
              {/* TEAM MEMBERS HOLDER */}	
              <div className="team-members-holder pc-20 text-center">
                <div className="row">
                
                  
                  
                  {/* TEAM MEMBER #4 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="team-member wow fadeInUp" data-wow-delay="1s">
                      {/* Team Member Photo */}
                      <div className="team-member-photo pc-10">
                        <img className="img-fluid zoom" src={team_1} alt="team-member-foto" />
                      </div>
                      {/* Team Member Data */}		
                      <div className="team-member-data">													
                        <h5 className="h5-sm">Megan Coleman</h5>
                        <p>UX / UI Designer</p>
                        <span><a href="#" className="grey-color">@megancoleman</a></span>	
                      </div>	
                    </div>
                  </div>	{/* END TEAM MEMBER #4 */}
                  {/* TEAM MEMBER #5 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="team-member wow fadeInUp" data-wow-delay="0.4s">
                      {/* Team Member Photo */}
                      <div className="team-member-photo pc-10">
                        <img className="img-fluid zoom" src={team_1} alt="team-member-foto" />
                      </div>
                      {/* Team Member Data */}		
                      <div className="team-member-data">	
                        <h5 className="h5-sm">Charlotte Johnson</h5>
                        <p>Quality Assurance</p>
                        <span><a href="#" className="grey-color">@charlottejohnson</a></span>
                      </div>	
                    </div>									
                  </div>	{/* END TEAM MEMBER #5 */}
                  {/* TEAM MEMBER #6 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="team-member wow fadeInUp" data-wow-delay="0.6s">
                      {/* Team Member Photo */}
                      <div className="team-member-photo pc-10">
                        <img className="img-fluid zoom" src={team_1} alt="team-member-foto" />
                      </div>
                      {/* Team Member Data */}		
                      <div className="team-member-data">													
                        <h5 className="h5-sm">Olivia Steiner</h5>
                        <p>Head of Marketing</p>
                        <span><a href="#" className="grey-color">@oliviasteiner</a></span>
                      </div>	
                    </div>											
                  </div>	{/* END TEAM MEMBER #6 */}
                  {/* TEAM MEMBER #7 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="team-member wow fadeInUp" data-wow-delay="0.8s">
                      {/* Team Member Photo */}
                      <div className="team-member-photo pc-10">
                        <img className="img-fluid zoom" src={team_1} alt="team-member-foto" />
                      </div>
                      {/* Team Member Data */}		
                      <div className="team-member-data">														
                        <h5 className="h5-sm">Mark Brayton</h5>
                        <p>Customer Care</p>
                        <span><a href="#" className="grey-color">@markbrayton</a></span>	
                      </div>
                    </div>	
                  </div>	{/* END TEAM MEMBER #7 */}
                  {/* TEAM MEMBER #8 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="team-member wow fadeInUp" data-wow-delay="1s">
                      {/* Team Member Photo */}
                      <div className="team-member-photo pc-10">
                        <img className="img-fluid zoom" src={team_1} alt="team-member-foto" />
                      </div>
                      {/* Team Member Data */}		
                      <div className="team-member-data">	
                        <h5 className="h5-sm ">Grow With Us</h5>
                        <span><a href="mailto:youremail@mail.com" className="grey-color">hireme@domain.com</a></span>
                        <span><a href="mailto:youremail@mail.com" className="grey-color">hireme1@domain.com</a></span>
                      </div>	
                    </div>
                  </div>	{/* END TEAM MEMBER #8 */}
                </div>   {/* End row */}
              </div>	{/* TEAM MEMBERS HOLDER */}	   
            </div>	    {/* End container */}
          </section>	{/* END TEAM-1 */}
          {/* NEWSLETTER-1
			============================================= */}
          <section id="newsletter-1" className="pb-20 newsletter-section division">
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
          {/* FOOTER-1
			============================================= */}
          	{/* END FOOTER-1 */}
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

export default Aboutus
