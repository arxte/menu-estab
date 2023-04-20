<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMainStore } from '../../stores/mainStore'

const mainStore = useMainStore()

const passWifiElement = ref<HTMLElement>()
let passWifiText: any = passWifiElement.value?.textContent

onMounted(() => {
  console.log(passWifiElement.value)
  passWifiText = passWifiElement.value?.textContent
  console.log(passWifiText)
})

async function copyTextToClipBoard() {
  console.log(passWifiText)
  try {
    await navigator.clipboard.writeText(passWifiText)
    console.log('Text copied to clipboard')
  } catch (err) {
    console.error('Error in copying text: ', err)
  }
}

function closeWifiPopup() {
  mainStore.showWifiPopup = false
  mainStore.enableScroll()
}
</script>

<template>
  <div class="wifi-popup-container">
    <!-- <Transition name="wifi-popup">
      <div class="wifi-popup_opacity" @click="closeWifiPopup"></div>
    </Transition> -->

    <div class="wifi-popup-wrapper">
      <section class="wifi-popup">
        <h3 class="wifi-popup__title">Имя Cети</h3>

        <div class="wifi-popup__wifi-pass wifi-pass" @click="copyTextToClipBoard">
          <span class="wifi-pass__text" ref="passWifiElement">Пароль</span>
          <img src="../../assets/svg/main/wifi-popup/copy.svg" alt="copy-img" />
        </div>
      </section>
    </div>
    <Transition name="wifi-popup">
      <div
        class="wifi-popup_opacity"
        v-show="mainStore.showWifiPopup"
        @click="closeWifiPopup"
      ></div>
    </Transition>
  </div>
</template>

<style scoped src="../../assets/css/wifiPopup.css"></style>
