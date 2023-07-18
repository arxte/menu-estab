import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import breakfast2 from '@/assets/images/breakfast2.png'

export const useSweetBreakfastDish = defineStore('sweetBreakfastStore', () => {
  interface dishTypes {
    id: number
    imagePath: string
    title: string
    paragraph: string
    price: number
    amount: number
    category: string
    service: number
  }

  const sweetBreakfastDishes = ref<Array<dishTypes>>([
    {
      id: 0,
      imagePath: breakfast2,
      title: 'Английский завтрак',
      paragraph:
        'Яичница-глазунья с добавлением охотничьиx колбасок, помидоров черри, красной фасоли, зелёных соевых бобов, хрустящего хлеба и микса свежей зелени.',
      price: 2690,
      amount: 0,
      category: 'first',
      service: 0
    },

    {
      id: 1,
      imagePath: breakfast2,
      title: 'Омлет с авокадо и творогом',
      paragraph:
        'Пышный и воздушный завтрак из яиц, наполненный авокадо и творожным сыром/помидорами черри, брокколи, цветной капустой и украшенный миксом салата с фисташковой крошкой.',
      price: 2590,
      amount: 0,
      category: 'first',
      service: 0
    }
  ])

  // dishesStore.plusCountAmount

  const popupCardDish = ref<dishTypes>({
    id: 0,
    imagePath: '',
    title: '',
    paragraph: '',
    price: 0,
    amount: 0,
    category: '',
    service: 0
  })

  const countDishesInBasket = ref<number>(0)
  const costDishesInBasket = ref<number>(0)
  const whereEat = ref<boolean>(true)
  const servicePay = ref<number>(0)
  const totalServicePay = ref<number>(0)

  const showPre = ref<boolean>(false)

  // POPUP DISH
  const wordOnBtn = ref<string>('')
  const isVisiblePopupCardDish = ref<boolean>(false)
  const countDishesFromPopup = ref<number>(0)
  const costDishesFromPopup = ref<number>(0)
  const servicePayFromPopup = ref<number>(0)
  const totalServicePayFromPopup = ref<number>(0)

  const countDishesInBasketLocalStorage = localStorage.getItem('countDishesInBasket')
  if (countDishesInBasketLocalStorage) {
    countDishesInBasket.value = JSON.parse(countDishesInBasketLocalStorage)._value
  }

  watch(
    () => countDishesInBasket,
    (state) => {
      localStorage.setItem('countDishesInBasket', JSON.stringify(state))
    },
    { deep: true }
  )

  const costDishesInBasketLocalStorage = localStorage.getItem('costDishesInBasket')
  if (costDishesInBasketLocalStorage) {
    costDishesInBasket.value = JSON.parse(costDishesInBasketLocalStorage)._value
  }

  watch(
    () => costDishesInBasket,
    (state) => {
      localStorage.setItem('costDishesInBasket', JSON.stringify(state))
    },
    { deep: true }
  )

  const whereEatInBasketLocalStorage = localStorage.getItem('whereEat')
  if (whereEatInBasketLocalStorage) {
    whereEat.value = JSON.parse(whereEatInBasketLocalStorage)._value
  }

  watch(
    () => whereEat,
    (state) => {
      localStorage.setItem('whereEat', JSON.stringify(state))
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

  const totalServicePayLocalStorage = localStorage.getItem('totalServicePay')
  if (totalServicePayLocalStorage) {
    totalServicePay.value = JSON.parse(totalServicePayLocalStorage)._value
  }

  watch(
    () => totalServicePay,
    (state) => {
      localStorage.setItem('totalServicePay', JSON.stringify(state))
    },
    { deep: true }
  )

  const wordOnBtnLocalStorage = localStorage.getItem('wordOnBtn')
  if (wordOnBtnLocalStorage) {
    wordOnBtn.value = JSON.parse(wordOnBtnLocalStorage)._value
  }

  watch(
    () => wordOnBtn,
    (state) => {
      localStorage.setItem('wordOnBtn', JSON.stringify(state))
    },
    { deep: true }
  )

  localStorage.removeItem('breakfastDishes')

  const breakfastDishesInLocalStorage = localStorage.getItem('breakfastDishes')
  if (breakfastDishesInLocalStorage) {
    sweetBreakfastDishes.value = JSON.parse(breakfastDishesInLocalStorage)._value
    // console.log(breakfastDishesInLocalStorage)
  }

  watch(
    () => sweetBreakfastDishes,
    (state) => {
      localStorage.setItem('breakfastDishes', JSON.stringify(state))
    },
    { deep: true }
  )

  const inBasketDishes = computed(() => {
    return sweetBreakfastDishes.value.filter((el: any) => el.amount > 0)
  })

  const plusCountAmount = (id: number) => {
    sweetBreakfastDishes.value[id].amount += 1
  }

  const minusCountAmount = (id: number) => {
    sweetBreakfastDishes.value[id].amount -= 1
  }

  const choiceWhereEat = (value: boolean) => {
    whereEat.value = value

    if (!whereEat.value) {
      costDishesInBasket.value = costDishesInBasket.value - totalServicePay.value
    } else {
      costDishesInBasket.value = costDishesInBasket.value + totalServicePay.value
    }
  }

  const calculateWithServicePay = (price: number) => {
    calculateServicePay(price)

    costDishesInBasket.value += servicePay.value + price
  }

  const calculateWithoutServicePay = (price: number) => {
    costDishesInBasket.value += price
    calculateServicePay(price)
  }

  const removeDishCalculateWithServicePay = (price: number) => {
    servicePay.value = (price * 10) / 100

    costDishesInBasket.value -= servicePay.value + price

    totalServicePay.value -= servicePay.value
  }

  const removeDishCalculateWithoutServicePay = (price: number) => {
    servicePay.value = (price * 10) / 100
    costDishesInBasket.value -= price

    totalServicePay.value -= servicePay.value
  }

  const calculateServicePay = (price: number) => {
    servicePay.value = (price * 10) / 100
    totalServicePay.value += servicePay.value
  }

  const whichWordOnBtn = () => {
    if (countDishesInBasket.value > 10 && countDishesInBasket.value < 20) {
      wordOnBtn.value = 'блюд'
    } else {
      switch (countDishesInBasket.value % 10) {
        case 0:
          return (wordOnBtn.value = 'блюд')
          break
        case 1:
          return (wordOnBtn.value = 'блюдо')
          break
        case 2:
          return (wordOnBtn.value = 'блюда')
          break
        case 3:
          return (wordOnBtn.value = 'блюда')
          break
        case 4:
          return (wordOnBtn.value = 'блюда')
          break
        case 5:
          return (wordOnBtn.value = 'блюд')
          break
        case 6:
          return (wordOnBtn.value = 'блюд')
          break
        case 7:
          return (wordOnBtn.value = 'блюд')
          break
        case 8:
          return (wordOnBtn.value = 'блюд')
          break
        case 9:
          return (wordOnBtn.value = 'блюд')
          break
      }
    }
  }

  const showPopupCardDish = (
    id: number,
    imagePath: string,
    title: string,
    paragraph: string,
    price: number,
    amount: number
  ) => {
    popupCardDish.value.id = id
    popupCardDish.value.imagePath = imagePath
    popupCardDish.value.title = title
    popupCardDish.value.paragraph = paragraph
    popupCardDish.value.price = price
    popupCardDish.value.amount = amount
    isVisiblePopupCardDish.value = true
  }

  const calculateServicePayFromPopup = (price: number) => {
    servicePayFromPopup.value = (price * 10) / 100
    totalServicePayFromPopup.value += servicePayFromPopup.value
  }

  const plusDishInPopup = (price: number) => {
    if (whereEat.value === true) {
      countDishesFromPopup.value++
      calculateServicePayFromPopup(price)

      costDishesFromPopup.value += price + servicePayFromPopup.value
      console.log(costDishesFromPopup.value)
    } else {
      countDishesFromPopup.value++
      calculateServicePayFromPopup(price)

      costDishesFromPopup.value += price
    }
  }

  const minusDishInPopup = (price: number) => {
    if (whereEat.value === true) {
      countDishesFromPopup.value--
      servicePayFromPopup.value = (price * 10) / 100

      costDishesFromPopup.value -= servicePayFromPopup.value + price

      totalServicePayFromPopup.value -= servicePayFromPopup.value
    } else {
      countDishesFromPopup.value--
      servicePayFromPopup.value = (price * 10) / 100
      costDishesFromPopup.value -= price

      totalServicePayFromPopup.value -= servicePayFromPopup.value
    }
  }

  const addDishesFromPopup = (id: number) => {
    isVisiblePopupCardDish.value = false

    sweetBreakfastDishes.value.forEach((item) => {
      if (id === item.id) {
        item.amount += countDishesFromPopup.value
        costDishesInBasket.value += costDishesFromPopup.value
        countDishesInBasket.value += countDishesFromPopup.value
        servicePay.value += servicePayFromPopup.value
        totalServicePay.value += totalServicePayFromPopup.value
      }
    })

    countDishesFromPopup.value = 0
    costDishesFromPopup.value = 0
    servicePayFromPopup.value = 0
    totalServicePayFromPopup.value = 0
  }

  const payForDishes = () => {
    countDishesInBasket.value = 0
    costDishesInBasket.value = 0
    whereEat.value = true
    servicePay.value = 0
    totalServicePay.value = 0

    sweetBreakfastDishes.value.forEach((item) => {
      item.amount = 0
    })
  }

  return {
    sweetBreakfastDishes,
    popupCardDish,
    countDishesInBasket,
    costDishesInBasket,
    whereEat,
    servicePay,
    totalServicePay,
    wordOnBtn,
    isVisiblePopupCardDish,
    countDishesFromPopup,
    costDishesFromPopup,
    servicePayFromPopup,
    totalServicePayFromPopup,
    inBasketDishes,
    showPre,
    plusCountAmount,
    minusCountAmount,
    choiceWhereEat,
    calculateWithServicePay,
    calculateWithoutServicePay,
    removeDishCalculateWithServicePay,
    removeDishCalculateWithoutServicePay,
    calculateServicePay,
    whichWordOnBtn,
    showPopupCardDish,
    calculateServicePayFromPopup,
    plusDishInPopup,
    minusDishInPopup,
    addDishesFromPopup,
    payForDishes
  }
})
