<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <h1>123456</h1>
    <RouterLink to="/">Homee</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </el-container>
  <Router-view />
</template>
