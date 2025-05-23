<template>
  <p>{{ visibleText }}</p>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const visibleText = ref('');
const observerTarget = ref(null);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      typeText(props.text);
      observer.disconnect();
    }
  }, {
    threshold: 0.5,
  });

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
});

const typeText = (text, speed = 40) => {
  visibleText.value = '';
  let i = 0;
  const interval = setInterval(() => {
    visibleText.value += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
};
</script>

<script>
export default {
  mounted() {
    this.$el.setAttribute('ref', 'observerTarget');
  },
};
</script>

<style scoped>
p {
  color: wh;
  white-space: pre-wrap;
}
</style>
