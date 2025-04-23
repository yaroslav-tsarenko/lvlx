<script setup>
import tablet from "../assets/images/tablet.svg"
import unionIcon from "../assets/icons/union-plus.svg"
import slide1Text from "../assets/images/slider1-text.svg"
import slide1Benefits from "../assets/images/slider1-benefits.svg"
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider-info-wrapper">
      <div class="pagination">
        <div class="pagination-item">
          1
        </div>
        <div class="pagination-item">
          2
        </div>
        <div class="pagination-item">
          3
        </div>
      </div>
      <div class="slider-info">

        <div class="slider-info-details">
          <div class="slider-product-info">
            <h2>Продукт</h2>
            <p>
              Партнерская программа LVLX является прямым рекламодателем iGaming продуктов и предоставляет офферы на онлайн-казино и БК
            </p>
          </div>
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
        <div class="slide-description">
          <img :src="slide1Text" alt="image" width="530" height="220">
          <img :src="slide1Benefits" alt="image" width="1080" height="220">
        </div>
      </div>
    </div>
    <div class="slides">
      <img :src="tablet" alt="tablet" width="630" height="822" class="tablet"/>
    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  display: flex;
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
  position: relative;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
}

.pagination{
  display: flex;
  flex-direction: column;
  gap: 10px;
  right: 11%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  position: absolute;
}

.pagination-item{
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

  &:hover{
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

.slide-description{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tablet {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translateY(-50%);
}

.slider-info-wrapper{
  display: flex;
  width: 100%;
  position: relative;
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
    --r: 60px;  /* control the rounded part */
    --s: 120px;  /* control the size of the cut */
    --a: 20deg; /* control the depth of the curvature */
    --p: 50%;   /* control the position */

    --_m:,#000 calc(100% - 1px),#0000;
    --_r:var(--r) at calc(100% - var(--r));
    --_d:(var(--s) + var(--r))*cos(var(--a));
    mask:
        radial-gradient(var(--_r) calc(var(--p) + var(--_d)) var(--_m)),
        radial-gradient(var(--_r) calc(var(--p) - var(--_d)) var(--_m)),
        radial-gradient(var(--s) at calc(100% + sin(var(--a))*var(--s)) var(--p),
        #0000 100%,#000 calc(100% + 1px)) calc(var(--r)*(sin(var(--a)) - 1)) 0 no-repeat,
        linear-gradient(#000 calc(var(--p) - var(--_d)),#0000 0 calc(var(--p) + var(--_d)),#000 0);
}

.slider-info-details{
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.unions-block{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.union-item-plus{
  display: flex;
  gap: 82px;
  max-width: 280px;
  width: 100%;
  align-content: center;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
}

.slider-product-info{
  display: flex;
  flex-direction: column;
  max-width: 405px;
  gap: 10px;

  h2{
    font-size: 70px;
    font-weight: 500;
  }

  p{
    font-size: 24px;
    font-weight: 500;
  }
}
</style>