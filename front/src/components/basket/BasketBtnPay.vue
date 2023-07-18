<script setup lang="ts">
import { useDishesStore } from '../../stores/dishesStore'

const dishesStore = useDishesStore()
</script>

<template>
  <div class="basket-pay-btn-wrapper" @click="dishesStore.payForDishes()">
    <button class="basket-pay-btn">К оплате {{ dishesStore.costDishesInBasket }}</button>
  </div>
</template>

<style scoped src="../../assets/css/basketBtnPay.css"></style>
