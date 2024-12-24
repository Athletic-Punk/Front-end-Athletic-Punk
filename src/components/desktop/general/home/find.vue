<template class="is-desktop">
  <section id="find">
    <h2>
      O QUE VOCÊ PODE <span class="text-blue">ENCONTRAR</span> EM NOSSO
      <span class="text-yellow">SITE</span>
    </h2>
    <hr />
    <div>
      <div class="card-blue">
        <h3>BENEFÍCIOS</h3>
        <p>
          Entenda como cada esporte pode contribuir para o seu bem-estar físico e mental. Nossas
          páginas mostram como as diferentes atividades físicas ajudam na prevenção de doenças,
          aumento de força e resistência
        </p>
      </div>
      <div class="card-green">
        <h3>ESPORTES</h3>
        <p>
          Explore as modalidades, conheça os esportes. Nosso guia detalhado ajudará você a conhecer
          as características de cada modalidade
        </p>
      </div>
      <div class="card-blue">
        <h3>HÁBITOS SAUDÁVEIS</h3>
        <p>
          Conheça hábitos saudáveis, e implante na sua rotina. Descubra o que é melhor para você e
          adote hábitos benéficos para o seu quadro de saúde.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#find {
  margin: 5vw;

  h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    line-height: 32px;
    text-align: center;
    color: #1d7935;

    .text-blue {
      color: #0958b1;
    }

    .text-yellow {
      color: #c1c13f;
    }
  }

  hr {
    width: 528px;
    height: 2px;
    margin-top: 25px;
    text-align: center;
    border: none;
    background-color: #369950;
  }

  div {
    display: flex;
    justify-content: center;

    div {
      display: block;
      text-align: center;
      width: 392px;
      height: 420px;
      margin: 3vw 20px 20px 20px;
      padding: 50px 20px 50px 20px;

      h3 {
        font-family: "Bebas Neue", sans-serif;
        font-size: 64px;
        line-height: 32px;
        color: #FFFDFD;
        margin-top: 50px;
      }

      p {
        font-family: "Aldrich", sans-serif;
        font-size: 20px;
        line-height: 32px;
        color: #FFFDFD;
        margin-top: 3vw;
      }
    }

    .card-blue {
      background-color: #0b72e8;
      border: 5px solid #E4E451;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .card-green {
      background-color: #2BB24F;
      border: 5px solid #0B72E8;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
