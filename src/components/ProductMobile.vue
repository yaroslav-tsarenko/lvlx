<script setup>
import tablet from "../assets/images/slider-1-tablet-mobile.png"
import tablet2 from "@/assets/images/slider-2-tablet-mobile.png";
import tablet3 from "@/assets/images/slider-3-tablet-mobile.png";

import unionIcon from "@/assets/icons/union-plus.svg";
import slide1Text from "@/assets/images/slider1-text.svg";
import slide1Benefits from "@/assets/images/slider1BenefitsMobile.svg";
import slide2Benefits from "@/assets/images/slider-3-benefits-mobile.svg";
import slide3Benefits from "@/assets/images/slider-2-benefits-mobile.svg";
import slide2Text from "@/assets/images/slider2Text.svg";
import slide3Text from "@/assets/images/slider3Text.svg";
import {nextTick, ref, watch} from "vue";
const currentSlide = ref(0);

import { getTextByLanguage } from '@/config';
const texts = getTextByLanguage();

const slides = [
  {
    tablet: tablet,
    text: slide1Text,
    benefitsMobile: slide1Benefits,
    benefitsDesc: texts.Images.slide1BenefitsText,
  },
  {
    tablet: tablet2,
    text: slide2Text,
    benefitsMobile: slide2Benefits,
    benefitsDesc: texts.Images.slide2BenefitsText,
  },
  {
    tablet: tablet3,
    text: slide3Text,
    benefitsMobile: slide3Benefits,
    benefitsDesc: texts.Images.slide3BenefitsText,
  },
];

const changeSlide = (index) => {
  currentSlide.value = index;
};

watch(currentSlide, async () => {
  await nextTick(); // Wait for the DOM to update
  gsap.fromTo(
      ".slide-description",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
  );
});
</script>

<template>
  <div class="product-mobile-wrapper" >
    <div class="product-mobile">
      <div class="product-description-mobile">
        <div class="product-mobile-titles">
          <h3>{{texts.Product.title}}</h3>
          <p>{{texts.Product.description}}</p>
        </div>
        <div class="unions-block">
          <div class="union-item-plus">
            {{texts.Product.plusOne}}
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            {{texts.Product.plusTwo}}
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            {{texts.Product.plusThree}}
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            {{texts.Product.plusFour}}
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            {{texts.Product.plusFive}}
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            {{texts.Product.plusSix}}
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
        </div>
      </div>
      <div class="tablet-content">
        <img :src="slides[currentSlide].tablet" alt="tablet" width="322" height="auto" class="tablet">
      </div>
    </div>
    <div class="product-mobile-slide-info-wrapper">
      <div class="slider-pagination-mobile">
        <div
            v-for="(slide, index) in slides"
            :key="'pagination-' + index"
            class="pagination-item-mobile"
            :class="{ active: currentSlide === index }"
            @click="changeSlide(index)"
        >
          {{ index + 1 }}
        </div>
      </div>
      <div class="product-mobile-slide-info">
        <img :src="slides[currentSlide].text" alt="image" width="304" height="116" class="slider-text">
        <img :src="slides[currentSlide].benefits" alt="image" width="728" height="147" class="slider-benefits-mob-first">
        <img :src="slides[currentSlide].benefitsMobile" alt="image" width="728" height="147" class="slider-benefits-mob-second">
        <img :src="slides[currentSlide].benefitsDesc" alt="image" width="728" height="147" class="slider-benefits-desc-second">
      </div>
    </div>
  </div>
</template>

<style scoped>

@keyframes sway {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(-5px) rotate(-3deg);
  }
  50% {
    transform: translateX(-10px) rotate(-5deg);
  }
  75% {
    transform: translateX(-5px) rotate(3deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}

.product-mobile-wrapper {
  display: none;

  @media screen and (max-width: 1028px) {
    display: flex;
    width: 100%;
    max-width: 1840px;
    margin: 0 auto;
    flex-direction: column;
    position: relative;
    align-content: center;
    background: url("../assets/images/lvlx-bg.svg") no-repeat center;
    background-size: cover;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
  }
}

.slider-benefits-desc-second{
  width: 90%;
  display: flex;
  margin: 0 auto;
  height: auto;

  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.slider-benefits-mob-second{
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: auto;
  }
}

@media screen and (max-width: 1028px) {
  .slider-benefits-mob-first{
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .slider-benefits-mob-first{
    display: none;
  }
}

.slider-text{
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: auto;

  @media screen and (max-width: 1028px) {
    width: 50%;
    height: auto;
    margin: 0 0 0 5%;
  }

  @media screen and (max-width: 700px) {
    width: 50%;
    height: auto;
    margin: 0 0 0 5%;
  }
}

.product-mobile-slide-info-wrapper {
  display: flex;
  position: relative;
  width: 100%;
  margin: -14% 0 0 0;
  flex-direction: column;

  @media screen and (max-width: 1028px) {
    width: 100%;
  }

  @media screen and (max-width: 476px) {
    margin: -35% 0 0 0;
  }
}

.product-mobile {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px;
  margin: 0 auto;

  @media screen and (max-width: 1028px) {
    align-content: center;
    justify-content: center;
  }

  @media screen and (max-width: 476px) {
    flex-direction: column;
  }
}

.pagination-item-mobile {
  display: flex;
  width: 60px;
  height: 60px;
  background: var(--white);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-size: 20px;
  transition: 0.2s all ease-in-out;
  text-align: center;
  align-content: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--orange-hover);
    color: var(--white);
  }
}

.slider-pagination-mobile {
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

.product-mobile-slide-info {
  position: relative;
  --r: 20px; /* control the rounded part */
  --s: 190px; /* control the size of the cut */
  --a: 40deg; /* control the depth of the curvature */
  --p: 50%; /* control the position */
  backdrop-filter: blur(15px);
  aspect-ratio: 3/2;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  background: rgba(152, 152, 152, 0.11);
  border-radius: var(--r);
  --_m: var(--r), #000 calc(100% - 1px), #0000;
  --_d:(var(--s) + var(--r)) * cos(var(--a));
  mask: radial-gradient(var(--r) at calc(var(--p) + var(--_d)) var(--_m)),
  radial-gradient(var(--r) at calc(var(--p) - var(--_d)) var(--_m)),
  radial-gradient(var(--s) at var(--p) calc(-1 * sin(var(--a)) * var(--s)),
      #0000 100%, #000 calc(100% + 1px)) 0 calc(var(--r) * (1 - sin(var(--a)))) no-repeat,
  linear-gradient(90deg, #000 calc(var(--p) - var(--_d)), #0000 0 calc(var(--p) + var(--_d)), #000 0);

  @media screen and (max-width: 768px) {
    padding: 5% 0 1% 0;
  }

  @media screen and (max-width: 768px) {
    padding: 21% 0 11% 0;
  }
}

.unions-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media screen and (max-width: 476px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
}

.union-item-plus {
  display: flex;
  width: 100%;
  align-content: center;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
}

.tablet-content{
  display: flex;

  @media screen and (max-width: 1028px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
}

.product-mobile-titles{
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 250px;

  @media screen and (max-width: 476px) {
    width: 100%;
    max-width: 100%;
  }
}

.product-description-mobile {
  display: flex;
  gap: 30px;
  max-width: 350px;

  @media screen and (max-width: 1028px) {
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 550px;
  }

  @media screen and (max-width: 476px) {
    flex-direction: column;
    margin: 0 0 15px 0;
    width: 100%;
  }

  h3 {
    font-size: 40px;
    font-weight: 500;
    color: var(--black);
  }

  p {
    font-size: 18px;
  }
}

</style>