

<template>
  <section class="service-area">
    <div class="container">
      <h1 class="section-heading" data-aos="fade-up">
        <img src="~/assets/images/star-2.png" alt="Star"> My Offerings 
        <img src="~/assets/images/star-2.png" alt="Star"></h1>

      <div class="row">

        <!-- Sidebar -->
        <div class="col-md-4">
          <div class="service-sidebar" data-aos="fade-right">
            <div class="service-sidebar-inner shadow-box">
              <ul>
                <li>
                  <i class="iconoir-camera icon"></i>
                  PHOTOGRAPHY
                </li>
                <li>
                  <i class="iconoir-design-pencil icon"></i>
                  WEB DESIGNING
                </li>
                <li>
                  <i class="iconoir-color-filter icon"></i>
                  BRANDING
                </li>
                <li>
                  <i class="iconoir-dev-mode-phone icon"></i>
                  DEVELOPMENT
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="col-md-8">
          <h1 class="section-heading" data-aos="fade-up"><img src="~/assets/images/star-2.png" alt="Star"> My Offerings
            <img src="~/assets/images/star-2.png" alt="Star"></h1>

          <div class="service-content-wrap" data-aos="zoom-in">
            <div class="service-content-inner shadow-box">
              <div class="service-items">
                <div class="service-item">
                  <h3>Photography</h3>
                  <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus
                    non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                </div>
                <div class="service-item">
                  <h3>Web Designing</h3>
                  <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus
                    non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                </div>
                <div class="service-item">
                  <h3>Branding</h3>
                  <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus
                    non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                </div>
                <div class="service-item">
                  <h3>Development</h3>
                  <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus
                    non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row mt-24">
        <div class="col-md-12">
          <div class="d-flex profile-contact-credentials-wrap gap-24">

            <div data-aos="zoom-in">
              <div class="about-profile-box info-box shadow-box h-full">
                <img src="~/assets/images/bg1.png" alt="BG" class="bg-img">
                <div class="inner-profile-icons shadow-box">
                  <a href="#">
                    <i class="iconoir-dribbble"></i>
                  </a>
                  <a href="#">
                    <i class="iconoir-twitter"></i>
                  </a>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>Stay with me</h4>
                    <h1>Profiles</h1>
                  </div>

                  <NuxtLink to="/contact" class="about-btn">
                    <img src="~/assets/images/icon.svg" alt="Button">
                  </NuxtLink>

                </div>
              </div>
            </div>

            <div data-aos="zoom-in" class="flex-1">
              <div class="about-contact-box info-box shadow-box">
                <NuxtLink class="overlay-link" to="/contact"></NuxtLink>
                <img src="~/assets/images/bg1.png" alt="BG" class="bg-img">
                <img src="~/assets/images/icon2.png" alt="Icon" class="star-icon">
                <h1>Let's <br>work <span>together.</span></h1>
                <NuxtLink to="/contact" class="about-btn">
                  <img src="~/assets/images/icon.svg" alt="Button">
                </NuxtLink>
              </div>
            </div>

            <div data-aos="zoom-in" class="h-full">
              <div class="about-crenditials-box info-box shadow-box">
                <NuxtLink class="overlay-link" to="/credentials"></NuxtLink>
                <img src="~/assets/images/bg1.png" alt="BG" class="bg-img">
                <img src="~/assets/images/sign.png" alt="Sign">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>more about me</h4>
                    <h1>Credentials</h1>
                  </div>

                  <NuxtLink to="/credentials" class="about-btn">
                    <img src="~/assets/images/icon.svg" alt="Button">
                  </NuxtLink>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  </div>
</section></template>

