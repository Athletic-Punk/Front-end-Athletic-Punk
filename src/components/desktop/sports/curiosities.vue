<script setup>
import { defineProps } from 'vue';

defineProps(['curiositiesItens']);
</script>

<template>
  <section class="is-desktop">
    <h2>CURIOSIDADES</h2>
    <ul>
      <li v-for="curiosit of curiositiesItens" :key="curiosit.id">{{ curiosit.text }}</li>
    </ul>
  </section>
</template>

<style scoped>
section {
  margin: 5vw;
  padding: 3vw;
  background-color: #D9B341;
  border-radius: 20px;

  h2 {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 6vw;
    color: #fff;
    text-align: center;
    margin-bottom: 2vw;
  }

  ul {
    display: flex;
    justify-content: space-evenly;

    li {
      width: 19vw;
      margin: 0 1vw 0 1vw;
      padding: 1vw;
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 1.3vw;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #006DBC;
      border: 3px solid #006DBC;
      border-radius: 24px;
      transition: transform 0.3s ease;
    }

    li:hover {
      background-color: #004f87;
      transform: scale(1.02);
    }
  }
}
</style>
