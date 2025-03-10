<template>
  <div class="user-list">
    <h1>Liste des utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/exercice4/users/${user.id}`">{{ user.name }}</router-link>
      </li>
    </ul>
    <button @click="goHome">Retour à l'accueil</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const goHome = () => {
  router.push('/exercice4/home');
};
</script>

<style scoped>
.user-list {
  text-align: center;
  margin-top: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
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
