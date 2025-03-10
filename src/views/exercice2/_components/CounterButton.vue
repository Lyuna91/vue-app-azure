<template>
  <button :disabled="disabled" @click="onClick">{{ label }}</button>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  disabled: { type: Boolean, required: true },
  onClick: { type: Function, required: true },
})
</script>

<style scoped>
button {
  font-size: 1.2em;
  padding: 0.5em 1em;
  margin: 0.5em;
  border: none;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  border-radius: 0.3em;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>
