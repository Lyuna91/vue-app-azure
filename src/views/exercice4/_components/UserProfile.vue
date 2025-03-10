<template>
  <div class="user-profile">
    <h1>Profil de l'utilisateur</h1>
    <p>ID: {{ userId }}</p>
    <button @click="goHome">Retour à l'accueil</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const userId = route.params.id;

const goHome = () => {
  router.push('/exercice4/home');
};
</script>

<style scoped>
.user-profile {
  text-align: center;
  margin-top: 30px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
