import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
// import { useUserDataStore } from './userDataStore'
// import { useUserDataStore } from './userDataStore'
import axios from 'axios'
import breakfast1 from '@/assets/images/breakfast1.png'
import breakfast2 from '@/assets/images/breakfast2.png'
import burger from '@/assets/images/burger.png'

// const userDataStore = useUserDataStore()

export const useDishesStore = defineStore('dishesStore', () => {
  interface dishTypes {
    id: number
    imagePath: string
    title: string
    paragraph: string
    price: number
    amount: number
    category: string
    service: number
    additional: Array<string>
  }

  const breakfast = ref<Array<dishTypes>>([
    {
      id: 0,
      imagePath: breakfast1,
      title: 'Английский завтрак',
      paragraph:
        'Яичница-глазунья с добавлением охотничьиx колбасок, помидоров черри, красной фасоли, зелёных соевых бобов, хрустящего хлеба и микса свежей зелени.',
      price: 2690,
      amount: 0,
      category: 'first',
      service: 0,
      additional: []
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
      service: 0,
      additional: []
    }
  ])

  const sweetBreakfast = ref<Array<dishTypes>>([
    {
      id: 2,
      imagePath: breakfast1,
      title: 'Английский завтрак',
      paragraph:
        'Яичница-глазунья с добавлением охотничьиx колбасок, помидоров черри, красной фасоли, зелёных соевых бобов, хрустящего хлеба и микса свежей зелени.',
      price: 1690,
      amount: 0,
      category: 'first',
      service: 0,
      additional: []
    },

    {
      id: 3,
      imagePath: breakfast2,
      title: 'Омлет с авокадо и творогом',
      paragraph:
        'Пышный и воздушный завтрак из яиц, наполненный авокадо и творожным сыром/помидорами черри, брокколи, цветной капустой и украшенный миксом салата с фисташковой крошкой.',
      price: 1590,
      amount: 0,
      category: 'first',
      service: 0,
      additional: []
    }
  ])

  const burgers = ref<Array<dishTypes>>([
    {
      id: 4,
      imagePath: burger,
      title: 'Burger beef',
      paragraph: 'Бургер с говяжей котлетой.',
      price: 1350,
      amount: 0,
      category: 'burger',
      service: 0,
      additional: []
    },

    {
      id: 5,
      imagePath: burger,
      title: 'Burger beef x2',
      paragraph: 'Бургер с двойной говяжей котлетой.',
      price: 1800,
      amount: 0,
      category: 'burger',
      service: 0,
      additional: []
    }
  ])

  // console.log(burgers.value)

  const recommendDishes = ref<Array<dishTypes>>([
    {
      id: 0,
      imagePath: breakfast1,
      title: 'Английский завтрак',
      paragraph:
        'Яичница-глазунья с добавлением охотничьиx колбасок, помидоров черри, красной фасоли, зелёных соевых бобов, хрустящего хлеба и микса свежей зелени.',
      price: 2690,
      amount: 0,
      category: 'first',
      service: 0,
      additional: []
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
      service: 0,
      additional: []
    },

    {
      id: 0,
      imagePath: breakfast1,
      title: 'Английский завтрак',
      paragraph:
        'Яичница-глазунья с добавлением охотничьиx колбасок, помидоров черри, красной фасоли, зелёных соевых бобов, хрустящего хлеба и микса свежей зелени.',
      price: 2690,
      amount: 0,
      category: 'first',
      service: 0,
      additional: []
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
      service: 0,
      additional: []
    },

    {
      id: 0,
      imagePath: breakfast1,
      title: 'Английский завтрак',
      paragraph:
        'Яичница-глазунья с добавлением охотничьиx колбасок, помидоров черри, красной фасоли, зелёных соевых бобов, хрустящего хлеба и микса свежей зелени.',
      price: 2690,
      amount: 0,
      category: 'first',
      service: 0,
      additional: []
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
      service: 0,
      additional: []
    }
  ])

  const breakfastDishes = ref(breakfast.value.concat(sweetBreakfast.value, burgers.value))

  // const dishesXXX = ref({
  //   breakfast: [
  //   {

  //   },

  //   {

  //   }
  // ],

  // sweetBreakfast: [
  //   {

  //   },

  //   {

  //   }
  // ],

  // burgers: [
  //   {

  //   },

  //   {

  //   }
  // ]
  // })

  const popupCardDish = ref({
    id: 0,
    imagePath: '',
    title: '',
    paragraph: '',
    price: 0,
    amount: 0, 
    category: '',
  })

  const popupCardDishAddit = ref({
    id: 0,
    imagePath: '',
    title: '',
    paragraph: '',
    price: 0,
    amount: 0,
    category: '',
    service: 0,
    additional: []
  })

  const countDishesInBasket = ref(0)
  const costDishesInBasket = ref(0)
  const whereEat = ref(true)
  const servicePay = ref(0)
  const totalServicePay = ref(0)

  const showPre = ref(false)

  // POPUP DISH
  const wordOnBtn = ref('')
  const isVisiblePopupCardDish = ref(false)
  const isVisiblePopupCardDishAddit = ref(false)
  const countDishesFromPopup = ref(0)
  const costDishesFromPopup = ref(0)
  const servicePayFromPopup = ref(0)
  const totalServicePayFromPopup = ref(0)

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

  // localStorage.removeItem('breakfastDishes')

  const breakfastDishesInLocalStorage = localStorage.getItem('breakfastDishes')
  if (breakfastDishesInLocalStorage) {
    breakfastDishes.value = JSON.parse(breakfastDishesInLocalStorage)._value
  }

  watch(
    () => breakfastDishes,
    (state) => {
      localStorage.setItem('breakfastDishes', JSON.stringify(state))
    },
    { deep: true }
  )

  const inBasketDishFirst = computed(() => {
    return breakfastDishes.value.filter((el: Object) => checkInBasketDishFirst(el))
  })

  const checkInBasketDishFirst = (value: any) => {
    if (value.category === 'first' && value.amount > 0) {
      return true
    } else {
      return false
    }
  }

  const inBasketDishSecond = computed(() => {
    return breakfastDishes.value.filter((el: Object) => checkInBasketDishSecond(el))
  })

  const checkInBasketDishSecond = (value: any) => {
    if (value.category === 'second' && value.amount > 0) {
      return true
    } else {
      return false
    }
  }

  const checkInBasketDishBurgers = (value: any) => {
    if (value.category === 'burger' && value.amount > 0) {
      return true
    } else {
      return false
    }
  }

  const inBasketDishSalads = computed(() => {
    return breakfastDishes.value.filter((el: Object) => checkInBasketDishSalads(el))
  })

  const checkInBasketDishSalads = (value: any) => {
    if (value.category === 'salads' && value.amount > 0) {
      return true
    } else {
      return false
    }
  }

  const inBasketBar = computed(() => {
    return breakfastDishes.value.filter((el: Object) => checkInBasketBar(el))
  })

  const checkInBasketBar = (value: any) => {
    if (value.category === 'bar' && value.amount > 0) {
      return true
    } else {
      return false
    }
  }

  const inBasketDishDessert = computed(() => {
    return breakfastDishes.value.filter((el: Object) => checkInBasketDishDessert(el))
  })

  const checkInBasketDishDessert = (value: any) => {
    if (value.category === 'dessert' && value.amount > 0) {
      return true
    } else {
      return false
    }
  }

  const inBasketDishes: any = ref([])
  const plusCountAmount = (id: number, category: string) => {
    if (category === 'burger') {
      burgersWithAddit.value.forEach((item: any, index: number) => {
        if (id === item.id) {
          item.amount += 1
          // item.amount += 1
          recommendDishCountAmount(item.id)
          breakfastDishes.value[item.idMain].amount += 1
          item.service += (item.price * 10) / 100
        }
      })
    } else {
      breakfastDishes.value[id].amount += 1
      recommendDishCountAmount(id)
      breakfastDishes.value[id].service += (breakfastDishes.value[id].price * 10) / 100
    }
  }

  const recommendDishCountAmount = (idMainMenu: number) => {
    recommendDishes.value.forEach((item, index) => {
      const recId = recommendDishes.value[index].id
      if (idMainMenu === recId) {
        recommendDishes.value[index].amount = breakfastDishes.value[idMainMenu].amount
      }
    })
  }

  const minusCountAmount = (id: number, category: string) => {
    if (category === 'burger') {
      burgersWithAddit.value.forEach((item: any, index: number) => {
        if (id === item.id) {
          item.amount -= 1
          // item.amount += 1
          recommendDishCountAmount(item.id)
          breakfastDishes.value[item.idMain].amount -= 1
          item.service -= (item.price * 10) / 100
        }
      })
    } else {
      breakfastDishes.value[id].amount -= 1
      recommendDishCountAmount(id)
      breakfastDishes.value[id].service -= (breakfastDishes.value[id].price * 10) / 100
    }
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

  const showPopupCardDishAddit = (
    id: number,
    imagePath: string,
    title: string,
    paragraph: string,
    price: number,
    category: string,
    service: number
  ) => {
    popupCardDishAddit.value.id = id
    popupCardDishAddit.value.imagePath = imagePath
    popupCardDishAddit.value.title = title
    popupCardDishAddit.value.paragraph = paragraph
    popupCardDishAddit.value.price = price
    // popupCardDishAddit.value.amount = amount
    popupCardDishAddit.value.category = category
    popupCardDishAddit.value.service = service
    isVisiblePopupCardDishAddit.value = true
    console.log(popupCardDishAddit.value)
  }

  const closePopupCardDishAddit = () => {
    isVisiblePopupCardDishAddit.value = false
  }

  const calculateServicePayFromPopup = (price: number) => {
    servicePayFromPopup.value = (price * 10) / 100
    totalServicePayFromPopup.value += servicePayFromPopup.value
  }

  const plusDishInPopup = (price: number) => {
    popupCardDishAddit.value.amount++
    if (whereEat.value === true) {
      countDishesFromPopup.value++
      calculateServicePayFromPopup(price)

      costDishesFromPopup.value += price + servicePayFromPopup.value
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

  const addDishesFromPopup = (id: number, addit: any) => {
    isVisiblePopupCardDish.value = false
    isVisiblePopupCardDishAddit.value = false

    breakfastDishes.value.forEach((item: any) => {
      if (id === item.id) {
        item.amount += countDishesFromPopup.value
        costDishesInBasket.value += costDishesFromPopup.value
        countDishesInBasket.value += countDishesFromPopup.value
        servicePay.value += servicePayFromPopup.value
        totalServicePay.value += totalServicePayFromPopup.value

        // console.log(addit.join(', '))
        item.additional = addit.join(', ')
      }
    })

    recommendDishes.value.forEach((item: any) => {
      if (id === item.id) {
        item.amount += countDishesFromPopup.value
      }
    })

    countDishesFromPopup.value = 0
    costDishesFromPopup.value = 0
    servicePayFromPopup.value = 0
    totalServicePayFromPopup.value = 0
  }

  const addDishesFromPopupAddit = (id: number) => {
    isVisiblePopupCardDish.value = false
    isVisiblePopupCardDishAddit.value = false

    breakfastDishes.value.forEach((item: any) => {
      if (id === item.id) {
        item.amount += countDishesFromPopup.value
        costDishesInBasket.value += costDishesFromPopup.value
        countDishesInBasket.value += countDishesFromPopup.value
        servicePay.value += servicePayFromPopup.value
        totalServicePay.value += totalServicePayFromPopup.value
      }
    })

    recommendDishes.value.forEach((item: any) => {
      if (id === item.id) {
        item.amount += countDishesFromPopup.value
      }
    })

    countDishesFromPopup.value = 0
    costDishesFromPopup.value = 0
    servicePayFromPopup.value = 0
    totalServicePayFromPopup.value = 0
  }

  const newBurger = ref({
    id: 0,
    idMain: 0,
    imagePath: '',
    title: '',
    paragraph: '',
    price: 0,
    amount: 0,
    category: '',
    service: 0,
    additional: ''
  })

  const burgersWithAddit = ref<any>([])

  const plusDishInPopupAddit = (price: number, id: number, category: string) => {
    plusDishInPopup(price)

    burgersWithAddit.value.forEach((item: any, index: number) => {
      console.log(id)
    })
  }

  const createBurgerDish = (
    id: number,
    idMain: number,
    imagePath: any,
    title: string,
    paragraph: string,
    price: number,
    amount: number,
    category: string,
    service: number,
    additional: any
  ) => {
    const additParse = additional.join(', ')

    newBurger.value = {
      id: id,
      idMain: id,
      imagePath: imagePath,
      title: title,
      paragraph: paragraph,
      price: price,
      amount: amount,
      category: category,
      service: (price * 10) / 100,
      additional: additParse
    }

    addDishesFromPopupAddit(id)

    burgersWithAddit.value.push(newBurger.value)
    burgersWithAddit.value.forEach((item: any, index: number) => {
      item.id = 250 + index
    })
    console.log('burgers: ', burgersWithAddit.value)
    popupCardDishAddit.value.amount = 0
    console.log(popupCardDishAddit.value.amount )
  }

  // return breakfastDishes.value.filter((el: Object) => checkInBasketDishBurgers(el))

  const calculateTotalCountBurger = (amount: number) => {
    const totalCountBurger = ref<number>(0)

    burgersWithAddit.value.forEach((item: any) => {
      totalCountBurger.value += item.amount
    })

    return totalCountBurger
  }

  interface Order {
    numberOrder: number
    numberTable: number
    date: string
    status: string
    dishes: Array<Object>
    servicePay: number
    totalServicePay: number
    totalPrice: number
    whereEat: boolean
  }

  const orderData: Order = {
    numberOrder: 0,
    numberTable: 100,
    date: '1 января 00:00',
    status: 'Обрабатывается',
    dishes: [],
    servicePay: 0,
    totalServicePay: 0,
    totalPrice: 0,
    whereEat: whereEat.value
  }

  const getDate = () => {
    const date = new Date()
    const day: string = date.getDate().toString()
    let month: string = date.getMonth().toString()
    const hours: string = date.getHours().toString()
    const minutes: string = date.getMinutes().toString()
    const time: string = hours + ':' + minutes

    switch (month) {
      case '0':
        month = 'Января'
        break
      case '1':
        month = 'Февраля'
        break
      case '2':
        month = 'Мартa'
        break
      case '3':
        month = 'Апреля'
        break
      case '4':
        month = 'Мая'
        break
      case '5':
        month = 'Июня'
        break
      case '6':
        month = 'Июля'
        break
      case '7':
        month = 'Августа'
        break
      case '8':
        month = 'Сентября'
        break
      case '9':
        month = 'Октября'
        break
      case '10':
        month = 'Ноября'
        break
      case '11':
        month = 'Декабря'
        break
    }

    const orderDate: string = day + ' ' + month + ' ' + time
    return orderDate
  }

  const getDishes = () => {
    inBasketDishes.value = inBasketDishes.value.concat(
      inBasketDishFirst.value,
      inBasketDishSecond.value,
      inBasketDishSalads.value,
      inBasketBar.value,
      inBasketDishDessert.value
    )

    inBasketDishes.value.forEach((element: any) => {
      orderData.dishes.push(element)
    })

    inBasketDishes.value = []

    return orderData.dishes
  }

  // const userDataStore = useUserDataStore()

  const payForDishes = () => {
    orderData.date = getDate()
    orderData.dishes = getDishes()
    orderData.servicePay = totalServicePay.value
    orderData.totalPrice = costDishesInBasket.value
    orderData.whereEat = whereEat.value
    console.log(orderData.whereEat)

    async function addOrder() {
      // получение значений из инуптов в обьект
      // const userId = ref(userDataStore.userId)

      await axios.post('http://localhost:3000/menu', orderData).then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          console.log(response.status)
          // orderData.dishes = []

          console.log(response.data)
        }
      })

      // orderData.dishes = []
    }

    addOrder()

    countDishesInBasket.value = 0
    costDishesInBasket.value = 0
    whereEat.value = true
    servicePay.value = 0
    totalServicePay.value = 0
    burgersWithAddit.value = []
    breakfastDishes.value.forEach((item: any) => {
      item.amount = 0
      item.service = 0
    })

    // breakfast.value.forEach((item: any) => {
    //   item.amount = 0
    // })

    // recommendDishes.value.forEach((item: any) => {
    //   item.amount = 0
    // })

    orderData.dishes = []
  }

  return {
    breakfast,
    sweetBreakfast,
    burgers,
    recommendDishes,
    breakfastDishes,
    popupCardDish,
    popupCardDishAddit,
    countDishesInBasket,
    costDishesInBasket,
    whereEat,
    servicePay,
    totalServicePay,
    wordOnBtn,
    isVisiblePopupCardDish,
    isVisiblePopupCardDishAddit,
    countDishesFromPopup,
    costDishesFromPopup,
    servicePayFromPopup,
    totalServicePayFromPopup,
    showPre,
    inBasketDishFirst,
    inBasketDishSecond,
    // inBasketDishBurgers,
    inBasketDishSalads,
    inBasketBar,
    inBasketDishDessert,
    inBasketDishes,
    burgersWithAddit,
    createBurgerDish,
    calculateTotalCountBurger,
    plusDishInPopupAddit,
    checkInBasketDishFirst,
    checkInBasketDishSecond,
    checkInBasketDishBurgers,
    checkInBasketDishSalads,
    checkInBasketBar,
    checkInBasketDishDessert,
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
    showPopupCardDishAddit,
    calculateServicePayFromPopup,
    plusDishInPopup,
    minusDishInPopup,
    addDishesFromPopup,
    addDishesFromPopupAddit,
    payForDishes,
    closePopupCardDishAddit
  }
})
