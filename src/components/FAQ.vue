<script setup>
import { ref } from 'vue';
import arrowBlack from '../assets/icons/arrow-black.svg';
import arrowOrange from '../assets/icons/arrow-orange.svg';

const faqItems = [
  { question: 'Что такое партнерская программа LVLX?', answer: 'OLVLX - это удобный маркетинговый инструмент, который используют владельцы веб-ресурсов, стримеры, арбитражники, другие специалисты перфоманс-маркетинга для привлечения целевого трафика на гемблинг и беттинг офферы, такие как GETX.' },
  { question: 'Что такое арбитраж трафика?', answer: 'Это схема заработка, при которой человек (арбитражник) покупает трафик на одном источнике и перенаправляет его на офферы рекламодателя, зарабатывая на комиссии - разнице между стоимостью привлечения трафика и доходом от конверсий.' },
  { question: 'Как стать партнером и зарабатывать с LVLX?', answer: '1. Зарегистрируйся на сайте партнерской программы LVLX по ссылке, дождись сообщения от менеджера, который подтвердит твой доступ в личный кабинет и поможет с запуском. \n' +
        '2. Привлекай аудиторию и получай прибыль по выбранной модели сотрудничества: RevShare, CPA или Hybrid. \n' +
        '3. Твое вознаграждение зависит от количества и качества трафика.\n' },
  { question: 'Как и когда производятся выплаты?', answer: 'По модели RevShare заработок партнера выплачиваем каждый вторник. \n' +
        'По моделям СРА и Hybrid выплачиваем 2 раза в месяц за периоды 1-15 и 16-30(31) числа месяца.\n' +
        'Выплаты производятся в USDT, BTC, на карту VISA и MasterCard.\n' +
        'Минимальная сумма для выплаты - $50\n' },
  { question: 'Какие источники трафика мы принимаем?', answer: 'Партнерка LVLX принимает все виды трафика, а именно: SEO (кроме SEO по брендовым ключам наших продуктов), PPC, ASO, UAC, Facebook, In-app, соцсети, баннерную рекламу, стримы. Также готовы обсудить любой альтернативный источник трафика.  \n' +
        'Запрещено: схемы обмана игроков, мислид, фрод, мотив, так называемый куки стаффинг, игра под своей рефкой.\n' +
        'Каждый запуск согласовывается с личным аффилейт менеджером.\n' },
  { question: 'Что такое СРА и RevShare, какую модель лучше выбрать?\n', answer: 'CPA - это оплата за целевое действие, в нашем случае за первый депозит приведенного тобой игрока. Ставка по CPA зависит от источника, качества и объема трафика и обсуждается в индивидуальном порядке.\n' +
        'RevShare - это процент от дохода, который приносят игроки. Наша партнерка предлагаем 50% от NGR пожизненно. \n' +
        'Выбор модели зависит от типа трафика, и наши менеджеры порекомендуют лучший вариант для твоего роста.\n' },
  { question: 'Что такое Referal?', answer: "Прямой рекламодатель LVLX дает возможность своим партнерам зарабатывать не только на продвижении gambling продуктов и привлечении пользователей, но и на привлечении новых вебмастеров для работы с партнерской программой.\n" +
        "Зарабатывай 3% от дохода реферала.\n" },
  { question: 'Информация для СМИ', answer: "По любым вопросам медиа-сотрудничества, обращайся в наш PR-отдел партнерки: t.me/afflvlx\n" },
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
      <h3>FAQ</h3>
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