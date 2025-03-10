<template>
  <div>
    <h2>Ajouter une tâche</h2>
    <input v-model="newTask" placeholder="Nouvelle tâche" />
    <button @click="addTask">Ajouter</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../api/http'

const emit = defineEmits(['taskAdded'])

const newTask = ref('')

const addTask = async () => {
  if (!newTask.value) return

  try {
    await api.post('/todos', {
      title: newTask.value,
      completed: false
    })

    newTask.value = ''

    emit('taskAdded')
  } catch (error) {
    console.error("Erreur lors de l'ajout de la tâche", error)
  }
}
</script>
