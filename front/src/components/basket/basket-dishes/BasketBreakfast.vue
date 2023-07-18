<script setup lang="ts">
import BasketAddMore from './BasketAddMore.vue'
import { useDishesStore } from '@/stores/dishesStore'
// import breakfast1 from '@/assets/images/breakfast1.png'
// import breakfast2 from '@/assets/images/breakfast2.png'

const dishesStore = useDishesStore()

function plusDish(id: number, price: number, category: string) {
  dishesStore.countDishesInBasket++
  dishesStore.plusCountAmount(id, category)

  if (dishesStore.whereEat) {
    dishesStore.calculateWithServicePay(price)
  } else {
    dishesStore.calculateWithoutServicePay(price)
  }

  dishesStore.whichWordOnBtn()
}

function minusDish(id: number, price: number, category: string) {
  dishesStore.countDishesInBasket--
  dishesStore.minusCountAmount(id, category)

  if (dishesStore.whereEat) {
    dishesStore.removeDishCalculateWithServicePay(price)
  } else {
    dishesStore.removeDishCalculateWithoutServicePay(price)
  }

  dishesStore.whichWordOnBtn()
}
</script>

<template>
  <section class="basket-dish-block">
    <h3 class="basket-dish-block__title">Первое</h3>

    <div class="basket-dish-wrapper">
      <article class="basket-dish" v-for="dish in dishesStore.inBasketDishFirst" :key="dish.id">
        <div class="baslet-dish-img-wrapper">
          <img
          :src="`${dish.imagePath}`"
            alt="dish"
            class="basket-dish__img"
            loading="lazy"
          />
        </div>

        <div class="basket-dish__info info-dish">
          <span class="info-dish__title">{{ dish.amount }}х, {{ dish.title }}</span>

          <div class="info-dish-button">
            <div class="info-dish-button-plus" @click="plusDish(dish.id, dish.price, dish.category)">
              <div class="info-dish-button-plus-horizontal"></div>
              <div class="info-dish-button-plus-vertical"></div>
            </div>

            <span class="info-dish-button__amount-add">{{ dish.amount }}</span>

            <div class="info-dish-button-minus" @click="minusDish(dish.id, dish.price, dish.category)">
              <div class="info-dish-button-minus-horizontal"></div>
            </div>
          </div>
        </div>

        <span class="basket-dish__price" v-if="dishesStore.whereEat"
          >{{ dish.price * dish.amount + dish.service }} ₸</span
        >

        <span class="basket-dish__price" v-else>{{ dish.price * dish.amount }} ₸</span>
      </article>

      <BasketAddMore />
    </div>

    <h3 class="basket-dish-block__title">Второе</h3>

    <div class="basket-dish-wrapper">
      <article class="basket-dish" v-for="dish in dishesStore.inBasketDishSecond" :key="dish.id">
        <div class="baslet-dish-img-wrapper">
          <img
          :src="`${dish.imagePath}`"
            alt="dish"
            class="basket-dish__img"
            loading="lazy"
          />
        </div>

        <div class="basket-dish__info info-dish">
          <span class="info-dish__title">{{ dish.amount }}х, {{ dish.title }}</span>

          <div class="info-dish-button">
            <div class="info-dish-button-plus" @click="plusDish(dish.id, dish.price, dish.category)">
              <div class="info-dish-button-plus-horizontal"></div>
              <div class="info-dish-button-plus-vertical"></div>
            </div>

            <span class="info-dish-button__amount-add">{{ dish.amount }}</span>

            <div class="info-dish-button-minus" @click="minusDish(dish.id, dish.price, dish.category)">
              <div class="info-dish-button-minus-horizontal"></div>
            </div>
          </div>
        </div>

        <span class="basket-dish__price" v-if="dishesStore.whereEat"
          >{{ dish.price * dish.amount + dish.service }} ₸</span
        >

        <span class="basket-dish__price" v-else >{{ dish.price * dish.amount }} ₸</span>
      </article>

      <BasketAddMore />
    </div>

    <h3 class="basket-dish-block__title">Бургеры</h3>

    <div class="basket-dish-wrapper">
      <article class="basket-dish" v-for="dish in dishesStore.burgersWithAddit" :key="dish.id">
        <div class="baslet-dish-img-wrapper">
          <img
          :src="`${dish.imagePath}`"
            alt="dish"
            class="basket-dish__img"
            loading="lazy"
          />
        </div>

        <div class="basket-dish__info info-dish">
          <span class="info-dish__title">{{ dish.amount }}х, {{ dish.title }}</span>

          <span>{{ dish.additional }}</span>

          <div class="info-dish-button">
            <div class="info-dish-button-plus" @click="plusDish(dish.id, dish.price, dish.category)">
              <div class="info-dish-button-plus-horizontal"></div>
              <div class="info-dish-button-plus-vertical"></div>
            </div>

            <span class="info-dish-button__amount-add">{{ dish.amount }}</span>

            <div class="info-dish-button-minus" @click="minusDish(dish.id, dish.price, dish.category)">
              <div class="info-dish-button-minus-horizontal"></div>
            </div>
          </div>
        </div>

        <span class="basket-dish__price" v-if="dishesStore.whereEat"
          >{{ dish.price * dish.amount + dish.service }} ₸</span
        >

        <span class="basket-dish__price" v-else >{{ dish.price * dish.amount }} ₸</span>
      </article>

      <BasketAddMore />
    </div>

    <h3 class="basket-dish-block__title">Салаты</h3>

    <div class="basket-dish-wrapper">
      <article class="basket-dish" v-for="dish in dishesStore.inBasketDishSalads" :key="dish.id">
        <div class="baslet-dish-img-wrapper">
          <img
          :src="`${dish.imagePath}`"
            alt="dish"
            class="basket-dish__img"
            loading="lazy"
          />
        </div>

        <div class="basket-dish__info info-dish">
          <span class="info-dish__title">1х, Английский завтрак</span>

          <div class="info-dish__button"></div>
        </div>

        <span class="basket-dish__price">1990 ₸</span>
      </article>

      <BasketAddMore />
    </div>

    <h3 class="basket-dish-block__title">Барное</h3>

    <div class="basket-dish-wrapper">
      <article class="basket-dish" v-for="dish in dishesStore.inBasketBar" :key="dish.id">
        <div class="baslet-dish-img-wrapper">
          <img
          :src="`${dish.imagePath}`"
            alt="dish"
            class="basket-dish__img"
            loading="lazy"
          />
        </div>

        <div class="basket-dish__info info-dish">
          <span class="info-dish__title">1х, Английский завтрак</span>

          <div class="info-dish__button"></div>
        </div>

        <span class="basket-dish__price">1990 ₸</span>
      </article>

      <BasketAddMore />
    </div>

    <h3 class="basket-dish-block__title">Десерты</h3>

    <div class="basket-dish-wrapper">
      <article class="basket-dish" v-for="dish in dishesStore.inBasketDishDessert" :key="dish.id">
        <div class="baslet-dish-img-wrapper">
          <img
          :src="`${dish.imagePath}`"
            alt="dish"
            class="basket-dish__img"
            loading="lazy"
          />
        </div>

        <div class="basket-dish__info info-dish">
          <span class="info-dish__title">{{ dish.amount }}х, Английский завтрак</span>

          <div class="info-dish__button"></div>
        </div>

        <span class="basket-dish__price">{{ dish.price }} ₸</span>
      </article>

      <BasketAddMore />
    </div>
  </section>
</template>

<style scoped src="../../../assets/css/basketBreakfast.css"></style>
