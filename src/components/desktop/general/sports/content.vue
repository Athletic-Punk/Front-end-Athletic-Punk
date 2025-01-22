<script setup>
const sports = [
  { id: 0, picture: '/general/esportes/atletismo.jpg', link: '/esporte/atletismo', name: 'Atletismo' },
  { id: 1, picture: '/general/esportes/automobilismo.jpeg', link: '/esporte/automobilismo', name: 'Automobilismo' },
  { id: 2, picture: '/general/esportes/badminton.jpg', link: '/esporte/badminton', name: 'Badminton' },
  { id: 3, picture: '/general/esportes/basquete.jpg', link: '/esporte/basquete', name: 'Basquete' },
  { id: 4, picture: '/general/esportes/beisebol.jpg', link: '/esporte/beisebol', name: 'Beisebol' },
  { id: 5, picture: '/general/esportes/boxe.jpg', link: '/esporte/boxe', name: 'Boxe' },
  { id: 6, picture: '/general/esportes/canoagem.jpg', link: '/esporte/canoagem', name: 'Canoagem' },
  { id: 7, picture: '/general/esportes/ciclismo.jpg', link: '/esporte/ciclismo', name: 'Ciclismo' },
  { id: 8, picture: '/general/esportes/esgrima.jpg', link: '/esporte/esgrima', name: 'Esgrima' },
  { id: 9, picture: '/general/esportes/futebol.jpg', link: '/esporte/futebol', name: 'Futebol' },
  { id: 10, picture: '/general/esportes/ginastica-artistica.jpg', link: '/esporte/ginastica-artistica', name: 'Ginástica Artística' },
  { id: 11, picture: '/general/esportes/ginastica-ritmica.jpg', link: '/esporte/ginastica-ritmica', name: 'Ginástica Rítmica' },
  { id: 12, picture: '/general/esportes/golfe.jpg', link: '/esporte/golfe', name: 'Golfe' },
  { id: 13, picture: '/general/esportes/handebol.jpg', link: '/esporte/handebol', name: 'Handebol' },
  { id: 14, picture: '/general/esportes/hipismo.jpg', link: '/esporte/hipismo', name: 'Hipismo' },
  { id: 15, picture: '/general/esportes/judo.jpg', link: '/esporte/judo', name: 'Judô' },
  { id: 16, picture: '/general/esportes/natacao.jpg', link: '/esporte/natacao', name: 'Natação' },
  { id: 17, picture: '/general/esportes/patinacao.jpg', link: '/esporte/patinacao', name: 'Patinação' },
  { id: 18, picture: '/general/esportes/remo.jpg', link: '/esporte/remo', name: 'Remo' },
  { id: 19, picture: '/general/esportes/rugby.jpg', link: '/esporte/rugby', name: 'Rugby' },
  { id: 20, picture: '/general/esportes/skate.jpg', link: '/esporte/skate', name: 'Skate' },
  { id: 21, picture: '/general/esportes/surf.jpg', link: '/esporte/surf', name: 'Surf' },
  { id: 22, picture: '/general/esportes/tenis.jpg', link: '/esporte/tenis', name: 'Tênis' },
  { id: 23, picture: '/general/esportes/tenis-de-mesa.jpg', link: '/esporte/tenis-de-mesa', name: 'Tênis de Mesa' },
  { id: 24, picture: '/general/esportes/triatlo.jpg', link: '/esporte/triatlo', name: 'Triatlo' },
  { id: 25, picture: '/general/esportes/volei.jpg', link: '/esporte/volei', name: 'Voleibol' },
]
</script>

<template>
  <section class="is-desktop">
    <div v-for="sport of sports" :key="sport.id">
      <RouterLink :to="sport.link">
        <div class="card">
          <img :src="sport.picture" :alt="sport.name">
          <h3 :id="sport.color">{{ sport.name }}</h3>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 5vw;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  justify-content: center;

  a {
    text-decoration: none;

    .card {
      width: 20vw;
      height: 25vw;
      border: 5px solid #E4E451;
      border-radius: 20px;
      overflow: hidden;
      margin: 2vw;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        z-index: -1;
        filter: brightness(30%);
        transition: transform 0.5s ease, filter 0.5s ease;
      }

      h3 {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 3.7vw;
        text-decoration: underline 0.3vw;
        color: #fff;
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        transition: all 0.5s ease;
      }
    }

    .card:hover {
      img {
        transform: scale(1.1);
        filter: brightness(100%);
      }

      h3 {
        display: none;
      }
    }
  }
}
</style>
