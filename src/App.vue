<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <el-main>
      <h1>123456</h1>
      <el-button type="danger">
        <RouterLink to="/">Home</RouterLink>
      </el-button>
      <el-button type="primary">Primary</el-button>

      <RouterLink to="/about">About</RouterLink>
      <Router-view />
    </el-main>
  </div>

</template>
