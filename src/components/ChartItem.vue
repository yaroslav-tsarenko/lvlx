<script setup>
import {defineProps} from 'vue';

defineProps({
  chart: {
    type: String,
    required: true,
  },
  h4: {
    type: String,
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
});
</script>

<template>
  <div class="chart-item" :class="{ highlighted }">
    <div class="chart-item-header">
      <h4>{{ h4 }}</h4>
      <p>{{ p }}</p>
    </div>
    <img :src="chart" alt="chart" width="160" height="140" class="chart-image"/>
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
}
</style>