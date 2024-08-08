<script setup>
const props = defineProps(['data'])
</script>
<template>
  <div class="flex justify-between">
    <div>
      <h3 class="text-4xl">{{ props.data.dev_level }}</h3>
      <h3 class="text-3xl text-gray-600 mb-6">{{ props.data.dev_type }}</h3>
      <p class="text-gray-500 mb-16">{{ props.data.discription }}</p>
    </div>
    <div class="">
      <p class="text-amber-500">{{ props.data.time_interval }}</p>
    </div>
  </div>
</template>
