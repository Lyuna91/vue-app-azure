<template>
  <div class="result">
    <h2>Mon compteur : {{ result }}</h2>
  </div>
</template>

<script setup>
defineProps({
  result: { type: Number, required: true },
})
</script>

<style scoped>
.result {
  font-size: 1.5em;
  margin: 1em;
  text-align: center;
}
</style>
