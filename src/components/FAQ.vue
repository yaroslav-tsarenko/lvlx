<script setup>
import { ref } from 'vue';
import arrowBlack from '../assets/icons/arrow-black.svg';
import arrowOrange from '../assets/icons/arrow-orange.svg';
import { getTextByLanguage } from '@/config';

const texts = getTextByLanguage();
const faqItems = texts.Faq.faqItems;

const expandedIndex = ref(null);

const toggleItem = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};

</script>

<template>
  <div class="faq-wrapper" id="faq-section">
    <h2>{{ texts.Faq.title }}</h2>
    <div class="faq-section">
      <h3>{{ texts.Faq.title }}</h3>
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

  @media screen and (max-width: 768px) {
    padding: 10% 0;
  }

  h2 {
    font-size: 70px;
    text-align: center;
    position: absolute;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}

.faq-section {
  max-width: 920px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 20px;

  h3{
    display: none;

    @media screen and (max-width: 768px) {
      display: flex;
      font-size: 35px;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-weight: boxld;
    }
  }
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
}

.faq-item {
  border: 1px solid var(--line-color);
  border-radius: 25px;
  padding: 35px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
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