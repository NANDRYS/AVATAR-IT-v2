<script setup>
const props = defineProps({
  text: {
    required: true,
    type: String
  }
})
</script>
<template>
  <li class="">
    <a class=" bg-gray-100/50 p-1 rounded-lg" :href="`#${props.text}`">{{ props.text }}</a>
  </li>
</template>
