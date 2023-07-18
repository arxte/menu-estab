<script setup lang="ts">
//  ПОСМОТРЕТЬ IntersectionObserver И https://ru.stackoverflow.com/questions/641531/%D0%9A%D0%B0%D0%BA-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C-%D1%87%D1%82%D0%BE-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%B2-%D0%B7%D0%BE%D0%BD%D0%B5-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%BE%D0%BA%D0%BD%D0%B0-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B0
import { useMenuStore } from '@/stores/menuStore'
import { ref } from 'vue'
import Breakfast from './menu-category/BreakfastBlock.vue'
import SweetBreakfast from './menu-category/SweetBreakfast.vue'
import BurgersBlock from './menu-category/BurgersBlock.vue'
import NavBar from '../navbar/NavBar.vue'
import inBasketBtnMainMenu from './inBasketBtnMainMenu.vue'
import { register } from 'swiper/element/bundle'

register()

const menuStore = useMenuStore()

interface categoriesTypes {
  id: number
  name: string
  isActive: boolean
}

const menuWrapper = ref()

const categories = ref<Array<categoriesTypes>>([
  {
    id: 0,
    name: 'Завтраки',
    isActive: true
  },

  {
    id: 1,
    name: 'Сладкие завтраки',
    isActive: false
  },

  {
    id: 2,
    name: 'Обеды',
    isActive: false
  },

  {
    id: 3,
    name: 'Бургеры',
    isActive: false
  },

  {
    id: 4,
    name: 'Напитки',
    isActive: false
  },

  {
    id: 5,
    name: 'Сеты',
    isActive: false
  },

  {
    id: 6,
    name: 'Салаты',
    isActive: false
  },

  {
    id: 7,
    name: 'Горячие блюда',
    isActive: false
  },

  {
    id: 8,
    name: 'Закуски',
    isActive: false
  }
])

function selectedCategory(idCategory: number) {
  categories.value.forEach((item, id) => {
    item.isActive = false

    if (idCategory === id) {
      console.log('Category: ', item.name)
      item.isActive = true
    }
  })

  menuStore.categoryBlock.forEach((item, id) => {
    if (idCategory === id) {
      item?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
    }
  })
}
</script>

<template>
  <div class="menu-wrapper" ref="menuWrapper">
    <article class="menu">
      <h1 class="menu__title">Urbo coffee</h1>

      <img
        src="../../assets/images/7872e084b035d3fb4c3b5f710900.webp"
        alt="urbo-coffee-banner"
        loading="lazy"
        class="menu__banner-establishment"
      />

      <div class="category-carousel-wrapper">
        <swiper-container
          class="category-carousel"
          slides-per-view="auto"
          space-between="7"
          free-mode="true"
          lazy="true"
          speed="100"
        >
          <swiper-slide
            :class="[
              'category-carousel__category',
              {
                category_active: category.isActive === true
              }
            ]"
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory(category.id)"
          >
            <span class="category__name">{{ category.name }}</span>
          </swiper-slide>
        </swiper-container>

        <!-- <inBasketBtnMainMenu /> -->
      </div>

      <Breakfast />

      <SweetBreakfast />

      <BurgersBlock/>
    </article>
  </div>
  <inBasketBtnMainMenu />
  <NavBar />
</template>

<style scoped src="../../assets/css/menuMain.css"></style>
