<script setup>
import FreelancerIcon from '../components/FreelancerIcon.vue'
import TheNavigate from '../components/Freelancer/TheNavigate.vue'
import ExperienceItem from '../components/Freelancer/ExperienceItem.vue'
import {
  EDUCATIONS_AND_COURSES,
  FREELANCER_EXPERIENCE
} from '@/components/Freelancer/freelancerConstants'
</script>
<template>
  <div class="flex">
    <div class="flex flex-col sticky w-1/5 bg-sky-500 h-screen justify-center items-center">
      <FreelancerIcon class="rounded-full" />
      <TheNavigate class="text-white" />
    </div>
    <div class=" p-10">
      <section>
        <a name="about"></a>
        <h2 class="text">Смлыслов Алексей Михайлович</h2>
        <span>smislov@email.com</span>
        <p class="text-gray-500">
          У меня есть опыт в использовании гибких фреймворков для создания надежного резюме для
          обзоров высокого уровня. Итеративные подходы к корпоративной стратегии способствуют
          совместному мышлению для продвижения общего ценностного предложения.
        </p>
        <p>
          <a href="#"><img class="w-10 h-10" src="/public/GHub.png" alt="GitHub" /></a>
          <a href="#"
            ><img
              class="w-10 h-10 rounded-full border border-black-900"
              src="/public/Telegram.png"
              alt="Telegram"
          /></a>
        </p>
      </section>
      <section>
        <h2>Опыт</h2>
        <ExperienceItem v-for="data in FREELANCER_EXPERIENCE" :key="data" :data="data" />
      </section>
      <section>
        <h2>Образование</h2>
        <ExperienceItem v-for="data in EDUCATIONS_AND_COURSES" :key="data" :data="data" />
      </section>
    </div>
  </div>
</template>
<style scoped></style>
