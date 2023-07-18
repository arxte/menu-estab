import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const categoryBlock = ref<Array<HTMLElement | null>>([])

  // console.log(category.value)
  // console.log(category.value)
  return {
    categoryBlock
  }
})