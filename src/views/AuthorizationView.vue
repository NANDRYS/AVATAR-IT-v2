<script setup>
import { ref } from "vue";
import TheAuthBack from "../components/Authorization/TheAuthBackground.vue";
import TheSignIn from "@/components/Authorization/TheSignIn.vue";
import TheSignUp from "@/components/Authorization/TheSignUp.vue";

const active = ref(true);

const toggleActive = () => {
  active.value = !active.value;
};
</script>

<template>
  <div
    class="bg-blue-700 bg-[url('./public/fone/cosmos.png')] bg-no-repeat bg-cover h-screen box-border overflow-hidden"
    id="backGround "
  >
    <TheAuthBack />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-cyan-500/30 text-center rounded-xl shadow-2xl w-min min-h-96 w-1/3"
    >
      <div class="flex justify-between items-center mb-10">
        <a href="/" class="text-white text-blue-700 mt-2"
          ><vue-feather class="w-5" type="arrow-left-circle"></vue-feather>
        </a>
        <h1 class="text-2xl">
          <span class="text-white font-bold">Добро пожаловать</span>
        </h1>
      </div>

      <form action="#" method="post">
        <TheSignIn
          v-if="active"
          :active="active"
          @toggle-active="toggleActive"
        />
        <TheSignUp v-else :active="active" @toggle-active="toggleActive" />
      </form>
    </div>
  </div>
</template>
<style scoped>
.active {
  background: red;
  border-radius: 0.25rem;
  display: block;
}
</style>
