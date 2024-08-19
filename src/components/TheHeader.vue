<script setup></script>
<template>
  <header
    class="flex flex-row justify-between text-center items-center bg-slate-200 w-full py-4 px-10"
  >
    <div class="basis-1/5">
      <a href="/"
        ><img class="w-20 m-auto" src="../../public/img/text-avatar.png" alt="not found"
      /></a>
    </div>
    <div class="basis-3/5 search">
      <input class="py-1 px-2 w-4/5" placeholder="Ищем..." type="text" />
    </div>
    <div class="basis-1/5 user">
      <RouterLink to="/authorization" class="button w-min self-end"> signin </RouterLink>
    </div>
  </header>
</template>
