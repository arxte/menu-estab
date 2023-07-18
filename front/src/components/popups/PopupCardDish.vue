<script setup lang="ts">
import { ref } from 'vue'
import { useDishesStore } from '../../stores/dishesStore'

const dishesStore = useDishesStore()

const additional = ref<Array<string>>([])

// const state = reactive({ countDishes: 0 })
</script>

<template>
  <div class="popup-card-dish-container">
    <div class="popup-card-dish-wrapper">
      <div class="popup-card-dish_bgc" @click="dishesStore.isVisiblePopupCardDish = false"></div>
      <article class="popup-card-dish">
        <button
          type="button"
          class="popup-card-dish__arrow-back-btn"
          @click="dishesStore.isVisiblePopupCardDish = false"
        >
          <img
            src="../../assets/svg/popup-card-dish/arrowBackPopupCardDish.svg"
            alt="arrow"
            class="popup-card-dish__arrow-back-img"
          />
        </button>

        <img
          :src="dishesStore.popupCardDish.imagePath"
          :alt="dishesStore.popupCardDish.title"
          class="popup-card-dish__img"
        />

        <h3 class="popup-card-dish__title">{{ dishesStore.popupCardDish.title }}</h3>

        <p class="popup-card-dish__paragraph">{{ dishesStore.popupCardDish.paragraph }}</p>

        <div class="popup-card-dish-btn-wrapper">
          <div class="popup-card-dish-btn">
            <button
              class="popup-card-dish-btn-minus"
              type="button"
              :disabled="dishesStore.costDishesFromPopup < 1"
              @click="dishesStore.minusDishInPopup(dishesStore.popupCardDish.price)"
            >
              <span class="popup-card-dish-minus"></span>
            </button>

            <span
              class="popup-card-dish__price"
              @click="dishesStore.addDishesFromPopup(dishesStore.popupCardDish.id, additional)"
              ><span v-if="dishesStore.countDishesFromPopup > 0">{{
                dishesStore.countDishesFromPopup + 'x'
              }}</span>
              {{ dishesStore.popupCardDish.price }}</span
            >

            <button
              class="popup-card-dish-btn-plus"
              type="button"
              @click="dishesStore.plusDishInPopup(dishesStore.popupCardDish.price)"
            >
              <span class="popup-card-dish-plus-vertical"></span>
              <span class="popup-card-dish-plus-horizontal"></span>
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/popupCardDish.css">
</style>
