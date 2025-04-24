<script setup>
import { ref } from 'vue';
import PhoneInput from "@/components/PhoneInput.vue";
import tgIcon from "@/assets/icons/telegram-icon.svg";
import axios from "axios";
import { getTextByLanguage } from "@/config.js";

const texts = getTextByLanguage();

const formData = ref({
  companyName: '',
  email: '',
  telegram: '',
  phone: '',
  password: '',
  repeatPassword: '',
  terms: false,
});

const emit = defineEmits(['formSubmitted']);

const onSubmit = async () => {
  if (formData.value.password !== formData.value.repeatPassword) {
    alert('Пароли не совпадают!');
    return;
  }

  if (!formData.value.terms) {
    alert('Вы должны согласиться с условиями!');
    return;
  }

  try {
    console.log('Submitting:', formData.value);
    const response = await axios.post('http://localhost:8080/request/submit-form-lvlx', formData.value, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response.data.message || 'Form submitted successfully!');
    emit('formSubmitted');
  } catch (error) {
    console.error('Error submitting form:', error.response?.data || error.message);
    alert('Failed to submit form.');
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="form">
    <h1>{{ texts.Form.title }}</h1>
    <div class="form-group">
      <input
          id="companyName"
          v-model="formData.companyName"
          type="text"
          class="input-field"
          placeholder="Enter company name"
          required
      />
    </div>
    <div class="form-group">
      <input
          id="email"
          v-model="formData.email"
          type="email"
          class="input-field"
          placeholder="Enter email"
          required
      />
    </div>
    <PhoneInput
        v-model="formData.phone"
        id="phone"
        name="phone"
        required
    />
    <div class="form-group">
      <div class="custom-input">
        <img :src="tgIcon" alt="Telegram Icon" width="22" height="22"/>
        <hr class="v-line"/>
        <input
            id="telegram"
            v-model="formData.telegram"
            type="text"
            placeholder="@username"
            required
        />
      </div>
    </div>
    <div class="flex-container">
      <div class="form-group">
        <input
            id="password"
            v-model="formData.password"
            type="password"
            class="input-field"
            placeholder="Пароль"
            required
        />
      </div>
      <div class="form-group">
        <input
            id="repeatPassword"
            v-model="formData.repeatPassword"
            type="password"
            class="input-field"
            placeholder="Ещё раз"
            required
        />
      </div>
    </div>
    <div class="checkbox-field">
      <input type="checkbox" id="terms" v-model="formData.terms"/>
      <p>
        {{ texts.Form.agreementServices }}
        <a href="#"> {{ texts.Form.rulesAgreement }}</a>
      </p>
    </div>

    <button type="submit">Зарегистрироваться</button>
  </form>
</template>


<style scoped>

.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.flex-container {
  display: flex;
  gap: 10px;
}

.input-field {
  border: 1px solid var(--line-color);
  border-radius: 14px;
  padding: 17px 20px;
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

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;

  h1 {
    margin-bottom: 25px;
    font-weight: 500;
    color: var(--black);
  }
}

.form-group {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.popup-block{
  display: flex;
  position: absolute;
}

button {
  background-color: var(--orange);
  color: white;
  border: none;
  width: 100%;
  font-size: 18px;
  padding: 20px 40px;
  border-radius: 15px;
  cursor: pointer;
}

button:hover {
  background-color: var(--orange-hover);
}

.custom-input {
  display: flex;
  width: 100%;
  gap: 10px;
  border-radius: 16px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line-color);
  transition: 0.2s ease-in-out;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    padding-left: 10px;
  }

  hr {
    outline: none;
    height: 25px;
    border: 1px solid var(--line-color);
  }
}

.checkbox-field {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  justify-items: start;
  margin-top: 10px;

  p {
    font-size: 16px;
    color: var(--black);
    text-align: left;

    a {
      color: var(--orange);
      text-decoration: none;
    }
  }
}

.custom-input:hover {
  border: 1px solid var(--orange);
}


</style>