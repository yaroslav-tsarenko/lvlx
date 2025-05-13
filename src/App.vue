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

const handleFormSubmitted = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};

onMounted(async () => {
  await nextTick();
  requestIdleCallback(() => {
    isLoading.value = false;
  });
});


</script>


<template>
  <div v-if="isLoading" class="preloader">
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
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(0, 255, 163, 0.2);
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
