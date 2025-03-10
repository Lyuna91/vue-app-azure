<template>
  <div>
    <input type="text" v-model="result" placeholder="Entrez du texte ici..." />
    <span><h1 class="fullmark">{{ result }}</h1></span>
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

h1.fullmark{
  color: red;
}
</style>
