<script setup>
import {onMounted, ref} from 'vue';
import {gsap} from 'gsap';
import bgVideo from '../assets/videos/girl.mp4';
import revShare from '../assets/images/rev-share-desktop.svg';
import tgIcon from '../assets/icons/telegram-icon.svg';
import cpaShare from '../assets/images/cpa-desktop.svg';
import Header from "@/components/Header.vue";
import BottomNav from "@/components/BottomNav.vue";
import {defineRule, Form, Field, ErrorMessage, configure} from "vee-validate";
import {required, email, min, confirmed, regex} from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("confirmed", confirmed);
defineRule("phone", regex);

configure({
  generateMessage: (ctx) => {
    const messages = {
      required: `Поле обязательно для заполнения.`,
      email: "Поле обязательно для заполнения.",
      min: `Поле обязательно для заполнения.`,
      confirmed: "Поле обязательно для заполнения.",
      phone: "Поле обязательно для заполнения.",
    };
    return messages[ctx.rule.name] || `The field ${ctx.field} is invalid.`;
  },
});

const videoRef = ref(null);

onMounted(() => {
  gsap.fromTo(
      videoRef.value,
      {scale: 1.5, filter: "blur(20px)"},
      {scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out"}
  );
});
</script>

<template>
  <div class="hero">
    <Header/>
    <video
        ref="videoRef"
        class="bg-video"
        :src="bgVideo"
        autoplay
        loop
        muted
        playsinline></video>
    <div class="hero-content">
      <div class="left-side">
        <div class="main-title">
          <h1>Монетизируй свой трафик</h1>
          <p>С прямым рекламодателем iGaming продуктов</p>
        </div>
        <div class="left-side-images">
          <img :src="revShare" alt="rev share" width="320" height="160"/>
          <img :src="cpaShare" alt="cpa share" width="320" height="160"/>
        </div>
      </div>
      <div class="middle-side">
        <BottomNav/>
      </div>
      <div class="right-side">
        <Form @submit="onSubmit" class="form">
          <h2>Присоединяйся</h2>
          <div class="form-group">
            <Field id="companyName" name="Company Name" type="text" class="input-field" rules="required"
                   placeholder="Название компании"/>
            <ErrorMessage name="Company Name" class="error"/>
          </div>
          <div class="form-group">
            <Field id="email" name="Email" type="email" rules="required|email" placeholder="Email" class="input-field"/>
            <ErrorMessage name="Email" class="error"/>
          </div>
          <div class="custom-input">
            <img :src="tgIcon" alt="Telegram Icon" width="22" height="22"/>
            <hr class="v-line"/>
            <input type="text" placeholder="@username">
          </div>
          <div class="flex-container">
            <div class="form-group">
              <Field
                  id="password"
                  placeholder="Пароль"
                  class="input-field"
                  name="Password"
                  type="password"
                  rules="required|min:6"
              />
              <ErrorMessage name="Password" class="error"/>
            </div>

            <div class="form-group">
              <Field
                  class="input-field"
                  id="repeatPassword"
                  name="Repeat Password"
                  type="password"
                  placeholder="Ещё раз"
                  rules="required|confirmed:@password"
              />
              <ErrorMessage name="Repeat Password" class="error"/>
            </div>
          </div>
          <div class="checkbox-field">
            <Field type="checkbox" name="Terms" rules="required"/>
            <p>
              Я принимаю
              <a href="#">правила и условия</a>
            </p>
          </div>
          <button type="submit" class="register-button">Зарегистрироваться</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>

.hero {
  position: relative;
  width: 100%;
  height: 98dvh;
  overflow: hidden;
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
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  height: 90%;
  justify-content: space-between;
  color: white;
  text-align: center;
}

.left-side {
  display: flex;
  height: 100%;
  width: fit-content;
  justify-content: space-between;
  flex-direction: column;
}

.main-title {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  text-align: left;
  max-width: 650px;

  h1 {
    font-size: 90px;
    font-weight: 400;
    color: var(--black);
    line-height: 94%;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    max-width: 340px;
    color: var(--black);
    line-height: 130%;
  }
}

.left-side-images {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.middle-side {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
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

.form-group {
  width: 100%;
  display: flex;
  align-content: flex-start;
  justify-items: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.right-side {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
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

.checkbox-field{
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  justify-items: start;
  margin-top: 10px;

  p{
    font-size: 16px;
    color: var(--black);
    text-align: left;

    a{
      color: var(--orange);
      text-decoration: none;
    }
  }
}

.custom-input{
  display: flex;
  width: 100%;
  gap: 10px;
  border-radius: 16px;
  padding: 12px;
  border: 1px solid var(--line-color);
  transition: 0.2s ease-in-out;

  input{
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    padding-left: 10px;
  }

  hr{
    outline: none;
    border: 1px solid var(--line-color);
  }
}

.custom-input:hover{
  border: 1px solid var(--orange);
}

</style>