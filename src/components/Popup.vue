<script setup>
import { ref, watch } from 'vue';
import duckPopup from "../assets/images/duck-popup.svg";
import timesIcon from "../assets/icons/times-icon.svg";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:visible']);

const isVisible = ref(props.visible);

watch(() => props.visible, (newValue) => {
  isVisible.value = newValue;
});

const closePopup = () => {
  isVisible.value = false;
  emit('update:visible', false);
};
</script>

<template>
  <div>
    <div v-if="isVisible" class="overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <img :src="duckPopup" alt="duck popup" width="200" height="200" class="duck-popup">
        <h3>Спасибо, наш менеджер скоро свяжется с тобой</h3>
        <button class="button-white" @click="closePopup">Отлично!</button>
        <button @click="closePopup" class="button-times">
          <img :src="timesIcon" alt="close icon" width="20" height="20">
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Darker overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.duck-popup {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 50%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
}

.popup {
  background: var(--orange);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1001;
  max-width: 680px;
  width: 100%;
  max-height: 660px;
  height: 100%;
  position: relative;

  h3{
    font-size: 40px;
    color: var(--white);
    margin: 0;
    padding: 0;
  }

}

.button-white{
  background: var(--white);
  border-radius: 20px;
  color: var(--black);
  font-size: 20px;
  padding: 15px 30px;
  border: none;
  width: 90%;
  cursor: pointer;
  z-index: 1000;
  transition: 0.2s ease;
}

.button-times {
  background: var(--black);
  border-radius: 50px;
  position: absolute;
  top: 2%;
  right: 2%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
}

.button-times:hover {
  opacity: 0.6;
}
</style>