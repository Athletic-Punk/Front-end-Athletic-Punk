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
  { id: 0, picture: '/sports/ginastica-ritmica/banner/01.png' },
  { id: 1, picture: '/sports/ginastica-ritmica/banner/02.png' },
  { id: 2, picture: '/sports/ginastica-ritmica/banner/03.png' },
  { id: 3, picture: '/sports/ginastica-ritmica/banner/04.png' },
  { id: 4, picture: '/sports/ginastica-ritmica/banner/05.png' },
  { id: 5, picture: '/sports/ginastica-ritmica/banner/06.png' }
];
const introductionText = '<p>A ginástica rítmica é uma modalidade esportiva que combina elementos da ginástica com a dança e o uso de aparelhos, como fita, corda, arco, maças e bola. O esporte é praticado principalmente por mulheres, sendo uma das disciplinas mais estéticas e coreográficas dos Jogos Olímpicos. A ginástica rítmica exige habilidades como flexibilidade, força, ritmo, coordenação e expressão corporal, resultando em apresentações dinâmicas e visualmente atraentes.</p><p>No Brasil, a ginástica rítmica tem crescido consideravelmente, com atletas como Carolina Rodrigues e Claudia Silva, que se destacaram nas competições internacionais.</p>';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'equipment', section: 'EQUIPAMENTOS PRINCIPAIS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>A ginástica rítmica, como modalidade esportiva, surgiu na Europa nas décadas de 1940 e 1950, inicialmente como uma forma de aprimorar a expressão corporal através de movimentos acrobáticos e de dança. Foi na União Soviética que a ginástica rítmica ganhou força, com o país criando o primeiro campeonato nacional em 1950.</p><p>A ginástica rítmica foi oficialmente incluída nos Jogos Olímpicos de 1984 para as mulheres, sendo que antes disso a modalidade já havia sido praticada em competições internacionais, como o Campeonato Mundial. No Brasil, a ginástica rítmica se tornou popular a partir da década de 1980, com o apoio de escolas e clubes especializados.</p>' },
  { id: 'rules', text: '<p><span style="color: #D9B341";>Objetivo:</span> O principal objetivo da ginástica rítmica é executar uma série de movimentos com os aparelhos, mantendo a harmonia com a música e demonstrando habilidade técnica. Os atletas são avaliados com base na precisão dos movimentos, na fluidez da coreografia e na forma como manipulam os aparelhos.</p>' },
  { id: 'equipment', text: '<ul><li><span style="color: #D9B341";>Fita:</span> Usada para realizar movimentos fluídos e de grande amplitude. A fita pode ser manuseada de diversas maneiras, com lançamentos e rotações.</li><li><span style="color: #D9B341";>Corda:</span> Usada para saltos, giros e movimentos acrobáticos, exigindo grande precisão e coordenação entre as mãos e os pés.</li><li><span style="color: #D9B341";>Arco:</span> Utilizado para realizar movimentos circulares, giros e manobras coordenadas com o corpo e os pés.</li><li><span style="color: #D9B341";>Maças:</span> Movimentos com as maças exigem grande coordenação entre os dois aparelhos, com lançamentos, rotações e trocas de posição no ar.</li><li><span style="color: #D9B341";>Bola:</span> O atleta realiza uma série de movimentos, incluindo lançamentos e saltos, mantendo a bola no controle constante.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Flexibilidade e Amplitude de Movimento:</span> A ginástica rítmica exige que as atletas tenham uma grande flexibilidade, especialmente nas pernas e na coluna, para realizar movimentos amplos e acrobáticos com os aparelhos. A flexibilidade é uma das características mais marcantes da modalidade.</li><li><span style="color: #D9B341";>Coordenação e Precisão:</span> O controle dos aparelhos deve ser feito com extrema precisão. O ritmo e a sincronização dos movimentos entre o corpo e o aparelho são fundamentais para garantir uma execução bem-sucedida.</li><li><span style="color: #D9B341";>Ritmo e Expressão Corporal:</span> A ginástica rítmica é uma combinação de esporte e arte. A atleta deve demonstrar fluidez no movimento e expressar emoções enquanto executa a rotina. A música desempenha um papel importante, pois a coreografia é ajustada para se alinhar com os tempos e as mudanças da música.</li><li><span style="color: #D9B341";>Força e Controle:</span> Apesar de ser uma modalidade de movimentos suaves e elegantes, a ginástica rítmica exige força para executar movimentos precisos, saltos e giros, além de controle físico para manusear os aparelhos corretamente.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> Embora a ginástica rítmica seja predominantemente individual, as competições por equipes promovem o trabalho coletivo e a colaboração.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> O esporte é praticado em clubes e academias, o que facilita o desenvolvimento de amizades e interação com outros praticantes.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Flexibilidade:</span> A ginástica rítmica ajuda a melhorar a flexibilidade do corpo, principalmente em movimentos de alongamento e nas articulações.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> A prática regular de ginástica rítmica fortalece os músculos, especialmente os abdominais, pernas e braços, que são exigidos constantemente nos movimentos com os aparelhos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação e equilíbrio:</span> Ao trabalhar com diferentes aparelhos, as ginastas aprimoram a coordenação motora e o equilíbrio corporal.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência e agilidade:</span> A ginástica rítmica exige resistência e agilidade, principalmente durante os movimentos acrobáticos que envolvem saltos e mudanças rápidas de direção.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e disciplina:</span> A modalidade exige concentração intensa e foco para realizar cada movimento corretamente, o que desenvolve uma grande disciplina mental.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Criatividade e expressão artística:</span> A ginástica rítmica permite que a atleta se expresse de forma criativa, desenvolvendo habilidades artísticas além da capacidade física.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Redução do estresse:</span> A combinação de movimentos fluídos com a música ajuda a reduzir os níveis de estresse e ansiedade, promovendo uma sensação de bem-estar.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Aulas de Ginástica Rítmica', text: 'Aulas de Ginástica Rítmica: Para iniciantes, é importante começar com aulas de ginástica rítmica em escolas ou academias especializadas. Aulas com instrutores experientes são essenciais para aprender as técnicas e desenvolver habilidades.' },
  { id: 1, title: 'Equipamentos adequados:', text: 'As ginastas utilizam roupas confortáveis, como leotards (uniformes de ginástica), além dos aparelhos específicos para os treinos. A escolha de um local adequado, com piso adequado e equipamento de segurança, também é importante.' },
  { id: 2, title: 'Treinamento físico', text: 'O treinamento físico de atletas de ginástica rítmica é extremamente rigoroso e abrange diversas áreas para desenvolver força, flexibilidade, coordenação, equilíbrio e resistência.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Para quem está começando, é recomendado praticar pelo menos 2 a 3 vezes por semana, com sessões que duram de 1 a 2 horas.' },
  { id: 1, title: 'Avançados', text: 'Ginastas mais avançadas treinam de 4 a 5 vezes por semana, com foco em aperfeiçoar as rotinas e a execução dos movimentos de aparelhos.' }
];
const curiositiesItens = [
  { id: 'one', text: 'A ginástica rítmica é uma das poucas modalidades olímpicas exclusivamente femininas, com a inclusão de homens sendo muito recente em algumas competições.' },
  { id: 'two', text: 'A música utilizada nas competições de ginástica rítmica deve ser instrumental, com exceção de algumas variações em campeonatos de base.' },
  { id: 'three', text: 'A ginástica rítmica é frequentemente chamada de "esporte da graça" devido à combinação de movimentos fluidos, acrobáticos e artísticos.' },
  { id: 'four', text: 'A ginástica rítmica é uma modalidade em constante evolução, com novos movimentos e aparelhos sendo introduzidos ao longo dos anos para manter a competição interessante e desafiadora.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/ginastica-ritmica/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'Federação Internacional de Ginástica Rítmica (FIG)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Ginástica (CBG)' },
  { id: 3, link: '', site: 'História da Ginástica Rítmica - Portal Educação' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="GINÁSTICA RÍTMICA" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/ginastica-ritmica/introduction.jpeg" />
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
