<script setup>
</script>
<template>
  <header class="head flex flex-row justify-between text-center bg-slate-200 w-100 py-4 px-10">
    <div class="basis-1/5 ">
      <a  href="/"><img class="w-20 m-auto" src="/public/text-avatar.png" alt="not found" /></a>
    </div>
    <div class="basis-3/5 search">
        <input class="p-1 w-4/5 text-center" placeholder="Ищем..." type="text" />
      </div>
    <div class="basis-1/5 user ">
      <button v-if="true">
        <span class="rounded bg-sky-500/75 p-1">SignIn</span> or
        <span class="rounded bg-sky-500/75 p-1">SignUp</span>
      </button>
      <div v-else></div>
    </div>
  </header>
</template>
