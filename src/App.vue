<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <TheHeader class="sticky top-0 w-full z-10"/>

  <RouterView class="" />
</template>

<style scoped></style>
