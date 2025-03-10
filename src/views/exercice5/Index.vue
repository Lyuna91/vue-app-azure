<template>
  <div>
    <h1>Gestion des Produits</h1>
    <ProductList 
      @editProduct="openEditModal"
      @deleteProduct="deleteProduct"
    />

    <AddOrEditProduct 
      v-if="isModalVisible" 
      :product="selectedProduct" 
      @closeModal="closeModal" 
      @saveProduct="saveProduct"
    />

    <button @click="openAddModal" class="add-product-btn">Ajouter un Produit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from './stores/product'
import ProductList from './_components/ProductList.vue'
import AddOrEditProduct from './_components/AddOrEditProduct.vue'

const { addProduct, removeProduct, updateProduct } = useProductStore()

const isModalVisible = ref(false)
const selectedProduct = ref(null)

const openEditModal = (product) => {
  selectedProduct.value = { ...product }
  isModalVisible.value = true
}
const openAddModal = () => {
  selectedProduct.value = { id: null, name: '', price: '', quantity: '' }
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
  selectedProduct.value = null
}

const saveProduct = (product) => {
  if (product.id) {
    updateProduct(product)
  } else {
    addProduct({ ...product, id: Date.now() })
  }
  closeModal()
}

const deleteProduct = (id) => {
  removeProduct(id)
}
</script>

<style scoped>
.add-product-btn {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.add-product-btn:hover {
  background-color: #218838;
}
</style>