<script setup>
import {ref, onMounted, nextTick, defineAsyncComponent, onUnmounted} from 'vue'
import gsap from 'gsap'
import FadeInOnView from "@/components/FadeInOnView.vue";
import logo from './assets/logo/lvlx-logo.svg';
import LenisScriptLoader from "@/components/LenisScriptLoader.vue";
import Header from "@/components/Header.vue";
const Hero = defineAsyncComponent(() => import('@/components/Hero.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
const Benefits = defineAsyncComponent(() => import('@/components/Benefits.vue'))
const Product = defineAsyncComponent(() => import('@/components/Product.vue'))
const Streamers = defineAsyncComponent(() => import('@/components/Streamers.vue'))
const BottomNav = defineAsyncComponent(() => import('@/components/BottomNav.vue'))
const ProductMobile = defineAsyncComponent(() => import('@/components/ProductMobile.vue'))
const StreamersMobile = defineAsyncComponent(() => import('@/components/StreamersMobile.vue'))
const StreamersLaptop = defineAsyncComponent(() => import('@/components/StreamersLaptop.vue'))
const MatterSprites = defineAsyncComponent(() => import('@/components/MatterSprites.vue'))
const Popup = defineAsyncComponent(() => import('@/components/Popup.vue'))

const isPopupVisible = ref(false)
const isLoading = ref(true)
const isVisible = ref(true)
const animatedRefs = ref([])

const handleFormSubmitted = () => {
  isPopupVisible.value = true
}
const closePopup = () => {
  isPopupVisible.value = false
}

const observeAndAnimate = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
        })
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2,
  })

  nextTick(() => {
    animatedRefs.value.forEach((el) => {
      if (el) {
        gsap.set(el, {opacity: 0, y: 50})
        observer.observe(el)
      }
    })
  })
}

onMounted(async () => {
  await Promise.all([
    import('@/components/Hero.vue'),
    import('@/components/Footer.vue'),
    import('@/components/Benefits.vue'),
    import('@/components/Product.vue'),
    import('@/components/Streamers.vue'),
    import('@/components/BottomNav.vue'),
    import('@/components/ProductMobile.vue'),
    import('@/components/StreamersMobile.vue'),
    import('@/components/StreamersLaptop.vue'),
    import('@/components/MatterSprites.vue'),
    import('@/components/Popup.vue'),
  ])

  await nextTick()

  const isMobile = window.innerWidth < 768
  const preloadKey = 'hasSeenPreloader'
  const hasCached = localStorage.getItem(preloadKey) === 'true'

  const finishLoading = () => {
    isVisible.value = false
    setTimeout(() => {
      isLoading.value = false
      localStorage.setItem(preloadKey, 'true')
      observeAndAnimate()
    }, 1500)
  }

  if (isMobile) {
    if (hasCached) {
      isLoading.value = false
      isVisible.value = false
      observeAndAnimate()
    } else {
      setTimeout(finishLoading, 3000)
    }
  } else {
    requestIdleCallback(() => {
      setTimeout(finishLoading, 2000)
    })
  }
})

const showHeader = ref(false);

const handleScroll = () => {
  showHeader.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="isLoading" :class="['preloader', { hide: !isVisible }]">
    <div class="logo-wrapper">
      <img :src="logo" alt="Logo" class="logo-shine" width="150" height="30"/>
      <div class="shine"></div>
    </div>
  </div>

  <div v-else>
    <LenisScriptLoader/>
    <Popup :visible="isPopupVisible" @update:visible="closePopup"/>
    <BottomNav/>
    <transition name="fade-slide-down">
      <div v-if="showHeader" class="fixed-header-wrapper">
        <Header />
      </div>
    </transition>
    <FadeInOnView>
      <Hero @formSubmitted="handleFormSubmitted"/>
    </FadeInOnView>

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

.fade-slide-down-enter-active,
.fade-slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-slide-down-enter-from,
.fade-slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-down-enter-to,
.fade-slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fixed-header-wrapper {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 94%;
  z-index: 1000;
}

.preloader.hide {
  opacity: 0;
  pointer-events: none;
}

.logo-wrapper {
  position: relative;
  display: inline-block;
  animation: logoFadeIn 1.2s ease-out forwards;
  transform: scale(0.8);
  opacity: 0;
}

.shine {
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg);
  animation: shine 2.5s infinite;
}

@keyframes logoFadeIn {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes shine {
  0% {
    left: -75%;
  }
  100% {
    left: 125%;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
