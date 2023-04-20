import { defineStore } from 'pinia'
import { watch, ref } from 'vue'

export const useUserDataStore = defineStore('UserData', () => {
  // const firstname = ref(''),
  //   lastname = ref(''),
  //   numberphone = ref('')

  interface data {
    firstname: string,
    lastname: string,
    numberphone: string
  }

  const data = ref<data>({
    firstname: '',
    lastname: '',
    numberphone: ''
  })

  const registered = ref<boolean>(false)

  const userInLocalStorage = localStorage.getItem('dataUser')
  if (userInLocalStorage) {
    data.value.firstname = JSON.parse(userInLocalStorage).firstname
    console.log(JSON.parse(userInLocalStorage)._value)
    data.value.lastname = JSON.parse(userInLocalStorage).lastname
    data.value.numberphone = JSON.parse(userInLocalStorage).numberphone
  } else {
    data.value.firstname = ''
    data.value.lastname = ''
    data.value.numberphone = ''
  }

  console.log(data.value)

  watch(
    () => data.value,
    (state) => {
      localStorage.setItem('dataUser', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    data,
    registered
  }
})
