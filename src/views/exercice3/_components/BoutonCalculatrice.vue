<template>
  <button @click="sendValue(value)">{{ value }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  value: {
    type: [String, Number],
    default: 0,
  },
});

const emit = defineEmits(["send-value"]);

const sendValue = (val) => {
  emit("send-value", val);
};
</script>

<style scoped>
button {
  width: 50px;
}
</style>
