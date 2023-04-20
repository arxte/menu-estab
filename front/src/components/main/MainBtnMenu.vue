<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="main-btn-menu-wrapper">
    <router-link to="/menu">
      <button type="button" class="main-btn-menu">Перейти в меню</button>
    </router-link>
  </div>
</template>

<style scoped src="../../assets/css/mainBtnMenu.css"></style>
