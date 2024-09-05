<script></script>

<template>
  <div class="overflow-hidden relative min-h-screen box-border overflow-hidden">
    <div
      id="starts"
      class="w-full min-h-[100%] box-border top-0 absolute cov bg-[url('./public/fone/layout1.png')] anim-snow"
    ></div>
    <div
      id="starts2"
      class="w-full min-h-[100%] box-border top-0 absolute cov bg-[url('./public/fone/layout2.png')] anim-snow2"
    ></div>
  </div>
</template>
<style scoped>
.anim-snow {
  animation: snow 7s infinite;
}
@keyframes snow {
  0%,
  100% {
    visibility: visible;
    transform: translateY(2%);
    animation-timing-function: linear;
  }
  50% {
    visibility: hidden;
    transform: translateY(1%);
    animation-timing-function: linear;
  }
}
.anim-snow2 {
  animation: snow2 6s infinite;
}
@keyframes snow2 {
  0%,
  100% {
    transform: translateY(2%);
    animation-timing-function: linear;
  }
  50% {
    transform: translateY(1%);
    animation-timing-function: linear;
  }
}
.anim-snow3 {
  animation: snow3 8s infinite;
}
@keyframes snow3 {
  0%,
  100% {
    transform: translateY(2%);
    animation-timing-function: linear;
  }
  50% {
    transform: translateY(1%);
    animation-timing-function: linear;
  }
}
.cov {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
