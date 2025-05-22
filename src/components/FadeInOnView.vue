<template>
  <div ref="el" class="fade-container" :class="{ visible: isVisible }">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const el = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          // reveal only when at least 40% visible
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: [0, 0.4], // track when element is exactly at 40%
      }
  )

  if (el.value) {
    observer.observe(el.value)
  }
})
</script>

<style scoped>
.fade-container {
  opacity: 0;
  transform: translateY(60px);
  filter: blur(16px);
  transition:
      opacity 1.2s ease,
      transform 1.2s ease,
      filter 1.2s ease;
  will-change: opacity, transform, filter;
}

.fade-container.visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
</style>
