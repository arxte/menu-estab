<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <Transition name="open-page" mode="out-in">
      <div :key="route.fullPath">
        <component :is="Component" />
      </div>
    </Transition>
  </router-view>
</template>

<style scoped src="./assets/css/app.css"></style>
