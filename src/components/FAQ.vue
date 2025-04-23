<script setup>
import { ref } from 'vue';
import arrowBlack from '../assets/icons/arrow-black.svg';
import arrowOrange from '../assets/icons/arrow-orange.svg';

const faqItems = [
  { question: 'Что такое партнерская программа LVLX?', answer: 'Our return policy lasts 30 days.' },
  { question: 'Как стать партнером и зарабатывать с LVLX?', answer: 'You can track your order through the tracking link sent to your email.' },
  { question: 'Какие источники трафика мы принимаем??', answer: 'Yes, we ship to most countries worldwide.' },
  { question: 'Какие источники трафика мы принимаем?', answer: 'Yes, we ship to most countries worldwide.' },
  { question: 'Что такое Referal?', answer: 'Yes, we ship to most countries worldwide.' },
  { question: 'Информация для СМИ?', answer: 'Yes, we ship to most countries worldwide.' },
];

const expandedIndex = ref(null);

const toggleItem = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};
</script>

<template>
  <div class="faq-wrapper">
    <h2>FAQ</h2>
    <div class="faq-section">
      <div class="faq-items">
        <div
            v-for="(item, index) in faqItems"
            :key="'faq-item|' + index"
            class="faq-item"
            :class="{ expanded: expandedIndex === index }"
        >
          <div
              class="faq-question"
              @click="toggleItem(index)"
              :class="{ expanded: expandedIndex === index }">
            <img
                :src="expandedIndex === index ? arrowOrange : arrowBlack"
                alt="icon"
                width="30"
                height="30"
                class="arrow"
                :class="{ rotated: expandedIndex === index }"
            />
            {{ item.question }}
          </div>
          <div
              class="faq-answer"
              :class="{ expanded: expandedIndex === index }"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-wrapper {
  display: flex;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 130px 0 200px 0;

  h2 {
    font-size: 70px;
    text-align: center;
    position: absolute;
  }
}

.faq-section {
  max-width: 920px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 20px;
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-item {
  border: 1px solid var(--line-color);
  border-radius: 25px;
  padding: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item.expanded {
  border-color: var(--orange);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 7px;
  align-content: center;
  justify-content: start;
  justify-items: center;
  font-weight: 500;
  font-size: 25px;
  transition: color 0.3s ease;
}

.faq-question.expanded {
  color: var(--orange);
}

.faq-item:hover {
  border: 1px solid var(--orange);
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  height: 0;
  overflow: hidden;
  opacity: 0;
  font-size: 18px;
  padding: 0 0 0 32px;
  transition: height 0.3s ease, opacity 0.3s ease;
}

.faq-answer.expanded {
  height: auto;
  opacity: 1;
  padding-top: 10px;
}
</style>