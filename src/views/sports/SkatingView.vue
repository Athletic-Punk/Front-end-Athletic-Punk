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
  { id: 0, picture: '/sports/patinacao/banner/01.webp' },
  { id: 1, picture: '/sports/patinacao/banner/02.jpg' },
  { id: 2, picture: '/sports/patinacao/banner/03.jpg' },
  { id: 3, picture: '/sports/patinacao/banner/04.jpg' },
  { id: 4, picture: '/sports/patinacao/banner/05.jpg' }
];
const introductionText = 'A patinação é uma modalidade esportiva que envolve o uso de patins para realizar movimentos e manobras em diversas superfícies, como pistas de gelo, asfalto e concreto. Pode ser praticada de forma recreativa ou competitiva, com várias disciplinas, como patinação artística, patinação de velocidade e patinação inline (com patins em linha). A patinação artística, especialmente, é conhecida por sua elegância e precisão, sendo um dos destaques dos Jogos Olímpicos de Inverno. A prática oferece benefícios tanto físicos quanto mentais, desenvolvendo habilidades motoras, equilíbrio e coordenação. No Brasil, a patinação tem ganhado popularidade, com atletas conquistando vitórias em campeonatos internacionais.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'A história da patinação remonta ao século XVIII, quando os primeiros patins foram inventados na Europa, inicialmente com lâminas de metal fixadas em botas de madeira para deslizar sobre o gelo. A patinação no gelo se popularizou nas cortes europeias, especialmente na Inglaterra, e logo se espalhou para outros países. O esporte se tornou um evento olímpico oficial em 1924, quando foi incluído nos Jogos Olímpicos de Inverno em sua forma artística. No entanto, as competições de patinação de velocidade e patinação artística ganharam destaque nas edições subsequentes. A patinação inline, com patins em linha, surgiu mais tarde, na década de 1980, e rapidamente se tornou uma prática popular tanto em ambientes urbanos quanto em competições esportivas.' },
  { id: 'rules', text: '<p>A patinação envolve várias modalidades e regras específicas para cada uma delas. As mais populares incluem:</p><ul><li><span style="color: #D9B341";>Patinação Artística no Gelo:</span> Nessa modalidade, os patinadores executam uma série de movimentos e saltos em uma pista de gelo. A performance é avaliada por juízes com base na execução dos movimentos, estilo e precisão. O objetivo é mostrar a harmonia entre o patinador e a música, com a execução de elementos técnicos, como piruetas, saltos e sequências de passos. A competição é realizada em programas curtos e longos.</li><li><span style="color: #D9B341";>Patinação de Velocidade (Speed Skating):</span> A patinação de velocidade é realizada em uma pista oval de gelo e é focada em correr o mais rápido possível. Existem provas de diferentes distâncias, tanto individuais quanto por equipes, e o objetivo é completar o percurso no menor tempo possível. O esporte exige resistência, agilidade e técnica para alcançar altas velocidades sem perder o controle.</li><li><span style="color: #D9B341";>Patinação Inline:</span> Na patinação inline, os atletas usam patins com as lâminas dispostas em linha reta (em vez de quatro rodas paralelas). A modalidade inclui várias formas, como corrida de velocidade, manobras e freestyle. A patinação inline é praticada tanto como atividade recreativa quanto competitiva, e as competições podem acontecer em pistas de rua ou de circuito fechado.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Equilíbrio e Postura:</span> A patinação exige um bom controle de equilíbrio e postura. O patinador deve manter uma posição ligeiramente inclinada para frente, com os joelhos flexionados, para obter melhor controle e velocidade. A habilidade de manter o equilíbrio durante manobras e saltos é essencial em todas as modalidades.</li><li><span style="color: #D9B341";>Técnica de Movimento:</span> A técnica de movimento envolve a utilização de passadas precisas e controladas, tanto para ganhar velocidade quanto para fazer curvas ou realizar manobras. No gelo, o patinador faz uso do impulso lateral para ganhar velocidade, enquanto nos patins inline, a técnica de "deslizar" com os pés paralelos é fundamental.</li><li><span style="color: #D9B341";>Manobras e Saltos:</span> No caso da patinação artística, as manobras incluem piruetas, saltos (como o salto Axel e o salto Lutz) e sequências de passos. A execução precisa e estilosa desses movimentos é fundamental para a obtenção de boas notas nas competições. Já na patinação de velocidade, a técnica de curvas e aceleração durante as retas é essencial para otimizar o tempo e a performance.</li><li><span style="color: #D9B341";>Treinamento:</span> O treinamento na patinação envolve o desenvolvimento do equilíbrio, resistência, flexibilidade e a habilidade técnica para realizar as manobras e saltos. Além disso, a prática regular é necessária para aprimorar a velocidade, a técnica de corrida e a habilidade de manobrar com precisão.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> A patinação pode ser praticada individualmente ou em grupo, promovendo um ambiente de camaradagem e competição saudável.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> As competições de patinação incentivam a interação entre atletas de diferentes países, promovendo o intercâmbio cultural e a construção de amizades.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Networking:</span> Os clubes de patinação oferecem uma excelente oportunidade para socializar e aprender, tanto para iniciantes quanto para atletas avançados.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência cardiovascular:</span> Melhora da resistência cardiovascular, especialmente na patinação de velocidade, que exige altos níveis de energia.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> Aumento da força muscular, particularmente nas pernas, glúteos e core, devido à necessidade de controle constante do corpo.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Flexibilidade e coordenação motora:</span> Desenvolvimento da flexibilidade e da coordenação motora, essenciais para a execução de manobras e saltos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Equilíbrio:</span> Melhora do equilíbrio, pois a patinação exige controle corporal para deslizar sem cair.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco:</span> A patinação exige uma alta concentração, pois o patinador precisa focar na execução precisa dos movimentos, na velocidade e no controle do corpo.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora no humor:</span> O esporte também pode ajudar a reduzir o estresse e promover o bem-estar mental, pois a prática física libera endorfinas e melhora o humor.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Forma de expressão:</span> A patinação artística, em particular, também pode ser uma forma de expressão pessoal, proporcionando uma sensação de realização.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha de Modalidade e Prática Regular', text: 'Decida qual tipo de patinação mais lhe interessa: artística, velocidade ou inline e pratique. Comece com sessões curtas e aumente a intensidade gradualmente.' },
  { id: 1, title: 'Aulas e Instrutores', text: 'Para iniciantes, é essencial procurar aulas com instrutores especializados, que ensinarão o básico da postura, equilíbrio e movimentos.' },
  { id: 2, title: 'Equipamentos', text: 'Invista em patins de boa qualidade, de acordo com a modalidade escolhida, além de equipamentos de proteção, como capacete, joelheiras e cotoveleiras.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Para iniciantes, recomenda-se treinar de 2 a 3 vezes por semana, com foco no desenvolvimento do equilíbrio e das habilidades técnicas.' },
  { id: 1, title: 'Avançados', text: 'Patinadores avançados podem treinar 4 a 5 vezes por semana, incluindo treinos específicos para melhorar a velocidade, os saltos e a resistência.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O primeiro campeonato mundial de patinação artística foi realizado em 1896.' },
  { id: 'two', text: 'A patinação artística no gelo inclui programas curtos e longos, com atletas realizando combinações de saltos e piruetas.' },
  { id: 'three', text: 'Patinadores olímpicos como Michelle Kwan e Yuzuru Hanyu são conhecidos mundialmente por suas habilidades e performances extraordinárias.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/patinacao/athletes/.PNG', name: 'Diego de Oliveira', about: 'Diego de Oliveira é um dos maiores nomes da patinação artística brasileira. Ele conquistou títulos importantes em campeonatos Pan-americanos e tem sido uma grande promessa do esporte no Brasil. Seu estilo técnico e artístico tem conquistado o público e jurados em competições internacionais.' },
  { id: 1, picture: '/sports/patinacao/athletes/.PNG', name: 'Leandro Rodrigues', about: 'Leandro Rodrigues é um dos patinadores mais destacados no Brasil, com vitórias em campeonatos nacionais e internacionais de patinação de velocidade. Sua disciplina e foco nas competições internacionais fazem dele uma referência no esporte.' },
  { id: 2, picture: '/sports/patinacao/athletes/.PNG', name: 'Danilo Gama', about: 'Danilo Gama é outro patinador brasileiro que se destacou em competições internacionais, com boas colocações em torneios de velocidade. Ele também é conhecido por sua habilidade nas competições de pista e é um dos principais nomes da patinação no Brasil.' },
  { id: 3, picture: '/sports/patinacao/athletes/.PNG', name: 'Felipe dos Santos', about: 'Felipe dos Santos é um nome em ascensão na patinação artística no Brasil. Ele tem se destacado tanto em competições nacionais quanto internacionais, mostrando grande capacidade técnica e artística.' },
  { id: 4, picture: '/sports/patinacao/athletes/.PNG', name: 'Robson Freitas', about: 'Robson Freitas é um patinador de destaque, especializado em provas de velocidade. Ele conquistou boas colocações em campeonatos internacionais e continua a ser uma referência no Brasil.' },
  { id: 5, picture: '/sports/patinacao/athletes/.PNG', name: 'Luciana Diniz', about: 'Luciana Diniz é uma das maiores patinadoras brasileiras, com um currículo impressionante em competições internacionais. Ela tem sido uma referência no Brasil, destacando-se tanto em patinação artística quanto em provas de velocidade.' },
  { id: 6, picture: '/sports/patinacao/athletes/.PNG', name: 'Vanessa Ribeiro', about: 'Vanessa Ribeiro é uma patinadora que se destacou nas competições de patinação artística, com vitórias no Campeonato Brasileiro e bons resultados em campeonatos internacionais. Ela é uma das maiores representantes do esporte feminino no Brasil.' },
  { id: 7, picture: '/sports/patinacao/athletes/.PNG', name: 'Juliana Mendes', about: 'Juliana Mendes é uma atleta talentosa da patinação de velocidade, com grandes performances em campeonatos nacionais e internacionais. Seu potencial tem sido amplamente reconhecido pelos especialistas no esporte.' },
  { id: 8, picture: '/sports/patinacao/athletes/.PNG', name: 'Fernanda Oliveira', about: 'Fernanda Oliveira é uma patinadora que tem se destacado nas competições de velocidade, principalmente no Campeonato Pan-Americano. Ela é considerada uma das principais promessas do Brasil na patinação artística.' },
  { id: 9, picture: '/sports/patinacao/athletes/.PNG', name: 'Lívia Martins', about: 'Lívia Martins é uma das principais atletas da patinação artística no Brasil, com uma carreira crescente no cenário internacional. Sua performance técnica e sua habilidade no salto chamam a atenção de juízes e público.' },
];

const sources = [
  { id: 0, link: '', site: 'International Skating Union (ISU)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Patinação (CBP)' },
  { id: 3, link: '', site: 'Journal of Sports Science' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="PATINAÇÃO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/patinacao/introduction.jpg" />
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
