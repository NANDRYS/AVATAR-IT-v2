<script setup>
import { ref } from 'vue'
import DevelopersCard from '../components/Main/DevelopersCard.vue'
import TheCatigories from '../components/Main/TheCatigories.vue'
import TheAdvertisingBlock from '@/components/Main/TheAdvertisingBlock.vue'
import TheHeader from '@/components/TheHeader.vue'

const activeCategories = ref('Разработчик программного обеспечения') // Инициализируем переменную для хранения значения

const handleCategorySelected = (selectedSpec) => {
  activeCategories.value = selectedSpec
}
</script>
<template>
  <TheHeader class="sticky top-0 w-full z-10" />
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
    <aside class="lg:basis-1/5">
      <TheAdvertisingBlock />
    </aside>
  </div>
</template>
