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
    <a :href="`#${props.text}`">{{ props.text }}</a>
  </li>
</template>
