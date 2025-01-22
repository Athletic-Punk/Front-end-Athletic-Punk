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
  { id: 0, picture: '/sports/skate/banner/01.png' },
  { id: 1, picture: '/sports/skate/banner/02.png' },
  { id: 2, picture: '/sports/skate/banner/03.png' },
  { id: 3, picture: '/sports/skate/banner/04.png' },
  { id: 4, picture: '/sports/skate/banner/05.png' },
  { id: 5, picture: '/sports/skate/banner/06.png' }
];
const introductionText = 'O skate é um esporte radical que combina equilíbrio, técnica e criatividade, sendo praticado em pistas, ruas e parques. Ele ganhou popularidade como um estilo de vida e forma de expressão cultural, especialmente entre jovens. No Brasil, o skate se consolidou como um dos esportes mais praticados, com destaque para atletas como Rayssa Leal, Pedro Barros e Letícia Bufoni, que elevaram o país ao topo das competições internacionais.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O skate surgiu na Califórnia, Estados Unidos, na década de 1940, como uma alternativa ao surfe em dias de mar calmo. Os primeiros skates eram feitos de tábuas de madeira com rodas adaptadas. Na década de 1970, o esporte ganhou uma identidade própria, com a criação de pistas de skate e a realização das primeiras competições.</p><p>No Brasil, o skate chegou nos anos 1970 e rapidamente conquistou espaço, especialmente em São Paulo e no Rio de Janeiro. Com a evolução do esporte, o país tornou-se referência, abrigando grandes eventos como o X Games e o STU Open.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Modalidades</span> <p>O skate é dividido em várias modalidades, cada uma com características e regras específicas:</p><p><span style="text-decoration: underline 3px">Street:</span> Percurso com obstáculos como escadas, corrimões e bordas. O objetivo é realizar manobras criativas e técnicas.</p><p><span style="text-decoration: underline 3px">Park:</span> Disputado em pistas com curvas e bowls, priorizando fluidez e a execução de manobras aéreas.</p><p><span style="text-decoration: underline 3px">Vert:</span> Realizado em half-pipes, focando em manobras de grande amplitude e altura.</p><p><span style="text-decoration: underline 3px">Freestyle:</span> Consiste na execução de manobras no solo, sem a necessidade de rampas ou obstáculos.</p></li><li><span style="color: #D9B341";>Sistema de Pontuação</span> <p>Avaliação por juízes com base em critérios como dificuldade, execução, criatividade e estilo.</p><p>Cada manobra recebe uma pontuação individual, que é somada ao final.</p></li><li><span style="color: #D9B341";>Equipamentos Obrigatórios</span> <p>Skate composto por shape (base), trucks (eixos) e rodas.</p><p>Capacete e joelheiras são exigidos em competições oficiais para segurança.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Postura e Equilíbrio:</span> A base do skate envolve o posicionamento correto dos pés no shape e o controle do peso corporal para manter o equilíbrio.</li><li><span style="color: #D9B341";>Ollie:</span> Considerada a manobra base do skate, o ollie consiste em levantar o skate do chão sem usar as mãos.</li><li><span style="color: #D9B341";>Kickflip:</span> Um dos flips mais conhecidos, onde o skate gira em torno de seu eixo horizontal enquanto o skatista permanece no ar.</li><li><span style="color: #D9B341";>Drop:</span> Técnica usada para entrar em rampas ou bowls, envolvendo controle e confiança.</li><li><span style="color: #D9B341";>Push:</span> Movimento básico de impulsionar o skate com um pé enquanto o outro permanece no shape.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> Incentivo ao trabalho em equipe e à camaradagem em sessões coletivas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Fortalecimento de comunidades e cultura local por meio de encontros e competições.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Equilíbro e coordenação motora:</span> Melhora do equilíbrio, coordenação motora e reflexos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento do corpo:</span> Fortalecimento dos músculos das pernas e core.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência:</span> Aumento da resistência física em modalidades de maior intensidade.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Autoconfiança:</span> Estímulo à criatividade e à autoconfiança.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e melhora no humor:</span> Redução do estresse e aumento da concentração.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Equipamentos', text: 'Escolha um skate adequado ao seu nível e estilo (iniciante, street, park, etc.).' },
  { id: 1, title: 'Escolha um lugar para treinar', text: 'Treine em áreas planas e seguras antes de se aventurar em pistas ou rampas.' },
  { id: 2, title: 'Busque um treinador', text: 'Considere aulas com instrutores para aprender fundamentos básicos e técnicas de segurança.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '2 a 3 vezes por semana, com sessões de 1 hora para adquirir confiança.' },
  { id: 1, title: 'Intermediários e Avançados', text: '4 a 5 vezes por semana, variando entre treinos de técnica e prática livre.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O skate estreou como modalidade olímpica nos Jogos de Tóquio 2020, com o Brasil conquistando medalhas de prata com Rayssa Leal e Kelvin Hoefler.' },
  { id: 'two', text: 'A maior manobra aérea registrada foi realizada por Danny Way, com um salto de 8,5 metros de altura.' },
  { id: 'three', text: 'São Paulo é considerada a "capital do skate" no Brasil, com dezenas de pistas e eventos anuais.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/skate/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'Confederação Brasileira de Skate (CBSk)' },
  { id: 1, link: '', site: 'Federação Internacional de Skateboarding (World Skate)' },
  { id: 3, link: '', site: '"História do Skate" - Tony Hawk Foundation' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="SKATE" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/skate/introduction.jpg" />
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
