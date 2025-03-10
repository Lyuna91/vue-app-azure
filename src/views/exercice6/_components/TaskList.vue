<template>
  <div>
    <h2>Liste des Tâches</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import api from '../api/http'

const emit = defineEmits(['taskDeleted'])

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

const deleteTask = async (id) => {
  try {
    await api.delete(`/todos/${id}`)
    emit('taskDeleted')
  } catch (error) {
    console.error("Erreur lors de la suppression de la tâche", error)
  }
}

</script>
