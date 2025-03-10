<template>
  <div class="list">
    <div v-for="(element, index) in sortedList" :key="index" class="list-item">
      <span :class="element.value === 0 ? 'red' : 'green'">{{ element.label }}</span>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  myList: { type: Array, required: true },
})

const sortedList = computed(() => {
  return [...props.myList].reverse()
})
</script>

<style scoped>
.list {
  margin-top: 1em;
}

.list-item {
  font-size: 1.1em;
  padding: 0.5em;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>
