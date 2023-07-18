import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useOrdersStore = defineStore('orders', () => {
  const numberOrder = ref<number>(0)
  const numberTable = ref<number>(0)
  const date = ref<string>('')
  const status = ref<string>('')
  const dishes = ref<any>([])
  const servicePay = ref<number>(0)
  const totalPrice = ref<number>(0)
  const whereEat = ref<boolean>()

  const numberOrderLocalStorage = localStorage.getItem('numberOrder')
  if (numberOrderLocalStorage) {
    numberOrder.value = JSON.parse(numberOrderLocalStorage)._value
  }

  watch(
    () => numberOrder,
    (state) => {
      localStorage.setItem('numberOrder', JSON.stringify(state))
    },
    { deep: true }
  )

  const numberTableLocalStorage = localStorage.getItem('numberTable')
  if (numberTableLocalStorage) {
    numberTable.value = JSON.parse(numberTableLocalStorage)._value
  }

  watch(
    () => numberTable,
    (state) => {
      localStorage.setItem('numberTable', JSON.stringify(state))
    },
    { deep: true }
  )

  const dateLocalStorage = localStorage.getItem('date')
  if (dateLocalStorage) {
    date.value = JSON.parse(dateLocalStorage)._value
  }

  watch(
    () => date,
    (state) => {
      localStorage.setItem('date', JSON.stringify(state))
    },
    { deep: true }
  )

  const statusLocalStorage = localStorage.getItem('status')
  if (statusLocalStorage) {
    status.value = JSON.parse(statusLocalStorage)._value
  }

  watch(
    () => status,
    (state) => {
      localStorage.setItem('status', JSON.stringify(state))
    },
    { deep: true }
  )

  const dishesLocalStorage = localStorage.getItem('dishes')
  if (dishesLocalStorage) {
    dishes.value = JSON.parse(dishesLocalStorage)._value
  }

  watch(
    () => dishes,
    (state) => {
      localStorage.setItem('dishes', JSON.stringify(state))
    },
    { deep: true }
  )

  const servicePayLocalStorage = localStorage.getItem('servicePay')
  if (servicePayLocalStorage) {
    servicePay.value = JSON.parse(servicePayLocalStorage)._value
  }

  watch(
    () => servicePay,
    (state) => {
      localStorage.setItem('servicePay', JSON.stringify(state))
    },
    { deep: true }
  )
  
  const totalPriceLocalStorage = localStorage.getItem('totalPrice')
  if (totalPriceLocalStorage) {
    totalPrice.value = JSON.parse(totalPriceLocalStorage)._value
  }

  watch(
    () => totalPrice,
    (state) => {
      localStorage.setItem('totalPrice', JSON.stringify(state))
    },
    { deep: true }
  )

  const whereEatLocalStorage = localStorage.getItem('whereEat')
  if (whereEatLocalStorage) {
    whereEat.value = JSON.parse(whereEatLocalStorage)._value
  }

  watch(
    () => whereEat,
    (state) => {
      localStorage.setItem('whereEat', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    numberOrder,
    numberTable,
    date,
    status,
    dishes,
    servicePay,
    totalPrice,
    whereEat
  }
})
