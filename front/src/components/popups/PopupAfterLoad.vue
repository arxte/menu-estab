<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reactive } from 'vue'
import axios from 'axios'

const state = reactive({ mesFromServer: 0 })

const backgroundMenuFormOpacity = ref<HTMLDivElement | null>()

const menuFormWrapper = ref<HTMLElement | null>()
const menuForm = ref<HTMLFormElement | null>()
const popup = ref<HTMLDivElement | null>()
const inputFormName = ref<HTMLInputElement | null>()
const inputFormTel = ref<HTMLInputElement | null>()
const menuFormNameText = ref<HTMLSpanElement | null>()
const menuFormTelText = ref<HTMLSpanElement | null>()
const checkMarkAccess = ref<HTMLImageElement | null>()

let firstname: string, lastname: string, number: string

async function register(e: Event | null) {
  if (e != null) {
      e.preventDefault()
  }
  let data: object = {
    firstname: firstname,
    lastname: lastname,
    number: number
  }

  try {
    console.log('hy')
    await axios.post('http://localhost:3000/register', data)
    console.log(data)
  } catch (err){
    console.log(err)
  }

  axios.get('http://localhost:3000/userInfo').then((res) => {
    state.mesFromServer = res.data
    console.log(state.mesFromServer)
  })
}

onMounted(() => {
  menuFormWrapper.value!.style.display = 'block'
  backgroundMenuFormOpacity.value!.style.display = 'block'
})

function sendBtnClicked() {
  if (menuForm.value != null) {
    menuForm.value.addEventListener('submit', sendForm)
  }

  function closeMenuForm() {
    // menuFormWrapper.value!.style.display = 'none'
    setTimeout(() => {
      menuFormWrapper.value!.style.opacity = '0'
      backgroundMenuFormOpacity.value!.style.opacity = '0'

      setTimeout(() => {
        menuFormWrapper.value!.style.display = 'none'
        backgroundMenuFormOpacity.value!.style.display = 'none'
      }, 200)
    }, 1000)
    console.log((checkMarkAccess.value!.style.display = 'block'))
    console.log((checkMarkAccess.value!.style.opacity = '1'))
    console.log((popup.value!.style.opacity = '0'))
  }

  async function sendForm(e: Event | null) {
    if (e != null) {
      e.preventDefault()

      let error = formValidate()
      let formData = new FormData(menuForm.value!)

      if (error === 0) {
        let response = await fetch('../../mail.php', {
          method: 'POST',
          body: formData
        })

        if (response.ok) {
          menuForm.value!.reset()
        }

        closeMenuForm()
        console.log('Sended')
      }
    }
  }

  function formValidate() {
    let error = 0
    let arrInp = [inputFormName.value!, inputFormTel.value!]

    arrInp.forEach((element: HTMLInputElement, index: number) => {
      if (element.value === '') {
        switch (index) {
          case 0:
            menuFormNameText.value!.style.color = 'red'
            error++
            break
          case 1:
            menuFormTelText.value!.style.color = 'red'
            error++
            break
        }
      }
    })
    if (telNumberValidate(inputFormTel.value!) == false) {
      error++
    }

    return error
  }

  function telNumberValidate(input: HTMLInputElement) {
    const firstRegExp = /^\+7 \d{3} \d{3} \d{4}$/.test(input.value)
    const secondRegExp = /^\+7\d{3}\d{3}\d{4}$/.test(input.value)
    const thirdRegExp = /^7 \d{3} \d{3} d{4}$/.test(input.value)
    const fourRegExp = /^7\d{3}\d{3}\d{4}$/.test(input.value)
    const fifthRegExp = /^\d{3} \d{3} d{4}$/.test(input.value)
    let result = false

    let arrRegExp = [firstRegExp, secondRegExp, thirdRegExp, fourRegExp, fifthRegExp]

    if (arrRegExp.includes(true)) {
      result = true
    } else {
      result = false
    }

    return result
  }
}
</script>

<template>
  <section class="menu-form" ref="menuFormWrapper">
    <form action="#" method="POST" ref="menuForm">
      <div class="menu-form-content-wrapper">
        <div class="menu-form-content" ref="popup">
          <h2 class="menu-form__title">Заполните форму</h2>

          <div class="menu-form__name-wrapper">
            <span class="menu-form__name" ref="menuFormNameText">Ваше имя:</span>
            <input
              type="text"
              placeholder="Имя"
              class="menu-form__name-input"
              ref="inputFormName"
              v-model="firstname"
            />
          </div>

          <div class="menu-form__name-wrapper">
            <span class="menu-form__name" ref="menuFormNameText">Ваша фамилия:</span>
            <input
              type="text"
              placeholder="Имя"
              class="menu-form__name-input"
              ref="inputFormName"
              v-model="lastname"
            />
          </div>

          <div class="menu-form__tel-wrapper" ref="menuFormTelText">
            <span class="menu-form__tel">Ваш номер телефона:</span>
            <input
              type="tel"
              placeholder="Номер телефона"
              class="menu-form__tel-input"
              ref="inputFormTel"
              v-model="number"
            />
          </div>

          <button class="menu-form__btn" type="submit" @click="event => register(event)">Отправить</button>
        </div>

        <img
          src="../../assets/svg/popup-after-load/check-mark.svg"
          alt="check-mark"
          class="_check-mark-access"
          ref="checkMarkAccess"
        />
      </div>
    </form>
  </section>

  <div class="_background-menu-form-opacity" ref="backgroundMenuFormOpacity"></div>
</template>

<style scoped src="../../assets/css/popupAfterLoad.css"></style>
