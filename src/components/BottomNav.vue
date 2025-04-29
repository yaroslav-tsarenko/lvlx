<script setup>
import {ref} from 'vue';
import homeIcon from '../assets/icons/home-icon.svg';
import burgerButton from '../assets/icons/burger-button.svg';
import timesIcon from '../assets/icons/times-icon.svg';
import vLine from '../assets/images/v-line.svg';
import hLine from '../assets/images/line-image.svg';
import {getTextByLanguage} from '@/config';

const texts = getTextByLanguage();
const isMenuOpen = ref(false);
const currentIcon = ref(burgerButton);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  currentIcon.value = isMenuOpen.value ? timesIcon : burgerButton;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({behavior: 'smooth'});
  }
};
</script>

<template>
  <div class="bottom-nav">
    <button class="home-button" @click="scrollToSection('home-section')">
      <img :src="homeIcon" alt="home icon" width="24" height="24"/>
    </button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button" @click="scrollToSection('benefits-section')">{{ texts.BottomNav.benefits }}</button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button" @click="scrollToSection('product-section')">{{ texts.BottomNav.product }}</button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button" @click="scrollToSection('streamers-section')">{{ texts.BottomNav.forStreamers }}</button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button" @click="scrollToSection('faq-section')">{{ texts.BottomNav.faq }}</button>
  </div>
  <div class="bottom-nav-mobile" :style="{ bottom: isMenuOpen ? '-14%' : '0' }">
    <div class="bottom-nav-menu" v-show="isMenuOpen">
      <button @click="scrollToSection('benefits-section')">{{ texts.BottomNav.benefits }}</button>
      <img :src="hLine" alt="home icon" width="250" height="2"/>
      <button @click="scrollToSection('product-section')">{{ texts.BottomNav.product }}</button>
      <img :src="hLine" alt="home icon" width="250" height="2"/>
      <button @click="scrollToSection('streamers-section')">{{ texts.BottomNav.forStreamers }}</button>
      <img :src="hLine" alt="home icon" width="250" height="2"/>
      <button @click="scrollToSection('faq-section')">{{ texts.BottomNav.faq }}</button>
    </div>
    <div class="bottom-nav-mobile-navigation">
      <button class="home-button" @click="toggleMenu">
        <img :src="currentIcon" alt="menu icon" width="24" height="24"/>
      </button>
      <button class="nav-button">{{ texts.BottomNav.menu }}</button>
      <img :src="vLine" alt="home icon" width="1" height="52"/>
      <button class="nav-button-register">{{ texts.BottomNav.register }}</button>
    </div>
  </div>
</template>

<style scoped>

.bottom-nav-menu {
  display: flex;
  flex-direction: column;
  color: var(--white);
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;

  img {
    display: flex;
    width: 100%;
    height: auto;
  }

  button {
    display: flex;
    border-radius: 50px;
    background: none;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    z-index: 999;
    align-content: center;
    justify-content: center;
    color: var(--white);
    padding: 15px 20px;
    transition: 0.3s all ease-in-out;

    &:hover {
      background: var(--grey-transparent);
      outline: none;
      border: none;
    }
  }
}

.bottom-nav-menu[v-show] {
  color: var(--white);
}

.bottom-nav {
  display: none;
  width: fit-content;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--black);
  border-radius: 50px;
  padding: 7px;
  z-index: 99999;

  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.nav-button-register {
  display: flex;
  border-radius: 50px;
  padding: 12px 30px;
  color: var(--white);
  background: var(--orange);
  font-size: 16px;
  align-content: center;
  justify-content: center;
  align-items: center;

  transition: 0.2s ease-in-out;
  outline: none;
  border: none;

  &:hover {
    background: var(--orange-hover);
  }
}

.bottom-nav-mobile-navigation {
  display: flex;
  gap: 10px;

  @media screen and (max-width: 476px) {
    gap: 0;
  }
}

.bottom-nav-mobile {
  display: flex;
  width: fit-content;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  background-color: var(--black);
  border-radius: 32px;
  padding: 7px;
  z-index: 1;

  @media screen and (max-width: 1028px) {
    display: flex;
  }
}

.nav-button {
  display: flex;
  border-radius: 50px;
  background: none;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: var(--white);
  padding: 15px 20px;
  transition: 0.3s ease-in-out;
}

.nav-button:hover {
  background: var(--grey-transparent);
  outline: none;
  border: none;
}

.home-button {
  background: var(--orange);
  outline: none;
  border: none;
  padding: 13px 14px;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.home-button:hover {
  box-shadow: 0px 4px 20px var(--orange);
}
</style>