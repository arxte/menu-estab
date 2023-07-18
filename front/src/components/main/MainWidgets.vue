<script lang="ts" setup>
import { useMainStore } from '../../stores/mainStore'

const mainStore = useMainStore()

function openComplaintPopup() {
  mainStore.showPopup = true
  mainStore.disableScroll()
}

function openWifiPopup() {
  mainStore.showWifiPopup = true
  mainStore.disableScroll()
}
</script>

<template>
  <section class="widget-wrapper">
    <div class="widget">
      <div class="widget-content-wrapper">
        <img src="../../assets/svg/main/widget/2gis.svg" alt="2gis" class="widget__icon-img" loading="lazy" />

        <span class="widget__text">Оставь отзыв, получи скидку 30%</span>
      </div>
      <img src="../../assets/svg/main/widget/arrow.svg" alt="arrow" class="widget__arrow-img" loading="lazy" />
    </div>

    <div class="widget" @click="openWifiPopup()">
      <div class="widget-content-wrapper">
        <img src="../../assets/svg/main/widget/wifi.svg" alt="wifi" class="widget__icon-img" loading="lazy" />

        <span class="widget__text">Подключиться к Wi-Fi</span>
      </div>
      <img src="../../assets/svg/main/widget/arrow.svg" alt="arrow" class="widget__arrow-img" loading="lazy" />
    </div>

    <div class="widget" @click="openComplaintPopup()">
      <div class="widget-content-wrapper">
        <img src="../../assets/svg/main/widget/note.svg" alt="note" class="widget__icon-img" loading="lazy" />

        <span class="widget__text">Книга жалоб</span>
      </div>
      <img src="../../assets/svg/main/widget/arrow.svg" alt="arrow" class="widget__arrow-img" loading="lazy" />
    </div>
  </section>
</template>

<style scoped src="../../assets/css/mainWidgets.css"></style>
