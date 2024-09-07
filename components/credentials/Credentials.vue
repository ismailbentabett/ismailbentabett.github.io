<template>
  <!-- Credentials -->
  <section class="credential-area">
    <div class="container">
      <div class="gx-row d-flex">
        <div class="credential-sidebar-wrap" data-aos="zoom-in">
          <div class="credential-sidebar text-center">
            <div class="shadow-box">
              <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
              <div class="img-box">
                <img src="~/assets/images/me.png" alt="About Me" />
              </div>
              <h2>Ismail Bentabet</h2>
              <p>@ismailbentabett</p>

              <ul class="social-links d-flex justify-content-center">
                <li>
                  <NuxtLink
                    to="https://github.com/ismailbentabett"
                    target="_blank"
                    ><i class="iconoir-github"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://linkedin.com/in/ismailbentabett"
                    target="_blank"
                    ><i class="iconoir-linkedin"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="mailto:ismailbentabett@gmail.com"
                    target="_blank"
                    ><i class="iconoir-mail"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://ismailbentabett.com" target="_blank"
                    ><i class="iconoir-globe"></i
                  ></NuxtLink>
                </li>
              </ul>

              <NuxtLink to="/contact" class="theme-btn">Contact Me</NuxtLink>
            </div>
          </div>
        </div>

        <div class="credential-content flex-1">
          <div class="credential-about" data-aos="zoom-in">
            <h2>Professional Summary</h2>
            <p>
              Front-End Developer with 5 years of experience in creating
              responsive, dynamic web applications using Vue.js, Nuxt.js, and
              other modern front-end technologies. Strong skills in developing
              high-performance user interfaces and collaborating effectively
              with teams of all sizes. Completed over 1,000+ hours of work on
              Upwork, demonstrating reliability and a strong work ethic.
            </p>
          </div>

          <div class="credential-edc-exp credential-experience">
            <h2 data-aos="fade-up">Work Experience</h2>
            <div class="credential-edc-exp-item" data-aos="zoom-in">
              <h4>Jan 2024 – Present</h4>
              <h3>Vue Front-end Engineer</h3>
              <h5>Monday Merch, Remote, Netherlands</h5>
              <p>
                Developed and maintained the Nuxt Shop Page for Monday Merch,
                ensuring a seamless user experience with robust performance. Led
                the development of a platform using Vue.js, focusing on creating
                responsive and dynamic user interfaces. Utilized HTML5, CSS3,
                JavaScript, and TypeScript to build interactive and
                user-friendly web applications. Implemented Tailwind CSS for
                styling, ensuring a cohesive and modern design across the
                platform. Collaborated with cross-functional teams to integrate
                new features and improve existing functionalities. Employed
                Nuxt.js to optimize the performance and SEO of the web
                applications.
              </p>
            </div>
            <div class="credential-edc-exp-item" data-aos="zoom-in">
              <h4>Jun 2023 – Dec 2023</h4>
              <h3>Full Stack Developer</h3>
              <h5>TRP, Remote, France</h5>
              <p>
                Enhanced TRP's CMS backend and frontend features using Laravel
                10, Vue 3, and Tailwind CSS. Collaborated on integrating Laravel
                10, Vue 3, Inertiajs, and Tailwind CSS, FilamentPHP, for a
                cohesive user interface. Contributed to increased user
                engagement by 100% and positive feedback. Deployed using Docker
                and AWS Elastic Beanstalk.
              </p>
            </div>
            <div class="credential-edc-exp-item" data-aos="zoom-in">
              <h4>Oct 2022 – Jun 2023</h4>
              <h3>Software Engineer & Co-founder</h3>
              <h5>Shortcut, On Site, Algeria</h5>
              <p>
                Initiated and led the development of an Online Work Platform
                using JavaScript, TypeScript, Vue.js & Nestjs & Nuxt.Js. Guided
                a compact development team, ensuring project delivery within 6
                months, and contributing to startup growth.
              </p>
            </div>
            <div class="credential-edc-exp-item" data-aos="zoom-in">
              <h4>May 2022 – Oct 2022</h4>
              <h3>Junior Software Engineer</h3>
              <h5>Sig-Service, Remote, Algeria</h5>
              <p>
                Developed and implemented the SFA-13 CRM & Acile App, connecting
                a Vuejs & Capacitor & ionic App seamlessly with Odoo API.
                Maintained technologies: JavaScript, TypeScript, Vue.js,
                Cypress, HTML, CSS, Tailwindcss, Nuxt.Js. Integrated modules,
                optimizing Sales, Accounting, Lead, Human Resources, CRM, and
                Reporting functionalities and performed end-to-end tests.
                Experience working in a self-hosted GitLab environment.
              </p>
            </div>
          </div>

          <div class="credential-edc-exp credential-education">
            <h2 data-aos="fade-up">Education</h2>
            <div class="credential-edc-exp-item" data-aos="zoom-in">
              <h4>Jan 2018 - Jun 2022</h4>
              <h3>Bachelor's degree, Computer Science</h3>
              <h5>University of Dr Tahar MOULAY Saida, Algeria</h5>
              <p>
                Completed coursework in computer science with a focus on
                software development, algorithms, and data structures.
                Participated in projects that honed skills in front-end and
                back-end development, preparing for a career in software
                engineering.
              </p>
            </div>
          </div>

          <div class="skills-wrap">
            <h2 data-aos="fade-up">Skills</h2>
            <div class="d-grid skill-items gap-24 flex-wrap">
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">85%</span>
                <h3 class="name">JavaScript</h3>
                <p>
                  Proficient in building dynamic and interactive web
                  applications.
                </p>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">78%</span>
                <h3 class="name">PHP</h3>
                <p>
                  Experienced in using PHP for back-end development and
                  scripting.
                </p>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">92%</span>
                <h3 class="name">Vue.js</h3>
                <p>Expert in developing complex user interfaces with Vue.js.</p>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">90%</span>
                <h3 class="name">Nuxt.js</h3>
                <p>
                  Skilled in building performant and SEO-friendly applications
                  with Nuxt.js.
                </p>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">81%</span>
                <h3 class="name">Tailwind CSS</h3>
                <p>
                  Experienced in using Tailwind CSS for rapid UI development.
                </p>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">87%</span>
                <h3 class="name">Git</h3>
                <p>
                  Proficient in version control and collaboration using Git.
                </p>
              </div>
            </div>
          </div>

          <div class="skills-wrap awards-wrap">
            <h2 data-aos="fade-up">Projects</h2>
            <div class="d-grid skill-items gap-24 flex-wrap">
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent"
                  >Freelance Fullstack Developer, TRP (trp-france.fr)</span
                >
                <h3 class="name">
                  Enhanced TRP's CMS backend and frontend features using Laravel
                  10, Vue 3, and Tailwind CSS.
                </h3>
                <p>
                  Collaborated on integrating Laravel 10, Vue 3, Inertiajs, and
                  Tailwind CSS, FilamentPHP, for a cohesive UI.
                </p>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent"
                  >Developer, Screamer (github.com/Screamer)</span
                >
                <h3 class="name">
                  Developed features for the screamer project, integrating
                  Angular and .NET Core with Domain-Driven Design principles.
                </h3>
                <p>
                  Enhanced user experience and functionality using Tailwind CSS
                  for cohesive styling.
                </p>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent"
                  >Developer, Silikan (github.com/silikan)</span
                >
                <h3 class="name">
                  Implemented features for backend and frontend using Laravel
                  10, Vue 3, and Tailwind CSS.
                </h3>
                <p>
                  Integrated Laravel 10, Vue 3, and Tailwind CSS seamlessly for
                  a cohesive and responsive user interface.
                </p>
              </div>
            </div>
          </div>

          <div class="skills-wrap languages-wrap">
            <h2 data-aos="fade-up">Languages</h2>
            <div class="d-grid skill-items gap-24 flex-wrap">
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">English - C2</span>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">Arabic - Native</span>
              </div>
              <div class="skill-item" data-aos="zoom-in">
                <span class="percent">French - B2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
