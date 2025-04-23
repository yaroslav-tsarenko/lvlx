<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';
import logo from '../assets/logo/lvlx-logo.svg';
import arrowTopRight from '../assets/icons/arrow-top-right.svg';
const selectedLanguage = ref('RU'); // default
import { getTextByLanguage } from "@/config";

const texts = getTextByLanguage();
const changeLanguage = (value: string) => {
  selectedLanguage.value = value;
  localStorage.setItem('selectedLanguageLVLX', value);
  window.location.reload();
};

onMounted(() => {
  const storedLang = localStorage.getItem('selectedLanguageLVLX');
  if (storedLang) selectedLanguage.value = storedLang;

  gsap.from('.header', {
    y: '-100%',
    opacity: 0,
    duration: 0.5,
    delay: 1,
    ease: 'power2.out',
  });

  const buttonWrapper = document.querySelector('.custom-button-wrapper');
  const text = buttonWrapper?.querySelector('p');
  const arrow = buttonWrapper?.querySelector('.arrow-icon');

  if (buttonWrapper && text && arrow) {
    buttonWrapper.addEventListener('mouseenter', () => {
      gsap.to([text, arrow], {
        y: -20,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set([text, arrow], { y: 20, opacity: 0 });
          gsap.to([text, arrow], {
            y: 0,
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    });
  }
});
</script>


<template>
  <header class="header">
    <img :src="logo" alt="Logo" class="logo" width="150" height="30"/>
    <div class="nav">
      <select v-model="selectedLanguage" @change="changeLanguage($event.target.value)" class="language-selector">
        <option value="RU">RU</option>
        <option value="EN">EN</option>
      </select>
      <button class="button">
        PR
      </button>
      <div class="custom-button-wrapper">
        <p>
          {{ texts.Header.text }}
        </p>
        <div class="arrow">
          <img :src="arrowTopRight" class="arrow-icon" alt="arrow" width="13" height="13"/>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 1rem;
  position: sticky;
  text-align: center;
  font-size: 1.5rem;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  color: #343a40;
}

.custom-button-wrapper {
  display: flex;
  background-color: var(--black);
  border-radius: 18px;
  width: fit-content;
  color: var(--white);
  font-size: 14px;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 7px 7px 7px 30px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1028px) {
    padding: 5px 5px 5px 20px;
  }
}

.arrow {
  display: flex;
  background-color: var(--orange);
  padding: 13px;
  margin-left: 15px;
  border-radius: 14px;
}

.nav {
  display: flex;
  gap: 10px;
  align-items: center;
}

.button {
  background-color: var(--white);
  border-radius: 14px;
  padding: 17px 20px;
  color: var(--black);
  font-size: 14px;
  cursor: pointer;
  border: 1px solid var(--line-color);
  transition: background-color 0.3s ease;


  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.language-selector {
  border: 1px solid var(--line-color);
  border-radius: 14px;
  background-color: var(--white);
  color: var(--black);
  font-size: 14px;
  padding: 17px 30px 17px 20px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  outline: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23939393' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  transition: 0.3s all ease;

  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.language-selector:hover {
  border: 1px solid var(--grey);
}
</style>