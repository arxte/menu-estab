<script setup lang="ts">
import PopupCardDish from '../popups/PopupCardDish.vue'
import { useDishesStore } from '../../stores/dishesStore'
import { register } from 'swiper/element/bundle'

register()

const dishesStore = useDishesStore()

let dishesInBasket: Array<number> = []

function addToBasket(price: number, index: number) {
  dishesStore.countDishesInBasket++

  if (dishesStore.whereEat) {
    dishesStore.calculateWithServicePay(price)
  } else {
    dishesStore.calculateWithoutServicePay(price)
  }

  dishesStore.recommendDishes[index].amount += 1

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

  dishesStore.recommendDishes[index].amount -= 1

  dishesStore.minusCountAmount(index)

  if (dishesInBasket.includes(index)) {
    dishesInBasket.splice(dishesInBasket.indexOf(index), 1)
  }
  dishesStore.whichWordOnBtn()
}
</script>

<template>
  <article class="basket-recommend">
    <h2 class="basket-recommend__title">Рекомендуем</h2>

    <swiper-container
      class="basket-recommend-carousel"
      slides-per-view="auto"
      space-between="7"
      free-mode="true"
      lazy="true"
      speed="100"
    >
      <swiper-slide
        class="basket-recommend-carousel__card-dish carousel-card-dish"
        v-for="carouselDish of dishesStore.recommendDishes"
        :key="carouselDish.id"
      >
        <div
          class="carousel-card-dish-img-wrapper"
          @click="
            dishesStore.showPopupCardDish(
              carouselDish.id,
              carouselDish.imagePath,
              carouselDish.title,
              carouselDish.paragraph,
              carouselDish.price,
              carouselDish.amount
            )
          "
        >
          <div class="carousel-card-dish__img_in-basket" v-if="dishesStore.breakfastDishes[carouselDish.id].amount > 0"></div>

          <div class="carousel-card-dish__img-amount-wrapper" v-if="dishesStore.breakfastDishes[carouselDish.id].amount > 0">
            <span class="carousel-card-dish__img-amount">{{ dishesStore.breakfastDishes[carouselDish.id].amount }}</span>
          </div>
          <img
            :src="carouselDish.imagePath"
            :alt="carouselDish.title"
            class="carousel-card-dish__img"
            loading="lazy"
          />
        </div>

        <div class="carousel-card-dish-content">
          <span
            class="carousel-card-dish__name"
            @click="
              dishesStore.showPopupCardDish(
                carouselDish.id,
                carouselDish.imagePath,
                carouselDish.title,
                carouselDish.paragraph,
                carouselDish.price,
                carouselDish.amount
              )
            "
            >{{ carouselDish.title }}</span
          >

          <div :class="['carousel-card-dish-price-btn', { add_active: carouselDish.amount > 0 }]">
            <button
              :class="[
                'carousel-card-dish-price-btn__minus',
                'minus_in-active',
                { minus_active: carouselDish.amount > 0 }
              ]"
              type="button"
              @click="removeFromBasket(carouselDish.price, carouselDish.id)"
            >
              -
            </button>

            <span
              class="carousel-card-dish-price-btn__price"
              @click="addToBasket(carouselDish.price, carouselDish.id)"
              >{{ carouselDish.price }} ₸</span
            >

            <button
              class="carousel-card-dish-price-btn__plus"
              type="button"
              @click="addToBasket(carouselDish.price, carouselDish.id)"
            >
              +
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </article>

  <Transition name="popup-dish">
    <PopupCardDish v-if="dishesStore.isVisiblePopupCardDish" />
  </Transition>
</template>

<style scoped src="../../assets/css/basketRecommend.css"></style>
