<template>
  <FadeInFromBottom>
    <div ref="containerRef" id="faq-section" class="matter-container">
      <canvas ref="canvasRef" class="matter-canvas"/>
      <h2 class="faq-title">{{ texts.Faq.title }}</h2>
      <div ref="faqBoxRef" class="faq-box">
        <div
            class="faq-item"
            :class="{ expanded: expandedIndex === index }"
            v-for="(item, index) in faqItems"
            :key="index"
            @click="toggle(index)">
          <div class="faq-question" :class="{ expanded: expandedIndex === index }">
            <img
                class="arrow"
                :class="{ rotated: expandedIndex === index }"
                :src="getArrowSrc(index)"
                alt="Arrow"
            />
            {{ item.question }}
          </div>
          <div
              class="faq-answer"
              :style="expandedIndex === index ? 'height: auto; opacity: 1;' : ''"
              ref="answerRefs[index]">
            <div class="faq-answer-inner">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </FadeInFromBottom>
</template>


<script setup>
import {ref, onMounted, onBeforeUnmount, nextTick} from 'vue';
import Matter from 'matter-js';
import {getTextByLanguage} from '@/config';
import egg1 from '@/assets/images/black.png';
import egg1svg from '@/assets/images/egg-type-1.svg';
import egg2 from '@/assets/images/grey.png';
import egg2svg from '@/assets/images/egg-type-2.svg';
import egg3 from '@/assets/images/red.png';
import egg3svg from '@/assets/images/egg-type-3.svg';
import arrowOrange from '@/assets/icons/arrow-orange.svg';
import arrowBlack from '@/assets/icons/arrow-black.svg';
import FadeInFromBottom from "@/components/FadeInFromBottom.vue";

const texts = getTextByLanguage();
const faqItems = texts.Faq.faqItems;

const expandedIndex = ref(null);
const toggle = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
  setTimeout(() => updateFaqPhysics(), 300);
};
const getArrowSrc = (index) => {
  return expandedIndex.value === index ? arrowOrange : arrowBlack;
};

const containerRef = ref(null);
const canvasRef = ref(null);
const faqBoxRef = ref(null);

let engine, render, runner, mouseConstraint;
let observer;
let faqBody = null;

const screenWidth = window.innerWidth;
const isMobile = screenWidth <= 768;

const images = isMobile
    ? [egg1svg, egg2svg, egg3svg]
    : [egg1, egg2, egg3];

onMounted(async () => {
  await nextTick();
  observeSectionVisibility();
  observeContainerResize();
});

function observeSectionVisibility() {
  const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setupMatter();
          observerInstance.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      }
  );

  if (containerRef.value) {
    observer.observe(containerRef.value);
  }
}

function setupMatter() {
  const container = containerRef.value;
  const canvas = canvasRef.value;
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  engine = Matter.Engine.create();
  render = Matter.Render.create({
    canvas,
    engine,
    options: {
      width,
      height,
      wireframes: false,
      background: 'transparent',
    },
  });

  runner = Matter.Runner.create();
  Matter.Render.run(render);
  Matter.Runner.run(runner, engine);

  const world = engine.world;

  const ground = Matter.Bodies.rectangle(width / 2, height + 60, width, 100, {
    isStatic: true,
    render: {visible: false},
  });

  const leftWall = Matter.Bodies.rectangle(-50, height / 2, 100, height, {
    isStatic: true,
    render: {visible: false},
  });

  const rightWall = Matter.Bodies.rectangle(width + 50, height / 2, 100, height, {
    isStatic: true,
    render: {visible: false},
  });

  createFaqPhysicsBody();

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 768;
  const isLaptop = screenWidth >= 1280 && screenWidth < 1600;

  const fallingEggs = Array.from({ length: isMobile ? 35 : 20 }, () => {
    const radius = isMobile
        ? 25 + Math.random() * 2
        : isLaptop
            ? 43 + Math.random() * 22
            : 60 + Math.random() * 10;

    const xScale = isMobile
        ? 0.5
        : isLaptop
            ? 0.4
            : 0.5;

    const isLeft = Math.random() < 0.5;

    const x = isLeft
        ? Math.random() * (width * 0.25)
        : width * 0.75 + Math.random() * (width * 0.25);

    const y = isMobile ? height + Math.random() * 200 : Math.random() * -800;

    const egg = Matter.Bodies.circle(x, y, radius, {
      restitution: isMobile ? 0.002 : 0.1,
      frictionAir: 0.002,
      density: 0.002,
      render: {
        sprite: {
          texture: images[Math.floor(Math.random() * images.length)],
          xScale: xScale,
          yScale: xScale,
        },
      },
    });

    if (isMobile) {
      Matter.Body.setVelocity(egg, {
        x: 0,
        y: -3 - Math.random() * 2,
      });
    }

    return egg;
  });

  const mouse = Matter.Mouse.create(canvas);
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {visible: false},
    },
  });

  Matter.World.add(world, [
    ground,
    leftWall,
    rightWall,
    faqBody,
    ...fallingEggs,
    mouseConstraint,
  ]);

  render.mouse = mouse;
}

function createFaqPhysicsBody() {
  const containerRect = containerRef.value.getBoundingClientRect();
  const faqRect = faqBoxRef.value.getBoundingClientRect();

  faqBody = Matter.Bodies.rectangle(
      faqRect.left - containerRect.left + faqRect.width / 2,
      faqRect.top - containerRect.top + faqRect.height / 2,
      faqRect.width,
      faqRect.height,
      {
        isStatic: true,
        restitution: 0.4,
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'rgba(255,255,255,0)',
        },
      }
  );
}

function updateFaqPhysics() {
  if (!engine || !faqBody) return;
  Matter.World.remove(engine.world, faqBody);
  createFaqPhysicsBody();
  Matter.World.add(engine.world, faqBody);
}

function observeContainerResize() {
  observer = new ResizeObserver(() => {
    const width = containerRef.value.offsetWidth;
    const height = containerRef.value.offsetHeight;
    render.canvas.width = width;
    render.canvas.height = height;
    render.options.width = width;
    render.options.height = height;
    updateFaqPhysics();
  });
  observer.observe(containerRef.value);
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
.matter-container {
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 10%;

  @media screen and (max-width: 768px) {
    padding-block: 20%;
  }
}

.matter-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.faq-box {
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: none;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  z-index: 0;
}

.faq-title {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 1281px) {
    position: absolute;
    left: 5%;
    top: 15%;
    font-weight: normal;
    font-size: 70px;
  }

  @media screen and (max-width: 1280px) {
    position: relative;
    display: flex;
    font-weight: normal;
    font-size: 40px;
  }
}

.faq-item {
  border: 1px solid var(--line-color);
  border-radius: 25px;
  padding: 35px;
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 19px;
  }
}

.faq-item:hover {
  border-color: var(--orange);
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
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

.arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  height: 0;
  opacity: 0;
  transition: all 0.35s ease;
  overflow: hidden;
  font-size: 18px;
  padding-left: 32px;
}

.faq-item.expanded .faq-answer {
  height: auto;
  opacity: 1;
}

.faq-answer-inner {
  padding-top: 15px;
}

</style>
