<script setup>
import ExperienceItem from "./experienceItem.vue";
import { EDUCATIONS_AND_COURSES } from "./freelancerConstants";
</script>

<template>
  <section
    class="my-16 border-b border-gray-500 h-screen flex flex-col justify-center"
    id="education"
  >
    <h2 class="sm:text-6xl md:text-5xl text-5xl my-16">Образование</h2>
    <ExperienceItem
      v-for="data in EDUCATIONS_AND_COURSES"
      :key="data"
      :data="data"
    />
  </section>
</template>
