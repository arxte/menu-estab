import { defineStore } from 'pinia'
import { useDishesStore } from './dishesStore'
import { ref } from 'vue'

export const useBasketClearStore = defineStore('basketClear', () => {
  const showClearBasketBlock = ref(false)

  const clearBasket = () => {
    const dishesStore = useDishesStore()

    showClearBasketBlock.value = false
    dishesStore.totalServicePay = 0
    dishesStore.servicePay = 0
    dishesStore.costDishesInBasket = 0
    dishesStore.countDishesInBasket = 0

    dishesStore.breakfastDishes.forEach((item) => {
      item.amount = 0
    })

    dishesStore.recommendDishes.forEach((item) => {
      item.amount = 0
    })
  }

  return {
    showClearBasketBlock,
    clearBasket
  }
})
