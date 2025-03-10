import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Produit 1', price: 10, quantity: 2 },
    { id: 2, name: 'Produit 2', price: 20, quantity: 5 },
  ])

  const addProduct = (product) => {
    products.value.push(product)
  }

  const removeProduct = (id) => {
    products.value = products.value.filter((product) => product.id !== id)
  }

  const updateProduct = (updatedProduct) => {
    const index = products.value.findIndex((product) => product.id === updatedProduct.id)
    if (index !== -1) {
      products.value[index] = updatedProduct
    }
  }

  return { products, addProduct, removeProduct, updateProduct }
})
