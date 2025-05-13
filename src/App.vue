<script setup>
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import { ref, onMounted } from 'vue';
import { nextTick } from 'vue';
import Benefits from "@/components/Benefits.vue";
import Product from "@/components/Product.vue";
import Streamers from "@/components/Streamers.vue";
import BottomNav from "@/components/BottomNav.vue";
import ProductMobile from "@/components/ProductMobile.vue";
import StreamersMobile from "@/components/StreamersMobile.vue";
import StreamersLaptop from "@/components/StreamersLaptop.vue";
import MatterSprites from "@/components/MatterSprites.vue";
import Popup from "@/components/Popup.vue";

const isPopupVisible = ref(false);
const isLoading = ref(true);
const isVisible = ref(true);

const handleFormSubmitted = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};

onMounted(async () => {
  await nextTick();

  const isMobile = window.innerWidth < 768;
  const preloadKey = 'hasSeenPreloader';
  const hasCached = localStorage.getItem(preloadKey) === 'true';

  if (isMobile) {
    if (hasCached) {
      isLoading.value = false;
      isVisible.value = false;
    } else {
      setTimeout(() => {
        isVisible.value = false;
        setTimeout(() => {
          isLoading.value = false;
          localStorage.setItem(preloadKey, 'true');
        }, 500);
      }, 3000);
    }
  } else {
    requestIdleCallback(() => {
      setTimeout(() => {
        isVisible.value = false;
        setTimeout(() => {
          isLoading.value = false;
          localStorage.setItem(preloadKey, 'true');
        }, 500);
      }, 1000);
    });
  }
});



</script>


<template>
  <div v-if="isLoading" :class="['preloader', { hide: !isVisible }]">
    <div class="spinner"></div>
  </div>

  <div v-else>
    <Popup :visible="isPopupVisible" @update:visible="closePopup" />
    <BottomNav/>
    <Hero @formSubmitted="handleFormSubmitted" />
    <Benefits/>
    <Product/>
    <ProductMobile/>
    <Streamers/>
    <StreamersLaptop/>
    <StreamersMobile/>
    <MatterSprites/>
    <Footer/>
  </div>
</template>


<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 1s ease;
}

.preloader.hide {
  opacity: 0;
  pointer-events: none;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(159, 159, 159, 0.2);
  border-top-color: #f84204;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>
