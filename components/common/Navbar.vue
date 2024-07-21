 

<script setup> 
 import { inject, provide, ref } from "vue";  

 
 // slidebar open
const menuOpen = ref(false);
provide('menuOpen', menuOpen)

const setMenuOpen = (value = true) => { 
	menuOpen.value = value ;
};
</script>


<template>
  <!-- Header --> 
  <header class="header-area">
    <div class="container">
      <div class="gx-row d-flex align-items-center justify-content-between">
        <NuxtLink to="/" class="logo"> 
          <img src="~/assets/images/logo.svg" alt="Logo">
        </NuxtLink>

        <nav class="navbar" :class="menuOpen? 'active' : ''">
          <ul class="menu">
            <li><NuxtLink to="/" @click="setMenuOpen(false)">Home</NuxtLink></li>
            <li><NuxtLink to="/about" @click="setMenuOpen(false)">About</NuxtLink></li>
            <li><NuxtLink to="/works" @click="setMenuOpen(false)">Works</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="setMenuOpen(false)">Contact</NuxtLink></li>
          </ul>
          <NuxtLink to="/contact" class="theme-btn">Let's talk</NuxtLink>
        </nav>      

        <NuxtLink to="/contact" class="theme-btn">Let's talk</NuxtLink>

        <div :class="`show-menu ${menuOpen ? 'active' : ''}`" @click="setMenuOpen(!menuOpen)" >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header> 

</template>


 