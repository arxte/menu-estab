<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from '../../stores/mainStore'

const mainStore = useMainStore()

function sendComplaint() {
  mainStore.showPopup = false
  mainStore.enableScroll()
}

const touchArea = ref()
const touchAreaHeight = ref(0)
const startY = ref(0)
const endY = ref(0)

function onTouchStart(event: any) {
  const touch = event.touches[0]
  startY.value = touch.clientY
}

function onTouchMove(event: any) {
  const touch = event.touches[0]
  endY.value = touch.clientY

  // Вычисляем разницу между начальной и конечной позицией пальца
  const diff = startY.value - endY.value
  // Делаем что-то с этой разницей
  if(diff <= -120) {
    mainStore.showPopup = false
  }
  // console.log('Разница:', diff)
}

function onTouchEnd(event: any) {
  startY.value = 0
  endY.value = 0
}

// function setTouchAreaHeight() {
//   touchAreaHeight.value = touchArea.value.clientHeight
// }
</script>

<template>
  <div
    class="complaint-wrapper"
    ref="touchArea"
    @touchstart="onTouchStart"
    @:touchmove="onTouchMove"
    @:touchend="onTouchEnd"
  >
    <div class="line-ui"></div>

    <section class="complaint">
      <div class="complaint-content-wrapper">
        <h1 class="complaint__title">Вам что-то не понравилось?</h1>

        <p class="complaint__text">
          Напишите что вас не устроило, оскорбило или не понравилось. Любая ваша жалоба, поможет
          нам, улучшить сервис нашего заведения. Сообщение мгновенно поступит нашему администратору.
        </p>
      </div>

      <form
        action="#"
        name="complaint-form"
        method="POST"
        autocomplete="off"
        class="complaint-form"
      >
        <label for="complaint" class="complaint__label">Ваша жалоба</label>
        <textarea
          name="complaint"
          id="complaint"
          cols="10"
          rows="4"
          type="text"
          form="complaint-form"
          autocomplete="off"
          required
          placeholder="Мне не понравилось..."
          class="complaint__input"
        ></textarea>
      </form>

      <button type="submit" form="complaint-form" class="complaint__btn" @click="sendComplaint()">
        Отправить жалобу
      </button>
    </section>
  </div>
</template>

<style scoped src="../../assets/css/mainComplaintPopup.css"></style>
