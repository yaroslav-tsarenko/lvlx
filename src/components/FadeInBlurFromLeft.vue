<template>
  <div
      ref="element"
      :class="['fade-in-from-left', { 'visible': isVisible }]">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const element = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
  );

  if (element.value) {
    observer.observe(element.value);
  }
});
</script>

<style scoped>
.fade-in-from-left {
  opacity: 0;
  transform: translateX(-50px);
  filter: blur(8px);
  transition: opacity 1.3s ease, transform 1.3s ease, filter 1.3s ease;
}

.fade-in-from-left.visible {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}
</style>
