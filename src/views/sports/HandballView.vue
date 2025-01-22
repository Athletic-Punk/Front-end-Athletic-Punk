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
  { id: 0, picture: '/sports/handebol/banner/01.png' },
  { id: 1, picture: '/sports/handebol/banner/02.png' },
  { id: 2, picture: '/sports/handebol/banner/03.png' },
  { id: 3, picture: '/sports/handebol/banner/04.png' },
  { id: 4, picture: '/sports/handebol/banner/05.png' },
  { id: 5, picture: '/sports/handebol/banner/06.png' }
];
const introductionText = 'O handebol é um esporte coletivo dinâmico e emocionante que combina habilidades físicas e estratégicas. Jogadores passam, driblam e arremessam uma bola com as mãos para marcar gols na meta adversária. A modalidade é amplamente praticada em escolas e clubes pelo Brasil, destacando-se pela velocidade e intensidade. O Brasil se tornou uma potência no cenário internacional, especialmente no handebol feminino, conquistando o título mundial em 2013.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'O handebol tem suas origens na Europa no final do século XIX, inspirado em jogos como o "torball" alemão e o "håndbold" dinamarquês. A primeira regulamentação oficial surgiu em 1920, e o esporte foi introduzido nos Jogos Olímpicos em 1936, retornando em 1972 com o formato atual. No Brasil, o handebol ganhou popularidade na década de 1940, principalmente em escolas e universidades.' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo:</span> Marcar mais gols que o adversário, arremessando a bola na meta da equipe oposta.</li><li><span style="color: #D9B341";>Estrutura do Jogo</span> <p>Cada equipe tem 7 jogadores em quadra: 6 de linha e 1 goleiro.</p><p>A partida é dividida em dois tempos de 30 minutos, com intervalo de 10 minutos.</p><p>A bola deve ser conduzida com passes ou dribles.</p></li><li><span style="color: #D9B341";>Regras principais</span> <p><span style="text-decoration: underline 2px">Dribles:</span> O jogador pode dar até 3 passos sem quicar a bola ou driblá-la indefinidamente enquanto estiver parado.</p><p><span style="text-decoration: underline 2px">Zona do goleiro:</span> Apenas o goleiro pode permanecer na área de 6 metros ao redor da meta.</p><p><span style="text-decoration: underline 2px">Contato físico:</span> É permitido bloquear adversários com o corpo, mas empurrões, puxões ou ações perigosas são penalizados.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Passe e Recepção:</span> Passes precisos e recepções firmes são essenciais para manter o controle da bola. Os tipos incluem passes retos, em curva e picados.</li><li><span style="color: #D9B341";>Arremesso:</span> O arremesso é o movimento de finalização, com variações como o salto e o tiro de rosca (com efeito).</li><li><span style="color: #D9B341";>Drible:</span> O drible é utilizado para conduzir a bola ou superar adversários. Deve ser controlado para evitar faltas.</li><li><span style="color: #D9B341";>Defesa:</span> A defesa exige posicionamento estratégico, bloqueios e marcação homem a homem ou em zona.</li><li><span style="color: #D9B341";>Velocidade e Agilidade:</span> A transição entre ataque e defesa é rápida, exigindo preparo físico intenso.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> Fomenta o trabalho em equipe e o espírito esportivo.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Integra pessoas de diferentes idades e origens.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência e força:</span> Melhoria da resistência cardiovascular e força muscular.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Aumento da agilidade e coordenação motora.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Agilidade:</span> Desenvolvimento de reflexos rápidos.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de deicsões:</span> Estímulo à tomada de decisão sob pressão.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Concentração e foco:</span> Aumento da concentração e estratégia.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Procure um clube', text: 'Procure clubes ou academias locais que ofereçam treinamento de handebol.' },
  { id: 1, title: 'Equipamentos', text: 'Invista em uma bola de handebol adequada ao tamanho e peso recomendados.' },
  { id: 2, title: 'Aulas de handebol', text: 'Aulas introdutórias são úteis para aprender os fundamentos e as regras.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '2 a 3 treinos semanais, de 1 a 2 horas cada.' },
  { id: 1, title: 'Avançados', text: '4 a 6 treinos semanais, incluindo trabalho físico e tático.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O Brasil foi campeão mundial de handebol feminino em 2013, vencendo a Sérvia na final.' },
  { id: 'two', text: 'O handebol de areia é uma variação popular em países tropicais, incluindo o Brasil.' },
  { id: 'three', text: 'A Dinamarca e a França são as maiores potências do handebol mundial masculino.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/handebol/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'Federação Internacional de Handebol (IHF)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Handebol (CBHb)' },
  { id: 3, link: '', site: 'Artigo "Benefícios do Handebol" - Healthline Sports' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="HANDEBOL" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/handebol/introduction.jpg" />
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
