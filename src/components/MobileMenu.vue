<template>
  <div class="wrapper">
    <transition name="menu-fade">
      <div v-if="menuOpen" class="dropdown-menu">
        <ul>
          <li v-for="(item, index) in menuItems" :key="item" @click="scrollToSection(index)">
            <div class="link-bottom-nav">
              {{ item }}
            </div>
            <img :src="hLine" alt="line icon" width="250" height="2" />
          </li>
        </ul>
      </div>
    </transition>

    <!-- Bottom bar -->
    <div class="bottom-tab-bar">
      <div class="tab-content">
        <button class="burger" @click="toggleMenu">
          <img v-if="!menuOpen" :src="burgerButton" alt="Menu" width="22" height="22" class="icon" />
          <img v-else :src="timesIcon" alt="Close" width="22" height="22" class="icon" />
        </button>
        <span class="menu-label" @click="toggleMenu">Меню</span>
        <button class="register-btn">Зарегистрироваться</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

import burgerButton from "@/assets/icons/burger-button.svg"
import timesIcon from "@/assets/icons/times-icon.svg"
import hLine from "@/assets/images/line-image.svg";

const menuItems = ['Преимущества', 'Продукт', 'Стримерам', 'FAQ'];

const scrollToSection = (index) => {
  const sectionIds = ['benefits-section', 'product-section', 'streamers-section', 'faq-section'];
  const section = document.getElementById(sectionIds[index]);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>

.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
  width: fit-content;
  margin: 0 auto 10px auto;
  right: 0;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  pointer-events: none;

  @media screen and (max-width: 1028px) {
    display: flex;
  }
}

.bottom-tab-bar {
  background: #000;
  padding: 10px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  border-radius: 50px;
  z-index: 999;
  display: flex;
  justify-content: center;
}

.tab-content {
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
}

.burger {
  background: #d63900;
  border: none;
  color: white;
  border-radius: 55px;
  align-items: center;
  width: 50px;
  height: 50px;
  justify-content: center;
  justify-items: center;
  align-content: center;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 20px rgb(214, 57, 0);
  }
}

.menu-label {
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;
  transition: 0.2s ease;

  &:hover {
    background: rgba(115, 115, 115, 0.27);
  }
}

.register-btn {
  background: #d63900;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  font-size: 16px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 20px rgb(214, 57, 0);
  }
}

/* Dropdown transition */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: transform 0.4s ease, opacity 0.3s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.menu-fade-enter-to,
.menu-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.link-bottom-nav{
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;
  margin: 0 0 -10px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(115, 115, 115, 0.27);
  }
}

.dropdown-menu {
  background: #111;
  border-radius: 20px;
  padding: 20px 20px 60px 20px;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  z-index: -1;
  margin-bottom: -50px;
  pointer-events: auto;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  color: white;
  cursor: pointer;
  font-size: 16px;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  gap: 0;
  transition: 0.2s ease-in-out;
}
</style>
