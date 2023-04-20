<script setup lang="ts">
import BasketBtnPay from './BasketBtnPay.vue'
import BasketBreakfast from './basket-dishes/BasketBreakfast.vue'
import NavBar from '../navbar/NavBar.vue'

import BasketClear from './basket-clear/BasketClear.vue'

import BasketEmpty from './basket-empty/BasketEmpty.vue'

import { useDishesStore } from '../../stores/dishesStore'

import { useBasketClearStore } from '../../stores/basketClearStore'

const dishesStore = useDishesStore()
const basketClear = useBasketClearStore()
</script>

<template>
  <header>
    <nav class="basket-navigation">
      <router-link to="/main">
        <img src="../../assets/svg/header/arrowBackToMainPage.svg" alt="arrowBack" />
      </router-link>
      <h1 class="basket-navigation__title">Корзина</h1>
      <img
        src="../../assets/svg/header/trashCan.svg"
        alt="trashCan"
        @click="basketClear.showClearBasketBlock = true"
        v-if="dishesStore.countDishesInBasket > 0"
      />
    </nav>
  </header>

  <article class="basket" v-if="dishesStore.countDishesInBasket > 0">
    <main>
      <div class="basket-title-wrapper">
        <h2 class="basket__title">Urbo Coffee</h2>
        <span class="basket__where-eat">С собой</span>
      </div>

      <div class="basket-dishes-wrapper">
        <BasketBreakfast />
      </div>

    </main>
  </article>
  <BasketEmpty v-else />

  <BasketBtnPay v-if="dishesStore.countDishesInBasket > 0" />

  <NavBar />

  <Transition name="popup-basket-clear">
    <BasketClear v-if="basketClear.showClearBasketBlock" />
  </Transition>
</template>

<style scoped src="../../assets/css/basketBlock.css"></style>
