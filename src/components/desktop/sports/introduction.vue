<script setup>
import { defineProps } from 'vue';

defineProps(['introduction', 'introductionImage']);
</script>

<template>
  <section class="is-desktop">
    <img :src="introductionImage" :alt="sportTitle">
    <h2>INTRODUÇÃO</h2>
    <div v-html="introduction"></div>
  </section>
</template>

<style scoped>
section {
  img {
    width: 100%;
    filter: contrast(50%);
  }

  h2 {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 8vw;
    color: #fff;
    text-align: center;
    text-decoration: underline 6px;
    text-underline-offset: 0.521vw;
    position: absolute;
    top: 63vw;
    left: 35vw;
    z-index: 1;
  }

  div {
    width: 70vw;
    margin-left: 10vw;
    padding: 2vw;
    font-family: 'Aldrich';
    font-weight: 400;
    font-size: 1.5vw;
    line-height: 2vw;
    text-align: center;
  }
}
</style>
