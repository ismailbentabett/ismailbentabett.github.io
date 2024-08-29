<template>
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
                <h4>ismailbentabett@gmail.com</h4>
              </div>
            </li>
            <li class="d-flex align-items-center" data-aos="zoom-in">
              <div class="icon-box shadow-box">
                <i class="iconoir-phone"></i>
              </div>
              <div class="right">
                <span>Contact Us</span>
                <h4>+213 794753644</h4>
                <h4>+213 556175000</h4>
              </div>
            </li>
            <li class="d-flex align-items-center" data-aos="zoom-in">
              <div class="icon-box shadow-box">
                <i class="iconoir-pin-alt"></i>
              </div>
              <div class="right">
                <span>Location</span>
                <h4>Algeria</h4>
              </div>
            </li>
          </ul>
          <h3 data-aos="fade-up">Social Info</h3>
          <ul class="social-links d-flex align-center" data-aos="zoom-in">
            <li>
              <NuxtLink
                class="shadow-box"
                to="https://www.linkedin.com/in/ismailbentabett"
                target="_blank"
                ><i class="iconoir-github"></i
              ></NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="shadow-box"
                to="https://www.linkedin.com"
                target="_blank"
                ><i class="iconoir-linkedin"></i
              ></NuxtLink>
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" class="contact-form">
          <div class="shadow-box">
            <img src="~/assets/images/bg1.png" alt="BG" class="bg-img" />
            <img src="~/assets/images/icon3.png" alt="Icon" />
            <h1>Let’s work <span>together.</span></h1>
            <form @submit.prevent="onSubmit">
              <div
                class="alert alert-success messenger-box-contact__msg"
                v-if="successMessage"
                role="alert"
              >
                {{ successMessage }}
              </div>
              <div
                class="alert alert-danger messenger-box-contact__msg"
                v-if="errorMessage"
                role="alert"
              >
                {{ errorMessage }}
              </div>
              <div class="input-group">
                <input
                  v-model="name"
                  type="text"
                  name="full-name"
                  id="full-name"
                  placeholder="Name *"
                  required
                />
              </div>
              <div class="input-group">
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email *"
                  required
                />
              </div>
              <div class="input-group">
                <input
                  v-model="subject"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Your Subject *"
                  required
                />
              </div>
              <div class="input-group">
                <textarea
                  v-model="message"
                  name="message"
                  id="message"
                  placeholder="Your Message *"
                  required
                ></textarea>
              </div>
              <div class="input-group">
                <button
                  class="theme-btn submit-btn"
                  :disabled="isSubmitting"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const isSubmitting = ref(false);

const { $emailjs } = useNuxtApp();

const onSubmit = async () => {
  isSubmitting.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    await $emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: name.value,
        from_email: email.value,
        subject: subject.value,
        message: message.value,
      },
      "YOUR_USER_ID"
    );

    successMessage.value = "Your message was sent successfully.";
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (error) {
    errorMessage.value = "Failed to send your message. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>
