<script setup>
import { defineProps } from 'vue';

defineProps(['sportTitle', 'imgsTitle']);
</script>

<template>
  <section class="is-desktop">
    <div id="title">
      <div class="detail" id="blue"></div>
      <div class="detail" id="green"></div>
      <h1>{{ sportTitle }}</h1>
      <div class="detail" id="green"></div>
      <div class="detail" id="blue"></div>
    </div>

    <div id="slider">
      <img v-for="img of imgsTitle" :key="img.id" :src="img.picture" :alt="sportTitle + 'pictures'">
    </div>

    <div id="detail-border">
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
      <div class="detail" id="yellow"></div>
      <div class="detail" id="green"></div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 5vw;

  #title {
    display: flex;
    justify-content: center;
    margin-bottom: 5vw;

    h1 {
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 5vw;
      line-height: 2.604vw;
      text-align: center;
      color: #D9B341;
    }

    .detail {
      border-radius: 50%;
      margin: 0 1vw 0 1vw;
    }

    #blue {
      width: 1.042vw;
      height: 1.042vw;
      color: #0958B1;
      background-color: #0958B1;
    }

    #green {
      width: 1.51vw;
      height: 1.51vw;
      color: #2BB24F;
      background-color: #2BB24F;
    }
  }

  #slider {
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 3vw;

    img {
      height: 11vw;
      border: 1px solid white;
    }
  }

  #detail-border {
    display: flex;
    justify-content: center;
    background-color: #0958B1;
    height: 3.021vw;
    padding-top: 1vw;

    .detail {
      border-radius: 50%;
      margin: 0 1vw 0 1vw;
    }

    #yellow {
      width: 1.042vw;
      height: 1.042vw;
      color: #D9B341;
      background-color: #D9B341;
    }

    #green {
      width: 1.51vw;
      height: 1.51vw;
      color: #2BB24F;
      background-color: #2BB24F;
    }
  }
}
</style>
