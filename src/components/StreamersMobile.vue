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
      <h2>Стримерам</h2>
      <p>Партнерка LVLX предлагает индивидуальные условия сотрудничества для стримеров, включающие различные модели
        оплаты: RevShare, CPA, Hybrid, FIX для достижения крутого win-win результата</p>
      <div class="unions-black-mobile">
        <div class="union-black-mobile-item">
          Уникальные бонусы
        </div>
        <div class="union-black-mobile-item">
          Конвертящие промо
        </div>
        <div class="union-black-mobile-item">
          Кастомные креативы
        </div>
      </div>
      <div class="streamers-mobile-duck">
        <img :src="mobileDuck" alt="Mobile Duck" width="350" height="500" class="mobile-duck">
        <button>
          Стань стримером
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

  @media screen and (max-width: 768px) {
    display: flex;
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
  }
}

.streamers-mobile-duck {
  display: flex;
  height: 70dvh;
  flex-direction: column;
  position: relative;
  align-content: flex-end;
  justify-content: flex-end;

  button{
    display: flex;
    width: fit-content;
    padding: 20px 40px;
    border-radius: 15px;
    margin: auto auto 40% auto;
    outline: none;
    border: none;
    color: var(--white);
    z-index: 999;
    background: var(--orange);
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
}

.unions-black-mobile {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.charts-mobile {
  display: flex;
  bottom: 2%;
  height: 30dvh;
  scale: 0.8;
}

.charts-column{
  display: flex;
  flex-direction: column;
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