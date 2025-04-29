<script setup>
import logo from '../assets/logo/lvlx-logo-white.svg';
import tg from '../assets/icons/telegram-social.svg';
import inst from '../assets/icons/instagram-icon.svg';
import yt from '../assets/icons/youtube-icon.svg';

import {getTextByLanguage} from '@/config';
const texts = getTextByLanguage();


const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({behavior: 'smooth'});
  }
};
</script>

<template>
  <footer class="footer" id="footer-section">
    <div class="footer-upper">
      <div class="footer-header">
        <p>{{ texts.Footer.text }}</p>
        <img :src="logo" alt="logo" width="150" height="30"/>
        <button @click="scrollToSection('home-section')">{{ texts.Footer.register }}</button>
      </div>
      <div class="footer-middle">
        <div class="footer-item">
          <p>Telegram</p>
          <h1>
            <a href="https://t.me/afflvlx" target="_blank" rel="noopener noreferrer">@afflvlx</a>
          </h1>
        </div>
        <div class="footer-item">
          <p>{{ texts.Footer.email }}</p>
          <h1>
            <a href="mailto:partners@lvlx.top">partners@lvlx.top</a>
          </h1>
          <div class="footer-socials">
            <img :src="tg" alt="icon" width="60" height="60">
            <img :src="inst" alt="icon" width="60" height="60">
            <img :src="yt" alt="icon" width="60" height="60">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        {{ texts.Footer.allRightsReserved }}
      </p>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  display: flex;
  flex-direction: column;
  max-width: 1840px;
  margin: 0 auto;
  width: 100%;
  border-radius: 32px 32px 0 0;
}

.footer-upper{
  display: flex;
  flex-direction: column;
  background: var(--black);
  border-radius: 35px;
  gap: 30px;
  padding: 60px;

  @media screen and (max-width: 768px) {
    border-radius: 0 0 35px 35px;
  }
}

.footer-header {
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: var(--white);
    max-width: 306px;
  }

  button {
    display: flex;
    background: var(--orange);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 20px 40px;
    color: var(--white);
    border-radius: 16px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: var(--orange-hover);
      outline: none;
      border: none;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}

.footer-middle {
  display: flex;
  width: 100%;
  color: var(--white);
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
}

.footer-item {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
   align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    font-size: 70px;
    padding: 0;

    a{
      color: var(--white);
      text-decoration: none;
      transition: 0.3s all ease-in-out;
      cursor: pointer;

      &:hover{
        color: var(--orange);
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.footer-bottom {
  display: flex;
  padding: 60px;
  background: url("../assets/images/footer-lines-live.gif") no-repeat center;
  background-size: cover;
  border-radius: 35px 35px 0 0;
  border-top: 1px dashed var(--grey);

  p {
    color: var(--white);
    max-width: 650px;
  }
}

</style>