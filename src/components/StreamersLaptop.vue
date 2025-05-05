<script setup>
import {getTextByLanguage} from "@/config.js";
import visitorsChart from "@/assets/images/visitors-graph.svg";
import registerChart from "@/assets/images/registrations-graph.svg";
import earningsChart from "@/assets/images/earnings-graph.svg";
import depositChart from "@/assets/images/deposit-graph.svg";
import ChartItem from "@/components/ChartItem.vue";
import duckFrame from "@/assets/images/duck-frame.svg"
import ellipseBlur from "@/assets/images/ellipse-blur.png"
import egg from "@/assets/images/egg-for-bg.svg";
import streams from "@/assets/icons/streem.svg";

const texts = getTextByLanguage();
</script>

<template>
  <div class="streamers-laptop-wrapper">
    <img :src="streams" alt="streams" width="180" height="50" class="streams-icon-laptop">
    <div class="streamers-laptop-top">
      <div class="streamers-laptop-upper-section">
        <p>{{ texts.ForStreamers.description }}</p>
        <h2>{{ texts.ForStreamers.title }}</h2>
        <div class="unions-black-laptop-container">
          <div class="union-item-black">{{ texts.ForStreamers.plusOne }}</div>
          <div class="union-item-black">{{ texts.ForStreamers.plusTwo }}</div>
          <div class="union-item-black">{{ texts.ForStreamers.plusThree }}</div>
        </div>
      </div>
      <button class="custom-button-laptop">
        {{ texts.ForStreamers.becomeStreamer }}
      </button>
      <img :src="duckFrame" alt="Duck Frame" width="630" height="680" class="duck-frame">
      <img :src="ellipseBlur" alt="img" width="630" height="250" class="ellipse-blur">
    </div>
    <div class="streamers-laptop-bottom">
      <img :src="egg" alt="Egg" width="380" height="380" class="egg-laptop">
      <div class="charts-laptop">
        <ChartItem :p="texts.ForStreamers.visits" h4="11236" :chart="visitorsChart"/>
        <div class="charts-column-laptop">
          <ChartItem :p="texts.ForStreamers.registrations" h4="1404" :chart="registerChart"/>
          <ChartItem :p="texts.ForStreamers.earnings" h4="$32760" :chart="earningsChart" highlighted/>
        </div>
        <ChartItem :p="texts.ForStreamers.deposits" h4="468" :chart="depositChart" max-height="80%"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.streamers-laptop-wrapper {
  display: none;
  flex-direction: column;
  width: 97%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 1440px) {
    display: flex;
  }

  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.streams-icon-laptop{
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 300px;
  width: 100%;
  height: auto;
  z-index: 99;
}

.streamers-laptop-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);
  border-radius: 30px;
  border-bottom: 1px dashed var(--line-color);
  position: relative;

  .custom-button-laptop{
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--orange);
    color: var(--white);
    position: absolute;
    font-size: 18px;
    font-weight: 500;
    bottom: 5%;
    z-index: 999;
    padding: 20px 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;

    &:hover{
      background: var(--orange-hover);
      transition: all .3s ease-in-out;
    }
  }
}

.duck-frame{
  display: flex;
  z-index: 99;
  margin-top: -10%;

  @media screen and (max-width: 1280px) {
    margin-top: -5%;
  }
}

.ellipse-blur{
  position: absolute;
  bottom: 0;
  width: 100%;
}

.egg-laptop{
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
}

.unions-black-laptop-container{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.streamers-laptop-upper-section{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  justify-items: flex-start;
  align-content: flex-start;
  padding: 30px;

  p{
    font-size: 18px;
    color: var(--white);
    margin: 0;
    padding: 0 20px;
    width: 40%;
  }

  h2{
    font-size: 45px;
    color: var(--white);
    margin: 0;
    padding: 0 20px;
    width: 35%;
  }
}

.charts-laptop{
  display: flex;
  width: 100%;
}

.charts-column-laptop{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.streamers-laptop-bottom{
  display: flex;
  padding: 20px;
  background: var(--black);
  --r: 30px; /* the radius */
  --s: 60px; /* size of inner curve */
  --x: 250px; /* horizontal offset (no percentane) */
  --y: 10px; /* vertical offset (no percentage) */
  border-radius: var(--r);
  --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
  --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
  --_d:(var(--s) + var(--r));
  mask:
      calc(100% - var(--_d) - var(--x)) 100% var(--_m),
      100% calc(100% - var(--_d) - var(--y)) var(--_m),
      radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px))
      calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
      var(--_g) calc(-1*var(--_d) - var(--x)) 0,
      var(--_g) 0 calc(-1*var(--_d) - var(--y));
  mask-repeat: no-repeat;
}

.union-item-black {
  width: 380px;
  height: 60px;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  display: flex;
  background: url("../assets/icons/black-union.svg") no-repeat center;
  background-size: contain;
  font-size: 18px;

  @media screen and (max-width: 1028px) {
    width: 290px;
    height: 50px;
  }
}
</style>