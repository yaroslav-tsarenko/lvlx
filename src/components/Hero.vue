<script setup>
import {onMounted, ref} from 'vue';
import {gsap} from 'gsap';
import bgVideo from '../assets/videos/girl.mp4';
import bgVideoMobile from '../assets/videos/girl mobile.mp4';
import Header from "@/components/Header.vue";
import {defineRule, configure} from "vee-validate";
import {required, email, min, confirmed, regex} from "@vee-validate/rules";
import axios from "axios";
import Form from "@/components/Form.vue";
import Popup from "@/components/Popup.vue";
import {getTextByLanguage} from "@/config.js";

const texts = getTextByLanguage();

const formData = ref({
  companyName: '',
  email: '',
  telegram: '',
});

const onSubmit = async () => {
  try {
    console.log('Submitting form data:', formData.value);
    const response = await axios.post('http://localhost:8080/request/submit-form-lvlx', formData.value, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert(response.data.message || 'Form submitted successfully!');
    console.log('Server Response:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error.response?.data || error.message);
    alert('Failed to submit the form. Please try again.');
  }
};

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("confirmed", confirmed);
defineRule("phone", regex);

const revShareDesc = texts.Images.revShare;
const cpaDesc = texts.Images.cpa;
const revShareMobDesc = texts.Images.revShareMob;
const cpaMobDesc = texts.Images.cpaMob;

const videoSrc = ref(bgVideo);

onMounted(() => {
  const updateVideoSource = () => {
    videoSrc.value = window.innerWidth <= 768 ? bgVideoMobile : bgVideo;
  };

  updateVideoSource();
  window.addEventListener('resize', updateVideoSource);
  return () => {
    window.removeEventListener('resize', updateVideoSource);
  };
});

configure({
  generateMessage: (ctx) => {
    const messages = {
      required: `Поле обязательно для заполнения.`,
      email: "Поле обязательно для заполнения.",
      min: `Поле обязательно для заполнения.`,
      phone: "Поле обязательно для заполнения.",
    };
    return messages[ctx.rule.name] || `The field ${ctx.field} is invalid.`;
  },
});
const leftSideRef = ref(null);
const rightSideRef = ref(null);
const videoRef = ref(null);

onMounted(() => {
  gsap.fromTo(
      videoRef.value,
      {scale: 1.5, filter: "blur(20px)"},
      {scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out"}
  );
});

onMounted(() => {
  gsap.from(leftSideRef.value, {
    x: '-100%',
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
  });

  gsap.from(rightSideRef.value, {
    x: '100%',
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
  });
});

const isPopupVisible = ref(false);

const handleFormSubmitted = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};

</script>

<template>
  <Popup :visible="isPopupVisible" @update:visible="closePopup"/>

  <div class="hero" id="home-section">
    <Header/>
    <video
        ref="videoRef"
        class="bg-video"
        :src="videoSrc"
        autoplay
        loop
        muted
        playsinline
    >
    </video>
    <div class="hero-content">
      <div class="left-side" ref="leftSideRef">
        <div class="main-title">
          <h1>{{ texts.Hero.title }}</h1>
          <h2>{{ texts.Hero.title }}</h2>
          <p>{{ texts.Hero.subtitle }}</p>
        </div>
        <div class="left-side-images">
          <img :src="revShareDesc" alt="rev share" width="320" height="160"/>
          <img :src="cpaDesc" alt="cpa share" width="320" height="160"/>
        </div>
        <div class="left-side-images-mob">
          <img :src="revShareMobDesc" alt="rev share" width="150" height="60"/>
          <img :src="cpaMobDesc" alt="cpa share" width="150" height="60"/>
        </div>
      </div>
      <div class="right-side" ref="rightSideRef">
        <Form @formSubmitted="handleFormSubmitted"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.hero {
  position: relative;
  width: 100%;
  height: 98dvh;
  max-height: 1080px;
  max-width: 1840px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 1440px) {
    padding: 20px;
    gap: 50px;
    height: fit-content;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    gap: 10px;
  }
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transform: scale(1.5);

  @media screen and (max-width: 768px) {
    transform: scale(0.7);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  height: 90%;
  justify-content: space-between;
  color: white;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
}

.left-side {
  display: flex;
  height: 100%;
  width: fit-content;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 1440px) {
    gap: 50px;
    height: 100%;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 0 0 0;
  }
}

.main-title {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  text-align: left;
  max-width: 350px;

  @media screen and (max-width: 768px) {
    padding: 0 0 120% 0;
  }

  h2 {
    display: none;

    @media screen and (max-width: 476px) {
      display: flex;
      font-size: 37px;
      font-weight: 500;
      align-items: center;
      justify-content: center;
      justify-items: center;
      text-align: center;
      margin: 0 auto;
      color: var(--black);
    }
  }

  h1 {
    font-size: 90px;
    font-weight: 500;
    color: var(--black);
    line-height: 94%;

    @media screen and (max-width: 1440px) {
      font-size: 80px;
      display: flex;
      font-weight: 500;
      text-align: left;
    }

    @media screen and (max-width: 476px) {
      font-size: 40px;
      font-weight: 500;
      text-align: center;
      display: none;
    }
  }

  p {
    font-size: 24px;
    font-weight: 400;
    max-width: 340px;
    color: var(--black);
    line-height: 130%;
  }

  @media screen and (max-width: 768px) {
    align-content: center;
    text-align: center;
    justify-content: center;
  }
}

.left-side-images-mob {
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 10px;
    padding: 0 0 12% 0;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
}

.left-side-images {
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    @media screen and (max-width: 1440px) {
      gap: 10px;
      width: 100%;
      max-width: 250px;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
    gap: 10px;
    width: 100%;
  }
}

.form {
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  border-radius: 20px;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--white);

  h2 {
    font-size: 40px;
    font-weight: 500;
    color: var(--black);
    margin-bottom: 20px;
  }
}


.right-side {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1028px) {
    display: none;
  }
}

.error {
  color: var(--orange);
  font-size: 12px;
  margin-left: 5px;
}

.input-field {
  border: 1px solid var(--line-color);
  border-radius: 14px;
  padding: 15px 20px;
  width: 100%;
  outline: none;
  color: var(--black);
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.input-field:hover {
  border: 1px solid var(--orange);
}

.register-button {
  background-color: var(--orange);
  border-radius: 16px;
  padding: 18px;
  color: var(--white);
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.flex-container {
  display: flex;
  gap: 5px;
  width: 100%;
}


</style>