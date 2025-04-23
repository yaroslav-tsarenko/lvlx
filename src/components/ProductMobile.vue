<script setup>
import tablet from "../assets/images/tablet.svg"
import unionIcon from "@/assets/icons/union-plus.svg";
import slider1Benefits from "@/assets/images/slider1-benefits.svg";
import slider1BenefitsMobile from "@/assets/images/slider1BenefitsMobile.svg";
import slider1Text from "@/assets/images/slider1-text.svg";
</script>

<template>
  <div class="product-mobile-wrapper">
    <div class="product-mobile">
      <div class="product-description-mobile">
        <h3>Продукт</h3>
        <p>Партнерская программа LVLX является прямым рекламодателем iGaming продуктов и предоставляет офферы на
          онлайн-казино и БК</p>
        <div class="unions-block">
          <div class="union-item-plus">
            In-house колл-центр
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            VIP программа
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            KZ, RU, TR, IN
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            Лицензия Anjouan
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            Reg2dep 20-50%
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
          <div class="union-item-plus">
            Экспертная поддержка
            <img :src="unionIcon" alt="icon" width="20" height="20">
          </div>
        </div>
      </div>
      <div class="tablet-content">
        <img :src="tablet" alt="tablet" width="322" height="450">
      </div>
    </div>
    <div class="product-mobile-slide-info-wrapper">
      <div class="slider-pagination-mobile">
        <div class="pagination-item-mobile">
          1
        </div>
        <div class="pagination-item-mobile">
          2
        </div>
        <div class="pagination-item-mobile">
          3
        </div>
      </div>
      <div class="product-mobile-slide-info">
        <img :src="slider1Text" alt="image" width="304" height="116" class="slider-text">
        <img :src="slider1Benefits" alt="image" width="728" height="147" class="slider-benefits-mob-first">
        <img :src="slider1BenefitsMobile" alt="image" width="728" height="147" class="slider-benefits-mob-second">

      </div>
    </div>
  </div>
</template>

<style scoped>

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

.slider-benefits-mob-second{
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: auto;
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
    flex-direction: column;
    align-content: center;
    justify-content: center;
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
    padding: 30% 0 0 0;
  }
}

.unions-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
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

.product-description-mobile {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 350px;

  @media screen and (max-width: 1028px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
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