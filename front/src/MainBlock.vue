<script setup lang="ts">
// import { RouterLink } from 'vue-router'
import ChoiceWhereEat from './components/where-eat-btn/ChoiceWhereEat.vue'
// import BreakfastBlock from './components/menu/BreakfastBlock.vue'
// import SweetBreakfast from './components/menu/SweetBreakfast.vue'
// import inBasketBtnMainMenu from './components/basket/inBasketBtnMainMenu.vue'
import Widgets from './components/main/MainWidgets.vue'
import Description from './components/main/MainDescription.vue'
import BtnToMenu from './components/main/MainBtnMenu.vue'
import NavBar from './components/navbar/NavBar.vue'
import ComlaintPopup from './components/main/MainComplaintPopup.vue'
import WifiPopup from './components/main/WifiPopup.vue'

import { useMainStore } from './stores/mainStore'

const mainStore = useMainStore()

// function closeWifiPopup() {
//   mainStore.showWifiPopup = false
//   mainStore.enableScroll()
// }
</script>

<template>
  <div class="menu-wrapper">
    <article class="menu">
      <h1 class="menu__title">Urbo coffee</h1>

      <img
        src="./assets/images/7872e084b035d3fb4c3b5f710900.webp"
        alt="urbo-coffee-banner"
        loading="lazy"
        class="menu__banner-establishment"
      />

      <article class="menu__location location-wrapper">
        <section class="location">
          <div class="location__address-wrapper">
            <img
              src="./assets/svg/main/location.svg"
              alt="location"
              class="location__address-img"
            />
            <span class="location__address">улица Жандосова, 162а</span>
          </div>

          <div class="location__work-time-wrapper">
            <img src="./assets/svg/main/time.svg" alt="time" class="location__time-img" />
            <span class="location__work-time"
              >c 08:00 до 00:00, <span class="location__work-time_green-color">Открыто</span></span
            >
          </div>
        </section>

        <section class="social-media">
          <!-- <div class="info__rating rating">
          <img src="./assets/svg/main/star.svg" alt="patrick" class="rating__star-img" />
          <span class="rating__text">4.9</span>
        </div>
        <router-link to="/info" class="info__about">
          <img src="./assets/svg/main/about.svg" alt="about" />
        </router-link> -->

          <div class="social-media__instagram-link-wrapper">
            <a href="#"
              ><img
                src="./assets/svg/main/instagram.svg"
                alt="instagram-img"
                class="social-media__instagram-link"
            /></a>
          </div>

          <div class="social-media__tiktok-link-wrapper">
            <a href="#"
              ><img
                src="./assets/svg/main/tiktok.svg"
                alt="tiktok-img"
                class="social-media__tiktok-link"
            /></a>
          </div>
        </section>
      </article>

      <ChoiceWhereEat />

      <Widgets />

      <Description />
      <!-- 
    <BreakfastBlock />

    <SweetBreakfast />

    <inBasketBtnMainMenu /> -->
    </article>

    <BtnToMenu />

    <NavBar />
    <Transition name="wifi-popup">
      <WifiPopup v-show="mainStore.showWifiPopup" />
    </Transition>

    <Transition name="complaint-popup">
      <ComlaintPopup v-show="mainStore.showPopup" />
    </Transition>
  </div>
</template>

<style scoped src="./assets/css/mainBlock.css"></style>
