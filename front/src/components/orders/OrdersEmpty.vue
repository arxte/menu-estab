<script lang="ts" setup>
import NavBar from '../navbar/NavBar.vue'
</script>

<template>
  <header>
    <nav class="orders-empty-navigation">
      <router-link to="/main">
        <img src="../../assets/svg/header/arrowBackToMainPage.svg" alt="arrowBack" />
      </router-link>
      <h1 class="orders-empty-navigation__title">Мои заказы</h1>
    </nav>
  </header>

  <main>
    <div class="orders-empty-wrapper">
      <article class="orders-empty">
        <h2 class="orders-empty__title">У вас еще нет заказов</h2>
        <span class="orders-empty__text">Начните покупки чтобы исправить это</span>
        <router-link to="/menu">
          <button type="button" class="orders-empty__button">Выбрать блюдо</button>
        </router-link>
      </article>
    </div>
  </main>

  <NavBar />
</template>

<style scoped src="../../assets/css/ordersEmpty.css"></style>
