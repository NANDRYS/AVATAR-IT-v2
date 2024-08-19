<script setup>
import SkillItem from "./skillItem.vue";
</script>

<template>
  <section
    class="my-16 border-b border-gray-500 h-screen flex flex-col justify-center"
    id="skills"
  >
    <h2 class="sm:text-6xl md:text-5xl text-5xl mt-16 mb-6">Навыки</h2>
    <h3 class="text-4xl text-gray-600">инструменты и языки программирования</h3>
    <h3 class="text-2xl uppercase mt-10">a good level of knowledge</h3>

    <SkillItem :skillName="'languages'" />
    <SkillItem :skillName="'tools'" />
    <SkillItem :skillName="'libraries'" />
    <SkillItem :skillName="'frameworks'" />

    <h3 class="text-2xl uppercase">poor level of knowledge</h3>
    <p class="text-gray-400 text-justify mt-10">
      Адаптивный дизайн, ориентированный на мобильные устройства Кроссбраузерное
      Тестирование и отладка Кросс-Функциональные команды Удаленная работа
      Специальные возможности Гибкая Разработка и Scrum
    </p>
  </section>
</template>
