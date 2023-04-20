<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useOrdersStore } from '../../stores/ordersStore'
import axios from 'axios'
import router from '@/router';
import { useUserDataStore } from '@/stores/userDataStore';

const userDataStore = useUserDataStore()

const ordersStore = useOrdersStore()

let orders: any = ref([])
onMounted(() => {
  async function getOrders() {
    await axios
      .post('http://localhost:3000/getOrders', userDataStore.data.firstname)
      .then((res) => {
        const ordersData = res.data
        console.log(ordersData)

        if(ordersData.length <= 0) {
          router.push('/orders-empty')
        } else {
          ordersData.forEach((item: object) => {
            orders.value.push(item)
          })

          orders.value.reverse()
        }
        // orders.value = ordersData.orders

        // console.log(orders.value)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  getOrders()
})

function getDataToDetails(
  numberOrder: number,
  numberTable: number,
  date: string,
  status: string,
  dishes: any,
  servicePay: number,
  totalPrice: number,
  whereEat: boolean,
) {
  ordersStore.numberOrder = numberOrder
  ordersStore.numberTable = numberTable
  ordersStore.date = date
  ordersStore.status = status
  ordersStore.dishes = dishes
  ordersStore.servicePay = servicePay
  ordersStore.totalPrice = totalPrice
  ordersStore.whereEat = whereEat
}
</script>

<template>
  <header>
    <nav class="orders-navigation">
      <router-link to="/main">
        <img src="../../assets/svg/header/arrowBackToMainPage.svg" alt="arrowBack" />
      </router-link>
      <h1 class="orders-navigation__title">Мои заказы</h1>
    </nav>
  </header>

  <main>
    <article class="orders-wrapper">
      <span class="orders-date">10 апреля</span>

      <article class="order" v-for="order in orders" :key="order.numberOrders">
        <router-link
          to="/order-details"
          class="router-order-to-details"
          @click="
            getDataToDetails(
              order.numberOrder,
              order.numberTable,
              order.date,
              order.status,
              order.dishes,
              order.servicePay,
              order.totalPrice,
              order.whereEat
            )
          "
        >
          <div class="order-content-wrapper">
            <img
              src="../../assets/svg/orders/zaglushka.svg"
              alt="logo"
              loading="lazy"
              class="order__img"
            />

            <div class="order-content">
              <h4 class="order-content__title">Urbo Coffee</h4>
              <div class="order-content-compound-wrapper">
                <span class="order-content__compound" v-for="dish in order.dishes" :key="dish.id"
                  >{{ dish.amount }}x {{ dish.title }}, &nbsp;</span
                >
              </div>

              <div class="order-content__status">{{ order.status }}</div>
            </div>
          </div>

          <span class="order__price">{{ order.totalPrice }}</span>
        </router-link>
      </article>

      <!-- <article class="order">
        <img
          src="../../assets/svg/orders/Rest Photo Square.svg"
          alt="logo"
          loading="lazy"
          class="order__img"
        />

        <div class="order-content">
          <h4 class="order-content__title">Urbo Coffee</h4>
          <p class="order-content__compound">1х, чайник авторский с ягодами</p>

          <span class="order-content__status">Завершен</span>
        </div>

        <span class="order__price">1990</span>
      </article> -->
    </article>
  </main>
</template>

<style scoped src="../../assets/css/ordersBlock.css"></style>
