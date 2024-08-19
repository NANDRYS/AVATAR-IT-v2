<script setup>
import FreelancerIcon from "../components/FreelancerIcon.vue";
import TheNavigate from "../components/Freelancer/TheNavigate.vue";
import TheExperience from "../components/Freelancer/TheExperience.vue";
import TheEducation from "../components/Freelancer/TheEducation.vue";
import TheSkills from "../components/Freelancer/TheSkills.vue";
import TheInterests from "../components/Freelancer/TheInterests.vue";
import TheAbout from "../components/Freelancer/TheAbout.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>
<template>
  <TheHeader />
  <div class="md:flex">
    <div class="md:w-1/5">
      <div
        class="flex gap-10 md:gap-0 md:flex-col md:sticky top-0 md:h-screen justify-center items-center bg-sky-500 w-full"
      >
        <div class="flex flex-col text-center items-center justify-center">
          <FreelancerIcon class="rounded-full mb-5 mt-2 border" />
          <h3 class="block md:hidden text-white text-1xl">
            Cмыслов <span class="text-amber-500">Алексей Михайлович</span>
          </h3>
        </div>

        <TheNavigate
          class="text-white text-2xl capitalize gap-4 flex flex-wrap md:block my-3"
        />
      </div>
    </div>

    <div class="p-10 md:w-4/5">
      <TheAbout />
      <TheExperience />
      <TheEducation />
      <TheSkills />
      <TheInterests />
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  background: skyblue;
  justify-content: center;
  align-items: center;
}
</style>
