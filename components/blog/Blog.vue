

<template>
  <!-- Breadcrumb -->
  <section class="breadcrumb-area">
    <div class="container">
      <div class="breadcrumb-content" data-aos="fade-up">
        <p>HOME - BLOG</p>
        <h1 class="section-heading">
          <img src="~/assets/images/star-2.png" alt="Star"> Blog with rightsidebar 
          <img src="~/assets/images/star-2.png" alt="Star"></h1>
      </div>
    </div>
  </section>


  <!-- Blog Items -->
  <section class="blog-area">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="blog-items">
            <div class="blog-item" data-aos="zoom-in">
              <div class="img-box">
                <img src="~/assets/images/blog1.jpeg" alt="Blog">
              </div>
              <div class="content">
                <span class="meta">25 March 2022 - Comments (4) - Share (7)</span>
                <h1><NuxtLink to="/blog-details">Consulted admitting is power acuteness.</NuxtLink></h1>
                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non
                  enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
                  dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                <NuxtLink to="/blog-details" class="theme-btn">Read More</NuxtLink>
              </div>
            </div>

            <div class="blog-item" data-aos="zoom-in">
              <div class="img-box">
                <img src="~/assets/images/blog2.jpeg" alt="Blog">
              </div>
              <div class="content">
                <span class="meta">25 March 2022 - Comments (4) - Share (7)</span>
                <h1><NuxtLink to="/blog-details">Unsatiable entreaties may collecting Power.</NuxtLink></h1>
                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non
                  enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
                  dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                <NuxtLink to="/blog-details" class="theme-btn">Read More</NuxtLink>
              </div>
            </div>

            <div class="blog-item" data-aos="zoom-in">
              <div class="img-box">
                <img src="~/assets/images/blog1.jpeg" alt="Blog">
              </div>
              <div class="content">
                <span class="meta">25 March 2022 - Comments (4) - Share (7)</span>
                <h1><NuxtLink to="/blog-details">Discovery incommode earnestly he commanded</NuxtLink></h1>
                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non
                  enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
                  dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                <NuxtLink to="/blog-details" class="theme-btn">Read More</NuxtLink>
              </div>
            </div>

          </div>
        </div>
        <div class="col-md-4">
          <div class="blog-sidebar">
            <div class="blog-sidebar-inner">

              <div class="blog-sidebar-widget search-widget">
                <div class="blog-sidebar-widget-inner" data-aos="zoom-in">
                  <form class="shadow-box"  @submit.prevent>
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
