<script setup>
import FreelancerIcon from '../components/FreelancerIcon.vue'
import TheNavigate from '../components/Freelancer/TheNavigate.vue'
import TheAbout from '@/components/Freelancer/TheAbout.vue'
import TheExperience from '@/components/Freelancer/TheExperience.vue'
import TheEducation from '@/components/Freelancer/TheEducation.vue'
import { SKILLS } from '@/components/Freelancer/freelancerConstants'
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
      <section
        class="my-16 border-b border-gray-500 h-screen flex flex-col justify-center"
        id="skills"
      >
        <h2 class="text-6xl mt-16 mb-6">Skills</h2>
        <h3 class="text-4xl text-gray-600">PROGRAMMING LANGUAGES & TOOLS</h3>
        <h3 class="text-2xl uppercase mt-10">a good level of knowledge</h3>
        <ul v-if="Object.keys(SKILLS.languages).length != 0" class="flex gap-2 my-4">
          <label> Language: </label>
          <li v-for="(good, val) in SKILLS.languages" :key="val">
            <span
              class="text-2.5xl text-white rounded bg-red-500 p-2 border border-black"
              v-if="good == 'good'"
            >
              {{ val }}</span
            >
          </li>
        </ul>
        <ul v-if="Object.keys(SKILLS.tools).length != 0" class="flex gap-2 my-4">
          <label> Tools: </label>
          <li v-for="(good, val) in SKILLS.tools" :key="val">
            <span
              class="text-2.5xl text-white rounded bg-red-500 p-2 border border-black"
              v-if="good == 'good'"
            >
              {{ val }}</span
            >
          </li>
        </ul>
        <ul v-if="Object.keys(SKILLS.libraries).length != 0" class="flex gap-2 my-4">
          <label> Libraries: </label>
          <li v-for="(good, val) in SKILLS.libraries" :key="val">
            <span
              class="text-2.5xl text-white rounded bg-red-500 p-2 border border-black"
              v-if="good == 'good'"
            >
              {{ val }}</span
            >
          </li>
        </ul>
        <ul v-if="Object.keys(SKILLS.frameworks).length != 0" class="flex gap-2 my-4">
          <label> Framevorks: </label>
          <li v-for="(good, val) in SKILLS.frameworks" :key="val">
            <span
              class="text-2.5xl text-white rounded bg-red-500 p-2 border border-black"
              v-if="good == 'good'"
            >
              {{ val }}</span
            >
          </li>
        </ul>
        <h3 class="text-2xl uppercase">poor level of knowledge</h3>
        <p class="text-gray-400 mt-10">
          Адаптивный дизайн, ориентированный на мобильные устройства Кроссбраузерное Тестирование и
          отладка Кросс-Функциональные команды Удаленная работа Специальные возможности Гибкая
          Разработка и Scrum
        </p>
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
