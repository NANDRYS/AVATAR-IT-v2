<script setup>
import { ANCHOR_LINKS } from './freelancerConstants'
import NavigateItem from './navigateItem.vue'
</script>

<template>
  <ul>
    <NavigateItem v-for="link in ANCHOR_LINKS" :key="link" :text="link" />
  </ul>
</template>
