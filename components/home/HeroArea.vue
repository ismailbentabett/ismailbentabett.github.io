<template>
  <section class="about-area">
    <div class="container">
      <div class="row">
        <div class="col-md-6" data-aos="zoom-in">
          <div class="about-me-box shadow-box">
            <NuxtLink class="overlay-link" to="/about"> </NuxtLink>
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
            <div class="img-box">
              <img src="~/assets/images/me.png" alt="About Me" />
            </div>
            <div class="infos">
              <h4>Front-end WEB Developer</h4>
              <h1>ISMAIL BENTABET.</h1>
              <p>I am a Front-end Developer specializing in Vue.js.</p>
              <NuxtLink href="#" class="about-btn">
                <img src="~/assets/images/icon.svg" alt="Button" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="about-credentials-wrap">
            <div data-aos="zoom-in">
              <div class="banner shadow-box">
                <div class="marquee">
                  <div>
                    <span
                      >LATEST WORK AND <b>FEATURED</b> <img src="~/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> <img src="~/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> <img src="~/assets/images/star1.svg" alt="Star" /> LATEST WORK AND
                      <b>FEATURED</b> LATEST WORK AND <img src="~/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> LATEST WORK AND <img src="~/assets/images/star1.svg" alt="Star"
                    /></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="gx-row d-flex gap-24">
              <div data-aos="zoom-in">
                <div class="about-crenditials-box info-box shadow-box h-full">
                  <NuxtLink class="overlay-link" to="/credentials"></NuxtLink>
                  <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
                  <img src="~/assets/images/sign.png" alt="Sign" />
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="infos">
                      <h4>more about me</h4>
                      <h1>Credentials</h1>
                    </div>

                    <NuxtLink to="/credentials" class="about-btn">
                      <img src="~/assets/images/icon.svg" alt="Button" />
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div class="about-project-box info-box shadow-box h-full">
                  <NuxtLink class="overlay-link" to="/works"></NuxtLink>
                  <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
                  <img src="~/assets/images/my-works.png" alt="My Works" />
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="infos">
                      <h4>SHOWCASE</h4>
                      <h1>Projects</h1>
                    </div>

                    <NuxtLink to="#" class="about-btn">
                      <img src="~/assets/images/icon.svg" alt="Button" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-24">
        <div class="col-md-12">
          <div class="blog-service-profile-wrap d-flex gap-24">
            <div data-aos="zoom-in">
              <div class="about-blog-box info-box shadow-box h-full">
                <NuxtLink to="/blog" class="overlay-link"></NuxtLink>
                <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
                <img src="~/assets/images/gfonts.png" alt="GFonts" />
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>Blog</h4>
                    <h1>GFonts</h1>
                  </div>

                  <NuxtLink to="/blog" class="about-btn">
                    <img src="~/assets/images/icon.svg" alt="Button" />
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in" class="flex-1">
              <div class="about-services-box info-box shadow-box h-full">
                <NuxtLink to="/service" class="overlay-link"></NuxtLink>
                <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
                <div class="icon-boxes">
                  <i class="iconoir-camera"></i>
                  <i class="iconoir-design-pencil"></i>
                  <i class="iconoir-color-filter"></i>
                  <i class="iconoir-dev-mode-phone"></i>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>specialization</h4>
                    <h1>Services Offering</h1>
                  </div>

                  <NuxtLink to="/service" class="about-btn">
                    <img src="~/assets/images/icon.svg" alt="Button" />
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in">
              <div class="about-profile-box info-box shadow-box h-full">
                <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
                <div class="inner-profile-icons shadow-box">
                  <a href="https://www.github.com/ismailbentabett">
                    <i class="iconoir-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ismailbentabett">
                    <i class="iconoir-linkedin"></i>
                  </a>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>Stay with me</h4>
                    <h1>Profiles</h1>
                  </div>

                  <NuxtLink to="/contact" class="about-btn">
                    <img src="~/assets/images/icon.svg" alt="Button" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-24">
        <div class="col-md-6" data-aos="zoom-in">
          <div class="about-client-box info-box shadow-box">
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
            <div class="clients d-flex align-items-start gap-24 justify-content-center">
              <div class="client-item">
                <h1>05</h1>
                <p>Years <br />Experience</p>
              </div>

              <div class="client-item">
                <h1>+39</h1>
                <p>CLIENTS <br />WORLDWIDE</p>
              </div>

              <div class="client-item">
                <h1>+53</h1>
                <p>Total <br />Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6" data-aos="zoom-in">
          <div class="about-contact-box info-box shadow-box">
            <NuxtLink class="overlay-link" to="/contact"></NuxtLink>
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
            <img src="~/assets/images/icon2.png" alt="Icon" class="star-icon" />
            <h1>Let's <br />work <span>together.</span></h1>
            <a href="#" class="about-btn">
              <img src="~/assets/images/icon.svg" alt="Button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
