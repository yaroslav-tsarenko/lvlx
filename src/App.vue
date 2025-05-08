<script setup>
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import { ref } from 'vue';
import Benefits from "@/components/Benefits.vue";
import Product from "@/components/Product.vue";
import Streamers from "@/components/Streamers.vue";
import BottomNav from "@/components/BottomNav.vue";
import ProductMobile from "@/components/ProductMobile.vue";
import StreamersMobile from "@/components/StreamersMobile.vue";
import FadeInOnScroll from "@/components/FadeInOnScroll.vue";
import StreamersLaptop from "@/components/StreamersLaptop.vue";
import MatterSprites from "@/components/MatterSprites.vue";
import Popup from "@/components/Popup.vue";
const isPopupVisible = ref(false);

const handleFormSubmitted = () => {
  isPopupVisible.value = true; // ✅ Тепер це тут
};

const closePopup = () => {
  isPopupVisible.value = false;
};
</script>
<template>
  <Popup :visible="isPopupVisible" @update:visible="closePopup" />
  <BottomNav/>
  <FadeInOnScroll>
    <Hero @formSubmitted="handleFormSubmitted" />
  </FadeInOnScroll>
  <FadeInOnScroll>
    <Benefits/>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <Product/>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <ProductMobile/>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <Streamers/>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <StreamersLaptop/>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <StreamersMobile/>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <MatterSprites/>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <Footer/>
  </FadeInOnScroll>
</template>
<style scoped>

</style>
