<template>
  <div>
    <div :style="{'font-weight': 'bold', 'width': '700px', 'color' : 'red'}">IMPORTANT : Dans la console de votre navigateur, sous l'onglet "Réseau", vous verrez que l'appel API est effectué correctement. Cependant, en réalité, l'action ne sera pas exécutée ; il s'agit d'une simulation.</div>
    <h1>Gestion des Tâches</h1>
    <AddTask @taskAdded="fetchTasks"/>
    <div class="task-list-container">
      <TaskList :tasks="tasks"  @taskDeleted="fetchTasks"/>
    </div>
  </div>
</template>

<script setup>
import AddTask from './_components/AddTask.vue'
import TaskList from './_components/TaskList.vue'
import api from './api/http'
import {ref, onMounted} from 'vue'

const tasks = ref([])

const fetchTasks = async () => {
  try {
    const response = await api.get('/todos')
    tasks.value = response.data
  } catch (error) {
    console.error("Erreur lors de la récupération des tâches", error)
  }
}

onMounted(fetchTasks)

</script>

<style scoped>
h1 {
  text-align: center;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
}

input {
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
}

.task-list-container {
  max-height: 250px;
  min-height: 250px;
  width: 100%;
  overflow-y: auto;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
