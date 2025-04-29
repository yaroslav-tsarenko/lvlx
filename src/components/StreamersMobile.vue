<script setup>
import {getTextByLanguage} from "@/config";
import mobileDuck from "../assets/images/duck-mobile.svg"
import visitorsChart from "@/assets/images/visitors-graph.svg";
import registerChart from "@/assets/images/registrations-graph.svg";
import earningsChart from "@/assets/images/earnings-graph.svg";
import depositChart from "@/assets/images/deposit-graph.svg";
import ChartItem from "@/components/ChartItem.vue";
import streams from "../assets/icons/streem.svg";
const texts = getTextByLanguage();
</script>

<template>
  <div class="for-streamers-mobile-wrapper" id="streamers-section">
    <img :src="streams" alt="streams" width="180" height="50" class="streams-icon">
    <div class="for-streamers-mobile">
      <h2>{{ texts.ForStreamers.title }}</h2>
      <div class="for-streamers-mobile-titles">
        <p>{{ texts.ForStreamers.description }}</p>
        <div class="unions-black-mobile">
          <div class="union-black-mobile-item">
            {{ texts.ForStreamers.plusOne }}
          </div>
          <div class="union-black-mobile-item">
            {{ texts.ForStreamers.plusTwo }}
          </div>
          <div class="union-black-mobile-item">
            {{ texts.ForStreamers.plusThree }}
          </div>
        </div>
      </div>
      <div class="streamers-mobile-duck">
        <img :src="mobileDuck" alt="Mobile Duck" width="350" height="500" class="mobile-duck">
        <button>
          {{ texts.ForStreamers.becomeStreamer }}
        </button>
      </div>
      <div class="charts-mobile">
        <ChartItem p="посещений" h4="11236" :chart="visitorsChart"/>
        <div class="charts-column">
          <ChartItem p="регистраций" h4="1404" :chart="registerChart"/>
          <ChartItem p="доход" h4="$32760" :chart="earningsChart" highlighted/>
        </div>
        <ChartItem p="депозитов" h4="468" :chart="depositChart"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.for-streamers-mobile-wrapper{
  display: flex;
  flex-direction: column;
  position: relative;
}

.streams-icon{
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 768px) {
    display: flex;
  }
}

.for-streamers-mobile-titles{
  display: flex;
  width: 95%;
  margin: 0 auto;
  gap: 10px;

  @media screen and (max-width: 476px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-items: center;
  }
}

.for-streamers-mobile {
  color: white;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  height: auto;
  text-align: center;
  display: none;
  padding: 10% 0;
  background: var(--black);
    --r: 20px; /* the radius */
    --s: 30px; /* size of inner curve */
    --x: 150px; /* horizontal offset (no percentane) */
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

  @media screen and (max-width: 1024px) {
    display: flex;
    border-radius: 0;
  }

  h2 {
    font-size: 40px;
    font-weight: 500;
  }

  p {
    font-size: 25px;
    width: 90%;
    margin: 0 auto;
    text-align: start;
    max-width: 400px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
}

.streamers-mobile-duck {
  display: flex;
  height: 70dvh;
  flex-direction: column;
  position: relative;
  align-content: flex-end;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    height: 130dvh;
  }

  @media screen and (max-width: 476px) {
    height: 80dvh;
  }

  button{
    display: flex;
    width: fit-content;
    padding: 20px 40px;
    border-radius: 15px;
    font-size: 20px;
    margin: auto auto 40% auto;
    outline: none;
    border: none;
    color: var(--white);
    z-index: 999;
    background: var(--orange);

    @media screen and (max-width: 768px) {
      margin: auto auto 20% auto;
    }

    @media screen and (max-width: 476px) {
      margin: auto auto 20% auto;
    }
  }
}

.mobile-duck{
  display: flex;
  width: 100%;
  height: auto;
  max-width: 500px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    top: 2%;
  }

  @media screen and (max-width: 476px) {
    max-width: 100%;
    top: 2%;
  }
}

.unions-black-mobile {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
}

.charts-mobile {
  display: flex;
  bottom: 2%;
  height: 50dvh;
  scale: 0.8;

  @media screen and (max-width: 768px) {
    scale: 1;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: 476px) {
    width: 100%;
    scale: 0.8;
  }
}

.charts-column{
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: 476px) {
    width: 95%;
  }
}

.union-black-mobile-item {
  display: flex;
  width: 100%;
  height: auto;
  padding: 20px 0;
  background: url("../assets/icons/black-union.svg") no-repeat center;
  background-size: contain;
  font-size: 18px;
  color: var(--black);
  font-weight: 500;
  text-align: center;
  align-content: center;
  justify-content: center;
}
</style>