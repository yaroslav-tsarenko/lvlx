<script setup>
import {ref, computed} from 'vue';
import streamerIcon from '../assets/icons/streem.svg';
import subtract from '../assets/images/subtract.svg';
import elipseBlur from '../assets/images/ellipse-blur.png';
import egg from '../assets/images/egg-for-bg.svg';
import duck from '../assets/images/duck.svg';
import visitorsChart from '../assets/images/visitors-graph.svg';
import registerChart from '../assets/images/registrations-graph.svg';
import earningsChart from '../assets/images/earnings-graph.svg';
import depositChart from '../assets/images/deposit-graph.svg';
import ChartItem from "@/components/ChartItem.vue";
import usersPlate from "../assets/images/users-plate.svg";
import likesPlate from "../assets/images/likes-plate.svg";
import visitorsPlate from "../assets/images/visitors-plate.svg";

const chatItems = ref([
  {
    nickname: 'GETX',
    message: '350% до $1000 на первые депозиты',
    pinned: true,
  },
  {
    nickname: 'FillTop',
    message: 'Здорова клювoносый',
    pinned: false,
  },
  {
    nickname: 'Gibson',
    message: 'go общий стрим с Мелом! 🏛️',
    pinned: false,
  },
  {
    nickname: 'BobrKurva',
    message: 'пока домашку не сделаю, за слоты не сяду',
    pinned: false,
  },
  {
    nickname: 'Tolik-0921',
    message: 'Сегодня GETX дает 🚀',
    pinned: false,
  },
  {
    nickname: 'Zubarev',
    message: 'Больше информации о моих стримах в TG-канале t.me/zubaking 150 FS каждому подписавшемуся',
    pinned: false,
  },
  {
    nickname: 'Donta',
    message: 'Лучше бы Luxury girl дала',
    pinned: false,
  },
  {
    nickname: 'Oleg_453',
    message: 'я словил бонуску в бонанзе, но до этого слил 10k',
    pinned: false,
  },
  {
    nickname: 'Papa_troll',
    message: 'Вечер в хату, бродяги. матушку удачу, сто тузов по сдаче))',
    pinned: false,
  }
]);


const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const pinnedMessages = computed(() => chatItems.value.filter(item => item.pinned));
const unpinnedMessages = computed(() => chatItems.value.filter(item => !item.pinned));
</script>


