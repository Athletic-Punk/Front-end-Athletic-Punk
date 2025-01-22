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
  { id: 0, picture: '/sports/canoagem/banner/01.png' },
  { id: 1, picture: '/sports/canoagem/banner/02.png' },
  { id: 2, picture: '/sports/canoagem/banner/03.png' },
  { id: 3, picture: '/sports/canoagem/banner/04.png' },
  { id: 4, picture: '/sports/canoagem/banner/05.png' },
  { id: 5, picture: '/sports/canoagem/banner/06.png' }
];
const introductionText = 'A canoagem é um esporte aquático em que os atletas competem usando canoas ou caiaques, impulsionados por remos. Dependendo da modalidade, pode ser praticado em águas tranquilas ou em rios de forte correnteza. A canoagem é uma modalidade olímpica desde 1936, sendo popular em várias partes do mundo, especialmente em países com grande tradição em esportes aquáticos, como o Brasil, a Alemanha e a Hungria. O esporte exige força, técnica, resistência e excelente controle físico, além de ser uma excelente atividade para o fortalecimento muscular, especialmente do tronco e dos membros superiores.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'A canoagem tem origens ancestrais, remontando às primeiras civilizações que utilizavam canoas como meio de transporte e caça. Os indígenas norte-americanos foram pioneiros na construção de canoas, feitas de madeira e cascas de árvores. A versão moderna do esporte começou a tomar forma no século XIX, na Europa, com competições de canoagem sendo organizadas na Grã-Bretanha e na França. No entanto, a inclusão da canoagem nos Jogos Olímpicos aconteceu apenas em 1936, nas Olimpíadas de Berlim, inicialmente com provas de canoagem em águas tranquilas. Com o tempo, novas modalidades, como a canoagem slalom (em rios com obstáculos) e a canoagem de velocidade, foram incorporadas aos Jogos Olímpicos.' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Modalidades:</span> Existem várias modalidades de canoagem, incluindo: <p><span style="text-decoration: underline 2px;">Canoagem de Velocidade:</span> Competições em linha reta em águas tranquilas, com provas de 200m, 500m, 1000m, e em distâncias variadas.</p><p><span style="text-decoration: underline 2px;">Canoagem Slalom:</span> Consiste em descer rios de correnteza e passar por portagens (portas) montadas ao longo do percurso, que devem ser passadas na ordem correta.</p><p><span style="text-decoration: underline 2px;">Canoagem Marinha:</span> Realizada em mar aberto, com remadas desafiadoras em águas com ondas e vento.</p><p><span style="text-decoration: underline 2px;">Canoagem de Fundo:</span> Em águas abertas, com longas distâncias, exigindo resistência e habilidades de navegação.</p><p><span style="text-decoration: underline 2px;">Canoagem de Competições Mistas:</span> Provas que incluem equipes compostas por atletas de gêneros diferentes.</p></li><li><span style="color: #D9B341";>Equipamento:</span> As canoas e caiaques usados variam conforme a modalidade. Canoas (comumente para competições masculinas) exigem que o atleta reme de joelhos, enquanto os caiaques (mais comuns nas competições femininas) permitem que o atleta reme sentado. O remo utilizado também varia de acordo com o tipo de embarcação.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Remada:</span> A remada é o movimento fundamental da canoagem. Os atletas devem usar o remo de maneira eficiente para impulsionar a embarcação com o mínimo de esforço, mantendo um ritmo constante e velocidade máxima. O uso correto do corpo, da postura e do ângulo do remo são essenciais para garantir um desempenho de alto nível.</li><li><span style="color: #D9B341";>Equilíbrio e Coordenação:</span> O controle do equilíbrio na canoa ou no caiaque é essencial para evitar tombos, especialmente em competições de slalom ou em águas turbulentas. Os atletas devem ter uma boa coordenação motora para reagir rapidamente aos movimentos da embarcação.</li><li><span style="color: #D9B341";>Técnica de Respiração e Resistência:</span> Para longas distâncias, a canoagem exige uma técnica de respiração eficiente, permitindo que os atletas mantenham a resistência física durante o percurso. A resistência cardiovascular é desenvolvida com o treino constante e o foco no controle da respiração.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> A prática em equipe, especialmente nas provas de duplas, reforça o trabalho em equipe e as relações interpessoais. As competições de canoagem também estimulam o espírito de camaradagem e a cooperação entre os atletas.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força e resistência:</span> A canoagem é um excelente exercício cardiovascular, além de ser um esporte que trabalha intensamente os músculos do tronco, braços e ombros. A resistência muscular e o aumento da força nas pernas também são resultados importantes da prática.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e humor:</span> A canoagem desenvolve a concentração e o foco, devido à necessidade de navegar com precisão e rapidez. Além disso, o esporte é eficaz para a redução do estresse e para melhorar a saúde mental, proporcionando sensação de relaxamento após treinos intensos.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha de Modalidade', text: 'Identifique a modalidade que mais lhe interessa (canoagem de velocidade, slalom, etc.).' },
  { id: 1, title: 'Aulas e Técnica', text: 'Procure uma escola de canoagem ou um clube especializado que ofereça aulas ou treinos para iniciantes e inicie com a prática de remada básica, concentração na postura e equilíbrio são essenciais para evitar lesões e aumentar a eficiência.' },
  { id: 2, title: 'Equipamento', text: 'Para iniciantes, a maioria dos clubes oferece equipamentos, mas caso o atleta deseje adquirir, é importante escolher uma canoa ou caiaque adequado ao tipo de prática que deseja seguir.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Realizar treinos 2 a 3 vezes por semana, com foco em técnicas básicas e resistência.' },
  { id: 1, title: 'Atletas Avançados', text: 'Para melhorar a performance em competições, recomenda-se treinos diários, com variações de intensidade e volume, além de treinos específicos para resistência e velocidade.' }
];
const curiositiesItens = [
  { id: 'one', text: 'Países como a Alemanha, Hungria, Espanha e o Brasil têm se destacado em competições internacionais, especialmente em canoagem de velocidade e slalom.' },
  { id: 'two', text: 'O nome "canoagem" vem de "canoa", uma palavra de origem indígena americana, referindo-se às embarcações primitivas usadas pelos nativos da América.' },
  { id: 'three', text: 'O Brasil tem tradição na canoagem e já conquistou medalhas olímpicas, com destaque para o atleta Isaquias Queiroz, que ganhou várias medalhas em campeonatos mundiais e nas Olimpíadas.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/canoagem/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'International Canoe Federation (ICF)' },
  { id: 1, link: '', site: 'Sports Medicine Journal' },
  { id: 3, link: '', site: 'Olympic.org' },
  { id: 4, link: '', site: 'Brazilian Canoeing Confederation (CBCa)' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="CANOAGEM" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/canoagem/introduction.jpg" />
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
