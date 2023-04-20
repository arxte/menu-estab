import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const showPopup = false
  const showWifiPopup = false

  function disableScroll() {
    // получить текущее положение прокрутки
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    // заблокировать прокрутку страницы
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    }
  }

  // разрешить скроллинг страницы
  function enableScroll() {
    window.onscroll = function () {}
  }

  return {
    showPopup,
    showWifiPopup,
    disableScroll,
    enableScroll
  }
})