<template>
  <div class="streamers-wrapper">
    <img :src="streamerIcon" alt="icon" width="350" height="80" class="streamer-icon">
    <div class="streamers-container">
      <img :src="subtract" alt="Subtract Icon" class="subtract">
      <img :src="elipseBlur" alt="Elipse Blur" class="ellipseBlur">
      <img :src="egg" alt="Egg" width="380" height="380" class="egg">
      <img :src="duck" alt="duck" width="700" height="800" class="duck">
      <div class="charts-wrapper">
        <p>Партнерка LVLX предлагает индивидуальные условия сотрудничества для стримеров, включающие различные модели
          оплаты: RevShare, CPA, Hybrid, FIX для достижения крутого win-win результата</p>
        <div class="charts">
          <ChartItem p="посещений" h4="11236" :chart="visitorsChart"/>
          <div class="charts-column">
            <ChartItem p="регистраций" h4="1404" :chart="registerChart"/>
            <ChartItem p="доход" h4="$32760" :chart="earningsChart" highlighted/>
          </div>
          <ChartItem p="депозитов" h4="468" :chart="depositChart"/>
        </div>
      </div>
      <div class="for-streamers">
        <h2>Стримерам</h2>
        <button>
          Стань стримером
        </button>
      </div>
      <div class="chat-and-unions">
        <div class="unions-black">
          <div class="union-item-black">Уникальные бонусы</div>
          <div class="union-item-black">Конвертящие промо</div>
          <div class="union-item-black">Быстрые выплаты</div>
        </div>
        <div class="streamer-chat">
          <h4>Чат стрима</h4>
          <div class="streamer-chat-content">
            <p
                v-for="(item, index) in pinnedMessages"
                :key="'pinned-' + index"
                class="chat-item pinned">
              <span class="nickname" :style="{ color: getRandomColor() }">📌{{ item.nickname }}: </span>
              {{ item.message }}
            </p>
            <div
                v-for="(item, index) in unpinnedMessages"
                :key="'unpinned-' + index"
                class="chat-item">
              <span class="nickname" :style="{ color: getRandomColor() }">{{ item.nickname }}:</span> {{ item.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.streamers-wrapper {
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: 1840px;
  flex-direction: column;
  position: relative;


  @media screen and (max-width: 768px) {
    display: none;
  }
}

.streamer-chat-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow: hidden;
  width: 100%;
}

.visitors-plate{
  position: absolute;
  z-index: 1;
  right: -50%;
  top: 37%;
}

.likes-plate{
  position: absolute;
  z-index: 1;
  left: -50%;
  top: 37%;
}

.users-plate{
  position: absolute;
  z-index: 1;
  left: -50%;
  top: 37%;
}

.chat-item {
  gap: 10px;
  font-size: 18px;
  width: 100%;
  font-weight: 400;
  color: var(--white);
}

.chat-item.pinned {
  background: #252525;
  position: sticky;
  top: 0;
  z-index: 99;
  gap: 10px;
  padding: 12px;
  border-radius: 10px;
}

.pinned-icon {
  width: 20px;
  height: 20px;
}

.ellipseBlur {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0%;
}

.unions-black {
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;
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
}

.duck {
  display: flex;
  position: absolute;
  z-index: 1;
  height: 1150px;
  width: auto;
  bottom: -45%;
  left: 50%;
  transform: translateX(-50%);
}

.egg {
  display: flex;
  position: absolute;
  right: 0;
  width: 550px;
  height: 550px;
  bottom: 3%;
}

.streamer-icon {
  display: flex;
  position: absolute;
  z-index: 99;
  bottom: 0;
  right: 0;
}

.subtract {
  display: flex;
  position: absolute;
  bottom: 40%;
  left: 0;
}

.streamers-container {
  position: relative;
  border-radius: 30px;
  padding: 60px;
  display: flex;
  height: 980px;
  justify-content: space-between;
  background: var(--black);
  --r: 20px; /* the radius */
  --s: 80px; /* size of inner curve */
  --x: 270px; /* horizontal offset (no percentane) */
  --y: 2px; /* vertical offset (no percentage) */
  --_m: / calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000 72%);
  --_g: conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)), #0000 25%, #000 0);
  --_d:(var(--s) + var(--r));
  mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m),
  100% calc(100% - var(--_d) - var(--y)) var(--_m),
  radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px)) calc(-1 * var(--r) - var(--x)) calc(-1 * var(--r) - var(--y)),
  var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
  var(--_g) 0 calc(-1 * var(--_d) - var(--y));
  mask-repeat: no-repeat;
}

.for-streamers {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 100%;
  color: var(--white);

  h2 {
    font-size: 70px;
    font-weight: 500;
  }

  button {
    display: flex;
    background: var(--orange);
    font-size: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 25px 40px;
    color: var(--white);
    z-index: 99;
    border-radius: 20px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: var(--orange-hover);
      outline: none;
      border: none;
    }
  }
}

.charts-wrapper {
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  color: var(--white);

  p {
    max-width: 400px;
    font-size: 24px;
    font-weight: 400;
  }
}

.streamer-chat {
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 400px;
  height: 60%;
  align-items: center;
  gap: 20px;
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid var(--grey-transparent);

  h4 {
    font-size: 20px;
    font-weight: 500;
    color: var(--white);
    margin: 0;
  }
}

.chat-and-unions {
  display: flex;
  gap: 40px;
  flex-direction: column;
}

.charts-column{
  display: flex;
  flex-direction: column;
}

.charts {
  display: flex;
  bottom: 2%;
  position: absolute;
  max-height: 410px;
  height: 100%;
}
</style>