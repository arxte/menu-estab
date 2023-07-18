<script setup lang="ts"></script>

<template>
  <section class="basket-empty">
    <!-- <img src="../../../assets/svg/basket/shopping-cart.svg" alt="shopping cart" class="basket-empty__img" /> -->
    <div class="basket-empty-content-wrapper">
      <h2 class="basket-empty__title">Пустая корзина</h2>
      <span class="basket-empty__message">Добавьте блюда из списка и оформите заказ</span>
      <router-link to="/menu" class="basket-empty__link">
        <button type="button" class="basket-empty__btn">Выбрать блюда</button>
      </router-link>
    </div>
  </section>

  <!-- <NavBar /> -->
</template>

<style scoped src="../../../assets/css/basketEmpty.css"></style>
