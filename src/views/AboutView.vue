<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <el-button size="large">Large</el-button>
    <div class="box1">we knew it</div>
  </div>
</template>

<script setup>
import gsap from "gsap"
import { onMounted } from "vue"

onMounted(() => {
  gsap.to('.box1', {
    y: -50, // translateX
    width: 600,
    height: 200,
    fontSize: 80,
    duration: 3 // 持續時間
  })
})
</script>
  
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

