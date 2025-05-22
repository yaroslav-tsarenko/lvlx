<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import subtract from '../assets/images/subtract.svg';
import elipseBlur from '../assets/images/ellipse-blur.png';
import egg from '../assets/images/egg-for-bg.svg';
import duck from '../assets/images/duck.svg';
import visitorsChart from '../assets/images/visitors-graph.svg';
import registerChart from '../assets/images/registrations-graph.svg';
import streamsPerYear from '../assets/images/stream-en.svg';
import earningsChart from '../assets/images/earnings-graph.svg';
import depositChart from '../assets/images/deposit-graph.svg';
import ChartItem from "@/components/ChartItem.vue";
import { getTextByLanguage } from '@/config';
const texts = getTextByLanguage();
import gsap from 'gsap';
import FadeInFromBottom from "@/components/FadeInFromBottom.vue";

const comments = ref(texts.Comments);
const pinnedMessages = computed(() => comments.value.filter(item => item.pinned));
const unpinnedMessages = computed(() => comments.value.filter(item => !item.pinned));

const chatContentRef = ref(null);
const streamsPerYearDesk = texts.Images.streamsPerYear;
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

onMounted(async () => {
  await nextTick();

  const chatEl = chatContentRef.value;

  if (!chatEl) return;

  const unpinnedEls = chatEl.querySelectorAll('.chat-item:not(.pinned)');

  // Клонируем элементы для плавного цикла
  unpinnedEls.forEach(el => {
    const clone = el.cloneNode(true);
    chatEl.appendChild(clone);
  });

  const scrollHeight = chatEl.scrollHeight / 2;

  gsap.to(chatEl, {
    scrollTop: scrollHeight,
    duration: 30,
    ease: 'none',
    repeat: -1,
    modifiers: {
      scrollTop(value) {
        if (value >= scrollHeight) {
          chatEl.scrollTop = 0;
          return 0;
        }
        return value;
      }
    }
  });
});

</script>

<template>
  <FadeInFromBottom>
    <div class="streamers-wrapper" id="streamers-section">
      <img :src="streamsPerYearDesk" alt="icon" width="350" height="80" class="streamer-icon">
      <div class="streamers-container">
        <img :src="subtract" alt="Subtract Icon" class="subtract">
        <img :src="elipseBlur" alt="Elipse Blur" class="ellipseBlur">
        <img :src="egg" alt="Egg" width="380" height="380" class="egg">
        <img :src="duck" alt="duck" width="700" height="800" class="duck">
        <div class="charts-wrapper">
          <p>{{texts.ForStreamers.description}}</p>
          <div class="charts">
            <ChartItem :p="texts.ForStreamers.visits" h4="11236" :chart="visitorsChart"/>
            <div class="charts-column">
              <ChartItem :p="texts.ForStreamers.registrations" h4="1404" :chart="registerChart"/>
              <ChartItem :p="texts.ForStreamers.earnings" h4="$32760" :chart="earningsChart" highlighted/>
            </div>
            <ChartItem :p="texts.ForStreamers.deposits" h4="468" :chart="depositChart"/>
          </div>
        </div>
        <div class="for-streamers">
          <h2>{{texts.ForStreamers.title}}</h2>
          <button>
            {{texts.ForStreamers.becomeStreamer}}
          </button>
        </div>
        <div class="chat-and-unions">
          <div class="unions-black">
            <div class="union-item-black">{{texts.ForStreamers.plusOne}}</div>
            <div class="union-item-black">{{texts.ForStreamers.plusTwo}}</div>
            <div class="union-item-black">{{texts.ForStreamers.plusThree}}</div>
          </div>
          <div class="streamer-chat">
            <h4>Чат стрима</h4>
            <div class="streamer-chat-content" ref="chatContentRef">
              <p
                  v-for="(item, index) in pinnedMessages"
                  :key="'pinned-' + index"
                  class="chat-item pinned"
              >
                <span class="nickname" :style="{ color: getRandomColor() }">📌{{ item.nickname }}: </span>
                {{ item.message }}
              </p>
              <div
                  v-for="(item, index) in unpinnedMessages"
                  :key="'unpinned-' + index"
                  class="chat-item"
              >
                <span class="nickname" :style="{ color: getRandomColor() }">{{ item.nickname }}:</span>
                {{ item.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FadeInFromBottom>
</template>

<style scoped>

.streamers-wrapper {
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: 1840px;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1440px) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.streamer-chat-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;

  /* скрыть скроллбар */
  scrollbar-width: none; /* Firefox */
}
.streamer-chat-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
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

  @media screen and (max-width: 1028px) {
    max-width: 250px;
  }
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

.duck {
  display: flex;
  position: absolute;
  z-index: 1;
  height: 777px;
  width: auto;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1440px){
    height: 620px;
  }

  @media screen and (max-width: 1280px){
    height: 650px;
  }
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
  width: 100%;

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
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

  @media screen and (max-width: 1280px) {
    padding: 60px 20px;
  }
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

    @media screen and (max-width: 1028px) {
      font-size: 40px;
      font-weight: 500;
    }
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

    @media screen and (max-width: 1280px) {
      font-size: 20px;
      font-weight: 500;
    }

    @media screen and (max-width: 1028px) {
      font-size: 20px;
      font-weight: 500;
    }
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
  z-index: 999;
  border: 1px solid var(--grey-transparent);

  @media screen and (max-width: 1280px) {
    max-width: 350px;
  }

  @media screen and (max-width: 1028px) {
    display: none;
  }

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

  @media screen and (max-width: 1280px) {
    align-items: flex-end;
    align-content: flex-end;
  }
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

  @media screen and (max-width: 1280px) {
    scale: 0.8;
    bottom: -2%;
    left: -4%;
  }
}
</style>