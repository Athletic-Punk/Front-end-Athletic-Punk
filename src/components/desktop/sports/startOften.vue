<script setup>
import { defineProps, ref } from 'vue';

defineProps(['startItens', 'oftenItens']);

const indexStart = ref(0);
function getCardStartStyle(cardIndex) {
  const position = (cardIndex - indexStart.value + 3) % 3

  const styles = [
    {
      transform: 'translateX(0vw)', // Primeiro
      opacity: 1,
    },
    {
      transform: 'translateX(37vw)', // Segundo
      opacity: 0.7,
    },
    {
      transform: 'translateX(74vw)', // Terceiro
      opacity: 0.5,
    }
  ]

  return styles[position] || styles[0] // Garante o estilo mesmo para índices fora do alcance
}
function nextStart() {
  indexStart.value = (indexStart.value == 3) ? 0 : indexStart.value + 1;
}
function prevStart() {
  indexStart.value = (indexStart.value == 0) ? 3 : indexStart.value - 1;
}
</script>

<template>
  <section class="is-desktop">
    <h2>COMO COMEÇAR</h2>
    <div id="start-slider">
      <i class="fa-solid fa-chevron-left button-start" id="prev-start" @click="prevStart"></i> <i
        class="fa-solid fa-chevron-right button-start" id="next-start" @click="nextStart"></i>
      <div id="start-viewport">
        <div v-for="item of startItens" :key="item.id" class="start-slide" :style="getCardStartStyle(item.id)">
          <i class="fa-solid fa-ellipsis"></i>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>

    <h2>COM QUE FREQUÊNCIA</h2>
    <div id="often-slider">
      <div v-for="item of oftenItens" :key="item.id" class="often-slide">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 2vw 0 5vw 0;

  h2 {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 7vw;
    color: #2BB24F;
    text-align: center;
    margin-top: 3vw;
  }

  #start-slider {
    margin-top: 4vw;
    background-color: #EBEDF0;
    padding: 3vw 0 5vw 0;
    height: 20vw;
    position: relative;
    overflow: hidden;

    .button-start {
      font-size: 2vw;
      color: #006DBC;
      position: absolute;
      cursor: pointer;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);
    }

    #prev-start {
      left: 3vw;
    }

    #next-start {
      right: 3vw;
    }

    #start-viewport {
      display: flex;
      justify-content: center;
      overflow: hidden;

      .start-slide {
        margin: 0 2vw 0 2vw;
        padding: 2vw;
        text-align: center;
        border: 5px solid #e5e7eb;
        border-radius: 20px;
        width: 30vw;
        height: 18vw;
        background-color: lightgray;
        transition: transform 0.5s ease;
        position: absolute;

        i {
          font-size: 3vw;
          color: #D9B341;
          background-color: transparent;
        }

        h3 {
          font-family: 'Bebas Neue';
          font-weight: 400;
          font-size: 3vw;
          color: #006DBC;
          text-decoration: underline 3px;
          text-underline-offset: 0.4vw;
        }

        p {
          font-family: 'Aldrich';
          font-weight: 400;
          font-size: 1.4vw;
          color: #006DBC;
          margin-top: 2vw;
        }
      }
    }
  }

  #often-slider {
    display: flex;
    justify-content: center;

    .often-slide {
      width: 40vw;
      padding: 2vw;
      margin: 2vw;
      text-align: center;
      border-bottom: 3px solid #2BB24F;

      h3 {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 3vw;
        color: #D9B341;
        text-decoration: underline 3px;
        text-underline-offset: 0.4vw;
      }

      p {
        font-family: 'Aldrich';
        font-weight: 400;
        font-size: 1.4vw;
        color: #006DBC;
        margin-top: 1vw;
      }
    }
  }
}
</style>
