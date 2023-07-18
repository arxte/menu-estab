<script setup lang="ts">
import { useDishesStore } from '../../stores/dishesStore'

const dishesStore = useDishesStore()
</script>

<template>
  <div class="basket-preview-container">
    <Transition name="show-btn">
      <article
        class="basket-preview-wrapper"
        ref="basketPreview"
        v-show="dishesStore.countDishesInBasket != 0"
      >
        <router-link to="/basket" class="basket-preview">
          <div class="basket-preview__count-dish-wrapper">
            <img
              src="../../assets/svg/basket/shopping-basket.svg"
              alt="shopping-basket"
              class="basket-preview__img"
              loading="lazy"
            />
            <span class="basket-preview__cost"
              >{{ dishesStore.countDishesInBasket }} {{ dishesStore.wordOnBtn }} на
              {{ dishesStore.costDishesInBasket }}</span
            >
          </div>
        </router-link>
      </article>
    </Transition>
  </div>
</template>

<style scoped src="../../assets/css/inBasketBtnMainMenu.css"></style>
