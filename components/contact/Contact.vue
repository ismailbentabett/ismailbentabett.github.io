

<template>
  <!-- Contact -->
  <section class="contact-area">
    <div class="container">
      <div class="gx-row d-flex justify-content-between gap-24">
        <div class="contact-infos">
          <h3 data-aos="fade-up">Contact Info</h3>
          <ul class="contact-details">
            <li class="d-flex align-items-center" data-aos="zoom-in">
              <div class="icon-box shadow-box">
                <i class="iconoir-mail"></i>
              </div>
              <div class="right">
                <span>MAIL us</span>
                <h4>info@bluebase.com</h4>
                <h4>info@bluebase2.com</h4>
              </div>
            </li>

            <li class="d-flex align-items-center" data-aos="zoom-in">
              <div class="icon-box shadow-box">
                <i class="iconoir-phone"></i>
              </div>
              <div class="right">
                <span>Contact Us</span>
                <h4>+1 504-899-8221</h4>
                <h4>+1 504-749-5456</h4>
              </div>
            </li>

            <li class="d-flex align-items-center" data-aos="zoom-in">
              <div class="icon-box shadow-box">
                <i class="iconoir-pin-alt"></i>
              </div>
              <div class="right">
                <span>Location</span>
                <h4>22 Baker Street, Texas <br>United States <br>W1U 3BW</h4>
              </div>
            </li>
          </ul>

          <h3 data-aos="fade-up">Social Info</h3>
          <ul class="social-links d-flex align-center" data-aos="zoom-in">
            <li><NuxtLink class="shadow-box" to="https://www.dribbble.com" target="_blank"><i class="iconoir-dribbble"></i></NuxtLink></li>
            <li><NuxtLink class="shadow-box" to="https://www.twitter.com" target="_blank"><i class="iconoir-twitter"></i></NuxtLink></li>
            <li><NuxtLink class="shadow-box" to="https://www.instagram.com" target="_blank"><i class="iconoir-instagram"></i></NuxtLink></li>
          </ul>
        </div>

        <div data-aos="zoom-in" class="contact-form">
          <div class="shadow-box">
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img">
            <img src="~/assets/images/icon3.png" alt="Icon">
            <h1>Let’s work <span>together.</span></h1>
            <form  @submit.prevent>
              <div class="alert alert-success messenger-box-contact__msg" style="display: none" role="alert">
                Your message was sent successfully.
              </div>
              <div class="input-group">
                <input type="text" name="full-name" id="full-name" placeholder="Name *">
              </div>
              <div class="input-group">
                <input type="email" name="email" id="email" placeholder="Email *">
              </div>
              <div class="input-group">
                <input type="text" name="subject" id="subject" placeholder="Your Subject *">
              </div>
              <div class="input-group">
                <textarea name="message" id="message" placeholder="Your Message *"></textarea>
              </div>
              <div class="input-group">
                <button class="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

