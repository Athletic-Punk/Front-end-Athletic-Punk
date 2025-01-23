<script setup>
import { ref } from 'vue';

const sports = [
  { id: 'atletismo', sport: 'Atletismo' },
  { id: 'automobilismo', sport: 'Automobilismo' },
  { id: 'badminton', sport: 'Badminton' },
  { id: 'basquete', sport: 'Basquete' },
  { id: 'beisebol', sport: 'Beisebol' },
  { id: 'boxe', sport: 'Boxe' },
  { id: 'canoagem', sport: 'Canoagem' },
  { id: 'ciclismo', sport: 'Ciclismo' },
  { id: 'esgrima', sport: 'Esgrima' },
  { id: 'futebol', sport: 'Futebol' },
  { id: 'ginastica-artistica', sport: 'Ginástica Artística' },
  { id: 'ginastica-ritmica', sport: 'Ginástica Rítmica' },
  { id: 'golfe', sport: 'Golfe' },
  { id: 'handebol', sport: 'Handebol' },
  { id: 'hipismo', sport: 'Hipismo' },
  { id: 'judo', sport: 'Judô' },
  { id: 'natacao', sport: 'Natação' },
  { id: 'patinacao', sport: 'Patinação' },
  { id: 'remo', sport: 'Remo' },
  { id: 'rugby', sport: 'Rugby' },
  { id: 'skate', sport: 'Skate' },
  { id: 'surf', sport: 'Surf' },
  { id: 'tenis', sport: 'Tênis' },
  { id: 'tenis-de-mesa', sport: 'Tênis de Mesa' },
  { id: 'triatlo', sport: 'Triatlo' },
  { id: 'volei', sport: 'Voleibol' },
]

const info = ref({
  objetivo: '',
  experiencia: '',
  tempoDisponivel: {
    dias: '',
    tempo: ''
  },
  esporte: '',
  equipamento: ''
});

console.log(info.value);

const formData = ref({
  name: '',
  email: '',
  gender: '',
  acceptTerms: false,
});

const handleSubmit = () => {
  alert('Formulário enviado com sucesso!');
  console.log('Dados do formulário:', formData.value);
};
</script>

<template>
  <section class="is-desktop">
    <h1>FORMULÁRIO</h1>

    <form action="#" @submit.prevent="console.log(info)">
      <fieldset id="objective">
        <legend>Qual o seu objetivo?</legend>
        <div class="radio-group">
          <label><input type="radio" value="emagrecer" v-model="info.objetivo" required>Emagrecer</label>
          <label><input type="radio" value="melhorar a resistência" v-model="info.objetivo" required>Melhorar a
            resistência</label>
          <label><input type="radio" value="melhorar a performance em algum esporte específico" v-model="info.objetivo"
              required>Melhorar a performance em algum esporte específico</label>
        </div>
      </fieldset>

      <fieldset id="experience">
        <legend>Qual seu nível de experiência com exercícios?</legend>
        <div class="radio-group">
          <label><input type="radio" value="sedentário" v-model="info.experiencia" required>Sedentário</label>
          <label><input type="radio" value="iniciante" v-model="info.experiencia" required>Iniciante</label>
          <label><input type="radio" value="intermediário" v-model="info.experiencia" required>Intermediário</label>
          <label><input type="radio" value="avançado" v-model="info.experiencia" required>Avançado</label>
        </div>
      </fieldset>

      <fieldset id="time">
        <legend>Quanto tempo você tem disponível por semana para treinar?</legend>

        <label for="days">Quantos dias por semana:</label>
        <input type="number" v-model="info.tempoDisponivel.dias" required id="days" min="0" max="7"
          placeholder="Digite o número de dias">

        <label for="minutes">Quantos minutos por dia:</label>
        <input type="number" v-model="info.tempoDisponivel.tempo" required id="minutes" min="0" max="1440"
          placeholder="Digite o número de minutos">
      </fieldset>

      <fieldset id="sport">
        <legend>Qual esporte você quer treinar?</legend>
        <div class="radio-group">
          <label v-for="esporte of sports" :key="esporte.id"><input type="radio" :value="esporte.sport"
              v-model="info.esporte" required>{{ esporte.sport }}</label>
        </div>
      </fieldset>

      <fieldset id="equipment">
        <legend>Qual o seu acesso a equipamentos?</legend>
        <div class="radio-group">
          <label><input type="radio" value="academia" v-model="info.equipamento" required>Academia</label>
          <label><input type="radio" value="casa" v-model="info.equipamento" required>Casa</label>
          <label><input type="radio" value="peso do corpo" v-model="info.equipamento" required>Peso do corpo</label>
        </div>
      </fieldset>

      <p>*Lembrando que a rotina de treinos é gerada por IA, atente-se de verificar as informações antes de realizar qualquer treinamento</p>
      <button type="submit">OBTER TREINO</button>
    </form>
  </section>
</template>

<style scoped>
section {
  margin: 5vw;

  h1 {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 5vw;
    color: #2BB24F;
    text-align: center;
    margin-bottom: 2vw;
  }

  form {
    padding: 2vw 5vw 2vw 5vw;

    fieldset {
      margin-bottom: 2vw;

      legend {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 2vw;
        color: #0056b3;
        margin-bottom: 1vw;
        text-decoration: underline;
      }

      label {
        display: block;
        font-family: 'Ubuntu';
        font-size: 1.2vw;
        font-weight: bold;
        margin-bottom: 0.2vw;
        color: #555;
      }

      input[type="number"],
      .radio-group label {
        width: 100%;
        font-size: 1.1vw;
        padding: 1vw;
        margin: 1vw;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }

      input[type="number"]:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
      }

      .radio-group {
        display: grid;
        grid-template-columns: repeat(4, 10fr);
        justify-content: center;
        gap: 1vw;
      }

      .radio-group label {
        display: flex;
        align-items: center;
      }

      .radio-group input {
        margin-right: 0.4rem;
      }
    }

    p {
      font-family: 'Ubuntu';
      font-size: 1.2vw;
      color: #555;
      margin: 3vw 1vw 2vw 1vw;
      text-decoration: underline;
      text-align: center;
    }

    button {
      background-color: #007bff;
      color: #fff;
      padding: 1vw 3vw 1vw 3vw;
      margin-left: 31vw;
      border: none;
      border-radius: 5px;
      font-size: 1.5vw;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }
  }
}
</style>
