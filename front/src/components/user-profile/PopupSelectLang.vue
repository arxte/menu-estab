<script lang="ts" setup>
import { ref } from 'vue'
import { usePopupSelectLangStore } from '../../stores/popupSelectLang'

const selectLang = usePopupSelectLangStore()

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
  if (diff <= -80) {
    selectLang.popupSelectLangVisible = false
  }
  // console.log('Разница:', diff)
}

function onTouchEnd(event: any) {
  startY.value = 0
  endY.value = 0
}
</script>

<template>
  <section
    class="select-lang-popup"
    @touchstart="onTouchStart"
    @:touchmove="onTouchMove"
    @:touchend="onTouchEnd"
  >
    <div class="line-ui"></div>

    <h2 class="select-lang-popup__title">Выберите язык</h2>

    <div class="select-lang-popup-choice">
        <div class="select-lang-popup-choice-variant">
          <label for="russian" class="select-lang-popup-choice-variant__title"  >Русский язык</label>

          <input
            type="radio"
            id="russian"
            class="select-lang-popup-choice-variant__radio"
            value="Русский язык"
            name="lang"
            checked
          />
        </div>

        <div class="select-lang-popup-choice-variant">
          <label for="kazakh" class="select-lang-popup-choice-variant__title">Қазақ тілі</label>

          <input
            type="radio"
            id="kazakh"
            class="select-lang-popup-choice-variant__radio"
            value="Қазақ тілі"
            name="lang"
          />
        </div>
    </div>

    <button type="submit" class="select-lang-popup__btn">Применить</button>
  </section>
</template>

<style scoped src="../../assets/css/popupSelectLang.css"></style>
