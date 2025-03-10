<template>
  <div class="calculator">
    <EcranCalculatrice :left-operator="leftOperator" :right-operator="rightOperator" :operation="operation"
      :result="result" />
    <div class="buttons">
      <BoutonCalculatrice v-for="operator in operators" :key="operator" :value="operator"
        @send-value="handleButtonClick" />
      <BoutonCalculatrice v-for="value in values" :key="value" :value="value" @send-value="handleButtonClick" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EcranCalculatrice from "./EcranCalculatrice.vue";
import BoutonCalculatrice from "./BoutonCalculatrice.vue";

const operators = ["+", "-", "=", "/", "*", "C"];
const values = Array.from({ length: 10 }, (_, number) => number);

const leftOperator = ref(null);
const rightOperator = ref(null);
const operation = ref("+");
const operatorClicked = ref(false);
const result = ref(0);

const handleButtonClick = (buttonData) => {
  if (buttonData === "C") {
    reset();
    result.value = 0;
    return;
  }

  if (buttonData === "=") {
    result.value = calculateResult(leftOperator.value, operation.value, rightOperator.value);
    reset();
    leftOperator.value = result.value;
    return;
  }

  if (operators.includes(buttonData)) {
    operation.value = buttonData;
    operatorClicked.value = true;
  } else {
    if (!operatorClicked.value) {
      leftOperator.value =
        leftOperator.value === null
          ? buttonData
          : parseInt(leftOperator.value.toString() + buttonData);
    } else {
      rightOperator.value =
        rightOperator.value === null
          ? buttonData
          : parseInt(rightOperator.value.toString() + buttonData);
    }
  }
};

const reset = () => {
  leftOperator.value = null;
  rightOperator.value = null;
  operation.value = "+";
  operatorClicked.value = false;
};

const calculateResult = (leftOperand, operation, rightOperand) => {
  const left = leftOperand === null ? 0 : leftOperand;
  const right = rightOperand === null ? 0 : rightOperand;

  switch (operation) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return right !== 0 ? left / right : "Erreur";
    default:
      return 0;
  }
};
</script>

<style scoped>
.calculator {
  background-color: rgba(15, 26, 75, 0.911);
  padding: 1em;
  width: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>