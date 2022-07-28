<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <el-container>
      <el-header class="bar">
        <h1 class="hidden-md-and-down">12fs456</h1>
      </el-header>
      <el-main>
        <!-- <RouterLink to="/" tag="button">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <el-button type="warning" @click="$router.push('/')">Home</el-button>
        <el-button style="background-color: red;" @click="$router.push('about')">About</el-button>
        <Router-view />
        <el-row>
          <el-col :span="6">a</el-col>
          <el-col :span="6">b</el-col>
          <el-col :span="6">c</el-col>
          <el-col :span="6">d</el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>

</template>

<style scoped>
h1 {
  color: red;
}

.bar {
  background: yellow;
}
</style>
