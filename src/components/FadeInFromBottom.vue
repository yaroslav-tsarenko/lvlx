<template>
  <div ref="el" class="fade-in-from-bottom" :class="{ visible: isVisible }">
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
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: [0, 0.4],
      }
  )

  if (el.value) {
    observer.observe(el.value)
  }
})
</script>

<style scoped>
.fade-in-from-bottom {
  opacity: 0;
  transform: translateY(80px);
  transition: opacity 1.2s ease, transform 1.2s ease;
  will-change: opacity, transform;
}

.fade-in-from-bottom.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
