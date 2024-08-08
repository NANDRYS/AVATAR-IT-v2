<script setup>
import { theNameOfTheObject } from './freelancerFunction'

const props = defineProps({
  skillName: {
    required: true,
    type: String
  }
})

const skillsObj = theNameOfTheObject(props.skillName)
</script>

<template>
  <ul v-if="Object.keys(skillsObj).length != 0" class="flex gap-2 my-4">
    <label> {{ skillName }}: </label>
    <li v-for="(good, val) in skillsObj" :key="val">
      <span
        class="text-2.5xl text-white rounded bg-red-500 p-2 border border-black"
        v-if="good == 'good'"
      >
        {{ val }}</span
      >
    </li>
  </ul>
</template>
