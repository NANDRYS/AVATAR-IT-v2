<script setup>
import FreelancerIcon from '../components/FreelancerIcon.vue'
import TheNavigate from '../components/Freelancer/TheNavigate.vue'
import TheExperience from '../components/Freelancer/TheExperience.vue'
import TheEducation from '../components/Freelancer/TheEducation.vue'
import TheSkills from '../components/Freelancer/TheSkills.vue'
import TheInterests from '../components/Freelancer/TheInterests.vue'
import TheAbout from '../components/Freelancer/TheAbout.vue'
</script>
<template>
  <div class="flex">
    <div class="w-2/5">
      <div class="header w-full">
        <FreelancerIcon class="rounded-full  mb-5" />
        <TheNavigate class="text-white text-2xl capitalize" />
      </div>
    </div>

    <div class="p-10">
      <TheAbout />
      <TheExperience />
      <TheEducation />
      <TheSkills />
      <TheInterests />
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
