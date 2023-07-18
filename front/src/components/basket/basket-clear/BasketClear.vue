<script setup lang="ts">
import { useBasketClearStore } from '../../../stores/basketClearStore'
const basketClear = useBasketClearStore()
</script>

<template>
  <section class="basket-clear">
    <div class="basket-clear-popup-wrapper">
      <section class="basket-clear-popup">
        <h4 class="basket-clear-popup__title">Очистить корзину?</h4>

        <div class="basket-clear-popup-btns-wrapper">
          <button
            type="button"
            class="basket-clear-popup-btn basket-clear-popup-btn-no"
            @click="basketClear.showClearBasketBlock = false"
          >
            Нет
          </button>

          <button
            type="button"
            class="basket-clear-popup-btn basket-clear-popup-btn-yes"
            @click="basketClear.clearBasket()"
          >
            Да
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped src="../../../assets/css/basketClear.css"></style>
