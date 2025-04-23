<script setup>
import homeIcon from '../assets/icons/home-icon.svg';
import vLine from '../assets/images/v-line.svg';
import { getTextByLanguage } from "@/config";

const texts = getTextByLanguage();
</script>

<template>
  <div class="bottom-nav">
    <button class="home-button">
      <img :src="homeIcon" alt="home icon" width="24" height="24"/>
    </button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button">{{texts.BottomNav.benefits}}</button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button">{{texts.BottomNav.product}}</button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button">{{texts.BottomNav.forStreamers}}</button>
    <img :src="vLine" alt="home icon" width="1" height="52"/>
    <button class="nav-button">{{texts.BottomNav.faq}}</button>
  </div>
</template>

<style scoped>

.bottom-nav {
  display: flex;
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
  z-index: 999;
}

.nav-button{
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

.nav-button:hover{
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

.home-button:hover{
  box-shadow: 0px 4px 20px var(--orange);
}
</style>