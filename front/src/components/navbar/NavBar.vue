<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

let svg = ref(
  'M 21 27.0001 H 15.3333 V 20.0001 C 15.3333 18.7134 14.2867 17.6667 13 17.6667 C 11.7133 17.6667 10.6667 18.7134 10.6667 20.0001 V 27.0001 H 5 C 1.776 27.0001 0 25.2241 0 22.0001 V 13.5334 C 0 10.7028 0.781323 9.91206 2.05599 8.85472 L 10.216 2.01341 C 11.828 0.66008 14.172 0.66008 15.784 2.01341 L 23.944 8.85472 C 25.2187 9.91206 26 10.7041 26 13.5334 V 22.0001 C 26 25.2241 24.224 27.0001 21 27.0001 Z M 17.3333 25.0001 H 21 C 23.1027 25.0001 24 24.1027 24 22.0001 V 13.5334 C 24 11.4988 23.664 11.2201 22.668 10.3935 L 14.5 3.54548 C 13.6307 2.81748 12.3693 2.81748 11.5 3.54548 L 3.33203 10.3935 C 2.33603 11.2201 2 11.4988 2 13.5334 V 22.0001 C 2 24.1027 2.89733 25.0001 5 25.0001 H 8.66667 V 20.0001 C 8.66667 17.6107 10.6107 15.6667 13 15.6667 C 15.3893 15.6667 17.3333 17.6107 17.3333 20.0001 V 25.0001 Z'
)
const route = useRoute()

console.log(route.name)

if (route.name === 'main') {
  svg.value =
    'M20 24H15.7334C15.5121 24 15.3333 23.8213 15.3333 23.6V18C15.3333 16.1587 13.8413 14.6667 12 14.6667C10.1587 14.6667 8.66667 16.1587 8.66667 18V23.6C8.66667 23.8213 8.48794 24 8.2666 24H4C1.33333 24 0 22.6667 0 20V11.5347C0 8.8707 0.697405 8.46144 1.90674 7.44811L9.85872 0.779977C11.0974 -0.25869 12.9041 -0.25869 14.1427 0.779977L22.0947 7.44811C23.3027 8.46144 24.0013 8.8707 24.0013 11.5347V20C24 22.6667 22.6667 24 20 24Z'
}
</script>

<template>
  <section class="navbar">
    <router-link to="/main" class="navbar-icon-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        viewBox="0 0 26 27"
        fill="none"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" :d="svg" fill="#0A0A0A" class="path" />
      </svg>
      <!-- <img src="../../assets/svg/main/navbar/home.svg" alt="home" loading="lazy" class="navbar__icon" /> -->
    </router-link>

    <router-link to="/main" class="navbar-icon-wrapper">
      <img
        src="../../assets/svg/main/navbar/past-orders.svg"
        alt="past-orders"
        loading="lazy"
        class="navbar__icon"
      />
    </router-link>

    <router-link to="/basket" class="navbar-icon-wrapper">
      <img
        src="../../assets/svg/main/navbar/shopping-basket.svg"
        alt="shopping-basket"
        loading="lazy"
        class="navbar__icon"
      />
    </router-link>

    <router-link to="/profile" class="navbar-icon-wrapper">
      <img
        src="../../assets/svg/main/navbar/user-alt.svg"
        alt="user"
        loading="lazy"
        class="navbar__icon"
      />
    </router-link>
  </section>
</template>

<style scoped src="../../assets/css/navBar.css"></style>
