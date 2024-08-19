<script setup>
import { ANCHOR_LINKS } from './freelancerConstants'
import NavigateItem from '@/components/Freelancer/NavItem.vue'
</script>

<template>
  <ul>
    <NavigateItem v-for="link in ANCHOR_LINKS" :key="link" :text="link" class="md:mb-4" />
  </ul>
</template>
