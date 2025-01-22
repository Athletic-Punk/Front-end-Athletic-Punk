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
  { id: 0, picture: '/sports/beisebol/banner/01.png' },
  { id: 1, picture: '/sports/beisebol/banner/02.png' },
  { id: 2, picture: '/sports/beisebol/banner/03.png' },
  { id: 3, picture: '/sports/beisebol/banner/04.png' },
  { id: 4, picture: '/sports/beisebol/banner/05.png' },
  { id: 5, picture: '/sports/beisebol/banner/06.png' }
];
const introductionText = 'O beisebol é um dos esportes mais populares do mundo, especialmente nos Estados Unidos, Japão, Coreia do Sul e países do Caribe. Caracterizado por sua dinâmica estratégica e habilidade técnica, o esporte envolve duas equipes que alternam entre ataque e defesa, buscando marcar pontos ao rebater a bola e correr pelas bases. No Brasil, apesar de ser menos popular, o beisebol é praticado em comunidades de imigrantes japoneses e tem ganhado espaço com iniciativas voltadas ao público jovem.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O beisebol surgiu em meados do século XIX nos Estados Unidos, consolidando-se como esporte profissional em 1869, com o surgimento do Cincinnati Red Stockings, o primeiro time profissional. Em 1876, foi criada a Major League Baseball (MLB), que se tornou a principal liga do esporte no mundo.</p><p>No Brasil, o beisebol chegou no início do século XX, trazido por imigrantes japoneses. A primeira liga amadora foi organizada em 1936, e desde então, o esporte cresceu em popularidade dentro das colônias japonesas, especialmente no interior de São Paulo.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo:</span> O objetivo do beisebol é marcar mais corridas (runs) do que a equipe adversária. Uma corrida é marcada quando o jogador do ataque percorre todas as bases (primeira, segunda, terceira e home plate) sem ser eliminado.</li><li><span style="color: #D9B341";>Estrutura do Jogo:</span> <p>Uma partida de beisebol tem 9 entradas (innings), em que as equipes alternam entre ataque e defesa.</p><p>Cada entrada é dividida em duas metades: na primeira, a equipe que defende lança a bola, enquanto a outra rebate; na segunda metade, as funções se invertem.</p></li><li><span style="color: #D9B341";>Funções Principais:</span> <p><span style="text-decoration: underline 2px">Arremessador (Pitcher):</span> Lança a bola para o rebatedor.</p><p><span style="text-decoration: underline 2px">Catcher:</span> Fica atrás do home plate para receber a bola e evitar roubos de base.</p><p><span style="text-decoration: underline 2px">Rebatedor (Batter):</span> Tenta acertar a bola lançada pelo arremessador para colocá-la em jogo.</p><p><span style="text-decoration: underline 2px">Defensores:</span> Tentam eliminar os jogadores do ataque e evitar corridas.</p></li><li><span style="color: #D9B341";>Formas de Eliminação</span> <p><span style="text-decoration: underline 2px">Strikeout:</span> Quando o rebatedor não consegue acertar três tentativas de rebatida (strikes).</p><p><span style="text-decoration: underline 2px">Flyout:</span> Quando a bola rebatida é pega no ar pelos defensores antes de tocar o chão.</p><p><span style="text-decoration: underline 2px">Tagout:</span> Quando o defensor toca o jogador do ataque com a bola antes que ele alcance uma base.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Arremesso:</span> O arremesso é a base da defesa. Existem diferentes tipos de lançamentos, como o fastball (rápido), curveball (curvado) e slider (deslizado). A precisão e a força são essenciais.</li><li><span style="color: #D9B341";>Rebatida:</span> O jogador deve usar um taco (bat) para acertar a bola e direcioná-la para uma área segura do campo. Técnicas como bunt (toque curto) e home run (rebatida para fora do campo) são fundamentais.</li><li><span style="color: #D9B341";>Corrida nas Bases:</span> A velocidade e a estratégia são essenciais para avançar pelas bases sem ser eliminado. O timing correto é crucial para evitar roubos ou ser tocado fora de uma base.</li><li><span style="color: #D9B341";>Defesa no Campo:</span> Inclui habilidades como pegar bolas no ar, arremessar com precisão para as bases e coordenar jogadas em equipe para eliminar adversários.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O beisebol promove o senso de coletividade e colaboração, já que cada jogador tem uma função essencial dentro da equipe.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Favorece a interação social em comunidades e eventos esportivos.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Melhora da coordenação motora e reflexos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência:</span> Aumento da resistência física, especialmente em jogos de longa duração.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> Desenvolvimento de força muscular nos braços, ombros e pernas.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de decisões:</span> Estímulo à tomada de decisão rápida e estratégica.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora na comunicação:</span> Desenvolvimento do trabalho em equipe e comunicação.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Encontre uma liga local ou escola de beisebol', text: 'No Brasil, as comunidades japonesas têm grande tradição no esporte.' },
  { id: 1, title: 'Aprenda o básico', text: 'Técnicas de rebatida, arremesso e corrida nas bases devem ser ensinadas por treinadores especializados.' },
  { id: 2, title: 'Equipamentos', text: 'Necessita-se de taco, luvas, bolas e uniforme com proteções básicas.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Treinos 2 a 3 vezes por semana para aprender fundamentos.' },
  { id: 1, title: 'Avançados', text: 'Treinos diários para aperfeiçoar técnicas e melhorar o desempenho físico.' }
];
const curiositiesItens = [
  { id: 'one', text: 'Um dos momentos mais emocionantes no beisebol é o home run, quando o jogador rebate a bola para fora do campo e corre por todas as bases.' },
  { id: 'two', text: 'O brasileiro Yan Gomes foi o primeiro jogador nascido no Brasil a atuar na Major League Baseball (MLB).' },
  { id: 'three', text: 'A MLB é considerada a liga esportiva profissional mais antiga dos Estados Unidos, com mais de 150 anos de história.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/beisebol/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'Major League Baseball (MLB)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Beisebol e Softbol (CBBS)' },
  { id: 3, link: '', site: 'Artigo "Baseball: The History and Evolution" - Smithsonian Magazine' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="BEISEBOL" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/beisebol/introduction.jpg" />
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
