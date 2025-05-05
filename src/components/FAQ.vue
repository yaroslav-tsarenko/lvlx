<template>
  <div class="faq-wrapper" id="faq-section" ref="fallingContainer">
    <canvas ref="canvasRef" class="physics-canvas"></canvas>
    <h2>{{ texts.Faq.title }}</h2>
    <div class="faq-section" ref="faqSectionRef">
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
              :class="{ expanded: expandedIndex === index }"
          >
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
          <div class="faq-answer" :class="{ expanded: expandedIndex === index }">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import arrowBlack from '../assets/icons/arrow-black.svg';
import arrowOrange from '../assets/icons/arrow-orange.svg';
import { getTextByLanguage } from '@/config';
import Matter from 'matter-js';
import object1 from '@/assets/images/egg-type-1.svg';
import object2 from '@/assets/images/egg-type-2.svg';
import object3 from '@/assets/images/egg-type-3.svg';

const texts = getTextByLanguage();
const faqItems = texts.Faq.faqItems;

const expandedIndex = ref(null);
const toggleItem = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
  setTimeout(() => updateFaqBodies(), 300); // Почекати, поки faq-item розкриється
};

const fallingContainer = ref(null);
const faqSectionRef = ref(null);
const canvasRef = ref(null);

let engine, render, runner;
let faqBodies = [];
let observer;

const images = [object1, object2, object3];

onMounted(async () => {
  await nextTick();
  setupMatter();
  observeFaqSize();
});

function getResponsiveHeight() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) return 600;       // мобілки
  if (windowWidth < 1024) return 800;      // планшети
  if (windowWidth < 1280) return 400;      // планшети
  return fallingContainer.value.offsetHeight; // десктоп — повна висота
}


function setupMatter() {
  const container = fallingContainer.value;
  const canvas = canvasRef.value;

  const width = container.offsetWidth;
  const height = getResponsiveHeight();

  engine = Matter.Engine.create();
  const world = engine.world;

  render = Matter.Render.create({
    canvas,
    engine,
    options: {
      width,
      height,
      wireframes: false,
      background: 'transparent',
      pixelRatio: window.devicePixelRatio,
    },
  });

  runner = Matter.Runner.create();
  Matter.Render.run(render);
  Matter.Runner.run(runner, engine);

  const ground = Matter.Bodies.rectangle(width / 2, height + 60, width, 120, {
    isStatic: true,
    render: { visible: false },
  });

  const leftWall = Matter.Bodies.rectangle(-50, height / 2, 100, height, {
    isStatic: true,
    render: { visible: false },
  });

  const rightWall = Matter.Bodies.rectangle(width + 50, height / 2, 100, height, {
    isStatic: true,
    render: { visible: false },
  });

  // Тіла для кожного FAQ item
  faqBodies = createFaqBodies();
  faqBodies.forEach((body) => Matter.World.add(world, body));
  function getFallingScale() {
    const width = window.innerWidth;
    if (width < 768) return 0.18;         // мобільні
    if (width < 1024) return 0.14;        // планшети
    if (width < 1440) return 0.18;        // ноутбуки (трохи більше, ніж для великих екранів)
    return 0.06;                          // великі десктопи (менші об'єкти)
  }

  // Падаючі об'єкти (яйця)
  const fallingScale = getFallingScale();

  const fallingBodies = Array.from({ length: 15 }, () => {
    const radius = 4 + Math.random() * 1.5;
    return Matter.Bodies.circle(
        Math.random() * width,
        Math.random() * -1000,
        radius,
        {
          density: 0.002,
          friction: 0.001,
          frictionAir: 0.001,
          restitution: 0.1,
          render: {
            sprite: {
              texture: images[Math.floor(Math.random() * images.length)],
              xScale: fallingScale,
              yScale: fallingScale,
            },
          },
        }
    );
  });


  // Мишка (drag & throw)
  const mouse = Matter.Mouse.create(canvas);
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  });

  Matter.World.add(world, [
    ground,
    leftWall,
    rightWall,
    ...fallingBodies,
    mouseConstraint,
  ]);

  render.mouse = mouse;
}

function createFaqBodies() {
  const containerRect = fallingContainer.value.getBoundingClientRect();
  const faqItems = faqSectionRef.value.querySelectorAll('.faq-item');

  const bodies = [];

  faqItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const body = Matter.Bodies.rectangle(
        rect.left - containerRect.left + rect.width / 2,
        rect.top - containerRect.top + rect.height / 2,
        rect.width,
        rect.height,
        {
          isStatic: true,
          restitution: 0.1,
          render: {
            fillStyle: 'transparent',
          },
        }
    );
    bodies.push(body);
  });

  return bodies;
}

function updateFaqBodies() {
  const world = engine.world;

  // Видалити старі
  faqBodies.forEach((body) => Matter.World.remove(world, body));

  // Створити нові
  faqBodies = createFaqBodies();
  faqBodies.forEach((body) => Matter.World.add(world, body));

  // Оновити канвас
  const width = fallingContainer.value.offsetWidth;
  const height = fallingContainer.value.offsetHeight;
  render.canvas.width = width;
  render.canvas.height = height;
  render.options.width = width;
  render.options.height = height;
}

function observeFaqSize() {
  observer = new ResizeObserver(() => {
    updateFaqBodies();
  });
  observer.observe(faqSectionRef.value);
}

onBeforeUnmount(() => {
  observer?.disconnect();
  Matter.Render.stop(render);
  Matter.Runner.stop(runner);
  Matter.World.clear(engine.world);
  Matter.Engine.clear(engine);
  render.canvas.remove();
  render.textures = {};
});
</script>


<style scoped>

.faq-wrapper {
  position: relative;
  width: 100%;
  height: 90dvh;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
}

.matter-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.physics-canvas {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 0;
}

h2 {
  font-size: 70px;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 1280px) {
    display: none;
  }
}

.faq-section {
  max-width: 920px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 10% 0 20% 0;
  z-index: 2;
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
  background-color: white;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
}

.faq-item.expanded {
  border-color: var(--orange);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 7px;
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
