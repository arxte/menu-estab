import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopupSelectLangStore = defineStore('selectLang', () => {
  const popupSelectLangVisible = ref(false)

  // console.log(category.value)
  // console.log(category.value)
  return {
    popupSelectLangVisible
  }
})