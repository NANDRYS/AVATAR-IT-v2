<script setup>
import { SKILLS } from './freelancerConstants';

const props = defineProps({
  skillName: {
    required: true,
    type: String
  }
})

</script>

<template>
  <ul v-if="Object.keys(SKILLS[props.skillName]).length != 0" class="flex flex-wrap gap-2 my-4">
    <label> {{ skillName }}: </label>
    <li v-for="(good, val) in SKILLS[props.skillName]" :key="val">
      <span
        class="text-2.5xl text-white rounded bg-red-500 p-1 border border-black"
        v-if="good == 'good'"
      >
        {{ val }}</span
      >
    </li>
  </ul>
</template>
