<script setup>
const props = defineProps(['data'])
</script>
<template>
  <div class="flex">
    <div>
      <h3 class="dev_level ">{{ props.data.dev_level }}</h3>
      <h3 class="dev_type">{{ props.data.dev_type }}</h3>
      <p class="description">{{ props.data.discription }}</p>
    </div>
    <div>
      <p class="time-interval">{{ props.data.time_interval }}</p>
    </div>
  </div>
</template>