<script setup lang="ts">
import { ref } from 'vue'
import { useDishesStore } from '../../stores/dishesStore'

const dishesStore = useDishesStore()

const withMyself = ref<HTMLButtonElement | null>()
const inRestaurant = ref<HTMLButtonElement | null>()
</script>

<template>
  <section class="choice-where-wrapper">
    <div class="choice-where">
      <button
        type="button"
        :class="[
          'choice-where__in-restaurant-wrapper',
          { choice_active: dishesStore.whereEat === false }
        ]"
        :disabled="dishesStore.whereEat === false"
        ref="withMyself"
        @click="dishesStore.choiceWhereEat(false)"
      >
        С собой
      </button>
      <button
        type="button"
        :class="[
          'choice-where__in-restaurant-wrapper',
          { choice_active: dishesStore.whereEat === true }
        ]"
        :disabled="dishesStore.whereEat === true"
        ref="inRestaurant"
        @click="dishesStore.choiceWhereEat(true)"
      >
        В ресторане
      </button>
    </div>
  </section>
</template>

<style scoped src="../../assets/css/choiceWhereEat.css">
</style>
