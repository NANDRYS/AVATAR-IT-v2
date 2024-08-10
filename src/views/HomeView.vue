<script setup>
import { ref } from 'vue'
import DevelopersCard from '../components/DevelopersCard.vue'
import TheCatigories from '../components/TheCatigories.vue'

const activeCategories = ref('Разработчик программного обеспечения') // Инициализируем переменную для хранения значения

const handleCategorySelected = (selectedSpec) => {
  activeCategories.value = selectedSpec
}
</script>
<template>
  <p class="hidden md:block text-center text-gray-600">
    {{ activeCategories }}
  </p>
  <div class="md:flex flex-row flex-wrap w-100">
    <aside class="basis-2/6 lg:basis-1/5 border border-groow">
      <TheCatigories @categorySelected="handleCategorySelected" />
    </aside>
    <div class="basis-4/6 lg:basis-3/5 border border-groow content">
      <DevelopersCard />
    </div>
    <aside class="lg:basis-1/5 border border-groow ad">
      <a href="https://vk.com/itpark32" target="_blank"
        ><div class="card rounded mt-10 m-auto hover:scale-110 transition-all w-48 shadow-lg">
          <div class="header items-center flex flex-col p-5">
            <img class="rounded" src="../../public/img/park.jpg" alt="it-park" />
            <p class="text-center text-sm">Онлайн школа программирования It-Park</p>
          </div>
        </div></a
      >
    </aside>
  </div>
</template>
