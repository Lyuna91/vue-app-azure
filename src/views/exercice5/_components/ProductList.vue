<template>
  <div>
    <h2>Liste des Produits</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}€ - Quantité: {{ product.quantity }}
        <button @click="editProduct(product)">Modifier</button>
        <button @click="deleteProduct(product.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/product'
import { storeToRefs } from 'pinia'

const store = useProductStore()
const { products} = storeToRefs(store
  
)
const emit = defineEmits(['editProduct', 'deleteProduct'])

const editProduct = (product) => {
  emit('editProduct', product)
}

const deleteProduct = (id) => {
  emit('deleteProduct', id)
}
</script>
