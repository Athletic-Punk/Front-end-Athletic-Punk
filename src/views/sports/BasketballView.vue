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
  { id: 0, picture: '/sports/basquete/banner/01.png' },
  { id: 1, picture: '/sports/basquete/banner/02.png' },
  { id: 2, picture: '/sports/basquete/banner/03.png' },
  { id: 3, picture: '/sports/basquete/banner/04.png' },
  { id: 4, picture: '/sports/basquete/banner/05.png' },
  { id: 5, picture: '/sports/basquete/banner/06.png' }
];
const introductionText = '<p>O basquete é um dos esportes mais populares e praticados no mundo, especialmente nos Estados Unidos, onde a NBA (National Basketball Association) é uma das ligas esportivas mais prestigiosas globalmente. No Brasil, o basquete também tem uma longa história e tradição, com grandes atletas como Oscar Schmidt e Hortência Marcari, que marcaram gerações de fãs. O esporte é caracterizado pela velocidade, habilidade técnica e trabalho em equipe, sendo praticado em diversos níveis, desde o recreativo até o profissional.</p><p>A principal característica do basquete é a competição entre duas equipes com o objetivo de marcar pontos, lançando uma bola através de um aro, que é colocado a uma altura de 3,05 metros. O basquete é um jogo de ritmo acelerado, onde são exigidas habilidades como dribles, passes, arremessos e a defesa.</p>';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O basquete foi inventado em 1891 pelo Dr. James Naismith, um professor de educação física canadense, que buscava uma atividade indoor para seus alunos durante o inverno rigoroso. Naismith criou um jogo com 13 regras simples e pendurou um cesto de pêssego em uma parede para servir de alvo. Inicialmente, as partidas eram jogadas com uma bola de futebol e um cesto de pêssego, e o objetivo era jogar a bola no cesto.</p><p>A modalidade se espalhou rapidamente pelos Estados Unidos e pelo mundo, com o primeiro campeonato profissional surgindo em 1893, e a criação da NBA em 1946, que consolidou o basquete como um dos esportes mais assistidos e praticados globalmente. A popularização do basquete no Brasil ocorreu nas décadas de 1940 e 1950, com a criação das primeiras ligas e a formação de seleções nacionais que participaram de competições internacionais.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo:</span> O objetivo do basquete é fazer com que a bola passe através do aro adversário, marcando pontos para sua equipe. Uma cesta vale 2 pontos (ou 3 pontos, se realizada de fora da linha de três pontos), e lances livres valem 1 ponto cada.</li><li><span style="color: #D9B341";>Estrutura do Jogo</span> <p>O jogo de basquete é dividido em dois tempos de 20 minutos (no basquete profissional) ou 4 períodos de 10 minutos (NBA). Se o jogo terminar empatado, ele vai para uma prorrogação.</p><p>Cada equipe é composta por 5 jogadores, sendo que cada um tem uma posição específica em campo: armador, ala, pivô, etc.</p></li><li><span style="color: #D9B341";>Regras principais</span> <p><span style="text-decoration: underline 2px">Drible:</span> O jogador deve driblar a bola com as mãos enquanto se desloca pelo campo. Se o jogador parar de driblar e começar a caminhar com a bola, ele comete um erro conhecido como "andar".</p><p><span style="text-decoration: underline 2px">Posse de Bola:</span> Cada equipe tem 24 segundos (NBA) para tentar uma ação ofensiva, ou seja, para tentar um arremesso ao aro. Caso contrário, a posse de bola passa para o time adversário.</p><p><span style="text-decoration: underline 2px">Faltas:</span> Uma falta é cometida quando um jogador comete uma infração contra o adversário, como empurrar, segurar ou bloquear ilegalmente. Acúmulo de faltas pode resultar em lances livres para o time adversário.</p><p><span style="text-decoration: underline 2px">Tempo de Jogo:</span> No basquete profissional, o tempo é dividido em 4 períodos de 12 minutos, e caso a partida termine empatada, ocorre a prorrogação.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Drible:</span> O drible é a habilidade de movimentar-se com a bola enquanto a mantém em movimento. Os jogadores devem driblar para avançar pelo campo, evitando a interceptação da defesa adversária.</li><li><span style="color: #D9B341";>Passe:</span> O passe é a habilidade de transmitir a bola a um companheiro de equipe, seja com a mão ou por meio de uma assistência. O passe pode ser feito com uma ou duas mãos, dependendo da situação de jogo.</li><li><span style="color: #D9B341";>Arremesso:</span> O arremesso é o ato de tentar marcar pontos, lançando a bola ao aro. Existem diferentes tipos de arremessos, como o arremesso de longa distância (de 3 pontos) e os arremessos mais próximos do aro, que podem ser feitos em diferentes posições e ângulos.</li><li><span style="color: #D9B341";>Rebote:</span> O rebote ocorre quando a bola quica no aro e os jogadores tentam pegar a bola antes que ela caia no chão. Rebotes ofensivos e defensivos são fundamentais para manter a posse de bola e evitar que o adversário marque.</li><li><span style="color: #D9B341";>Defesa:</span> A defesa é o processo de tentar evitar que o time adversário marque pontos. Os jogadores devem marcar seus oponentes de perto, bloquear os arremessos e interceptar passes.</li><li><span style="color: #D9B341";>Bloqueio:</span> O bloqueio é quando um jogador tenta impedir que o adversário faça um arremesso ao aro, com um salto para interceptar a bola.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Espírito de equipe e amizade:</span> O basquete promove a integração e o espírito de grupo, incentivando a formação de amizades dentro da equipe.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Competição saudável:</span> Além de ser divertido, o basquete ensina a importância da competição respeitosa, motivando os jogadores a darem o seu melhor.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da resistência e da força:</span> O basquete é um esporte dinâmico, que trabalha a resistência cardiovascular e fortalece os músculos dos membros inferiores e superiores.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação e agilidade:</span> Como o jogo envolve movimentos rápidos e mudanças de direção, o basquete melhora a coordenação motora e a agilidade.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Desenvolvimento ósseo e muscular:</span> A prática contínua de basquete ajuda no fortalecimento dos ossos e músculos, além de melhorar a flexibilidade.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O basquete exige uma grande colaboração entre os jogadores. A equipe deve trabalhar junta, com estratégias bem definidas para marcar pontos e se defender.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de decisões rápidas:</span> Durante uma partida, os jogadores devem tomar decisões em frações de segundo, o que desenvolve a capacidade de concentração e de resolução rápida de problemas.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Aprenda as regras básicas', text: 'Aprender as regras do basquete é o primeiro passo para iniciar na modalidade. Ao se familiarizar com as normas, é possível entender de fato qual é o objetivo do jogo.' },
  { id: 1, title: 'Equipamento', text: 'Para praticar basquete, o principal é uma bola adequada para o esporte e um espaço como uma quadra de basquete. Para jogar em competições, o uso de tênis apropriados para esportes de impacto é fundamental.' },
  { id: 2, title: 'Treinamento inicial', text: 'Iniciantes podem começar aprendendo os fundamentos do drible, passe e arremesso. As primeiras aulas devem focar em melhorar a técnica e a movimentação no campo.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'A frequência ideal para iniciantes é de 2 a 3 vezes por semana, para aprimorar os fundamentos do jogo e a técnica.' },
  { id: 1, title: 'Avançados', text: 'Para jogadores mais experientes, o treino deve ser mais frequente, entre 4 a 5 vezes por semana, focando em aspectos táticos e condicionamento físico.' }
];
const curiositiesItens = [
  { id: 'one', text: 'A NBA, liga profissional de basquete nos Estados Unidos, é uma das ligas mais seguidas do mundo, com jogadores como Michael Jordan, LeBron James e Kobe Bryant, que se tornaram lendas do esporte.' },
  { id: 'two', text: 'O Brasil tem uma rica história no basquete, com títulos como a medalha de ouro nos Jogos Pan-Americanos e o Campeonato Mundial de Basquete de 1959.' },
  { id: 'three', text: 'O basquete 3x3, uma versão mais rápida e compacta do esporte, foi introduzido nas Olimpíadas de 2020.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/basquete/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'FIBA (Federação Internacional de Basquete)' },
  { id: 1, link: '', site: 'NBA (National Basketball Association)' },
  { id: 3, link: '', site: 'Confederação Brasileira de Basketball (CBB)' },
  { id: 4, link: '', site: 'História do Basquete - Portal Educação' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="BASQUETE" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/basquete/introduction.jpg" />
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
