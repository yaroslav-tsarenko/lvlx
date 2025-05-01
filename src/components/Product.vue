<script setup>
import unionIcon from "../assets/icons/union-plus.svg"
import {ref, watch, nextTick} from 'vue';
import {getTextByLanguage} from '@/config';

const texts = getTextByLanguage();
const currentSlide = ref(0);

const slides = [
  {
    tablet: texts.Images.tablet,
    text: texts.Images.k7,
    benefits: texts.Images.slide1BenefitsText,
  },
  {
    tablet: texts.Images.tablet2,
    text: texts.Images.inhouse11games,
    benefits: texts.Images.slide3BenefitsText,
  },
  {
    tablet: texts.Images.tablet3,
    text: texts.Images.k50games,
    benefits: texts.Images.slide2BenefitsText,
  },
];

const changeSlide = (index) => {
  currentSlide.value = index;
};

watch(currentSlide, async () => {
  await nextTick();
  gsap.fromTo(
      ".slide-description",
      {opacity: 0},
      {opacity: 1, duration: 0.5, ease: "power1.out"}
  );
});

</script>

<template>
  <div class="slider-wrapper" id="product-section">
    <div class="slider-info-wrapper">
      <div class="pagination">
        <div
            v-for="(slide, index) in slides"
            :key="'pagination-' + index"
            class="pagination-item"
            :class="{ active: currentSlide === index }"
            @click="changeSlide(index)">
          {{ index + 1 }}
        </div>
      </div>
      <div class="slider-info">
        <div class="slider-info-details">
          <div class="slider-product-info">
            <h2>{{ texts.Product.title }}</h2>
            <p>
              {{ texts.Product.description }}
            </p>
          </div>
          <div class="unions-block">
            <div class="union-item-plus">
              {{ texts.Product.plusOne }}
              <img :src="unionIcon" alt="icon" width="20" height="20">
            </div>
            <div class="union-item-plus">
              {{ texts.Product.plusFour }}
              <img :src="unionIcon" alt="icon" width="20" height="20">
            </div>
            <div class="union-item-plus">
              {{ texts.Product.plusTwo }}
              <img :src="unionIcon" alt="icon" width="20" height="20">
            </div>
            <div class="union-item-plus">
              {{ texts.Product.plusFive }}
              <img :src="unionIcon" alt="icon" width="20" height="20">
            </div>
            <div class="union-item-plus">
              {{ texts.Product.plusThree }}
              <img :src="unionIcon" alt="icon" width="20" height="20">
            </div>
            <div class="union-item-plus">
              {{ texts.Product.plusSix }}
              <img :src="unionIcon" alt="icon" width="20" height="20">
            </div>
          </div>
        </div>
        <div class="slide-description" :key="currentSlide">
          <img :src="slides[currentSlide].text" alt="image" width="530" height="220">
          <img :src="slides[currentSlide].benefits" alt="image" width="1080" height="220">
        </div>
      </div>
    </div>
    <div class="slides">
      <img
          :src="slides[currentSlide].tablet"
          alt="tablet"
          width="630"
          height="822"
          class="tablet"
          :key="currentSlide"
      />
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

.tablet {
  position: absolute;
  top: 10%;
  left: 60%;
  height: 822px;
  width: auto;
  transform: translateY(-50%);
  transform-origin: center;
  animation: sway 3s ease-in-out infinite;

  @media screen and (max-width: 1440px) {
    left: 50%;
  }

  @media screen and (max-width: 1280px) {
    left: 45%;
  }
}

.slider-wrapper {
  display: flex;
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
  position: relative;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/lvlx-big-bg.svg") no-repeat center;
  background-size: cover;
  justify-items: center;

  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.pagination-item.active {
  background: var(--orange);
  color: var(--white);
}

.pagination {
  display: flex;
  flex-direction: column;
  gap: 10px;
  right: 11%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  position: absolute;
}

.pagination-item {
  display: flex;
  width: 60px;
  border-radius: 50px;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  height: 60px;
  background: var(--white);
  transition: 0.3s all ease;
  box-shadow: 0px 4px 20px var(--grey-transparent);

  &:hover {
    background: var(--orange);
    color: var(--white);
  }
}

.slides {
  width: 40%;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  justify-items: center;
}

.slide-description {
  display: flex;
  flex-direction: column;
  gap: 30px;

  img {

    &:last-child {
      width: 100%;
      height: auto;
      max-width: 1080px;
      max-height: 220px;
      display: flex;

      @media screen and (max-width: 1440px) {
        max-width: 100%;
        height: auto;
        padding: 0;
        max-height: 100%;
      }
    }
  }
}

.slider-info-wrapper {
  display: flex;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1440px) {
    width: 80%;
  }
}

.slider-info {
  display: flex;
  flex-direction: column;
  background: rgba(209, 209, 209, 0.22);
  width: 90%;
  gap: 80px;
  position: relative;
  padding: 50px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  z-index: 1;
  --r: 60px; /* control the rounded part */
  --s: 120px; /* control the size of the cut */
  --a: 20deg; /* control the depth of the curvature */
  --p: 50%; /* control the position */
  --_m:, #000 calc(100% - 1px), #0000;
  --_r: var(--r) at calc(100% - var(--r));
  --_d:(var(--s) + var(--r)) * cos(var(--a));
  mask: radial-gradient(var(--_r) calc(var(--p) + var(--_d)) var(--_m)),
  radial-gradient(var(--_r) calc(var(--p) - var(--_d)) var(--_m)),
  radial-gradient(var(--s) at calc(100% + sin(var(--a)) * var(--s)) var(--p),
      #0000 100%, #000 calc(100% + 1px)) calc(var(--r) * (sin(var(--a)) - 1)) 0 no-repeat,
  linear-gradient(#000 calc(var(--p) - var(--_d)), #0000 0 calc(var(--p) + var(--_d)), #000 0);
}

.slider-info-details {
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
}

.unions-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.union-item-plus {
  display: flex;
  gap: 82px;
  max-width: 280px;
  width: 100%;
  align-content: center;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
}

.slider-product-info {
  display: flex;
  flex-direction: column;
  max-width: 405px;
  gap: 10px;

  h2 {
    font-size: 70px;
    font-weight: 500;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
}
</style>