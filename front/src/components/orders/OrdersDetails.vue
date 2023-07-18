<script lang="ts" setup>
import NavBar from '../navbar/NavBar.vue'
import { useOrdersStore } from '../../stores/ordersStore'

const ordersStore = useOrdersStore()
</script>

<template>
  <header>
    <nav class="order-details-navigation">
      <router-link to="/main">
        <img src="../../assets/svg/header/arrowBackToMainPage.svg" alt="arrowBack" />
      </router-link>
      <h1 class="order-details-navigation__title">Детали заказа</h1>
    </nav>
  </header>

  <main>
    <article class="order-details">
      <section class="order-details-content-wrapper">
        <h3 class="order-details-content__title">Детали заказа</h3>

        <div class="order-detail-content">
          <span class="order-details-content__name-detail">Номер заказа</span>
          <span class="order-details-content__value-detail">№{{ ordersStore.numberOrder }}</span>
        </div>

        <div class="order-detail-content">
          <span class="order-details-content__name-detail">Номер стола</span>
          <span class="order-details-content__value-detail">№{{ ordersStore.numberTable }}</span>
        </div>

        <div class="order-detail-content">
          <span class="order-details-content__name-detail">Дата и время</span>
          <span class="order-details-content__value-detail">{{ ordersStore.date }}</span>
        </div>

        <div class="order-detail-content">
          <span class="order-details-content__name-detail">Статус</span>
          <span class="order-details-content__value-detail">{{ ordersStore.status }}</span>
        </div>
      </section>

      <section class="order-details-content-wrapper">
        <h3 class="order-details-content__title">Состав заказа</h3>

        <div class="order-detail-content" v-for="dish in ordersStore.dishes" :key="dish.id">
          <span class="order-details-content__name-detail">{{ dish.title }}</span>
          <span class="order-details-content__value-detail">{{ dish.price }} ₸</span>
        </div>
      </section>

      <section class="order-details-content-wrapper">
        <h3 class="order-details-content__title">Итого</h3>

        <div class="order-detail-content" v-if="ordersStore.whereEat">
          <span class="order-details-content__name-detail">Обслуживание 10%</span>
          <span class="order-details-content__value-detail">{{ ordersStore.servicePay }} ₸</span>
        </div>

        <div class="order-detail-content">
          <span class="order-details-content__name-detail">Всего</span>
          <span class="order-details-content__value-detail">{{ ordersStore.totalPrice }} ₸</span>
        </div>
      </section>
    </article>
  </main>

  <NavBar />
</template>

<style scoped src="../../assets/css/ordersDetails.css"></style>
