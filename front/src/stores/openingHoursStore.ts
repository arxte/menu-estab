import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOpeningHoursStore = defineStore('openingHours', () => {
  const days = ref([
    {
      id: 0,
      name: 'Суббота',
      hours: '09:00-00:00',
      break: 'Отсутствует'
    },

    {
      id: 1,
      name: 'Воскресенье',
      hours: '09:00-00:00',
      break: 'Отсутствует'
    },

    {
      id: 2,
      name: 'Понедельник',
      hours: '08:00-00:00',
      break: 'Отсутствует'
    },

    {
      id: 3,
      name: 'Вторник',
      hours: '08:00-00:00',
      break: 'Отсутствует'
    },

    {
      id: 4,
      name: 'Среда',
      hours: '08:00-00:00',
      break: 'Отсутствует'
    },

    {
      id: 5,
      name: 'Четверг',
      hours: '08:00-00:00',
      break: 'Отсутствует'
    },

    {
      id: 6,
      name: 'Пятница',
      hours: '08:00-00:00',
      break: 'Отсутствует'
    }
  ])

  return { days }
})
