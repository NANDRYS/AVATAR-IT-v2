<template>
  <div class="signUp flex flex-col gap-5">
    <span class="w-3/4"
      ><input
        class="block bg-gray-400/80 placeholder:text-slate-900 shadow-2xl text-white outline-none p-2 rounded-full"
        type="text"
        placeholder="login"
      />
    </span>
    <span class="relative w-3/4"
      ><input
        class="block bg-gray-400/80 placeholder:text-slate-900 drop-shadow-xl text-white outline-none p-2 rounded-full"
        type="text"
        placeholder="password"
        style="-webkit-text-security: disc;" />
      <vue-feather
        class="absolute top-2 -right-[40px] w-5 cursor-pointer"
        type="eye-off"
      ></vue-feather
    ></span>
    <span class="relative w-3/4"
      ><input
        class="block bg-gray-400/80 placeholder:text-slate-900 drop-shadow-xl text-white outline-none p-2 rounded-full"
        type="text"
        placeholder="password"
        style="-webkit-text-security: disc;" />
      <vue-feather
        class="absolute top-2 -right-[40px] w-5 cursor-pointer"
        type="eye-off"
      ></vue-feather
    ></span>
    <span class="relative w-3/4"
      ><input
        class="block bg-gray-400/80 placeholder:text-slate-900 drop-shadow-xl text-white outline-none p-2 rounded-full"
        type="email"
        placeholder="email"
      />
    </span>
    <label for="agreement" class="text-white">
      <input type="checkbox" name="agreement" id="agreement" />
      Отправляя форму, вы соглашаетесь с
      <a
        class="text-[rgb(29,29,29)] font-bold bg-[rgb(228,228,228)] rounded"
        target="_blank"
        href="https://itpark32.ru/assets/privacysys.pdf"
        >политикой конфиденциальности</a
      >
    </label>

    <button class="button w-min self-center">SignUp</button>
    <a
      href=""
      class="text-[rgb(29,29,29)] font-bold bg-[rgb(228,228,228)] rounded"
      @click.prevent="$emit('toggleActive')"
    >
      Авторизоваться
    </a>
  </div>
</template>

<script setup></script>

<style></style>
