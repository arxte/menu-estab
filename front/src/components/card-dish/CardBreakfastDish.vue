<script setup lang="ts">
import PopupCardDish from '../popups/PopupCardDish.vue'
// import { ref } from 'vue'
import { useDishesStore } from '../../stores/dishesStore'

const dishesStore = useDishesStore()

let dishesInBasket: Array<number> = []

function addToBasket(price: number, index: number) {
  dishesStore.countDishesInBasket++

  if (dishesStore.whereEat) {
    dishesStore.calculateWithServicePay(price)
  } else {
    dishesStore.calculateWithoutServicePay(price)
  }

  dishesInBasket.push(index)

  dishesStore.plusCountAmount(index)

  dishesStore.whichWordOnBtn()
}

function removeFromBasket(price: number, index: number) {
  dishesStore.countDishesInBasket--

  if (dishesStore.whereEat) {
    dishesStore.removeDishCalculateWithServicePay(price)
  } else {
    dishesStore.removeDishCalculateWithoutServicePay(price)
  }

  dishesStore.minusCountAmount(index)

  if (dishesInBasket.includes(index)) {
    dishesInBasket.splice(dishesInBasket.indexOf(index), 1)
  }
  dishesStore.whichWordOnBtn()
}
</script>

<template>
  <div class="card-dish-wrapper">
    <article class="card-dish" v-for="dish of dishesStore.breakfast" :key="dish.id">
      <div class="card-dish__img-wrapper">
        <div
          class="card-dish__img-dish_in-basket"
          ref="imgDishInBasket"
          v-if="dishesStore.breakfastDishes[dish.id].amount > 0"
        ></div>
        <div
          class="card-dish__img-amount-dish-wrapper"
          ref="amountImgDishInBasket"
          v-if="dishesStore.breakfastDishes[dish.id].amount > 0"
        >
          <span class="card-dish__img-amount-dish">{{
            dishesStore.breakfastDishes[dish.id].amount
          }}</span>
        </div>
        <img
          :src="`${dish.imagePath}`"
          :alt="dish.title"
          loading="lazy"
          class="card-dish__img"
          @click="
            dishesStore.showPopupCardDish(
              dish.id,
              dish.imagePath,
              dish.title,
              dish.paragraph,
              dish.price,
              dish.amount
            )
          "
        />
      </div>

      <div class="card-dish__content">
        <div
          class="card-dish__text-wrapper"
          @click="
            dishesStore.showPopupCardDish(
              dish.id,
              dish.imagePath,
              dish.title,
              dish.paragraph,
              dish.price,
              dish.amount
            )
          "
        >
          <h3 class="card-dish-text__title">{{ dish.title }}</h3>
          <p class="card-dish-text__paragraph">
            {{ dish.paragraph }}
          </p>
        </div>

        <div class="card-dish__price-wrapper">
          <div
            :class="[
              'card-dish__price',
              { add_active: dishesStore.breakfastDishes[dish.id].amount > 0 }
            ]"
            ref="priceBtn"
          >
            <button
              type="button"
              :class="[
                'card-dish__price-btn',
                'minus_in-active',
                { minus_active: dishesStore.breakfastDishes[dish.id].amount > 0 }
              ]"
              ref="minusDishBtn"
              :disabled="dishesStore.breakfastDishes[dish.id].amount <= 0"
              @click="removeFromBasket(dish.price, dish.id)"
            >
              -
            </button>

            <span class="card-dish__price-text" @click="addToBasket(dish.price, dish.id)"
              >{{ dish.price }} ₸</span
            >
            <button
              type="button"
              class="card-dish__price-btn"
              @click="addToBasket(dish.price, dish.id)"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>

  <Transition name="popup-dish">
    <PopupCardDish v-if="dishesStore.isVisiblePopupCardDish" />
  </Transition>
</template>

<style scoped src="../../assets/css/cardDish.css"></style>
