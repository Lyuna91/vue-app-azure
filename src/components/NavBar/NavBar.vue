<script setup>
import NavBarLink from './NavBarLink.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isExercise4 = computed(() => route.path.includes('/exercice4'));
</script>

<template>
  <div class="sidebar" :style="{ width: '300px' }">
    <h1>
      Framework Web
    </h1>
    <NavBarLink to="/" icon="fa-solid fa-1">Mon premier composant</NavBarLink>
    <NavBarLink to="/exercice2" icon="fa-solid fa-2">Le compteur</NavBarLink>
    <NavBarLink to="/exercice3" icon="fa-solid fa-3">La calculatrice</NavBarLink>
    <NavBarLink to="/exercice4" icon="fa-solid fa-4">Le routing</NavBarLink>
    <div v-if="isExercise4">
      <NavBarLink to="/exercice4/home">Exercice 4 - Page Accueil</NavBarLink>
      <NavBarLink to="/exercice4/users">Exercice 4 - Page Users</NavBarLink>
    </div>
    <NavBarLink to="/exercice5" icon="fa-solid fa-5">Le store</NavBarLink>
    <NavBarLink to="/exercice6" icon="fa-solid fa-6">L'API</NavBarLink>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #001634;
  --sidebar-item-hover: #003366;
  --sidebar-item-active: #00224d;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}
</style>
