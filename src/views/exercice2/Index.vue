<template>
  <div class="counter-container">
    <ResultDisplay :result="result" />
    <div class="buttons-container">
      <CounterButton 
        label="-" 
        :disabled="result == 0" 
        @click="decrement" 
      />
      <CounterButton 
        label="+" 
        :disabled="result == 10" 
        @click="increment" 
      />
    </div>
    <div class="history-container">
      <ListDisplay :myList="myList" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CounterButton from './_components/CounterButton.vue'
import ResultDisplay from './_components/ResultDisplay.vue'
import ListDisplay from './_components/ListDisplay.vue'

const result = ref(0)
const myList = ref([])

const increment = () => {
  result.value++
  myList.value.push({ label: new Date().toLocaleTimeString() + " - Incrémentation (+)", value: 1 })
}

const decrement = () => {
  result.value--
  myList.value.push({ label: new Date().toLocaleTimeString() + " - Décrémentation (-)", value: 0 })
}
</script>

<style scoped>
.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}

.buttons-container {
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
}

.history-container {
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
