<script setup>
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import {ref} from 'vue';
import eggsGif from '../assets/gifs/eggs.gif';
import chartGif from '../assets/gifs/graph.gif';
import rocketGif from '../assets/gifs/rocket.gif';
import eggsStatic from '../assets/images/eggs-static.svg';
import chartStatic from '../assets/images/charts-static.svg';
import rocketStatic from '../assets/images/rocket-static.svg';
import lines from '../assets/images/lines.gif';
import arrows from '../assets/images/three-arrows.svg';
import {getTextByLanguage} from "@/config";

const texts = getTextByLanguage();
const referralIcon = texts.Images.referral;
onMounted(() => {
  gsap.from('.benefits-wrapper', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
  });
});

const products = ref([
  {
    title: 'productCardTitleFirst',
    description: 'productCardDescriptionFirst',
    static: eggsStatic,
    gif: eggsGif,
    current: eggsStatic,
  },
  {
    title: 'productCardTitleSecond',
    description: 'productCardDescriptionSecond',
    static: chartStatic,
    gif: chartGif,
    current: chartStatic,
  },
  {
    title: 'productCardTitleThird',
    description: 'productCardDescriptionThird',
    static: rocketStatic,
    gif: rocketGif,
    current: rocketStatic,
  },
]);

const playGif = (index) => {
  products.value[index].current = products.value[index].gif;
};

const stopGif = (index) => {
  products.value[index].current = products.value[index].static;
};
</script>

<template>
  <div class="benefits" id="benefits-section">
    <img :src="referralIcon" alt="referral-icon" width="350" height="80" class="referral-icon">
    <div class="benefits-wrapper">
      <img :src="lines" alt="rocket" width="1920" height="600" class="lines-gif"/>
      <img :src="arrows" alt="arrows" width="80" height="232" class="three-arrows"/>
      <h2>{{ texts.Benefits.title }}</h2>
      <div class="unions">
        <div class="union-item">
          {{ texts.Benefits.benefitFirst }}
        </div>
        <div class="union-item">
          {{ texts.Benefits.benefitSecond }}
        </div>
        <div class="union-item">
          {{ texts.Benefits.benefitThird }}
        </div>
        <div class="union-item">
          {{ texts.Benefits.benefitFourth }}
        </div>
      </div>
      <div class="products">
        <div
            class="product-item"
            v-for="(product, index) in products"
            :key="index"
        >
          <div class="product-item-description">
            <h3>{{ texts.Benefits[product.title] }}</h3>
            <p>{{ texts.Benefits[product.description] }}</p>
          </div>
          <img
              :src="product.current"
              alt="product"
              width="200"
              height="200"
              class="gif"
              @mouseover="playGif(index)"
              @mouseleave="stopGif(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.benefits {
  display: flex;
  max-width: 1840px;
  margin: 0 auto;
  position: relative;
}

