<script setup lang="ts">
import NavBar from '../navbar/NavBar.vue'
import PopupSelectLang from './PopupSelectLang.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserDataStore } from '../../stores/userDataStore'
import { usePopupSelectLangStore } from '../../stores/popupSelectLang'

const userDataStore = useUserDataStore()
const selectLang = usePopupSelectLangStore()

function showPopupSelectLang() {
  selectLang.popupSelectLangVisible = true
  console.log(selectLang.popupSelectLangVisible)
}
</script>

<template>
  <div class="profile-wrapper">
    <Transition name="filter">
      <div class="profile-wrapper_filter" v-show="selectLang.popupSelectLangVisible"></div>
    </Transition>
    <header>
      <nav class="profile-navigation">
        <router-link to="/main">
          <img src="../../assets/svg/header/arrowBackToMainPage.svg" alt="arrowBack" />
        </router-link>
        <h1 class="profile-navigation__title">Мой профиль</h1>
      </nav>
    </header>

    <main>
      <section class="profile">
        <div class="profile__user-data user-data">
          <h2 class="user-data__full-name">
            {{ userDataStore.data.firstname }} {{ userDataStore.data.lastname }}
          </h2>
          <span class="user-data__numberphone">{{ userDataStore.data.numberphone }}</span>
        </div>

        <div class="profile-widgets-wrapper">
          <div class="profile__payment-method payment-method">
            <div class="payment-method-content-wrapper">
              <img
                src="../../assets/svg/profile/card.svg"
                alt="card"
                class="payment-method-card-img"
                loading="lazy"
              />

              <span class="payment-method__text">
                Способ оплаты

                <span class="payment-method__card">**** 3203</span>
              </span>
            </div>

            <img
              src="../../assets/svg/profile/arrow.svg"
              alt="arrow"
              class="payment-method-arrow-img"
              loading="lazy"
            />
          </div>

          <router-link to="/orders" class="orders-link"> 
            <div class="profile__orders orders">
              <div class="orders-method-content-wrapper">
                <img
                  src="../../assets/svg/profile/paper.svg"
                  alt="paper"
                  class="orders-paper-img"
                  loading="lazy"
                />

                <span class="orders__text">Мои заказы</span>
              </div>

              <img
                src="../../assets/svg/profile/arrow.svg"
                alt="arrow"
                class="orders-arrow-img"
                loading="lazy"
              />
            </div>
          </router-link>

          <div class="profile__select-lang select-lang" @click="showPopupSelectLang">
            <div class="select-lang-content-wrapper">
              <img
                src="../../assets/svg/profile/translate.svg"
                alt="select-lang"
                class="select-lang-img"
                loading="lazy"
              />

              <span class="select-lang__text">Выбрать язык</span>
            </div>

            <img
              src="../../assets/svg/profile/arrow.svg"
              alt="arrow"
              class="select-lang-arrow-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  </div>

  <Transition name="select-lang-popup">
    <PopupSelectLang v-show="selectLang.popupSelectLangVisible" />
  </Transition>

  <NavBar />
</template>

<style scoped src="../../assets/css/userProfile.css"></style>
