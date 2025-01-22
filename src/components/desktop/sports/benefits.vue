<script setup>
import { defineProps } from 'vue';

defineProps(['benefitsSections']);
</script>

<template>
  <section class="is-desktop">
    <h2>BENEFÍCIOS</h2>
    <div id="benefit-slider">
      <div v-for="ben of benefitsSections" :key="ben.id" class="benefits-slides" :id="ben.id">
        <h3>{{ ben.benefit }}</h3>
        <p v-html="ben.text"></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 5vw 0 5vw 0;

  h2 {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 7vw;
    color: #D9B341;
    text-align: center;
    margin-bottom: 1vw;
  }

  #benefit-slider {
    display: flex;
    justify-content: center;

    .benefits-slides {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10.417vw;
      height: 36.5vw;
      padding: 1vw;
      cursor: pointer;
      flex: 1;
      overflow: hidden;
      background-size: 100%;
      transition: 0.4s all;

      h3 {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 7vw;
        color: #fff;
        text-align: center;
      }

      p {
        font-family: 'Krona One';
        font-weight: 400;
        font-size: 1.4vw;
        line-height: 2vw;
        color: #fff;
        margin: 0 5vw 0 5vw;
        display: none;
      }
    }

    #fisicos {
      background-image: linear-gradient(rgba(1, 1, 1, 0.738), rgba(1, 1, 1, 0.5)), url(/sports/benefits/physic.jpg);
    }

    #mentais {
      background-image: linear-gradient(rgba(1, 1, 1, 0.738), rgba(1, 1, 1, 0.5)), url(/sports/benefits/mental.jpg);
    }

    #sociais {
      background-image: linear-gradient(rgba(1, 1, 1, 0.738), rgba(1, 1, 1, 0.5)), url(/sports/benefits/social.jpg);
    }

    .benefits-slides:hover {
      flex: 3;

      h3 {
        display: none;
      }

      p {
        display: block;
      }
    }
  }
}
</style>
