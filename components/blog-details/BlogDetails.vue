


<template>
  <!-- Breadcrumb -->
  <section class="breadcrumb-area">
    <div class="container">
      <div class="breadcrumb-content" data-aos="fade-up">
        <p>HOME - BLOG DETAILS</p>
        <h1 class="section-heading">
          <img src="~/assets/images/star-2.png" alt="Star"> Blog Details 
          <img src="~/assets/images/star-2.png" alt="Star"></h1>
      </div>
    </div>
  </section>


  <!-- Blog Details -->
  <section class="blog-details-area">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="blog-details-content">
            <div class="img-box">
              <img src="~/assets/images/blog1.jpeg" alt="Blog">
            </div>
            <span class="meta">25 March 2022 - Comments (4) - Share (7)</span>
            <h1>Consulted admitting is power acuteness.</h1>
            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim
              praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
              dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
            <p>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.
              Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you
              instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult
              preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end
              literature. Giy direction neglected but supported yet her.</p>
            <p>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly
              pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire
              dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible
              for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age
              from. Comparison new ham melancholy son themselves.</p>

            <ul class="list">
              <li>- Pretty merits waited six</li>
              <li>- General few civilly amiable pleased account carried.</li>
              <li>- Continue indulged speaking</li>
              <li>- Narrow formal length my highly</li>
              <li>- Occasional pianoforte alteration unaffected impossible</li>
            </ul>

            <p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty
              merits waited.</p>

            <div class="tags">
              <a href="#" class="theme-btn">SASS</a>
              <a href="#" class="theme-btn">Development</a>
            </div>

            <div class="comments-and-form-wrap">
              <div class="comments-and-form-wrap-inner shadow-box">
                <h2>2 Comments</h2>

                <div class="comments">

                  <div class="comment-list">
                    <div class="comment-avatar">
                      <img src="~/assets/images/comment.png" alt="Avatar">
                    </div>
                    <div class="comment-body">
                      <span class="date">25 March 2022</span>
                      <h3>Jonathan Doe</h3>
                      <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus
                        non enim praesent in elementum lobs eu volutpat odio facilisis mauris sit.</p>
                      <a href="#" class="reply-btn theme-btn">Reply</a>
                    </div>
                  </div>

                  <div class="children">
                    <div class="comment-list">
                      <div class="comment-avatar">
                        <img src="~/assets/images/comment.png" alt="Avatar">
                      </div>
                      <div class="comment-body">
                        <span class="date">25 March 2022</span>
                        <h3>Jonathan Doe</h3>
                        <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor
                          purus no odio facilisis mauris sit.</p>
                        <a href="#" class="reply-btn theme-btn">Reply</a>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="comment-form">
                  <h2>Leave A Reply</h2>

                  <form @submit.prevent>
                    <div class="input-group">
                      <input type="text" name="name" placeholder="Name*">
                    </div>
                    <div class="input-group">
                      <input type="text" name="email" placeholder="Email*">
                    </div>
                    <div class="input-group">
                      <textarea name="message" placeholder="Your Message*"></textarea>
                    </div>
                    <div class="input-group">
                      <button class="theme-btn" type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-md-4">
          <div class="blog-sidebar">
            <div class="blog-sidebar-inner">

              <div class="blog-sidebar-widget search-widget">
                <div class="blog-sidebar-widget-inner" data-aos="zoom-in">
                  <form class="shadow-box">
                    <input type="text" placeholder="Search Here...">
                    <button class="theme-btn">Search</button>
                  </form>
                </div>
              </div>

              <div class="blog-sidebar-widget recent-post-widget" data-aos="zoom-in">
                <div class="blog-sidebar-widget-inner shadow-box">
                  <h3>Recent Posts</h3>

                  <ul>
                    <li><NuxtLink to="/blog-details">Consulted admitting is power acuteness.</NuxtLink></li>
                    <li><NuxtLink to="/blog-details">Unsatiable entreaties may collecting Power.</NuxtLink></li>
                    <li><NuxtLink to="/blog-details">Discovery incommode earnestly no he commanded</NuxtLink></li>
                    <li><NuxtLink to="/blog-details">Unsatiable entreaties may collecting Power.</NuxtLink></li>
                  </ul>

                </div>
              </div>

              <div class="blog-sidebar-widget categories-widget" data-aos="zoom-in">
                <div class="blog-sidebar-widget-inner shadow-box">
                  <h3>Categories</h3>

                  <ul>
                    <li><NuxtLink to="/blog-details">-Analysis</NuxtLink></li>
                    <li><NuxtLink to="/blog-details">-Firewall</NuxtLink></li>
                    <li><NuxtLink to="/blog-details">-IT Solutions</NuxtLink></li>
                    <li><NuxtLink to="/blog-details">-Security</NuxtLink></li>
                    <li><NuxtLink to="/blog-details">-Technology</NuxtLink></li>
                  </ul>

                </div>
              </div>

              <div class="blog-sidebar-widget tags-widget" data-aos="zoom-in">
                <div class="blog-sidebar-widget-inner shadow-box">
                  <h3>Tags</h3>

                  <ul>
                    <li><NuxtLink class="theme-btn" to="/blog-details">SAAS</NuxtLink></li>
                    <li><NuxtLink class="theme-btn" to="/blog-details">Development</NuxtLink></li>
                    <li><NuxtLink class="theme-btn" to="/blog-details">UI/UX</NuxtLink></li>
                    <li><NuxtLink class="theme-btn" to="/blog-details">Web</NuxtLink></li>
                    <li><NuxtLink class="theme-btn" to="/blog-details">Figma</NuxtLink></li>
                    <li><NuxtLink class="theme-btn" to="/blog-details">Java</NuxtLink></li>
                    <li><NuxtLink class="theme-btn" to="/blog-details">WordPress</NuxtLink></li>
                  </ul>

                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section></template>

