<script setup >
import ExperienceItem from './ExperienceItem.vue';
import { FREELANCER_EXPERIENCE } from './freelancerConstants';
</script>

<template>
  <section
    class="my-16 border-b border-gray-500 h-screen flex flex-col justify-center"
    id="experience"
  >
    <h2 class="text-6xl my-16">Опыт</h2>
    <ExperienceItem v-for="data in FREELANCER_EXPERIENCE" :key="data" :data="data" />
  </section>
</template>
