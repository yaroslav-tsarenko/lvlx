<template>
  <form @submit.prevent="onSubmit">
    <input v-model="form.company_name" placeholder="Company Name" required/><br/>
    <input v-model="form.tax_identification_number" placeholder="Tax ID" required/><br/>
    <input v-model="form.phone" placeholder="Phone" required/><br/>
    <input v-model="form.telegram" placeholder="Telegram" required/><br/>
    <input v-model="form.email" type="email" placeholder="Email" required/><br/>
    <input v-model="form.password" type="password" placeholder="Password" required/><br/>
    <input v-model="form.password_confirmation" type="password" placeholder="Confirm Password" required/><br/>
    <input v-model="form.skype" placeholder="Skype"/><br/>
    <input v-model="form.traffic_sources" placeholder="Traffic Sources"/><br/>
    <input v-model="form.referral_source" placeholder="Referral Source"/><br/>
    <input v-model="form.nickname" placeholder="Nickname" required/><br/>
    <label>
      <input type="checkbox" v-model="form.terms_accepted" required/> Accept Terms
    </label><br/>
    <button type="submit">Register</button>
  </form>
</template>

<script setup>
import {reactive} from 'vue';

const form = reactive({
  company_name: '',
  tax_identification_number: '',
  phone: '',
  telegram: '',
  email: '',
  password: '',
  password_confirmation: '',
  skype: '',
  traffic_sources: '',
  referral_source: '',
  nickname: '',
  terms_accepted: false
});

const onSubmit = async () => {
  const payload = {
    partner_user: {
      company_name: form.company_name,
      tax_identification_number: form.tax_identification_number,
      phone: form.phone,
      telegram: form.telegram,
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation,
      terms_accepted: form.terms_accepted,
      skype: form.skype,
      traffic_sources: form.traffic_sources,
      referral_source: form.referral_source,
      nickname: form.nickname
    }
  };

  try {
    const response = await fetch("https://getcb.pw/api/affiliate/register", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    console.log("Success:", result);
    window.alert("Form submitted successfully!");

  } catch (error) {
    window.alert("Erorrka!");
    console.error("Error:", error);
  }
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #f60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e55;
}
</style>
