<script setup>
import { ref, watch } from 'vue';
import gsap from 'gsap';

const isVerticalNavVisible = ref(false);

const toggleVerticalNav = () => {
  isVerticalNavVisible.value = !isVerticalNavVisible.value;
};

watch(isVerticalNavVisible, (newValue) => {
  if (newValue) {
    gsap.to('.vertical-nav', { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' });
  } else {
    gsap.to('.vertical-nav', { height: 0, opacity: 0, duration: 0.5, ease: 'power2.in' });
  }
});
</script>

<template>
  <div class="bottom-nav-mobile">
    <div class="fixed-container">
      <button class="burger-button" @click="toggleVerticalNav">🍔</button>
      <div class="horizontal-nav">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
      <button class="register-button">Register</button>
    </div>
    <div class="wrapper">
      <div class="vertical-nav">
        <button>Section 1</button>
        <button>Section 2</button>
        <button>Section 3</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.horizontal-nav {
  display: flex;
  gap: 10px;
}

.horizontal-nav button {
  background: var(--grey);
  color: var(--white);
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.horizontal-nav button:hover {
  background: var(--grey-hover);
}
</style>