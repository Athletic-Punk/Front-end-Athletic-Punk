<script setup>
import { ref } from 'vue'

const index = ref(0)
const cards = [
  { id: 0, content: 'Content 1' },
  { id: 1, content: 'Content 2' },
  { id: 2, content: 'Content 3' },
  { id: 3, content: 'Content 4' },
]

function getCardStyle(cardIndex) {
  const totalCards = cards.length
  const position = (cardIndex - index.value + totalCards) % totalCards // Calcula a posição relativa

  // Define estilo com base na posição
  const styles = [
    {
      transform: 'translateX(0px) scale(0.85)', // Esquerda mais distante
      zIndex: 1,
      opacity: 0.5,
    },
    {
      transform: 'translateX(-400px) scale(1)', // Esquerda mais próxima
      zIndex: 2,
      opacity: 0.7,
    },
    {
      transform: 'translateX(0px) scale(1.5)', // Centro (destacado)
      zIndex: 3,
      opacity: 1,
    },
    {
      transform: 'translateX(400px) scale(1)', // Direita mais próxima
      zIndex: 2,
      opacity: 0.7,
    },
    {
      transform: 'translateX(800px) scale(0.85)', // Direita mais distante
      zIndex: 1,
      opacity: 0.5,
    },
  ]

  return styles[position] || styles[0] // Garante o estilo mesmo para índices fora do alcance
}

setInterval(() => {
  index.value = (index.value + 1) % cards.length
}, 3000)
</script>

<template class="is-desktop">
  <section id="sports">
    <h2>ESPORTES</h2>
    <hr />
    <p>
      A prática de exercícios físicos é fundamental para o crescimento, desenvolvimento e
      aprendizagem, associada a melhoria da qualidade de vida e saúde. Atualmente, as pessoas tem
      adotado um estilo de vida mais saudável com busca de uma qualidade de vida melhor, usando
      então, os esportes como aliados, que além de serem atividades físicas, também integram a
      conexão do corpo com a mente. A prática de esportes promove um equilíbrio pessoal, sendo uma
      forma de reduzir os níveis de estresse, melhorar a autoestima e os níveis de felicidade.
    </p>

    <div id="sports-carousel">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card"
        :style="getCardStyle(card.id)">
        {{ card.content }}
      </div>
    </div>
  </section>
</template>

<style scoped>
#sports {
  margin: 5vw 5vw 20vw 5vw;

  h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 96px;
    line-height: 32px;
    text-align: center;
    color: #1d7935;
  }

  hr {
    width: 250px;
    height: 2px;
    margin-top: 35px;
    text-align: center;
    border: none;
    background-color: #369950;
  }

  p {
    font-family: 'Aldrich', sans-serif;
    font-size: 24px;
    line-height: 45px;
    text-align: center;
    margin: 40px 0 40px 0;
  }

  #sports-carousel {
    display: flex;
    justify-content: center;
    margin: 7vw;

    .card {
      position: absolute;
      width: 371px;
      height: 211px;
      background-color: lightgray;
      border-radius: 20px;
      transition: transform 0.5s ease, z-index 0.5s;
      text-align: center;
    }
  }
}
</style>
