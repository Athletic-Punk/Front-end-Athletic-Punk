<script setup>
import HeaderView from '@/components/desktop/elements/HeaderView.vue'
import FooterView from '@/components/desktop/elements/FooterView.vue';
import banner from '@/components/desktop/sports/banner.vue';
import introduction from '@/components/desktop/sports/introduction.vue';
import generalKnowledge from '@/components/desktop/sports/generalKnowledge.vue';
import benefits from '@/components/desktop/sports/benefits.vue';
import startOften from '@/components/desktop/sports/startOften.vue';
import curiosities from '@/components/desktop/sports/curiosities.vue';
import athletes from '@/components/desktop/sports/athletes.vue';
import ResearchSources from '@/components/desktop/sports/researchSources.vue';

const titleImg = [
  { id: 0, picture: '/sports/hipismo/banner/01.webp' },
  { id: 1, picture: '/sports/hipismo/banner/02.webp' },
  { id: 2, picture: '/sports/hipismo/banner/03.webp' },
  { id: 3, picture: '/sports/hipismo/banner/04.jpeg' },
  { id: 4, picture: '/sports/hipismo/banner/05.jpg' }
];
const introductionText = 'O hipismo é uma modalidade esportiva que envolve o cavalo e o cavaleiro em uma série de competições que testam a habilidade de ambos em diversas atividades, como saltos, adestramento e corridas. O esporte, que é praticado desde a Antiguidade, é altamente técnico e exige uma estreita parceria entre o cavaleiro e seu cavalo. Considerado um dos esportes mais elegantes e nobres, o hipismo é popular em diversos países ao redor do mundo, sendo um dos destaques dos Jogos Olímpicos desde sua inclusão nas primeiras edições. No Brasil, atletas como Rodrigo Pessoa e Álvaro Afonso de Miranda Neto são reconhecidos internacionalmente pelas suas conquistas no esporte.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'O hipismo tem raízes na antiga Grécia, onde competições equestres eram realizadas, especialmente nas Olimpíadas antigas. No entanto, a modalidade moderna como conhecemos surgiu na Europa durante o século XVIII, quando a equitação passou a ser valorizada como uma habilidade militar e de lazer. Com o tempo, o hipismo foi se diversificando e dando origem a diferentes disciplinas, incluindo o salto, o adestramento e o concurso completo de equitação. O hipismo foi incluído nos Jogos Olímpicos de Paris, em 1900, e tem sido parte integrante dos Jogos Olímpicos desde então, com exceção de algumas edições. No Brasil, o hipismo se popularizou no século XX, com o surgimento de grandes campeões e a formação de clubes especializados.' },
  { id: 'rules', text: '<p>O hipismo é composto por várias modalidades, sendo as mais populares o salto, o adestramento e o concurso completo de equitação. Cada uma dessas modalidades tem suas regras específicas:</p><ul><li><span style="color: #D9B341";>Salto (Jumping):</span> No salto, o cavaleiro deve percorrer um percurso composto por uma série de obstáculos, como cercas, muros e barras, sem derrubá-los. A prova é cronometrada, e o objetivo é completar o percurso com o menor número de faltas e no menor tempo possível. O número de faltas é determinado por cada obstáculo derrubado ou a recusa do cavalo em saltar.</li><li><span style="color: #D9B341";>Adestramento (Dressage):</span> O adestramento é uma prova de precisão, onde o cavaleiro e o cavalo executam uma série de movimentos e figuras em um espaço delimitado, com o objetivo de demonstrar a harmonia e a técnica entre eles. O adestramento é julgado por um painel de juízes, que avaliam a elegância, a precisão e o controle.</li><li><span style="color: #D9B341";>Concursos Completos (Eventing):</span> O concurso completo é uma combinação de adestramento, salto e cross-country, sendo uma das provas mais desafiadoras do hipismo. Os cavaleiros devem realizar uma série de obstáculos em diferentes terrenos, incluindo saltos em ambientes naturais, como florestas e campos.</li><li><span style="color: #D9B341";>Revezamento e Corridas de Cavalos:</span> Embora menos comuns nos Jogos Olímpicos, as corridas de cavalos e outras modalidades de revezamento também fazem parte do hipismo em outras competições.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Equitação:</span> A equitação é a arte de montar e controlar um cavalo, sendo fundamental para todas as modalidades do hipismo. O cavaleiro deve aprender a equilibrar-se corretamente na sela, utilizando as pernas, os braços e o corpo para guiar o cavalo. A postura correta é essencial para o controle do cavalo durante as provas.</li><li><span style="color: #D9B341";>Comunicação Cavaleiro-Cavalo:</span> A relação entre o cavaleiro e o cavalo é essencial para o sucesso no hipismo. O cavaleiro deve ser capaz de ler os sinais do cavalo, entender suas reações e guiá-lo com firmeza e gentileza. A conexão emocional entre cavaleiro e cavalo pode influenciar significativamente o desempenho.</li><li><span style="color: #D9B341";>Obstáculos e Técnicas de Salto:</span> Durante as provas de salto, o cavaleiro deve garantir que o cavalo realize os saltos de maneira limpa, sem derrubar os obstáculos. Técnicas de treino, como o trabalho de impulsão e a escolha do momento certo para saltar, são fundamentais para um bom desempenho.</li><li><span style="color: #D9B341";>Treinamento:</span> O treinamento no hipismo é intensivo e envolve a preparação física e mental tanto do cavalo quanto do cavaleiro. O cavalo deve ser treinado para responder rapidamente aos comandos do cavaleiro, enquanto este deve melhorar sua técnica de pilotagem, resistência e controle.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O hipismo promove o espírito de equipe em algumas modalidades, como o revezamento, além de estimular o ambiente social em clubes e torneios.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Estimula a interação entre cavaleiros e outros atletas do esporte, criando uma rede de apoio e aprendizagem.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Convivência com a natureza:</span> O esporte também permite a convivência com a natureza, especialmente nas modalidades de cross-country.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força e flexibilidade:</span> Melhora da força e flexibilidade, especialmente nos músculos das pernas, costas e core.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Aumenta a coordenação motora, reflexos rápidos e agilidade.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência cardiovascular:</span> Promove a resistência cardiovascular, pois o treinamento envolve exercícios contínuos e o trabalho com o cavalo.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora a postura e estabilidade:</span> O trabalho de salto e de técnicas de adestramento fortalece a postura e a estabilidade do cavaleiro.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora na concentração:</span> Desenvolve habilidades de concentração, já que o hipismo exige total atenção ao cavalo, ao percurso e ao ambiente.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora a paciência:</span> Estimula a paciência e o autocontrole, já que o cavaleiro precisa saber como lidar com o cavalo de maneira equilibrada.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Ajuda em decisões rápidas:</span> Melhora a tomada de decisões rápidas e eficazes, essencial em competições.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolher um Centro de Hipismo ou Clube', text: 'Comece a treinar em um centro de hipismo ou clube especializado, onde você poderá aprender as técnicas básicas de equitação e cuidados com os cavalos.' },
  { id: 1, title: 'Aulas e Instrutores', text: 'Procure por aulas com instrutores qualificados para aprender a montar, a se comunicar com o cavalo e as técnicas de cada modalidade.' },
  { id: 2, title: 'Equipamentos e Cuidados com o cavalo', text: 'É essencial usar equipamentos de segurança, como capacete, botas e luvas. Aprenda a cuidar de seu cavalo, alimentá-lo e mantê-lo saudável, já que o bem-estar do cavalo é fundamental para o esporte.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Para iniciantes, recomenda-se treinar de 2 a 3 vezes por semana, alternando entre aulas teóricas e práticas.' },
  { id: 1, title: 'Avançados', text: 'Cavaleiros mais experientes podem treinar de 4 a 6 vezes por semana, com treinos focados no aprimoramento das habilidades técnicas e participação em competições.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O Brasil é um dos países de destaque no hipismo, com várias medalhas olímpicas e internacionais conquistadas, especialmente no salto.' },
  { id: 'two', text: 'O cavalo mais caro já vendido no hipismo foi o "Florett", que foi adquirido por US$ 15 milhões para competições de salto.' },
  { id: 'three', text: 'No hipismo, os cavalos são avaliados por sua habilidade de salto, velocidade e resistência, com algumas raças sendo mais adequadas para determinadas modalidades.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/hipismo/athletes/.PNG', name: 'Rodrigo Pessoa', about: '   Rodrigo Pessoa é o maior nome do hipismo brasileiro e um dos maiores do mundo. Campeão olímpico e mundial, ele se destacou por sua habilidade com os cavalos e suas vitórias em competições de saltos internacionais, incluindo a medalha de ouro nos Jogos Olímpicos de Atenas em 2004. Rodrigo é uma verdadeira lenda do esporte, com uma carreira vitoriosa.' },
  { id: 1, picture: '/sports/hipismo/athletes/.PNG', name: 'César Almeida', about: '   Rodrigo Pessoa é o maior nome do hipismo brasileiro e um dos maiores do mundo. Campeão olímpico e mundial, ele se destacou por sua habilidade com os cavalos e suas vitórias em competições de saltos internacionais, incluindo a medalha de ouro nos Jogos Olímpicos de Atenas em 2004. Rodrigo é uma verdadeira lenda do esporte, com uma carreira vitoriosa.' },
  { id: 2, picture: '/sports/hipismo/athletes/.PNG', name: 'Marcos Pessoa', about: '   Marcos Pessoa é um dos nomes mais reconhecidos do hipismo brasileiro. Ele tem se destacado nas competições de saltos, com uma carreira internacional de sucesso, com vitórias no circuito internacional de saltos.' },
  { id: 3, picture: '/sports/hipismo/athletes/.PNG', name: 'Felipe Amaral', about: '   Felipe Amaral é um cavaleiro de destaque no Brasil, com passagens importantes por torneios internacionais e resultados expressivos. Sua habilidade e sucesso no hipismo de saltos o tornaram uma das promessas do esporte.' },
  { id: 4, picture: '/sports/hipismo/athletes/.PNG', name: 'Andre Paro', about: '   Andre Paro é um cavaleiro em ascensão no cenário internacional. Ele se destacou nas competições de saltos e tem se mostrado uma das grandes promessas para o futuro do hipismo no Brasil.' },
  { id: 5, picture: '/sports/hipismo/athletes/.PNG', name: 'Ana Carolina Santucci', about: '   Ana Carolina Santucci é uma das melhores cavaleiras do Brasil, com títulos importantes em competições internacionais e campeonatos nacionais. Ela se destaca pela sua habilidade em competições de salto e também por sua liderança na equipe brasileira de hipismo.' },
  { id: 6, picture: '/sports/hipismo/athletes/.PNG', name: 'Maria Luiza Ladeira', about: '   Maria Luiza Ladeira é uma cavaleira de destaque no Brasil. Com vitórias importantes no Campeonato Brasileiro e competições internacionais, ela tem sido uma das principais promessas do hipismo feminino brasileiro.' },
  { id: 7, picture: '/sports/hipismo/athletes/.PNG', name: 'Karla Rangel', about: '   Karla Rangel tem sido uma das principais representantes do hipismo feminino no Brasil. Ela se destaca pela sua técnica e habilidade no salto, sendo uma das favoritas em competições nacionais e internacionais.' },
  { id: 8, picture: '/sports/hipismo/athletes/.PNG', name: 'Renata Ribeiro', about: '   Renata Ribeiro é uma cavaleira em crescimento no Brasil, com boas performances em campeonatos nacionais e internacionais. Ela está se tornando uma das principais atletas do hipismo feminino no Brasil.' },
  { id: 9, picture: '/sports/hipismo/athletes/.PNG', name: 'Juliana Carvalho', about: '   Juliana Carvalho é uma das promessas do hipismo no Brasil, com boa performance em torneios nacionais e internacionais. Ela é conhecida pela sua habilidade em saltos e sua dedicação ao esporte.' },
];



const sources = [
  { id: 0, link: '', site: 'Fédération Equestre Internationale (FEI)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Hipismo (CBH)' },
  { id: 3, link: '', site: 'International Equestrian Federation' },
  { id: 4, link: '', site: 'Journal of Sports Science' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="HIPISMO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/hipismo/introduction.jpg" />
    <general-knowledge :menuItens="menuItensSections" :infoItens="infoItensText" />
    <benefits :benefitsSections="benefitsItens" />
    <start-often :startItens="howStart" :oftenItens="whatOften" />
    <curiosities :curiositiesItens="curiositiesItens" />
    <athletes :athletesItens="ourAthletes" />
    <research-sources :sourcesItens="sources" />
    <RouterLink to="/esportes" id="button">VEJA OUTRO ESPORTE</RouterLink>
  </main>
  <div class="flag">
    <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
  </div>
  <FooterView />
</template>

<style scoped>
#button {
  margin-left: 34vw;
  padding: 2vw 3vw 2vw 3vw;
  font-family: 'Bebas Neue';
  font-weight: 400;
  font-size: 4vw;
  color: #fff;
  text-decoration: none;
  border-radius: 24px;
  background: linear-gradient(45deg, #2BB24F, #D9B341);
}
</style>
