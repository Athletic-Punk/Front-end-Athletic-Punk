<script setup>
import { ref } from 'vue'

const token = ref(true)
</script>

<template>
  <header class="is-desktop">
    <div id="shape-left">
      <h1>ATHLETIC PUNK</h1>
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/contato">CONTATO</RouterLink></li>
        <li><RouterLink to="/esportes">ESPORTES</RouterLink></li>
        <li v-if="token"><RouterLink to="/minha-conta">MINHA CONTA</RouterLink></li>
        <li v-else>
          <ul>
            <li><RouterLink to="/auth/cadastre-se">CADASTRE-SE</RouterLink></li>
            <li><RouterLink to="/auth/login">LOGIN</RouterLink></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div id="shape-right">o</div>
  </header>
</template>

<style scoped>
header {
  background-color: #2bb24f;

  #shape-left {
    clip-path: polygon(0% 0%, 60% 0%, 60% 0%, 100% 50%, 60% 100%, 60% 100%, 0% 100%);
    background-color: #d9b341;
    width: 20.833vw;
    height: 4.63vw;
    top: 0;
    left: 0;
    position: absolute;

    h1 {
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 1.675vw;
      line-height: 2.604vw;
      text-align: left;
      color: #ffffff;
      padding: 1vw 0 1vw 2vw;
    }
  }

  #shape-right {
    clip-path: polygon(100% 0%, 40% 0%, 40% 0%, 0% 50%, 40% 100%, 40% 100%, 100% 100%);
    background-color: #d9b341;
    width: 20.833vw;
    height: 4.63vw;
    top: 0;
    right: 0;
    position: absolute;
  }

  nav {
    display: flex;
    justify-content: center;
    background-color: #369950;
    padding: 1vw 2vw 1vw 2vw;

    ul {
      display: flex;
      justify-content: center;

      li {
        margin: 0 2vw 0 2vw;

        a {
          font-family: 'Aldrich';
          font-weight: 400;
          font-size: 1.242vw;
          line-height: 2.604vw;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
