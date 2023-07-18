<script setup lang="ts">
import { useDishesStore } from '../../stores/dishesStore'

const dishesStore = useDishesStore()

function minusAmountCertainDish(index: number, price: number) {
  dishesStore.minusCountAmount(index)
  // dishesStore.costDishesInBasket -= price
  dishesStore.countDishesInBasket--

  if (dishesStore.whereEat) {
    dishesStore.removeDishCalculateWithServicePay(price)
  } else {
    dishesStore.removeDishCalculateWithoutServicePay(price)
  }

  if (dishesStore.breakfastDishes[index].amount <= 0) {
    dishesStore.breakfastDishes[index].amount = 0
  }

  dishesStore.whichWordOnBtn()
}

function plusAmountCertainDish(index: number, price: number) {
  dishesStore.plusCountAmount(index)
  if (dishesStore.whereEat) {
    dishesStore.calculateWithServicePay(price)
  } else {
    dishesStore.calculateWithoutServicePay(price)
  }
  // dishesStore.costDishesInBasket += price
  dishesStore.countDishesInBasket++

  dishesStore.whichWordOnBtn()
}
</script>

<template>
  <ul class="basket-dishes-list">
    <li
      class="basket-dishes__element basket-dish"
      v-for="breakfastDishes of dishesStore.inBasketDishes"
      :key="breakfastDishes.id"
    >
      <div class="basket-dish-container">
        <img
          :src="breakfastDishes.imagePath"
          :alt="breakfastDishes.title"
          class="basket-dish__img"
        />

        <div class="basket-dish-name-price">
          <h3 class="basket-dish-name-price__title">{{ breakfastDishes.title }}</h3>
          <span class="basket-dish-name-price__price">{{ breakfastDishes.price }} ₸</span>
        </div>
      </div>

      <div class="basket-dish-amount">
        <button
          type="button"
          class="basket-dish-amount__btn basket-dish-amount__minus"
          @click="minusAmountCertainDish(breakfastDishes.id, breakfastDishes.price)"
        >
          <span class="basket-dish-minus"></span>
        </button>

        <div class="basket-dish-amount-wrapper">
          <span class="basket-dish-amount__amount">{{ breakfastDishes.amount }}</span>
        </div>

        <button
          type="button"
          class="basket-dish-amount__btn basket-dish-amount__plus"
          @click="plusAmountCertainDish(breakfastDishes.id, breakfastDishes.price)"
        >
          <span class="basket-dish-plus-vertical"></span>
          <span class="basket-dish-plus-horizontal"></span>
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped src="../../assets/css/basketDishesList.css">
</style>
