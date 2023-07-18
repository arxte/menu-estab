<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menuStore';
import CardSweetBreakfastDish from '../../card-dish/CardSweetBreakfastDish.vue'

const menuStore = useMenuStore()
const categoryBlock = ref<HTMLElement | null>(null)

onMounted(() => {
  menuStore.categoryBlock.push(categoryBlock.value)
})
</script>

<template>
  <div class="category-wrapper" ref="categoryBlock">
    <h2 class="category__title">Сладкие завтраки</h2>

    <CardSweetBreakfastDish />
  </div>
</template>

<style scoped src="../../../assets/css/categoryBlock.css">
</style>