.three-arrows {
  display: flex;
  position: absolute;
  bottom: 22%;
  left: 7px;
  width: 50px;
  height: auto;

  @media screen and (max-width: 1920px) {
    bottom: 22%;
    left: 2%;
    width: 80px;
  }

  @media screen and (max-width: 1300px) {
    bottom: 22%;
    left: 7px;
    width: 50px;
  }

  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.lines-gif {
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  z-index: -1;

  @media screen and (max-width: 1028px) {
    height: 50%;
    width: auto;
  }
}

.benefits-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 30px;
  height: fit-content;
  padding: 140px 0;
  background: var(--orange);
  overflow: hidden;
  --r: 50px; /* the radius */
  --s: 40px; /* size of inner curve */
  --x: 270px; /* horizontal offset (no percentage) */
  --y: 10px; /* vertical offset (no percentage) */
  --_m: / calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000 72%);
  --_g: conic-gradient(from 180deg at var(--r) calc(100% - var(--r)), #0000 25%, #000 0);
  --_d:(var(--s) + var(--r));
  mask: calc(var(--_d) + var(--x)) 100% var(--_m),
  0 calc(100% - var(--_d) - var(--y)) var(--_m),
  radial-gradient(var(--s) at 0 100%, #0000 99%, #000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(-1 * var(--r) - var(--y)),
  var(--_g) calc(var(--_d) + var(--x)) 0,
  var(--_g) 0 calc(-1 * var(--_d) - var(--y));
  mask-repeat: no-repeat;

  @media screen and (max-width: 1440px) {
    background-size: cover;
    padding: 2% 0 10% 0;
    width: 98%;
    margin: 0 auto;
    border-radius: 30px;
    gap: 30px;
  }

  @media screen and (max-width: 1028px) {
    padding: 15% 0;
    background-size: cover;
    gap: 10px;
    border-radius: 0;
    --r: 20px;
  }

  @media screen and (max-width: 490px) {
    display: flex;
    align-items: center;
    padding: 5% 0 19% 0;
    width: 100%;
    justify-content: center;
    text-align: center;
  }


  @media screen and (max-width: 390px) {
    display: flex;
    align-items: center;
    padding: 5% 0 22% 0;
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  h2 {
    color: white;
    font-size: 70px;
    font-weight: 500;

    @media screen and (max-width: 1028px) {
      font-size: 40px;
    }

    @media screen and (max-width: 476px) {
      font-size: 50px;
      flex-direction: column;
      line-height: 120%;
      margin: 15px 0;
    }
  }
}

.referral-icon {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 270px;
    height: auto;
    left: 3%;
    bottom: 0;
  }

  @media screen and (max-width: 476px) {
    width: 100%;
    max-width: 270px;
    height: auto;
    left: 3%;
    bottom: 0;
  }
}

.unions {
  display: flex;
  margin: 0 auto;
  gap: 10px;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1330px;

  @media screen and (max-width: 1440px) {
    display: flex;
    max-width: 1200px;
    width: 81%;
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap: 5px;
  }

  @media screen and (max-width: 1300px) {
    display: flex;
    max-width: 1200px;
    width: 90%;
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 1028px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    width: fit-content;
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
    width: fit-content;
    justify-content: center;
    gap: 20px;
  }
}

.union-item {
  display: flex;
  max-width: 356px;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 120px;
  background: url("../assets/icons/orange-union.svg") no-repeat center;
  background-size: contain;

  @media screen and (max-width: 1440px) {
    width: 320px;
    padding: 0 0 0 6%;
    height: 60px;
    align-content: flex-start;
    text-align: left;
    justify-content: flex-start;
  }

  @media screen and (max-width: 1028px) {
    width: 350px;
    height: 60px;
    align-content: flex-start;
    text-align: left;
    justify-content: flex-start;
    padding: 0 0 0 28%;
    align-items: center;
  }
}

.products {
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1028px) {
    width: 100%;
    overflow: auto;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: auto;
    height: 100%;
    padding: 0 40px;
  }

  @media screen and (max-width: 490px) {
    width: 100%;
    overflow: auto;
    height: 100%;
    padding: 0 20px;
  }

  @media screen and (max-width: 390px) {
    width: 100%;
    overflow: auto;
    height: 100%;
    padding: 0 5px;
  }
}

.product-item {
  display: flex;
  flex-direction: column;
  height: 580px;
  width: 430px;
  position: relative;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  --r: 20px; /* the radius */
  --s: 30px; /* size of inner curve */
  --x: 20px; /* horizontal offset (no percentage) */
  --y: 10px; /* vertical offset (no percentage) */
  aspect-ratio: 1;
  border-radius: var(--r);
  --_m: / calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000 72%);
  --_g: conic-gradient(at calc(100% - var(--r)) var(--r), #0000 25%, #000 0);
  --_d:(var(--s) + var(--r));
  mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m),
  100% calc(var(--_d) + var(--y)) var(--_m),
  radial-gradient(var(--s) at 100% 0, #0000 99%, #000 calc(100% + 1px)) calc(-1 * var(--r) - var(--x)) calc(var(--r) + var(--y)),
  var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
  var(--_g) 0 calc(var(--_d) + var(--y));
  mask-repeat: no-repeat;

  @media screen and (max-width: 1440px) {
    height: 480px;
    width: 370px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    width: 340px;
  }

  @media screen and (max-width: 390px) {
    padding: 40px 15px;
    width: 320px;
  }
}

.product-item-description {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--white);
  z-index: 99;
  margin: 0 0 auto 0;

  h3 {
    font-size: 40px;
    font-weight: 400;
    max-width: 250px;
    line-height: 95%;

    @media screen and (max-width: 390px) {
      font-size: 35px;
      font-weight: 400;
      text-align: left;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;

    @media screen and (max-width: 390px) {
      text-align: left;
    }
  }
}

.gif {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;

  @media screen and (max-width: 1440px) {
    width: 75%;
  }
}

</style>