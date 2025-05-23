<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import logo from '@/assets/logo/lvlx-logo.svg';
import logoWhite from '@/assets/logo/lvlx-logo-white.svg';
import arrowTopRight from '../assets/icons/arrow-top-right.svg';
const selectedLanguage = ref('RU');
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
    const targets = [text, arrow];

    buttonWrapper.addEventListener('mouseenter', () => {
      // Перша хвиля — зникнення з розмиттям вгору
      gsap.to(targets, {
        y: -20,
        opacity: 0,
        filter: 'blur(6px)',
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.1, // хвильова затримка між елементами
        onComplete: () => {
          // Підготовка до входу
          gsap.set(targets, {
            y: 20,
            opacity: 0,
            filter: 'blur(6px)',
          });

          // Друга хвиля — поява знизу з fade та розфокусування
          gsap.to(targets, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1, // хвильова затримка знову
          });
        },
      });
    });
  }

});

const redirectToTelegram = () => {
  window.location.href = "https://t.me/your_telegram_channel";
};
</script>


<template>
  <header class="header header-animate">
  <img :src="logo" alt="Logo" class="logo" width="150" height="30"/>
    <div class="nav">
      <select v-model="selectedLanguage" @change="changeLanguage($event.target.value)" class="language-selector">
        <option value="RU">RU</option>
        <option value="EN">EN</option>
      </select>
      <button class="button"  @click="redirectToTelegram">
        PR
      </button>
      <div class="custom-button-wrapper"  @click="redirectToTelegram">
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

  @media screen and (max-width: 768px) {
    padding: 0;
  }
}

.header-animate {
  opacity: 0;
  filter: blur(16px);
  transform: translateY(-100%);
  animation: headerFadeIn 1.8s ease-out 1.5s forwards;
}

@keyframes headerFadeIn {
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
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
    gap: 2px;
    width: 100%;
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