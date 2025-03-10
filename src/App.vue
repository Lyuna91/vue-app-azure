<script setup>
import NavBar from '@/components/NavBar/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
