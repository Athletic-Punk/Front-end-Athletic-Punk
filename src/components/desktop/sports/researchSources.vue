<script setup>
import { defineProps } from 'vue';

defineProps(['sourcesItens']);
</script>

<template>
  <section class="is-desktop">
    <h2>FONTES</h2>
    <p>Todas as informações foram tiradas de pesquisas nos seguintes sites:</p>
    <ul>
      <li v-for="item of sourcesItens" :key="item.id"><a :href="item.link">{{ item.site }}</a></li>
    </ul>
  </section>
</template>

<style scoped>
section {
  margin: 5vw 0 5vw 0;
  padding: 5vw;
  background-color: #D9B341;

  h2 {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 5vw;
    color: #fff;
  }

  p {
    font-family: 'Aldrich';
    font-weight: 400;
    font-size: 1.5vw;
    color: #fff;
  }

  ul {
    margin-top: 3vw;
    display: flex;
    justify-content: center;

    li {
      margin: 0 1vw 0 1vw;

      a {
        font-family: 'Ubuntu';
        font-weight: 600;
        font-size: 1.3vw;
        color: #004f87;

      }
    }
  }
}
</style>
