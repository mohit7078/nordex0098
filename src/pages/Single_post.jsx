import React, { Component } from 'react'
import logo from "../assets/images/logo.png"
import logo_white from "../assets/images/logo-white.png"  
import post_author from "../assets/images/post-author-1.jpg"
import news from "../assets/images/blog/inner-img-1.jpg"
import Flash from  "../assets/images/blog/post-4-img.jpg"


export class Single_post extends Component {
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
          </header>	
          <section id="single-post" className="bg_whitesmoke hero-offset-nav pb-80 single-post-section division">
            <div className="container">
              {/* SINGLE POST CONTENT */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="single-post-wrapper">
                    {/* SINGLE POST TITLE */}
                    <div className="single-post-title">
                      {/* CATEGORY */}
                      <p className="p-lg post-tag skyblue-color">NordEx News</p>
                      {/* TITLE */}
                      <h4 className="h4-xl">Aliquam augue NordEx, luctus neque purus an ipsum and neque dolor libero</h4>
                      {/* POST DATA */}
                      <div className="post-data clearfix">
                        {/* Author Avatar */}
                        <div className="post-author-avatar">
                          <img src={post_author} alt="author-avatar" />
                        </div>
                        {/* Author Data */}
                        <div className="post-author">
                          <span>Gordon Wright <a href="#" className="follow-author">Follow</a></span>	
                          <span>April 05 - 12 min read</span>	
                        </div>
                      </div>	{/* END POST DATA */}
                    </div>	{/* END SINGLE POST TITLE */}
                    {/* BLOG POST TEXT */}
                    <div className="single-post-txt">
                      {/* Text */}
                      <p className="p-lg">Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida donec 
                        and ipsum aporta justo integer at odio velna. Maecenas gravida porttitor nunc vehicula magna luctus tempor. Quisque vel laoreet turpis. An augue viverra a augue eget, dictum tempor pulvinar donec ociis et magnis 
                        sapien imperdiet dui varius placerat imperdiet ipsum varius viverra augue egestas luctus donec purus and 
                        blandit impedit ligula risus. Mauris donec
                      </p>
                    </div>	{/* END BLOG POST TEXT */}
                    {/* BLOG POST INNER IMAGE */}
                    <div className="post-inner-img">
                      <img className="img-fluid" src={news} alt="blog-post-image" />		
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="single-post-txt">
                      {/* Text */}
                      <p className="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor 
                        massa congue magna nihil impedit ligula risus. Mauris donec ociis and magnis sapien etiam sapien sagittis 
                        congue tempor a gravida donec enim ipsum porta justo integer undo odio velna. Maecenas gravida porttitor nunc, quis vehicula magna at luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum 
                        tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem 
                        fusce eu tempor gravida porttitor cursus fusce
                      </p>
                      {/* List */}
                      <ol className="digit-list">
                        <li><p className="p-lg">Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec ociis magnis 
                            sapien etiam and sapien sem sagittis congue tempor gravida porttitor nunc, quis vehicula magna 
                          </p></li>
                        <li><p className="p-lg">Placerat imperdiet dui varius consectetur nibh, vel imperdiet dui varius viverra donec 
                            ociis magnis
                          </p></li>
                        <li><p className="p-lg">Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus. Mauris donec et magnis sapien etiam sapien rutrum tempor mullam blandit tempor sapien and gravida
                          </p></li>
                        <li><p className="p-lg">Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet turpis 
                            urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur and placerat donec 
                          </p></li>
                      </ol>
                      {/* Small Title */}
                      <h5 className="h5-md mt-50">Praesent aliquet tempus<br />
                        (tempor gravida ipsum as an example)
                      </h5>
                      {/* List */}
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida 
                            ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Fringilla risus nec, luctus mauris orci auctor euismod purus pretium purus pretium 
                            ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Quaerat sodales sapien undo euismod purus blandit velna vitae auctor a congue magna 
                            tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam 
                            pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                          </p>
                        </li>
                      </ul>
                      {/* Text */}
                      <p className="p-lg">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus 
                        efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur dapibus libero. Mauris 
                        donec ociis a neque. Phasellus blandit tristique justo and aliquam vitae molestie nunc sapien justo, aliquet 
                        non molestie augue, venenatis nec purus aliquam eget lacinia elit tincidunt 
                      </p> 
                      {/* BLOG POST INNER IMAGES */}
                      <div className="post-inner-img">
                        <div className="row">
                          {/* Inner Image #1 */}
                          <div className="col-md-6 top-img blog-post-img">
                            {/* Image */}
                            <img className="img-fluid" src={Flash} alt="blog-post-image" />		
                            {/* Text */}
                            <p>Maecenas gravida porttitor nunc magna</p>
                          </div>
                          {/* Inner Image #2 */}
                          <div className="col-md-6 blog-post-img">
                            {/* Image */}
                            <img className="img-fluid"  src={Flash} alt="blog-post-image" />		
                            {/* Text */}
                            <p>Gravida porttitor nunc, quis vehicula tempor</p>
                          </div>
                        </div>
                      </div>	{/* END INNER IMAGES */}
                      {/* Text */}  
                      <p className="p-lg">Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus and netus 
                        laoreet malesuada famesa augue suscipit, luctus at neque purus neque dolor primis. Nemo sodales ipsam egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue eget gravida laoreet turpis urna augue, viverra a augue eget, dictum dictum tempor diam pulvinar consectetur 
                      </p>
                      {/* List */}
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida 
                            ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Fringilla risus nec, luctus mauris orci auctor euismod purus pretium at purus pretium 
                            ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo
                          </p>
                        </li>
                      </ul>
                      {/* Small Title */}
                      <h5 className="h5-md">Egestas volutpat egestas</h5>
                      {/* Text */}  
                      <p className="p-lg">In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum 
                        quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus aliqum mullam blandit 
                      </p>
                      {/* Text */}
                      <p className="p-lg">Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet a turpis urna
                        augue, viverra a augue eget, dictum tempor diam. Sed pulvinar nibh, vel imperdiet congue varius viverra.
                        Sapien justo massa lorem. Fusce eu cursus non nulla vitae massa placerat purus.  Sagittis congue augue egestas
                        volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec
                      </p>
                      {/* BLOG POST INNER IMAGE */}
                      <div className="post-inner-img">
                        <div className="video-preview pc-15">	
                          {/* Play Icon */} 
                          <a className="video-popup1" href="https://www.youtube.com/embed/SZEflIVnhH8">							
                            <div className="video-btn video-btn-lg bg_rose ico-75">	
                              <div className="video-block-wrapper"><span className="flaticon-play-button-1" /></div>
                            </div>
                          </a>
                          {/* Preview Image */} 
                          <img className="img-fluid" src={news} alt="blog-post-image" />
                        </div>	
                      </div>
                      {/* Small Title */}
                      <h5 className="h5-md">Vitae massa placerat vulputate</h5>
                      {/* Text */}  
                      <p className="p-lg">Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus 
                        vulputate ligula molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis purus massa lorem. 
                        Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate purus. Aliqum mullam a blandit tempor 
                        posuere ligula varius congue cursus congue magna impedit ligula
                      </p>
                      {/* Text */}
                      <p className="p-lg"><span className="txt-500">Aliqum  mullam blandit tempor sapien gravida donec ipsum</span>, at porta 
                        justo. Velna vitae and auctor congue magna impedit ligula risus. Mauris donec ociis magnis sapien etiam 
                        sapien sagittis congue posuere ligula varius congue cursus tempor gravida donec integer
                      </p>
                      {/* Small Title */}
                      <h5 className="h5-md">Cursus non nulla vitae massa</h5>
                      {/* List */}
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Gravida ultrices 
                            felis faucibus aliquet undo tempus, blandit posuere ligula varius congue cursus nulla vitae massa placerat vulputate tempor sapien gravida
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Aliquam varius neque commodo purus  tempor sapien gravida vulputate pharetra bibendum 
                            in ante ornare
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">Morbi dui lectus, lobortis felis nec, suscipit imperdiet sapien semper ultrices. Nulla 
                            tincidunt volutpat and tincidunt. Habitant morbi tristique senectus et netus malesuada famesa augue
                            suscipit, luctus neque purus ipsum
                          </p>
                        </li>
                      </ul>
                      {/* Text */}
                      <p className="p-lg">Curabitur ac dapibus libero quisque eu tristique neque sellus blandit tristique justo ut aliquam.
                        Aliquam vitae at molestie nunc sapien justo, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia
                        tincidunt massa justo. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed
                        pulvinar consectetur nibh, vel imperdiet varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est. 
                        Fusce non nulla vitae massa placerat bulum tincidunt tincidunt massa, et porttitor justo viverra a augue eget
                      </p> 
                    </div>	{/* END BLOG POST TEXT */}
                    {/* SINGLE POST SHARE LINKS */}
                    <div className="row post-share-links d-flex align-items-center">
                      {/* POST TAGS */}
                      <div className="col-md-9 col-xl-8 post-tags-list">
                        <span><a href="#">Life</a></span>	
                        <span><a href="#">Ideas</a></span>
                        <span><a href="#">Story</a></span>	
                        <span><a href="#">Web Design</a></span>										
                      </div>
                      {/* POST SHARE ICONS */}
                      <div className="col-md-3 col-xl-4 post-share-list text-right">
                        <ul className="share-social-icons ico-25 text-center clearfix">														
                          <li><a href="#" className="share-ico ico-facebook"><span className="flaticon-twitter" /></a></li>
                          <li><a href="#" className="share-ico ico-twitter"><span className="flaticon-facebook" /></a></li>
                          <li><a href="#" className="share-ico ico-like"><span className="flaticon-bookmark-white" /></a></li>			
                        </ul>
                      </div>
                    </div>	{/* END SINGLE POST SHARE */}
                    {/* OTHER POSTS
								============================================= */}
                    <div className="other-posts">
                      <div id="op-row" className="row d-flex align-items-center">
                        {/* Previous Post */}
                        <div className="col-md-5">
                          <div className="prev-post mb-30 pr-45">								
                            <h5 className="h5-sm">Previous Post</h5>
                            <a href="single-post.html">Congue bulum NordEx tincidunt at purus pretium magnis</a>
                          </div>
                        </div>
                        {/* All Posts */}
                        <div className="col-md-2 text-center">
                          <div className="all-posts ico-35 mb-30">		
                            <a href="blog-listing.html"><span className="flaticon-four-black-squares" /></a>
                          </div>
                        </div>
                        {/* Next Post */}
                        <div className="col-md-5 text-right">
                          <div className="next-post mb-30 pl-45">		
                            <h5 className="h5-sm">Next Post</h5>
                            <a href="single-post.html">8 neque dolor primis a libero tempus augue tempor</a>
                          </div>
                        </div>
                      </div>	  {/* End row */}		
                    </div>	{/* END OTHER POSTS */}
                  </div>
                </div>
              </div>	{/* END SINGLE POST CONTENT */}
            </div>     {/* End container */}
            {/* GEOMETRIC OVERLAY */}	
            <div className="bg_fixed geometric_overlay" />
          </section>	{/* END SINGLE POST */}
          {/* POST COMMENTS
			============================================= */}
          <section id="post-comments" className="bg_whitesmoke pb-80 post-comments division">
            <div className="container">	
              <div className="row">
                {/* COMMENTS WRAPPER */}
                <div className="col-lg-10 offset-lg-1">
                  <div className="comments-wrapper">
                    {/* Title */}	
                    <h5 className="h5-lg">4 Comments</h5>	
                    {/* COMMENT #1 */}
                    <div className="media">
                      {/* Comment-1 Avatar */}
                      <img className="mr-3"src={post_author} alt="comment-avatar" />
                      <div className="media-body">
                        {/* Comment-1 Meta */}
                        <div className="comment-meta">
                          <h5 className="h5-sm mt-0">Thomas</h5>						
                          <span className="comment-date">5 days ago - </span>
                          <span className="btn-reply ico-20">
                            <a href="#leave-comment" className="internal-link"><span className="flaticon-reply-arrow" /> Reply</a>
                          </span>
                        </div>
                        {/* Comment-1 Text */}	
                        <p className="p-lg mb-40">Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque undo viverra
                          suscipit egestas magna porta ratione, mollis risus lectus porta rutrum aenean primis in augue luctus neque purus ipsum neque dolor primis purus efficitur an ipsum primis in cubilia laoreet augue
                        </p>
                        <hr />
                        {/* COMMENT #2 */}
                        <div className="media">
                          {/* Comment-2 Avatar */}
                          <a href="#" className="pr-3">
                            <img src={post_author} alt="comment-avatar" />
                          </a>
                          <div className="media-body">
                            {/* Comment-2 Meta */}
                            <div className="comment-meta">
                              <h5 className="h5-sm mt-0">David Clark</h5>
                              <span className="comment-date">6 days ago - </span>
                              <span className="btn-reply ico-20">
                                <a href="#leave-comment" className="internal-link"><span className="flaticon-reply-arrow" /> Reply</a>
                              </span>
                            </div>
                            {/* Comment-2 Text */}	
                            <p className="p-lg">Etiam sapien magna at vitae pulvinar congue egestas a pretium neque viverra suscipit
                              porta ratione, mollis risus lectus porta aliquet lorem puruss mollis 
                            </p>
                          </div>											      
                        </div>	{/* END COMMENT #2 */}
                      </div>
                    </div>	{/* END COMMENT #1 */}
                    <hr />
                    {/* COMMENT #3 */}
                    <div className="media">
                      {/* Comment-4 Avatar */}
                      <img className="mr-3" src={post_author} alt="comment-avatar" />
                      <div className="media-body">
                        {/* Comment-4 Meta */}
                        <div className="comment-meta">
                          <h5 className="h5-sm mt-0">Jasmine</h5>
                          <span className="comment-date">13 days ago - </span>
                          <span className="btn-reply ico-20">
                            <a href="#leave-comment" className="internal-link"><span className="flaticon-reply-arrow" /> Reply</a>
                          </span>
                        </div>
                        {/* Comment-4 Text */}	
                        <p className="p-lg">Porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus and neque
                          purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius an impedit enim tempor vitae 
                          pulvinar at congue augue egestas. Praesent aliquet lorem purus, quis mollis nisi laoreet
                        </p>
                      </div>
                    </div>	{/* END COMMENT #3 */}	
                    <hr />
                    {/* COMMENT #4 */}
                    <div className="media">
                      {/* Comment-4 Avatar */}
                      <img className="mr-3"  src={news} alt="comment-avatar" />
                      <div className="media-body">
                        {/* Comment-4 Meta */}
                        <div className="comment-meta">
                          <h5 className="h5-sm mt-0">Rady Smith</h5>
                          <span className="comment-date">42 days ago - </span>
                          <span className="btn-reply ico-20">
                            <a href="#leave-comment" className="internal-link"><span className="flaticon-reply-arrow" /> Reply</a>
                          </span>
                        </div>
                        {/* Comment-4 Text */}	
                        <p className="p-lg">Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque undo viverra
                          suscipit  egestas magna porta ratione, mollis risus lectus porta rutrum arcu an aenean primis auctor
                        </p>
                      </div>
                    </div>	{/* END COMMENT #4 */}	
                    <hr />	
                    {/* COMMENT FORM */}
                    <div id="leave-comment">
                      {/* Title */}
                      <h5 className="h5-lg">Leave a Comment</h5>
                      {/* Text */}
                      <p className="p-md">Your email address will not be published. Required fields are marked *</p>
                      <form name="commentForm" className="row comment-form">
                        <div className="col-md-12 input-message">
                          <p>Add Comment *</p>
                          <textarea className="form-control message" name="message" rows={6} placeholder="Enter Your Comment Here* ..." required defaultValue={""} />
                        </div> 
                        <div className="col-md-12">
                          <p>Name*</p>
                          <input type="text" name="name" className="form-control name" placeholder="Enter Your Name*" required /> 
                        </div>
                        <div className="col-md-12">
                          <p>Email*</p>
                          <input type="email" name="email" className="form-control email" placeholder="Enter Your Email*" required /> 
                        </div>
                        {/* Contact Form Button */}
                        <div className="col-lg-12 form-btn"> 						                 
                          <button type="submit" className="btn btn-skyblue tra-skyblue-hover submit">Post Comment</button> 
                        </div>
                        {/* Contact Form Message */}
                        <div className="col-md-12 comment-form-msg text-center">
                          <div className="sending-msg"><span className="loading" /></div>
                        </div>  
                      </form>									
                    </div>	{/* END COMMENT FORM */}
                  </div>
                </div>	{/* END COMMENTS WRAPPER */}	
              </div>     {/* End row */}
            </div>     {/* End container */}
          </section>	{/* END POST COMMENTS */}	
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

export default Single_post
