<script setup>
import { ref } from 'vue'

const index = ref(0)
const cards = [
  { id: 0, content: '/public/general/home/', link: '/esporte/atletismo', sport: 'Atletismo' },
  { id: 1, content: '/public/general/home/', link: '/esporte/automobilismo', sport: 'Automobilismo' },
  { id: 2, content: '/public/general/home/', link: '/esporte/badminton', sport: 'Badminton' },
  { id: 3, content: '/public/general/home/', link: '/esporte/basquete', sport: 'Basquete' },
  { id: 4, content: '/public/general/home/', link: '/esporte/beisebol', sport: 'Beisebol' },
  { id: 5, content: '/public/general/home/', link: '/esporte/boxe', sport: 'Boxe' },
  { id: 6, content: '/public/general/home/', link: '/esporte/canoagem', sport: 'Canoagem' },
  { id: 7, content: '/public/general/home/', link: '/esporte/ciclismo', sport: 'Ciclismo' },
  { id: 8, content: '/public/general/home/', link: '/esporte/esgrima', sport: 'Esgrima' },
  { id: 9, content: '/public/general/home/', link: '/esporte/futebol',  sport: 'Futebol' },
  { id: 10, content: '/public/general/home/', link: '/esporte/ginastica-artistica',  sport: 'Ginástica Artística' },
  { id: 11, content: '/public/general/home/', link: '/esporte/ginastica-ritmica',  sport: 'Ginástica Rítmica' },
  { id: 12, content: '/public/general/home/', link: '/esporte/golfe',  sport: 'Golfe' },
  { id: 13, content: '/public/general/home/', link: '/esporte/handebol',  sport: 'Handebol' },
  { id: 14, content: '/public/general/home/', link: '/esporte/hipismo',  sport: 'Hipismo' },
  { id: 15, content: '/public/general/home/', link: '/esporte/judo',  sport: 'Judô' },
  { id: 16, content: '/public/general/home/', link: '/esporte/natacao',  sport: 'Natação' },
  { id: 17, content: '/public/general/home/', link: '/esporte/patinacao',  sport: 'Patinação' },
  { id: 18, content: '/public/general/home/', link: '/esporte/remo',  sport: 'Remo' },
  { id: 19, content: '/public/general/home/', link: '/esporte/rugby',  sport: 'Rugby' },
  { id: 20, content: '/public/general/home/', link: '/esporte/skate',  sport: 'Skate' },
  { id: 21, content: '/public/general/home/', link: '/esporte/surf',  sport: 'Surf' },
  { id: 22, content: '/public/general/home/', link: '/esporte/tenis',  sport: 'Tênis' },
  { id: 23, content: '/public/general/home/', link: '/esporte/tenis-de-mesa',  sport: 'Tênis de Mesa' },
  { id: 24, content: '/public/general/home/', link: '/esporte/triatlo',  sport: 'Triatlo' },
  { id: 25, content: '/public/general/home/', link: '/esporte/voleibol',  sport: 'Voleibol' },
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
      transform: 'translateX(-20.833vw) scale(1)', // Esquerda mais próxima
      zIndex: 2,
      opacity: 0.7,
    },
    {
      transform: 'translateX(0vw) scale(1.5)', // Centro (destacado)
      zIndex: 3,
      opacity: 1,
    },
    {
      transform: 'translateX(20.833vw) scale(1)', // Direita mais próxima
      zIndex: 2,
      opacity: 0.7,
    }
  ]

  return styles[position] || styles[0] // Garante o estilo mesmo para índices fora do alcance
}

setInterval(() => {
  index.value = (index.value + 1) % cards.length
}, 3000)
</script>

<template>
  <section class="is-desktop">
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
        <RouterLink :to="card.link"><img :src="card.content" :alt="card.sport"/></RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 5vw 5vw 20vw 5vw;

  h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 5vw;
    line-height: 4.688vw;
    text-align: center;
    color: #1d7935;
  }

  hr {
    width: 13.021vw;
    height: 2px;
    margin-top: 1.823vw;
    text-align: center;
    border: none;
    background-color: #369950;
  }

  p {
    font-family: 'Aldrich', sans-serif;
    font-size: 1.35vw;
    line-height: 1.402vw;
    text-align: center;
    margin: 2.083vw 0 2.083vw 0;
  }

  #sports-carousel {
    display: flex;
    justify-content: center;
    margin: 7vw;

    .card {
      position: absolute;
      width: 19.323vw;
      height: 10.99vw;
      background-color: lightgray;
      border-radius: 20px;
      transition: transform 0.5s ease, z-index 0.5s ease;
      text-align: center;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
