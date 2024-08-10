<script setup>
import { IT_SPECIALTIES } from '@/constants'
const emit = defineEmits(['categorySelected']) // Определяем событие

const handleCategorySelect = (spec) => {
  emit('categorySelected', spec) // Вызываем событие с выбранным значением
}
</script>
<template>
  <div class="hidden md:block categories flex flex-row">
    <ul>
      <li
        class="categoris"
        v-for="spec in IT_SPECIALTIES"
        :key="spec"
        @click="handleCategorySelect(spec)"
      >
        {{ spec }}
      </li>
    </ul>
  </div>
  <select class="block md:hidden m-auto" >
    <option v-for="spec in IT_SPECIALTIES" :key="spec">{{ spec }}</option>
  </select>
</template>
<style scoped>
.categoris {
  padding: 0.8rem;
  border-bottom: 2px solid purple;
  transition: all ease 0.5s;
}
.categoris:hover {
  background: rgba(57, 57, 57, 0.2);
  border-bottom: 2px solid cornflowerblue;
}
</style>
