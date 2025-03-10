<template>
  <div>
    <input type="text" v-model="result" placeholder="Entrez du texte ici..." />
    <span>{{ result }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const result = ref('');
</script>

<style scoped>
input {
  margin-right: 10px;
  padding: 5px;
}
</style>
