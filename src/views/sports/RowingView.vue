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
  { id: 0, picture: '/sports/remo/banner/01.png' },
  { id: 1, picture: '/sports/remo/banner/02.png' },
  { id: 2, picture: '/sports/remo/banner/03.png' },
  { id: 3, picture: '/sports/remo/banner/04.png' },
  { id: 4, picture: '/sports/remo/banner/05.png' },
  { id: 5, picture: '/sports/remo/banner/06.png' }
];
const introductionText = 'O remo é um esporte aquático praticado em barcos, onde os atletas utilizam remos para impulsionar o barco na água. Ele pode ser realizado de forma competitiva ou recreativa, com uma rica história e uma grande tradição nos Jogos Olímpicos. O remo exige força, resistência, técnica e trabalho em equipe, sendo uma das modalidades mais desafiadoras e completas do esporte. No Brasil, o remo é praticado com destaque em competições nacionais e internacionais, com alguns atletas conquistando medalhas importantes em campeonatos de alto nível.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'O remo tem origens na Antiguidade, sendo praticado por civilizações como os egípcios e gregos, que usavam remos para a navegação e batalhas navais. No entanto, a forma moderna do remo como esporte surgiu na Inglaterra no século XIX, com competições organizadas e regras padronizadas. O remo foi incluído nos Jogos Olímpicos de Verão em 1900, inicialmente apenas para homens, e mais tarde para mulheres, em 1976. Desde então, o remo tem sido uma das principais atrações das Olimpíadas, com várias modalidades de competição sendo disputadas, incluindo provas de single, duplo, quadruplo e oito com ou sem timoneiro.' },
  { id: 'rules', text: '<p>O remo pode ser praticado em várias modalidades, que incluem diferentes tipos de embarcações e número de remadores. As regras variam de acordo com o tipo de competição, mas em geral incluem:</p><ul><li><span style="color: #D9B341";>Provas de Barco a Remo:</span> As provas podem ser realizadas em distâncias variadas, como 500 metros, 1000 metros ou 2000 metros, com os atletas competindo em barcos de um, dois, quatro ou oito remadores. O objetivo é chegar ao final da pista no menor tempo possível.</li><li><span style="color: #D9B341";>Barcos e Equipamentos:</span> Existem vários tipos de barcos no remo, sendo os mais comuns o "skiff" (single), o "double" (dobro), o "quad" (quatro) e o "eight" (oito). Em algumas competições, o timoneiro (que controla a direção do barco) é incluído, especialmente nas provas de oito remadores.</li><li><span style="color: #D9B341";>Estilo de Remo:</span> O remo pode ser praticado com diferentes estilos, sendo os mais comuns o "remo de costas" (onde os remadores ficam virados para trás) e o "remo de frente" (onde os remadores se posicionam de frente para a direção do barco).</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Técnica de Remada:</span> A técnica de remada envolve a coordenação precisa dos movimentos dos remadores. A remada começa com a lâmina do remo completamente imersa na água, sendo puxada até a parte final do movimento, onde é retirado da água para iniciar a próxima remada. A sincronia entre os remadores é crucial, especialmente em provas em equipe.</li><li><span style="color: #D9B341";>Força e Resistência:</span> O remo exige muita força física, principalmente nos membros inferiores, core (abdômen e costas) e braços. O esporte também demanda grande resistência aeróbica, pois as competições são intensas e de alta duração.</li><li><span style="color: #D9B341";>Coordenação e Trabalho em Equipe:</span> O remo é um dos esportes que mais exige trabalho em equipe, já que os remadores devem sincronizar perfeitamente seus movimentos para manter o barco equilibrado e rápido. Cada remador deve entender seu papel dentro da equipe, e a comunicação é fundamental para o sucesso.</li><li><span style="color: #D9B341";>Estratégia de Competição:</span> Em competições de remo, as estratégias incluem a distribuição da força ao longo da corrida, o gerenciamento da velocidade e a adaptação às condições do vento e da água. Muitas vezes, as equipes usam uma técnica de aceleração gradual, começando mais devagar e aumentando a velocidade ao longo da prova.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> O remo é um esporte de equipe, o que promove a interação e a colaboração entre os atletas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Amizades:</span> As competições de remo criam um ambiente de camaradagem e respeito, pois os remadores devem confiar uns nos outros para atingir o objetivo comum.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência cardiovascular:</span> Aumento da resistência cardiovascular devido à natureza aeróbica do esporte.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> Fortalecimento muscular, especialmente nas pernas, costas, braços e abdômen, devido à força necessária para remar com eficiência.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Flexibilidade e equilíbrio:</span> Melhora na flexibilidade e no equilíbrio, já que os remadores precisam manter uma postura estável e controlar o movimento do barco.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Concentração e foco:</span> O remo exige uma alta concentração e foco, pois os atletas devem manter a sincronia e o ritmo durante a competição.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Disciplina:</span> O esporte também desenvolve a disciplina e a determinação, já que os treinos são exigentes e requerem comprometimento.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha de Modalidade', text: 'Decida se quer praticar o remo em competições ou como atividade recreativa.' },
  { id: 1, title: 'Aulas e Instrutores', text: 'Para iniciantes, é recomendável procurar um clube ou instrutor especializado para aprender a técnica básica de remada e a postura correta no barco.' },
  { id: 2, title: 'Equipamentos', text: 'Comece com um remo adequado e, caso pratique em equipe, participe de treinos em grupo. Em muitos clubes, os barcos e equipamentos são fornecidos.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Para quem está começando, treinos 2 a 3 vezes por semana são recomendados, focando no desenvolvimento da técnica e resistência.' },
  { id: 1, title: 'Avançados', text: 'Remadores avançados geralmente treinam de 4 a 6 vezes por semana, com foco em resistência, velocidade e sincronização da equipe.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O remo tem uma das competições mais tradicionais e prestigiosas do mundo, a Regata Oxford-Cambridge, que ocorre anualmente no rio Tâmisa, na Inglaterra, desde 1829.' },
  { id: 'two', text: 'A prova de remo nos Jogos Olímpicos de 2020 foi a mais longa da história, com a participação de 14 equipes em provas de duplo e quadruplo scull.' },
  { id: 'three', text: 'O Brasil tem uma tradição crescente no remo, com atletas conquistando medalhas em campeonatos mundiais e pan-americanos.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/remo/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'World Rowing' },
  { id: 1, link: '', site: 'Confederação Brasileira de Remo (CBR)' },
  { id: 3, link: '', site: 'Journal of Sports Science' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="REMO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/remo/introduction.jpg" />
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
