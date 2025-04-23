<script setup>
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';
import {getTextByLanguage} from "@/config.js";
const texts = getTextByLanguage();
const phoneNumber = ref('');
const countries = ref([]);
const searchQuery = ref('');
const selectedCountry = ref({
  name: 'Poland',
  flag: 'https://flagcdn.com/w320/pl.png',
  code: '+48',
});

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    countries.value = response.data.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
      code: country.idd.root ? `${country.idd.root}${country.idd.suffixes?.[0] || ''}` : '',
    }));
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

// Filter countries based on search query
const filteredCountries = computed(() =>
    countries.value.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);

// Fetch countries on component mount
onMounted(fetchCountries);

// Toggle dropdown visibility
const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Select a country from the dropdown
const selectCountry = (country) => {
  selectedCountry.value = country;
  isDropdownOpen.value = false;
};
</script>

<template>
  <div class="phone-outer">
    <div class="phone-wrapper">
      <button @click="toggleDropdown">
        <img :src="selectedCountry.flag" alt="Flag" width="22" height="22" class="country-flag"/>
        {{ selectedCountry.code }}
      </button>
      <hr/>
      <input
          type="text"
          :placeholder="texts.Form.phonePlaceholder"
          v-model="phoneNumber"
          @input="phoneNumber = phoneNumber.replace(/[^0-9]/g, '')"
      />
    </div>
    <div v-if="isDropdownOpen" class="dropdown">
      <input
          type="text"
          v-model="searchQuery"
          :placeholder="texts.Form.searchBarPlaceholder"
          class="search-bar"
      />
      <ul class="country-list">
        <li
            v-for="country in filteredCountries"
            :key="country.name"
            @click="selectCountry(country)"
            class="country-item">
          <span>
          <img :src="country.flag" alt="Flag" width="20" height="15" class="country-flag"/>
            {{ country.name }}</span>
          <span>{{ country.code }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.phone-outer {
  position: relative;
  width: 100%;
}

.country-flag {
  width: 22px;
  height: 22px;
  display: flex;
  box-shadow: 0 0 1px 1px rgba(128, 128, 128, 0.34);
  border-radius: 55px;
  object-fit: cover;
  object-position: center;
}

.phone-wrapper {
  border: 1px solid var(--line-color);
  border-radius: 14px;
  padding: 14px 20px;
  width: 100%;
  outline: none;
  display: flex;
  gap: 20px;
  color: var(--black);
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: relative;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    align-content: center;
    justify-content: center;
    font-weight: 500;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;
    color: var(--black);
  }
}

.phone-wrapper hr {
  border: 1px solid var(--line-color);
}

.phone-wrapper:hover {
  border: 1px solid var(--orange);
}

.phone-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  color: var(--black);
  max-height: 300px;
  overflow-y: auto;
  background: var(--white);
  border: 1px solid var(--line-color);
  border-radius: 10px;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-bar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 111;
  padding: 10px 10px 10px 20px;
  outline: none;
  border-radius: 20px;
  background: #ececec;
  font-size: 14px;
  border: 1px solid var(--grey-transparent);
  transition: 0.3s all ease-in-out;

  &:hover {
    border: 1px solid var(--orange);
  }
}

.country-list {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-radius: 15px;
    display: flex;

    span {
      display: flex;
      color: grey;
      transition: 0.2s ease-in-out;


    }

    &:hover {
      background: var(--line-color);
    }
  }
}

.country-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.country-item:hover {
  background: var(--light-grey);
}

.country-item img {
  margin-right: 10px;
}
</style>