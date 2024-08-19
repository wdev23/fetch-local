<template>
  <div class="bg-cl_dark">
    <div class="container h-20 flex justify-between items-center p-5">
      <!-- Logo -->
      <div class="logo ml-5">
        <h1 class="text-2xl text-white font-bold transition-all duration-300 hover:text-cl_orangeStrong cursor-pointer"><RouterLink :to="{name: 'home'}">JSON Local</RouterLink></h1>
      </div><!-- logo -->

      <!-- Hamburger -->
      <button class="btn_hamburger cursor-pointer md:hidden sm:pr-6" @click.prevent="openMenu = !openMenu">
        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#fff">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      <!-- Nav -->
      <nav class="navbar text-white font-semibold text-xl hidden md:flex">
        <RouterLink :to="{ name: 'home' }" class="navbar_a">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }" class="navbar_a">About</RouterLink>
      </nav>
    </div><!-- container -->
  </div><!-- menuMain_container -->

  <!-- Popup nav -->
  <nav class="navbar_pop" :class="openMenu ? 'translate-x-0' : 'translate-x-full'">
    <ul>
      <li>
        <RouterLink :to="{ name: 'home' }" class="nav_pop_a text-white">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'about' }" class="nav_pop_a text-white">About</RouterLink>
      </li>
    </ul>

    <!-- Close button -->
    <button class="x_close" @click.prevent="openMenu = !openMenu">
      <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#fff">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const openMenu = ref(false);
</script>

<style scoped>
.navbar .navbar_a {
  @apply inline-flex py-2 px-3 hover:text-cl_orangeStrong transition-all duration-300;
}

.btn_hamburger svg {
  @apply hover:fill-cl_orangeStrong transition-all duration-300;
}

.navbar_pop {
  @apply fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10 transform transition-transform duration-500;
}

.navbar_pop ul {
  @apply absolute top-0 right-0 bottom-0 w-10/12 py-4 bg-cl_dark drop-shadow-2xl z-10;
}

.navbar_pop li {
  @apply border-b border-inherit;
}

.navbar_pop li .nav_pop_a {
  @apply block p-4 transition-all ease-in-out active:scale-110 hover:bg-cl_orangeStrong;
}

.navbar_pop .x_close {
  @apply absolute top-0 right-0 left-0 bottom-0;
}

.navbar_pop .x_close svg {
  @apply absolute top-2 left-2;
}

.navbar .router-link-active {
  @apply text-cl_orangeStrong;
}
</style>
