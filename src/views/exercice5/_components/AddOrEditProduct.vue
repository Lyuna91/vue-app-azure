<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ product.id ? 'Modifier le Produit' : 'Ajouter un Produit' }}</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Nom du Produit:</label>
          <input v-model="product.name" id="name" type="text" required />
        </div>
        <div>
          <label for="price">Prix:</label>
          <input v-model="product.price" id="price" type="number" required />
        </div>
        <div>
          <label for="quantity">Quantité:</label>
          <input v-model="product.quantity" id="quantity" type="number" required />
        </div>
        <button type="submit">Sauvegarder Produit</button>
        <button type="button" @click="closeModal">Annuler</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: { type: Object, required: true }
})

const emit = defineEmits(['saveProduct', 'closeModal'])

const product = ref({ ...props.product })

const submitForm = () => {
  emit('saveProduct', product.value)
}

const closeModal = () => {
  emit('closeModal')
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}

button {
  margin-top: 10px;
  padding: 10px;
}
</style>
