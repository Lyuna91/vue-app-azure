<template>
  <div class="home">
    <h1>Bienvenue sur notre application !</h1>
    <button @click="goToUserList">Voir les utilisateurs</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToUserList = () => {
  router.push('/exercice4/users');
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

button {
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
