
<script setup>
 
 // get full year 
 const year = new Date().getFullYear();

</script>



<template>
  <!-- Footer -->
  <footer class="footer-area">
    <div class="container">
      <div class="footer-content text-center">
        <NuxtLink to="/" class="logo">
          <img src="~/assets/images/logo.svg" alt="Logo">
        </NuxtLink>
        <ul class="footer-menu">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/works">Works</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
        <p class="copyright">
         © {{ year }} All rights reserved by <span>ThemeMascot</span>
        </p>
      </div>
    </div>
  </footer>
</template>

