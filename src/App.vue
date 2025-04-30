<script setup>
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import FAQ from "@/components/FAQ.vue";
import Benefits from "@/components/Benefits.vue";
import Product from "@/components/Product.vue";
import Streamers from "@/components/Streamers.vue";
import BottomNav from "@/components/BottomNav.vue";
import ProductMobile from "@/components/ProductMobile.vue";
import StreamersMobile from "@/components/StreamersMobile.vue";
import FadeInOnScroll from "@/components/FadeInOnScroll.vue";
import StreamersLaptop from "@/components/StreamersLaptop.vue";
import MatterSprites from "@/components/MatterSprites.vue";

</script>
<template>
  <BottomNav/>
  <FadeInOnScroll>
    <Hero/>
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
