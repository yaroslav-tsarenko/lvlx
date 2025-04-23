<script setup>
import logo from '../assets/logo/lvlx-logo-white.svg';
import tg from '../assets/icons/telegram-social.svg';
import inst from '../assets/icons/instagram-icon.svg';
import yt from '../assets/icons/youtube-icon.svg';
</script>

<template>
  <footer class="footer">
    <div class="footer-upper">
      <div class="footer-header">
        <p>Монетизируй свой трафик с прямым рекламодателем iGaming продуктов.</p>
        <img :src="logo" alt="logo" width="150" height="30"/>
        <button>Зарегистрироваться</button>
      </div>
      <div class="footer-middle">
        <div class="footer-item">
          <p>Telegram</p>
          <h1>@afflvlx</h1>
        </div>
        <div class="footer-item">
          <p>Электронная почта</p>
          <h1>partners@lvlx.top</h1>
          <div class="footer-socials">
            <img :src="tg" alt="icon" width="60" height="60">
            <img :src="inst" alt="icon" width="60" height="60">
            <img :src="yt" alt="icon" width="60" height="60">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        2025 Все права защищены. Несанкционированное воспроизведение, публикация,
        передача или любая другая форма копирования строго запрещены.
      </p>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  display: flex;
  flex-direction: column;
  max-width: 1840px;
  margin: 0 auto;
  width: 100%;
  border-radius: 32px 32px 0 0;
}

.footer-upper{
  display: flex;
  flex-direction: column;
  background: var(--black);
  border-radius: 35px;
  gap: 30px;
  padding: 60px;
}

.footer-header {
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 400;
    color: var(--white);
    max-width: 306px;
  }

  button {
    display: flex;
    background: var(--orange);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 20px 40px;
    color: var(--white);
    border-radius: 16px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: var(--orange-hover);
      outline: none;
      border: none;
    }
  }
}

.footer-middle {
  display: flex;
  width: 100%;
  color: var(--white);
  justify-content: space-between;
}

.footer-item {
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    font-size: 70px;
    padding: 0;
  }
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.footer-bottom{
  display: flex;
  padding: 60px;
  background: url("../assets/images/footer-bg.svg") no-repeat center;
  background-size: cover;
  border-radius: 35px 35px 0 0;
  border-top: 1px dashed var(--grey);

  p{
    color: var(--white);
    max-width: 650px;
  }
}

</style>