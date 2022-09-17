import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png"  
import hero_1_img from "../assets/images/hero-1-img.png"
import app_logo from "../assets/images/app-logo.png"

import appstore from "../assets/images/appstore.png"

import googleplay from "../assets/images/googleplay.png"
import img_11 from "../assets/images/img-11.png"
import img_05 from "../assets/images/img-05.png"
import img_04 from "../assets/images/img-04.png"
import img_02 from "../assets/images/img-02.png"
import socials from "../assets/images/socials.png"
import img_01 from "../assets/images/img-01.png"

import appstore_white from "../assets/images/appstore-white.png"
import googleplay_white from "../assets/images/googleplay-white.png" 
import browsers from "../assets/images/browsers.png" 
import post_1 from   "../assets/images/blog/post-1-img.jpg"
import post_author from "../assets/images/post-author-1.jpg" 
import hike from   "../assets/images/hike.png"
import post11 from "../assets/images/blog/post-1-img.jpg"


export class Blog_listing extends Component {
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
        </div>  */}	
        {/* PAGE CONTENT
		============================================= */}	
        <div id="page" className="page">
          {/* HEADER
			============================================= */}
          {/* BLOG POSTS LISTING
			============================================= */}
          <section id="blog-page" className="bg_whitesmoke hero-offset-nav pb-60 blog-page-section division">
            <div className="container">
              {/* SECTION TITLE */}	
              <div className="row">	
                <div className="col-md-10 offset-md-1">
                  <div className="section-title text-center pc-50 mb-70">		
                    {/* Title */}	
                    <h3 className="h3-lg">Relevant news, tech stuff, and more for you. Welcome to our blog</h3>	
                    {/* Text */}	
                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                      tempus, blandit and cursus varius
                    </p>
                  </div>	
                </div>
              </div>
              {/* FEATURED POST */}
              <div className="rel blog-post featured-post wide-post">
                <div className="row d-flex align-items-center">
                  <div className="featured-badge text-center ico-30 bg_whitesmoke yellow-color">
                    <span className="flaticon-star" />
                  </div>
                  {/* BLOG POST IMAGE */}
                  <div className="col-lg-7 blog-post-img">
                    <img className="img-fluid" src={post11} alt="blog-post-image" />	
                  </div>
                  {/* BLOG POST TEXT */}
                  <div className="col-lg-5 blog-post-txt">
                    {/* Post Tag */}
                    <p className="p-md post-tag">NordEx News</p>	
                    {/* Post Link */}
                    <h5 className="h5-xl">
                      <a href="single-post.html">Tempor sapien donec gravida a suscipit and porta justo vitae</a>
                    </h5>
                    {/* Text */}
                    <p className="p-md">Aliqum mullam blandit vitae and tempor sapien and donec lipsum gravida a porta undo velna dolor
                      in cubilia laoreet
                    </p>
                    {/* Post Meta */}
                    <div className="post-meta">
                      <div className="post-author-avatar"><img src={post_author} alt="author-avatar" /></div>
                      <p>12 min read</p>
                    </div>	
                  </div>	{/* END BLOG POST TEXT */}
                </div>   {/* End row */}
              </div>	{/* END FEATURED POST */}
              {/* POSTS WRAPPER */}
              <div className="posts-wrapper">
                {/* BLOG POSTS CATEGORY */} 
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="h5-lg posts-category">Latest Articles</h5>
                  </div>
                </div>
                <div className="row">
                  {/* BLOG POST #1 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp" data-wow-delay="0.4s">	
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img className="img-fluid" src={post11} alt="blog-post-image" />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">NordEx News</p>	
                        {/* Post Link */}
                        <h5 className="h5-xs">
                          <a href="single-post.html">Tempor sapien donec gravida ipsum a porta justo vitae</a>
                        </h5>
                        {/* Text */}
                        <p className="p-md">Aliqum mullam blandit vitae and tempor sapien and donec lipsum gravida porta undo velna dolor</p>
                        {/* Post Meta */}
                        <div className="post-meta">
                          <div className="post-author-avatar"><img src={post_author} alt="author-avatar" /></div>
                          <p>12 min read</p>
                        </div>	
                      </div>
                    </div>
                  </div>	{/* END  BLOG POST #1 */}
                  {/* BLOG POST #2 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp" data-wow-delay="0.6s">	
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img className="img-fluid" src={post11} alt="blog-post-image" />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">Inspiration</p>	
                        {/* Post Link */}
                        <h5 className="h5-xs">
                          <a href="single-post.html">Aliquam augue impedit luctus neque purus an ipsum neque and dolor libero risus</a>
                        </h5>
                        {/* Text */}
                        <p className="p-md">The aliqum mullam vitae tempor sapien and donec lipsum gravida porta velna dolor vitae auctor</p>
                        {/* Post Meta */}
                        <div className="post-meta">
                          <div className="post-author-avatar"><img src={post_author} alt="author-avatar" /></div>
                          <p>8 min read</p>
                        </div>	
                      </div>	{/* END BLOG POST TEXT */}
                    </div>
                  </div>	{/* END  BLOG POST #2 */}
                  {/* BLOG POST #3 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp" data-wow-delay="0.8s">	
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img className="img-fluid" src={post11} alt="blog-post-image" />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">Tutorials</p>	
                        {/* Post Link */}
                        <h5 className="h5-xs">
                          <a href="single-post.html">Tempor sapien donec gravida ipsum and porta justo</a>
                        </h5>
                        {/* Text */}
                        <p className="p-md">The aliqum mullam vitae tempor sapien and donec lipsum gravida porta velna dolor vitae auctor</p>
                        {/* Post Meta */}
                        <div className="post-meta">
                          <div className="post-author-avatar"><img src={post_author} alt="author-avatar" /></div>
                          <p>22 min read</p>
                        </div>	
                      </div>	{/* END BLOG POST TEXT */}
                    </div>
                  </div>	{/* END  BLOG POST #3 */}
                  {/* BLOG POST #4 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp" data-wow-delay="0.4s">	
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img className="img-fluid" src={post11} alt="blog-post-image" />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">Extensions</p>	
                        {/* Post Link */}
                        <h5 className="h5-xs">
                          <a href="single-post.html">Neque purus an ipsum neque and dolor libero risus mullam blandit at tempor sapien</a>
                        </h5>
                        {/* Text */}
                        <p className="p-md">The aliqum mullam vitae tempor sapien and donec lipsum gravida porta velna dolor vitae auctor</p>
                        {/* Post Meta */}
                        <div className="post-meta">
                          <div className="post-author-avatar"><img src={post_author} alt="author-avatar" /></div>
                          <p>1 day read</p>
                        </div>	
                      </div>
                    </div>
                  </div>	{/* END  BLOG POST #4 */}
                  {/* BLOG POST #5 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp" data-wow-delay="0.6s">	
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img className="img-fluid" src={post11} alt="blog-post-image" />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">Community</p>	
                        {/* Post Link */}
                        <h5 className="h5-xs">
                          <a href="single-post.html">Tempor sapien donec gravida ipsum a porta justo vitae</a>
                        </h5>
                        {/* Text */}
                        <p className="p-md">The aliqum mullam vitae tempor sapien and donec lipsum gravida porta velna dolor vitae auctor</p>
                        {/* Post Meta */}
                        <div className="post-meta">
                          <div className="post-author-avatar"><img src={post_author} alt="author-avatar" /></div>
                          <p>54 min read</p>
                        </div>	
                      </div>	{/* END BLOG POST TEXT */}
                    </div>
                  </div>	{/* END  BLOG POST #5 */}
                  {/* BLOG POST #6 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp" data-wow-delay="0.8s">	
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img className="img-fluid" src={post11} alt="blog-post-image" />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">Extensions</p>	
                        {/* Post Link */}
                        <h5 className="h5-xs">
                          <a href="single-post.html">Lipsum gravida porta velna NordEx, donec gravida ipsum a porta justo tempor</a>
                        </h5>
                        {/* Text */}
                        <p className="p-md">The aliqum mullam vitae tempor sapien and donec lipsum gravida porta velna dolor vitae auctor</p>
                        {/* Post Meta */}
                        <div className="post-meta">
                          <div className="post-author-avatar"><img src={post_author} alt="author-avatar" /></div>
                          <p>4 hours read</p>
                        </div>	
                      </div>	{/* END BLOG POST TEXT */}
                    </div>
                  </div>	{/* END  BLOG POST #6 */}
                </div>  {/* End row */}
              </div>	{/* END POSTS WRAPPER */}
            </div>     {/* End container */}
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	{/* END BLOG POSTS LISTING */}
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

export default Blog_listing
