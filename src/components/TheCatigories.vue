<script setup>
import { IT_SPECIALTIES } from '@/constants'
</script>
<template>
  <div class="categories flex flex-row">
    <ul>
      <li class="categoris" v-for="spec in IT_SPECIALTIES" :key="spec">{{ spec }}</li>
    </ul>
  </div>
</template>
<style scoped>
.categoris {
  padding: 0.8rem;
  border-bottom: 2px solid purple;
  transition: all ease .5s;
}
.categoris:hover {
  background: rgba(57, 57, 57, 0.2);
  border-bottom:2px solid cornflowerblue;
}
</style>
