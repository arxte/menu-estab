<script setup lang="ts">
import { ref } from 'vue'
import { useDishesStore } from '@/stores/dishesStore'

const dishesStore = useDishesStore()

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
    dishesStore.isVisiblePopupCardDishAddit = false
  }
  // console.log('Разница:', diff)
}

function onTouchEnd(event: any) {
  startY.value = 0
  endY.value = 0
}

function checkedInput(event: any, price: number) {
  const additionalValue = event.target.value

  if (event.target.checked === true) {
    dishesStore.popupCardDishAddit.price += price
    additional.value.push(additionalValue)
  } else {
    dishesStore.popupCardDishAddit.price -= price

    additional.value.find((item, index, array) => {
      if(additionalValue === item) {
        array.splice(index, 1)
      }
    })
  }
}

const additional = ref<Array<string>>([])

interface additTypes {
  id: number
  name: string
  price: number
}

const ingredients = ref<Array<additTypes>>([
  {
    id: 0,
    name: 'Доп. помидор',
    price: 0
  },

  {
    id: 1,
    name: 'Coyc "гоуда"',
    price: 200
  },

  {
    id: 2,
    name: 'Coyc "ладжан"',
    price: 150
  },

  {
    id: 3,
    name: 'Перец халапеньо',
    price: 150
  }
])

const drinkables = ref<Array<additTypes>>([
  {
    id: 0,
    name: 'Coca-cola',
    price: 250
  },

  {
    id: 1,
    name: 'Fanta',
    price: 250
  },

  {
    id: 2,
    name: 'Pepsi',
    price: 250
  },

  {
    id: 3,
    name: 'Sprite',
    price: 250
  },

  {
    id: 4,
    name: 'Fuse tea',
    price: 350
  }
])

function addToBasketPopupAddit() {}
</script>

<template>
  <div class="popup-card-dish-addit_bgc">
    <article
      class="popup-card-dish-addit"
      @touchstart="onTouchStart"
      @:touchmove="onTouchMove"
      @:touchend="onTouchEnd"
    >
      <div class="popup-card-dish-addit-wrapper">
        <div class="line-ui"></div>

        <div
          class="popup-card-dish-addit-arrow-wrapper"
          @click="dishesStore.closePopupCardDishAddit()"
        >
          <img
            src="@/assets/svg/popup-card-dish/arrow-back.svg"
            alt="arrow"
            class="popup-card-dish-addit__arrow"
          />
        </div>

        <img
          :src="dishesStore.popupCardDishAddit.imagePath"
          :alt="dishesStore.popupCardDishAddit.title"
          class="popup-card-dish-addit__img"
        />

        <h2 class="popup-card-dish-addit__title">{{ dishesStore.popupCardDishAddit.title }}</h2>

        <span class="popup-card-dish-addit__text">{{
          dishesStore.popupCardDishAddit.paragraph
        }}</span>

        <h3 class="popup-card-dish-addit__title-addit">Дополнительные ингредиенты</h3>

        <form action="#" class="additionally-from">
          <label
            class="additionally-input-label"
            @change="checkedInput($event, ingredient.price)"
            v-for="ingredient in ingredients"
            :key="ingredient.id"
          >
            <input
              type="checkbox"
              name="additionally"
              :value="ingredient.name"
              class="popup-card-dish-addit__input"
            />

            <span class="additionally-input-text">{{ ingredient.name }}</span>

            <span class="additionally-input-price">+{{ ingredient.price }}</span>
          </label>
        </form>

        <h3 class="popup-card-dish-addit__title-addit">Напитки</h3>

        <form action="#" class="additionally-from">
          <label
            class="additionally-input-label"
            @change="checkedInput($event, drink.price)"
            v-for="drink in drinkables"
            :key="drink.id"
          >
            <input
              type="checkbox"
              name="additionally-bar"
              :value="drink.name"
              class="popup-card-dish-addit__input"
            />

            <span class="additionally-input-text">{{ drink.name }}</span>
            <span class="additionally-input-price">+{{ drink.price }}</span>
          </label>
        </form>
      </div>

      <div class="popup-card-dish-addit__btn-add-wrapper btn-add-wrapper">
        <div class="btn-add">
          <button class="btn-add__minus">
            <div class="btn-add-horizontal"></div>
          </button>

          <span
            class="btn-add__price"
            @click="dishesStore.createBurgerDish(dishesStore.popupCardDishAddit.id, dishesStore.popupCardDishAddit.id, dishesStore.popupCardDishAddit.imagePath, dishesStore.popupCardDishAddit.title, dishesStore.popupCardDishAddit.paragraph, dishesStore.popupCardDishAddit.price, dishesStore.popupCardDishAddit.amount, dishesStore.popupCardDishAddit.category, dishesStore.popupCardDishAddit.service, additional)"
            ><span
              >x{{ dishesStore.popupCardDishAddit.amount }}</span
            >
            {{ dishesStore.popupCardDishAddit.price }}</span
          >

          <button
            class="btn-add__plus"
            @click="dishesStore.plusDishInPopup(dishesStore.popupCardDishAddit.price)"
          >
            <div class="btn-add-horizontal"></div>
            <div class="btn-add-vertical"></div>
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped src="@/assets/css/popupCardDishAddit.css"></style>
