<script setup>
import { defineProps, ref, watch, onMounted } from 'vue';

const animatedNumber = ref(0);

onMounted(() => {
  const duration = 6000; // ms
  const start = performance.now();
  const endValue = props.h4;

  const animate = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    animatedNumber.value = Math.floor(progress * endValue);
    if (progress < 1) requestAnimationFrame(animate);
    else animatedNumber.value = endValue;
  };

  requestAnimationFrame(animate);
});

const props = defineProps({
  chart: {
    type: String,
    required: true,
  },
  h4: {
    type: Number,
    required: true,
  },
  p: {
    type: String,
    required: true,
  },
  highlighted: {
    type: Boolean,
    default: false,
  },
  maxHeight: {
    type: String,
    default: null,
  },
});

const animatedValue = ref(0);

const animateCount = (target, duration = 6000) => {
  const start = 0;
  const end = parseInt(target, 10);
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    animatedValue.value = Math.floor(start + (end - start) * progress);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

watch(() => props.h4, (newVal) => {
  animateCount(newVal);
});

onMounted(() => {
  animateCount(props.h4);
});
</script>


<template>
  <div class="chart-item" :class="{ highlighted }" :style="{ maxHeight: maxHeight || 'none' }">
    <div class="chart-item-header">
      <h4>
        {{ p === 'доход' ? '$' : '' }}{{ animatedValue }}
      </h4>
      <p>{{ p }}</p>
    </div>
    <video
        :src="chart"
        class="chart-image"
        width="160"
        height="140"
        autoplay
        loop
        muted
        playsinline
    ></video>
  </div>
</template>


<style scoped>

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chart-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  font-size: 18px;
  position: relative;
  padding: 20px;
  height: 100%;
  justify-content: flex-end;
  font-weight: 400;
  border-radius: 20px;
  border: 1px solid rgba(103, 103, 103, 0.21);
  color: var(--white);
  background: transparent;
  transition: background 0.3s ease;
  animation: fade-in 0.5s ease-in-out;

  @media screen and (max-width: 1460px) {
    padding: 9px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 9px;
    width: 100%;
  }

  @media screen and (max-width: 476px) {
    width: 100%;
  }
}

.chart-item.highlighted {
  background: var(--white);
  color: var(--black);
}

.chart-item-header {
  display: flex;
  top: 0;
  flex-direction: column;
  position: absolute;

  h4 {
    font-size: 34px;
    padding: 0;
    margin: 0;
    font-weight: 600;
    animation: fade-in 0.5s ease-in-out;
    color: inherit;

    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: inherit;
    padding: 0;
    animation: fade-in 0.5s ease-in-out;
    margin: 0;
  }
}

.chart-image {
  display: flex;
  max-width: 160px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 1440px) {
    max-width: 320px;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>