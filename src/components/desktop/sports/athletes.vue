<script setup>
import { defineProps, ref } from 'vue';

defineProps(['athletesItens']);

const indexAthletes = ref(0);
function getCardAthleteStyle(cardIndex) {
  const position = (cardIndex - indexAthletes.value + 10) % 10

  const styles = [
    {
      transform: 'translateX(-100vw)', // Primeiro
      opacity: 0.6
    },
    {
      transform: 'translateX(-75vw)', // Segundo
      opacity: 0.7
    },
    {
      transform: 'translateX(-50vw)', // Terceiro
      opacity: 0.8
    },
    {
      transform: 'translateX(-25vw)', // Quarto
      opacity: 0.91
    },
    {
      transform: 'translateX(0vw)', // Quinto
      opacity: 1
    },
    {
      transform: 'translateX(25vw)', // Sexto
      opacity: 0.91
    },
    {
      transform: 'translateX(50vw)', // Sétimo
      opacity: 0.8
    },
    {
      transform: 'translateX(75vw)', // Oitavo
      opacity: 0.7
    },
    {
      transform: 'translateX(100vw)', // Nono
      opacity: 0.6
    },
    {
      transform: 'translateX(125vw)', // Décimo
      opacity: 0.5
    }
  ]

  return styles[position] || styles[0] // Garante o estilo mesmo para índices fora do alcance
}
function nextAthletes() {
  indexAthletes.value = (indexAthletes.value == 10) ? 0 : indexAthletes.value + 1;
}
function prevAthletes() {
  indexAthletes.value = (indexAthletes.value == 0) ? 10 : indexAthletes.value - 1;
}
</script>

<template>
  <section class="is-desktop">
    <div id="athletes-slider">
      <i class="fa-solid fa-chevron-left button-athletes" id="prev-athletes" @click="prevAthletes"></i> <i
        class="fa-solid fa-chevron-right button-athletes" id="next-athletes" @click="nextAthletes"></i>
      <div id="athletes-viewport">
        <div v-for="item of athletesItens" :key="item.id" class="athlete-slide" :style="getCardAthleteStyle(item.id)">
          <div class="inner-part">
            <div class="front">
              <img :src="item.picture" :alt="item.name">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="back">
              <p v-html="item.about"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 5vw 0 5vw 0;

  #athletes-slider {
    margin-top: 4vw;
    background-color: #EBEDF0;
    padding: 3vw 0 5vw 0;
    height: 26vw;
    position: relative;
    overflow: hidden;

    .button-athletes {
      font-size: 2vw;
      color: #006DBC;
      position: absolute;
      cursor: pointer;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);
      width: 3vw;
      height: 3vw;
    }

    #prev-athletes {
      left: 3vw;
    }

    #next-athletes {
      right: 3vw;
    }

    #athletes-viewport {
      display: flex;
      justify-content: center;
      overflow: hidden;

      .athlete-slide {
        margin: 0 2vw 0 2vw;
        border-radius: 20px;
        width: 23vw;
        transition: transform 0.5s ease;
        position: absolute;

        .inner-part {
          position: relative;
          transition: transform 1s;
          transform-style: preserve-3d;

          .front {
            img {
              width: 100%;
              border-radius: 20px 20px 0 0;
            }

            h3 {
              font-family: 'Bebas Neue';
              font-weight: 400;
              font-size: 2.5vw;
              text-align: center;
              margin: 1vw;
              color: #fff;
            }
          }

          .back {
            transform: rotateY(-180deg);
            overflow-y: scroll;

            p {
              font-family: 'Aldrich';
              font-weight: 400;
              font-size: 1.3vw;
              line-height: 1.7vw;
              color: #fff;
              padding: 2vw;
            }
          }
          .front img {
            width: 23vw;
            height: 23vw;
            object-fit: cover;
          }
          .front,
          .back {
            position: absolute;
            backface-visibility: hidden;
            border-radius: 20px;
            background-color: #2BB24F;
            height: 28vw;
          }
        }
      }

      .athlete-slide:hover {
        .inner-part {
          transform: rotateY(-180deg);
        }
      }
    }
  }
}
</style>
