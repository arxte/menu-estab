<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/menu" class="basket-dish-add-more-link">
    <section class="basket-dish-add-more">
      <div class="basket-dish-add-more__picture-rep">
        <div class="basket-dish-add-more__line-horizontal"></div>

        <div class="basket-dish-add-more__line-vertical"></div>
      </div>

      <span class="basket-dish-add-more__title">Добавить еще</span>
    </section>
  </RouterLink>
</template>

<style scoped src="../../../assets/css/basketAddMore.css"></style>
