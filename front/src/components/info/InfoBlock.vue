<script setup lang="ts">
import { ref } from 'vue'
import { useOpeningHoursStore } from '../../stores/openingHoursStore'

const openingHoursStore = useOpeningHoursStore()

// import InfoMap from './InfoMap.vue'
const desription = ref<HTMLParagraphElement | null>()
const btn = ref<HTMLButtonElement | null>()

function showMoreDesription() {
  desription.value!.classList.remove('info-page-description__paragraph_hidden')
  btn.value!.style.display = 'none'
}
</script>

<template>
  <article class="info-page">
    <header>
      <nav class="info-page-navigation">
        <router-link to="/main">
          <img src="../../assets/svg/header/arrowBackToMainPage.svg" alt="arrowBack" />
        </router-link>
        <h1 class="info-page-navigation__title">Информация</h1>
      </nav>
    </header>

    <main>
      <section class="info-page-description">
        <h3 class="info-page-description__title">Описание</h3>

        <p
          class="info-page-description__paragraph info-page-description__paragraph_hidden"
          ref="desription"
        >
          Urbo Coffee - это стильная сеть кофеен c интернациональным меню. Уютный интерьер идеально
          подойдёт для душевных разговоров c друзьями и деловых встреч. C утра здесь можно
          позавтракать, a в остальное время дня вкусно пообедать или поужинать. В меню собраны
          популярные блюда и вкусные десерты. Если же вы не располагаете достаточным количеством
          времени, то наш бариста быстро и качественно приготовит вам любимый напиток навынос. Также
          мы предлагаем начать свой кофейный бизнес вместе c нами по программе франчайзинга.
          Франшиза кофейни Urbo Coffee - отличная идея для бизнеса. Международные стандарты работы
          позволят быть уникальным концептом для казахстанского рынка, отвечая на потребности самых
          требовательных гостей. Жителям вашего города больше не придется долго искать, где поесть и
          попить отличный кофе - в вашей кофейне они смогут сделать это c комфортом и удовольствием.
        </p>

        <button type="button" class="info-page__more-btn" @click="showMoreDesription()" ref="btn">
          Ещё
        </button>
      </section>

      <section class="info-page-opening-hours">
        <h3 class="info-page-opening-hours__title">Часы работы</h3>

        <ul class="info-page-opening-hours-list">
          <li
            class="info-page-opening-hours-list-day list-day"
            v-for="days of openingHoursStore.days"
            :key="days.id"
          >
            <div class="list-day-name-hours-wrapper">
              <span class="list-day__name">{{ days.name }}</span>
              <span class="list-day__hours">{{ days.hours }}</span>
            </div>

            <div class="list-day-break-wrapper">
              <span class="list-day__break">Перерыв</span>
              <span class="list-day__break-value">{{ days.break }}</span>
            </div>
          </li>
        </ul>
      </section>

      <section class="info-page-phone-number">
        <h3 class="info-page-phone-number__title">Номер телефона</h3>
        <a href="tel:+77077198027" class="info-page-phone-number__number">+7 707 719 80 27</a>
      </section>
    </main>
  </article>
</template>

<style scoped src="../../assets/css/infoBlock.css">
</style>
