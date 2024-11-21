<template>
  <section class="about-area">
    <div class="container">
      <div class="d-flex about-me-wrap align-items-start gap-24">
        <div data-aos="zoom-in">
          <div class="about-image-box shadow-box">
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
            <div class="image-inner">
              <img src="~/assets/images/me2.png" alt="About Me" />
            </div>
          </div>
        </div>

        <div class="about-details" data-aos="zoom-in">
          <h1 class="section-heading" data-aos="fade-up">
            <img src="~/assets/images/star-2.png" alt="Star" /> Self-summary
            <img src="~/assets/images/star-2.png" alt="Star" />
          </h1>
          <div class="about-details-inner shadow-box">
            <img src="~/assets/images/icon2.png" alt="Star" />
            <h1>ISMAIL BENTABET</h1>
            <p>
              👋 Ismail Bentabet | ⭐ Front-End Developer | Vue, React,
              Angular<br /><br />
              Experienced Front-End Developer specializing in Vue.js, React,
              Angular with a proven track record delivering high-performance,
              responsive, scalable web applications. Over 5 years of experience
              crafting modern front-end solutions optimized to achieve SEO,
              speed, and user engagement. Skilled in creating interactive user
              interfaces, dynamic components, and efficient architectures
              tailored to projects of varying scale.<br /><br />
              🌟 <strong>Key Expertise</strong><br /><br />
              Vue.js: Expert in building fast, responsive applications tailored
              to reactivity, speed, and user experience.<br />
              React: Proficient in designing modular, reusable components
              ensuring seamless scalability and superior performance.<br />
              Angular: Advanced skills in developing feature-rich,
              enterprise-grade platforms with optimized workflows.<br /><br />
              📈 <strong>Career Highlights</strong><br /><br />
              Built interactive Vue.js dashboards tailored to data-driven
              applications with enhanced performance.<br />
              Created scalable React components enhancing e-commerce platforms
              by improving load times and retention.<br />
              Developed robust Angular systems tailored to enterprise needs with
              exceptional maintainability and reliability.<br />
              Delivered SEO-driven solutions highlighting smooth navigation,
              accessibility, and superior user experience.<br />
              Optimized applications achieving speed and engagement using
              advanced techniques in Vue.js, React, and Angular.<br /><br />
              🚀 <strong>Frameworks and Technologies</strong><br /><br />
              Vue.js, React, Angular, JavaScript, TypeScript, Nuxt.js, Next.js,
              Tailwind CSS, APIs, Docker, Node.js.<br /><br />
              Transforming concepts into scalable front-end solutions using Vue,
              React, and Angular. Passionate about delivering high-performing
              applications across devices, achieving SEO optimization, and
              exceptional user engagement.
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-24">
        <div class="col-md-6" data-aos="zoom-in">
          <div class="about-edc-exp about-experience shadow-box">
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
            <h3>EXPERIENCE</h3>

            <ul>
              <li>
                <p class="date">Sep 2024 – Nov 2024</p>
                <h2>Front-end Engineer</h2>
                <p class="type">24markets.com · Freelance</p>
              </li>
              <li>
                <p class="date">Jan 2024 – Sep 2024</p>
                <h2>Front-end Engineer</h2>
                <p class="type">Monday Merch · Full-time</p>
              </li>
              <li>
                <p class="date">Jul 2023 – Dec 2023</p>
                <h2>Full Stack Engineer</h2>
                <p class="type">
                  Telecom Radio Professionnel (TRP) · Freelance
                </p>
              </li>
              <li>
                <p class="date">Oct 2022 – Jun 2023</p>
                <h2>Software Engineer & Co-founder</h2>
                <p class="type">Shortcut · Full-time</p>
              </li>
              <li>
                <p class="date">May 2022 – Oct 2022</p>
                <h2>Front-end & Mobile Engineer</h2>
                <p class="type">SIG Service · Full-time</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6" data-aos="zoom-in">
          <div class="about-edc-exp about-education shadow-box">
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
            <h3>EDUCATION</h3>

            <ul>
              <li>
                <p class="date">2018 - 2022</p>
                <h2>Bachelor's degree, Computer Science</h2>
                <p class="type">University of Dr Tahar MOULAY Saida</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mt-24">
        <div class="col-md-12">
          <div class="d-flex profile-contact-credentials-wrap gap-24">
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

            <div data-aos="zoom-in" class="flex-1">
              <div class="about-contact-box info-box shadow-box">
                <NuxtLink class="overlay-link" to="/contact"></NuxtLink>
                <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
                <img
                  src="~/assets/images/icon2.png"
                  alt="Icon"
                  class="star-icon"
                />
                <h1>Let's <br />work <span>together.</span></h1>
                <NuxtLink to="/contact" class="about-btn">
                  <img src="~/assets/images/icon.svg" alt="Button" />
                </NuxtLink>
              </div>
            </div>

            <div data-aos="zoom-in" class="h-full">
              <div class="about-crenditials-box info-box shadow-box">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
