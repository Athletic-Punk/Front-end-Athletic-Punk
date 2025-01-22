<script setup>
import { defineProps, ref } from 'vue';

defineProps(['menuItens', 'infoItens']);

const section = ref('history');
function changeValue(sec) {
  section.value = sec;
}
</script>

<template>
  <section class="is-desktop">
    <ul>
      <li v-for="menu of menuItens" :key="menu.id" @click="changeValue(menu.id)">
        {{ menu.section }}
      </li>
    </ul>

    <div v-for="info of infoItens.filter(t => t.id === section)" :key="info.id" class="content">
      <p v-html="info.text"></p>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 2vw 5vw 5vw 5vw;
  border-radius: 20px;
  background-color: #0958B1;
  border: 5px solid #D9B341;

  ul {
    display: flex;
    justify-content: center;
    padding: 2vw 0 1vw 0;
    border-radius: 18px 18px 0 0;

    li {
      margin: 0 2vw 0 2vw;
      padding: 1vw 2vw 1vw 2vw;
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 1.3vw;
      color: white;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
    }

    li:hover {
      background-color: rgba(255, 255, 255, 0.7);
      transform: scale(1.05);
    }
  }

  .content {
    padding: 1vw 3vw 3vw 3vw;
    border-top: none;
    border-radius: 0 0 20px 20px;

    p {
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 1.4vw;
      line-height: 2vw;
      color: white;
      margin: 1vw 2vw 0.5vw 2vw;
    }
  }
}
</style>
