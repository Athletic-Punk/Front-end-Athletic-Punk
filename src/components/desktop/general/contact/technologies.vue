<script setup>
import { ref } from 'vue';

const technologies = [
  { id: 0, category: 'DESIGN', technologie: 'Figma', icon: '/general/contact/tec/figma.png', info: 'O Figma é uma ferramenta de design colaborativa baseada em nuvem, muito usada por designers para criar interfaces, protótipos e gráficos. Sua principal vantagem é permitir o trabalho em tempo real com múltiplos colaboradores. Escolhemos usá-lo pela facilidade e pelo design poderoso que o software proporciona.' },
  { id: 1, category: 'FRONT-END', technologie: 'Vue.js', icon: '/general/contact/tec/vue.png', info: 'O Vue.js é um framework JavaScript progressivo usado para construir interfaces de usuário. Ele é conhecido por ser simples de usar, flexível e eficiente. Suas principais características incluem: Reatividade, Componentes, Facilidade de Integração e Desempenho Rápido. Escolhemos usá-lo pelo desempenho e por suas principais características.' },
  { id: 2, category: 'BACK-END', technologie: 'Node.js', icon: '/general/contact/tec/node.png', info: 'O Node.js é uma plataforma de código aberto que permite executar JavaScript no lado do servidor. É construído sobre o motor V8 do Google Chrome, garantindo alta performance. Suas principais características incluem: Event-Driven, Leve e Rápido e, Grande Ecossistema. Escolhemos usá-lo pela alta performance, pela grande quantidade de bibliotecas e optamos a linguagem única, que é o JavaScript tanto no lado do cliente quanto do servidor.' },
  { id: 3, category: 'BACK-END', technologie: 'Express', icon: '/general/contact/tec/express.png', info: 'O Express é um framework minimalista para Node.js, usado para criar servidores e APIs web de forma rápida e eficiente. Suas principais características incluem: Simplicidade, Flexibilidade e Compatibilidade. Escolhemos usá-lo pela simplicidade e pela ampla compatibilidade da ferramenta.' },
  { id: 4, category: 'BACK-END', technologie: 'MongoDB', icon: '/general/contact/tec/mongoDB.png', info: 'O MongoDB é um banco de dados NoSQL orientado a documentos, conhecido por sua flexibilidade e escalabilidade. Suas principais características incluem: Modelo Baseado em Documentos, Escalabilidade Horizontal, Consulta Flexível e Desempenho Elevado. Escolhemos usá-lo pelo seu alto desempenho e também pela facilidade de uso.' },
  { id: 5, category: 'BACK-END', technologie: 'Mongoose', icon: '/general/contact/tec/mongoose.png', info: 'O Mongoose é uma biblioteca ODM (Object Data Modeling) para Node.js, usada para trabalhar com MongoDB. Suas principais características incluem: Modelagem de Dados, Consultas Simples, Middlewares e Integração com MongoDB. Escolhemos usá-lo por sua operações simples com o banco.' },
  { id: 6, category: 'DESENVOLVIMENTO', technologie: 'VS Code', icon: '/general/contact/tec/vscode.png', info: 'O Visual Studio Code (VS Code) é um editor de código leve, gratuito e multiplataforma, desenvolvido pela Microsoft. Suas principais características incluem: Suporte a Diversas Linguagens, Extensões Personalizáveis, Interface Intuitiva e Depurador Integrado. Escolhemos usá-lo por ser gratuito, ter a integração com o git e também pela facilidade do uso do software.' },
  { id: 7, category: 'DESENVOLVIMENTO', technologie: 'GitHub', icon: '/general/contact/tec/github.png', info: 'O GitHub é uma plataforma de hospedagem de código baseada em Git, usada por desenvolvedores para colaboração e controle de versões. Suas principais características incluem: Repositórios Remotos, Controle de Versão, Issues e Pull Requests e Integrações. Escolhemos usá-lo pelas ferramentas ofertadas e pela organização do trabalho em grupo.' },
];

const categorys = ['DESIGN', 'FRONT-END', 'BACK-END', 'DESENVOLVIMENTO'];

const category = ref('DESIGN');

function changeValue(cat) {
  category.value = cat;
}
</script>

<template>
  <section class="is-desktop">
    <div id="technologies">
      <h2>Tecnologias</h2>

      <div class="viewport">
        <div class="category-list">
          <div v-for="cat of categorys" :key="cat" @click="changeValue(cat)" class="category-item">
            <h3>{{ cat }}</h3>
          </div>
        </div>

        <div class="info-list">
          <details v-for="tec in technologies.filter(t => t.category === category)" :key="tec.id">
            <summary>{{ tec.technologie }} <i class="fa-solid fa-chevron-down"></i></summary>
            <div class="tec">
              <div class="principal-tec">
                <img :src="tec.icon" :alt="tec.technologie">
                <h3>{{ tec.technologie }}</h3>
              </div>
              <p>{{ tec.info }}</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  #technologies {
    padding: 2vw;
    background-color: #E4E451;

    h2 {
      font-family: 'Bebas Neue';
      font-weight: 400;
      font-size: 3.333vw;
      line-height: 2.604vw;
      color: #FFFDFD;
      margin-bottom: 1vw;
    }

    .viewport {
      display: flex;
      justify-content: center;

      .category-list {
        width: 25vw;
        height: 26vw;
        margin-top: 1vw;
        position: relative;
        left: -10vw;
        border-radius: 15px;
        border: 2px solid #2BB24F;
        text-align: center;
        box-shadow: -10px 5px #2BB24F;

        .category-item {
          padding: 2vw 3vw 2vw 3vw;
          border-top: 1px solid #2BB24F;
          font-family: 'Bebas Neue';
          font-weight: 400;
          font-size: 2.5vw;
          color: #0B72E8;
        }

        .category-item:first-of-type {
          border: none;
        }

        .category-item:hover {
          cursor: pointer;
          background-color: #eaea3d;
        }
      }

      .info-list {
        width: 20vw;
        position: relative;
        right: 0;
        margin-top: 2vw;

        details {
          padding: 1vw 0 1vw 0;

          summary {
            list-style: none;
            font-family: 'Bebas Neue';
            font-weight: 400;
            font-size: 2.5vw;
            color: #00477D;

            i {
              transition: rotate 0.5s ease-in-out;
            }
          }

          .tec {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35vw;
            background-color: #FFFFFF;
            border-radius: 24px;
            margin: 1vw;
            padding: 2vw;
            text-align: center;

            .principal-tec {
              display: block;
              width: 15vw;
              margin-right: 2vw;

              img {
                width: 10vw;
              }

              h3 {
                font-family: 'Bebas Neue';
                font-weight: 400;
                font-size: 2.5vw;
                line-height: 2.604vw;
                color: rgb(33, 44, 101);
                margin: 2vw 0 0 0;
              }
            }

            p {
              font-family: "Ubuntu";
              font-weight: 400;
              font-size: 1.35vw;
              text-align: left;
            }
          }
        }

        details[open] {
          i {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
</style>
