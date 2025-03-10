<template>
  <div class="screen">{{ screen }}</div>
  <div class="screen">{{ result }}</div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  result: {
    type: [Number, String],
    default: 0,
  },
  leftOperator: {
    type: Number,
    default: 0,
  },
  rightOperator: {
    type: Number,
    default: 0,
  },
  operation: {
    type: String,
    default: "+",
  },
});

const leftOperatorScreen = computed(() => (props.leftOperator === null ? 0 : props.leftOperator));
const rightOperatorScreen = computed(() => (props.rightOperator === null ? 0 : props.rightOperator));

const screen = computed(
  () => `${leftOperatorScreen.value} ${props.operation} ${rightOperatorScreen.value} =`
);
</script>

<style scoped>
.screen {
  color: white;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 1em;
  vertical-align: middle;
}
</style>
