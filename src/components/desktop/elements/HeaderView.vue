<script setup>
import { ref } from 'vue';

const token = ref(true);
</script>

<template>
  <header class="is-desktop">
    <h1>ATHLETIC PUNK</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/contato">CONTATO</RouterLink></li>
        <li><RouterLink to="/esportes">ESPORTES</RouterLink></li>
      </ul>

      <p v-if="token"><i class="fa-solid fa-user"></i></p>
      <ul v-else>
        <li><RouterLink to="/auth/cadastre-se">CADASTRE-SE</RouterLink></li>
        <li><RouterLink to="/auth/login">LOGIN</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  h1 {
    font-family: 'Aldrich';
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    color: #FFFFFF;
    background-color: #2BB24F;
    padding: 1vw 0 1vw 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    background-color: #369950;
    padding: 1vw 2vw 1vw 2vw;

    ul {
      display: flex;
      justify-content: center;

      li {
        margin: 0 1vw 0 1vw;

        a {
          font-family: 'Aldrich';
          font-weight: 400;
          font-size: 20px;
          line-height: 50px;
          color: #FFFFFF;
          text-decoration: none;
        }
      }
    }

    p {
      font-size: 28px;
      color: #FFFFFF;
      margin: 0.5vw 1vw 0 0;
    }
  }
}
</style>
