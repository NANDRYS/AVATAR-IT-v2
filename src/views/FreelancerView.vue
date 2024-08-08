<script setup>
import FreelancerIcon from '../components/FreelancerIcon.vue'
import TheNavigate from '../components/Freelancer/TheNavigate.vue'
import TheAbout from '@/components/Freelancer/TheAbout.vue'
import TheExperience from '@/components/Freelancer/TheExperience.vue'
import TheEducation from '@/components/Freelancer/TheEducation.vue'
</script>
<template>
  <div class="flex">
    <div class="w-1/5">
      <div class="header w-full">
        <FreelancerIcon class="rounded-full w-40 h-40 mb-5" />
        <TheNavigate class="text-white text-2xl capitalize" />
      </div>
    </div>

    <div class="p-10">
      <TheAbout />
      <TheExperience />
      <TheEducation />
      <section>
        <h2>Skills</h2>
        <h3>PROGRAMMING LANGUAGES & TOOLS</h3>
        <h3>a good level of knowledge</h3>
        <h3>poor level of knowledge</h3>
      </section>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  background: skyblue;
  justify-content: center;
  align-items: center;
}
</style>
