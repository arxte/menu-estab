<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { vMaska } from 'maska'
import { useUserDataStore } from '../../stores/userDataStore'

const optionsMask: Object = reactive({
  mask: '+7 (7##) ###-##-##'
})

const isActiveBtn = ref<Boolean>(false)

const userDataStore = useUserDataStore()

interface userDataInterface {
  firstname: String
  lastname: String
  number: String
  orders: Array<Object>
}

const state = reactive({ errorForm: 0 })

const router = useRouter()
const registerFormInputFirstname = ref<HTMLInputElement>()
const registerFormInputLastname = ref<HTMLInputElement>()
const registerFormInputNumber = ref<HTMLInputElement>()

const authNumberInput = ref<string>()

let inputList: Array<HTMLInputElement | undefined>
onMounted(() => {
  inputList = [
    registerFormInputFirstname.value,
    registerFormInputLastname.value,
    registerFormInputNumber.value
  ]
})

// let errorForm: number = 0

let userData: userDataInterface

const registeredYet = ref<boolean>(true)
const registerYet = ref<boolean>(false)

async function registerUser() {
  // получение значений из инуптов в обьект

  await axios.post('http://localhost:3000/register', userData).then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      if(response.data === false) {
        console.log('Уже зарегистрован')
        registeredYet.value = response.data
        registerYet.value = true
      } else {
        registeredYet.value = response.data
        registerYet.value = false
        router.push('/main')
      }
      console.log(response.data)
    }
  })
}

const showTextError = ref(false)

function validateRegisterForm(event: Event | null) {
  event?.preventDefault()

  userData = {
    firstname: userDataStore.data.firstname,
    lastname: userDataStore.data.lastname,
    number: userDataStore.data.numberphone,
    orders: []
  }

  const regex = /^\+?(7|8)?[\s-]?\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/.test(
    String(userData.number)
  )

  inputList.forEach((item) => {
    if (item?.value === '' || regex === false) {
      console.log('ERROR')
      state.errorForm++
      window.navigator.vibrate(200)

      setTimeout(() => {
        state.errorForm = 0
      }, 1500)
    }
  })

  if (state.errorForm === 0) {
    registerUser()
  }
}

async function getUserNumber() {
  // получение значений из инуптов в обьект

  await axios.post('http://localhost:3000/getUserNumber', authNumberInput).then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      if (response.data === false) {
        showTextError.value = true
      }

      if (response.data === authNumberInput.value) {
        router.push('/main')
      }
    }
  })
}

function checkUser() {
  getUserNumber()
}

function checkAuthInput() {
  if (authNumberInput.value!.length === 18) {
    isActiveBtn.value = true
  }
}

function checkRegisterInputs() {
  if (
    userDataStore.data.firstname.length > 0 &&
    userDataStore.data.lastname.length > 0 &&
    userDataStore.data.numberphone.length === 18
  ) {
    isActiveBtn.value = true
  }
}
</script>

<template>
  <section class="register-auth-container">
    <div class="register-auth-wrapper">
      <section class="choice-entry">
        <div
          :class="[
            'choice-entry-auth',
            {
              auth_active: userDataStore.registered
            }
          ]"
          @click="userDataStore.registered = true"
        >
          <h1
            :class="[
              'choice-entry__title',
              {
                title_active: userDataStore.registered
              }
            ]"
          >
            Вход
          </h1>
        </div>

        <div
          :class="[
            'choice-entry-register',
            {
              register_active: !userDataStore.registered
            }
          ]"
          @click="userDataStore.registered = false"
        >
          <h1
            :class="[
              'choice-entry__title',
              {
                title_active: !userDataStore.registered
              }
            ]"
          >
            Регистрация
          </h1>
        </div>
      </section>

      <section class="register-wrapper" v-if="!userDataStore.registered">
        <section class="register">

          <span class="register_registered" v-show="!registeredYet">
            Пользователь с такими данным уже существует, пожалуйста авторизуйтесь.
          </span>
          <form
            action="#"
            name="register-form"
            method="POST"
            autocomplete="off"
            class="register-form"
          >
            <input
              type="text"
              :class="['register-form__input', { input_invalid: state.errorForm > 0 }, {
                register_yet: registerYet
              }]"
              name="firstname"
              autocomplete="off"
              form="register-form"
              placeholder="Имя"
              required
              v-model="userDataStore.data.firstname"
              ref="registerFormInputFirstname"
              @input="checkRegisterInputs"
            />
            <input
              type="text"
              :class="['register-form__input', { input_invalid: state.errorForm > 0 }, {
                register_yet: registerYet
              }]"
              name="second-name"
              autocomplete="off"
              form="register-form"
              placeholder="Фамилия"
              required
              v-model="userDataStore.data.lastname"
              ref="registerFormInputLastname"
              @input="checkRegisterInputs"
            />
            <input
              type="text"
              :class="['register-form__input', { input_invalid: state.errorForm > 0 }, {
                register_yet: registerYet
              }]"
              name="number-phone"
              autocomplete="off"
              form="register-form"
              placeholder="Номер телефона"
              required
              v-model="userDataStore.data.numberphone"
              ref="registerFormInputNumber"
              @input="checkRegisterInputs"
              v-maska:[optionsMask]
            />

            <label v-if="state.errorForm > 0" class="register__invalid-data"
              >Проверьте пожалуйста, правильность введных данных</label
            >

            <div class="register-offer-wrapper">
              <input type="checkbox" class="register-offer__checkbox" checked />
              <label class="register-offer__text">
                Я принимаю условия
                <span class="register-offer__text_green"
                  >политики конфиденциальности, пользовательского соглашения</span
                >
                и даю согласие на обработку персональных данных
              </label>
            </div>

            <button
              type="submit"
              :class="[
                'auth-form__submit-btn_disable',
                {
                  auth_submit: isActiveBtn
                }
              ]"
              form="register-form"
              @click="(event) => validateRegisterForm(event)"
            >
              Зарегистрироваться
            </button>
          </form>
        </section>
      </section>

      <section class="auth-wrapper" v-else>
        <section class="auth">
          <form action="#" name="auth-form" method="POST" autocomplete="off" class="auth-form">
            <input
              type="text"
              :class="['auth-form__input', { input_invalid: state.errorForm > 0 }]"
              name="firstname"
              autocomplete="off"
              form="auth-form"
              placeholder="Введите номер"
              required
              v-maska:[optionsMask]
              v-model="authNumberInput"
              ref="authFormInputNumber"
              @input="checkAuthInput"
            />

            <span class="auth-error" v-show="showTextError">
              Введен неверный номер телефона или Вы не зарегистрированы.
            </span>

            <button
              type="submit"
              :class="[
                'auth-form__submit-btn_disable',
                {
                  auth_submit: isActiveBtn
                }
              ]"
              form="auth-form"
              @click="checkUser()"
            >
              Войти
            </button>
          </form>
        </section>
      </section>
    </div>
  </section>
</template>

<style scoped src="../../assets/css/register.css"></style>
