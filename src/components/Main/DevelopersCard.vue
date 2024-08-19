<script setup >
import FreelancerIcon from '../FreelancerIcon.vue';
</script>

<template>
  <div class="flex flex-row relative left-1/2 -translate-x-1/2 w-4/5 border-b border-groow-500">
    <FreelancerIcon/>
    <div class="flex flex-row w-4/5 p-2">
      <div class="basis-3/5 flex flex-col justify-between">
        <p>Смыслов Алексей Михайлович</p>
        <p>C#,java и так далее</p>
      </div>
      <div class="basis-2/5 text-end flex flex-col justify-between">
        <p>оценка <span class="text-sm">(тут должны быть звездочки)</span></p>
        <RouterLink to="/freelancer" class="button w-min self-end">
          просмотреть
        </RouterLink>
      </div>
    </div>
  </div>
</template>
