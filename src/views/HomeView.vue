<script setup>
import DevelopersCard from '../components/DevelopersCard.vue'
import TheCatigories from '../components/TheCatigories.vue'
</script>
<template>
  <div class="wrapper flex flex-row w-100">
    <aside class="basis-1/5 border border-groow">
      <TheCatigories />
    </aside>
    <div class="basis-3/5 border border-groow content">
      <DevelopersCard />
    </div>
    <aside class="basis-1/5 border border-groow ad">asd</aside>
  </div>
</template>
