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
  { id: 0, picture: '/sports/tenis/banner/01.webp' },
  { id: 1, picture: '/sports/tenis/banner/02.jpg' },
  { id: 2, picture: '/sports/tenis/banner/03.jpg' },
  { id: 3, picture: '/sports/tenis/banner/04.jpg' },
  { id: 4, picture: '/sports/tenis/banner/05.jpg' }
];
const introductionText = 'O tênis é um dos esportes mais elegantes e populares do mundo, destacando-se pela combinação de técnica, estratégia e resistência física. No Brasil, o tênis ganhou notoriedade com jogadores como Gustavo Kuerten, Maria Esther Bueno e, mais recentemente, Beatriz Haddad Maia, que levaram o país ao cenário internacional.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O tênis tem suas raízes em jogos praticados na França e na Inglaterra no século XII, evoluindo para o formato moderno no final do século XIX. A Lawn Tennis Association, na Inglaterra, foi a primeira entidade oficial do esporte, e o torneio de Wimbledon, realizado em 1877, consolidou o tênis como modalidade competitiva.</p><p>No Brasil, o tênis chegou no final do século XIX com a elite europeia. Maria Esther Bueno foi pioneira no cenário internacional, com 19 títulos de Grand Slam, enquanto Gustavo Kuerten, ou Guga, trouxe três títulos de Roland Garros e se tornou ícone do esporte nacional.</p>' },
  { id: 'rules', text: '<p>O tênis pode ser jogado em quadras de saibro, grama ou piso duro, com partidas realizadas em formatos de simples (1 contra 1) ou duplas (2 contra 2).</p><ul><li><span style="color: #D9B341";>Estrutura da partida</span> <p>Os jogos são divididos em sets. Um jogador vence um set ao alcançar 6 games, com diferença mínima de 2 games.</p><p>Se ambos os jogadores alcançarem 6 games, ocorre o tiebreak, decidido em pontos até 7 (ou mais, se necessário).</p><p>Uma partida pode ter 3 ou 5 sets, dependendo do torneio.</p></li><li><span style="color: #D9B341";>Pontuação</span> <p>Cada game tem uma sequência de pontos: 15, 30, 40 e game.</p><p>Em caso de empate em 40-40, ocorre o "deuce", e o jogador precisa vencer dois pontos consecutivos para fechar o game.</p></li><li><span style="color: #D9B341";>Regras adicionais</span> <p>O saque deve ser executado atrás da linha de base.</p><p>A bola deve quicar dentro das linhas delimitadoras da quadra para ser considerada válida.</p><p>Os jogadores podem usar qualquer parte da raquete para devolver a bola.</p></li></ul>' },
  { id: 'fundamentals', text: '<p>O tênis exige uma combinação de habilidades físicas e técnicas. Seus principais fundamentos são:</p><ul><li><span style="color: #D9B341";>Saque (Serve):</span> É o movimento inicial de cada ponto. O jogador lança a bola para o alto e a golpeia com a raquete em direção à área de saque adversária. Tipos de saque: <p><span style="text-decoration: underline 3px">Saque plano:</span> forte e direto, ideal para velocidade.</p><p><span style="text-decoration: underline 3px">Saque com efeito slice:</span> faz a bola girar lateralmente.</p><p><span style="text-decoration: underline 3px">Saque com topspin:</span> confere rotação à bola, aumentando o quique.</p></li><li><span style="color: #D9B341";>Forehand:</span> É o golpe realizado no lado dominante do jogador (direito para destros, esquerdo para canhotos). Geralmente é executado com uma mão, usando o lado oposto da raquete para impulsionar a bola.</li><li><span style="color: #D9B341";>Backhand:</span> Realizado no lado não dominante do jogador. Pode ser feito com uma ou duas mãos. É uma jogada que exige técnica, sendo fundamental para variar os golpes durante o jogo.</li><li><span style="color: #D9B341";>Voleio (Volley):</span> Golpe realizado próximo à rede, antes que a bola quique no chão. É uma técnica ofensiva, usada para encurtar pontos e pressionar o adversário.</li><li><span style="color: #D9B341";>Smash:</span> Golpe potente realizado sobre a cabeça, usado quando a bola vem em altura elevada.  Lembra o movimento de um saque e é ideal para finalizar o ponto.</li><li><span style="color: #D9B341";>Slice:</span> Golpe que gera um efeito de rotação para trás, fazendo a bola quicar de forma mais baixa. Utilizado para controlar o ritmo da partida ou forçar erros do adversário.</li><li><span style="color: #D9B341";>Movimentação e Posicionamento:</span> Inclui deslocamentos rápidos, mudanças de direção e a habilidade de retornar à posição de base. É essencial para alcançar bolas difíceis e se preparar para o próximo golpe.</li><li><span style="color: #D9B341";>Devolução (Return):</span> Movimento realizado para devolver o saque adversário. Requer reflexos rápidos e boa leitura do saque.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> Incentiva a interação em duplas e competições.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Promove a inclusão em diferentes faixas etárias e níveis técnicos.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora cardiovascular:</span> O jogo exige movimentos intensos e rápidos, fortalecendo o coração.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação e reflexos:</span> O esporte desenvolve habilidades motoras finas e reflexos rápidos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento muscular:</span> Trabalha membros superiores e inferiores, além do core.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de decisão:</span> O tênis requer decisões rápidas e precisas durante a partida.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Redução do estresse:</span> A prática libera endorfina, promovendo bem-estar.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Concentração e foco:</span> Essenciais para planejar jogadas e antecipar movimentos do adversário.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Equipamentos', text: 'Invista em uma raquete de boa qualidade e tênis adequado para o piso da quadra.' },
  { id: 1, title: 'Faça aulas', text: 'Busque um treinador ou aulas em grupo para aprender a técnica básica.' },
  { id: 2, title: 'Comece e pratique', text: 'Comece em quadras públicas ou clubes locais e pratique saques, forehands e backhands.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '2 vezes por semana, com treinos de 1 hora.' },
  { id: 1, title: 'Intermediários', text: '3 a 4 vezes por semana, alternando prática técnica e partidas.' }
];
const curiositiesItens = [
  { id: 'one', text: 'Gustavo Kuerten, "Guga", foi o primeiro brasileiro a se tornar número 1 do mundo, em 2000.' },
  { id: 'two', text: 'Maria Esther Bueno, conhecida como "Bailarina do Tênis", venceu Wimbledon 7 vezes.' },
  { id: 'three', text: 'O saque mais rápido já registrado foi de 263 km/h, feito por Sam Groth, em 2012.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/anomino.jpeg', name: 'Gustavo Kuerten (Guga)', about: 'Gustavo Kuerten, ou "Guga", é o maior nome da história do tênis brasileiro. Com três títulos de Roland Garros (1997, 2000, 2001), Guga foi o único brasileiro a conquistar um Grand Slam na era moderna e é considerado um dos maiores tenistas de todos os tempos. Além de suas conquistas em Roland Garros, ele também foi número 1 do mundo no ranking de simples e é uma grande referência para tenistas brasileiros.' },
  { id: 1, picture: '/sports/anomino.jpeg', name: 'Thomaz Bellucci', about: 'Thomaz Bellucci foi o principal tenista brasileiro da última década. Com um estilo agressivo e um bom jogo de fundo de quadra, Bellucci alcançou a 21ª posição no ranking da ATP e representou o Brasil em várias edições da Copa Davis, sendo o principal nome do país no tênis por muitos anos.' },
  { id: 2, picture: '/sports/anomino.jpeg', name: 'Luiz Antônio de Souza (Luizinho)', about: 'Luiz Antônio de Souza, também conhecido como Luizinho, foi um dos primeiros tenistas brasileiros a alcançar um bom ranking internacional. Embora não tenha vencido títulos de Grand Slam, ele foi um jogador importante na década de 1980, com vitórias em torneios menores e representações de destaque no Brasil.' },
  { id: 3, picture: '/sports/anomino.jpeg', name: 'Thiago Monteiro', about: 'Thiago Monteiro é um dos principais tenistas brasileiros da atualidade, com grande destaque nas competições internacionais. Ele tem sido o representante mais constante do Brasil nas últimas edições de torneios da ATP, se destacando principalmente por sua habilidade em quadras duras e sua persistência em conquistar títulos no circuito.' },
  { id: 4, picture: '/sports/anomino.jpeg', name: 'Marcelo Melo', about: 'Marcelo Melo é um dos melhores tenistas brasileiros da história, principalmente no circuito de duplas. Ele foi número 1 do mundo em duplas e conquistou dois títulos de Grand Slam (Wimbledon 2015 e Australian Open 2016) ao lado de seu parceiro, o polonês Lukasz Kubot. Melo é uma lenda do tênis brasileiro, especialmente no jogo de duplas.' },
  { id: 5, picture: '/sports/anomino.jpeg', name: 'Maria Esther Bueno', about: 'Maria Esther Bueno é, sem dúvida, a maior tenista brasileira da história. Ela conquistou 19 títulos de Grand Slam (10 de simples, 9 de duplas) e foi uma das maiores jogadoras de todos os tempos, tanto no circuito de simples quanto de duplas. Maria Esther foi uma verdadeira pioneira para o tênis feminino no Brasil e é um ícone do esporte.' },
  { id: 6, picture: '/sports/anomino.jpeg', name: 'Venus Williams', about: 'Venus Williams é uma das maiores figuras do tênis mundial, com títulos importantes, como Wimbledon e o US Open, e vários recordes no circuito feminino. Sua rivalidade com a irmã Serena, que é uma das maiores do esporte, também colocou o tênis feminino em destaque ao longo dos anos. No Brasil, a rivalidade de Venus com outros tenistas era uma grande atração.' },
  { id: 7, picture: '/sports/anomino.jpeg', name: 'Bia Haddad Maia', about: 'Beatriz Haddad Maia é a maior tenista brasileira da atualidade, com um estilo agressivo e forte no circuito feminino. Ela tem se destacado em várias competições internacionais, incluindo vitórias em torneios da WTA e grandes participações em Grand Slam, colocando o Brasil em destaque no tênis feminino.' },
  { id: 8, picture: '/sports/anomino.jpeg', name: 'Teliana Pereira', about: 'Teliana Pereira é uma das principais jogadoras brasileiras de tênis, com uma carreira sólida e destaque no circuito internacional. Ela se tornou a primeira brasileira a entrar no Top 100 do ranking da WTA em mais de uma década e é uma grande referência para o tênis feminino no país.' },
  { id: 9, picture: '/sports/anomino.jpeg', name: 'Laura Pigossi', about: 'Laura Pigossi é uma das promessas do tênis brasileiro, com destaque nas competições internacionais. Ela conquistou diversos títulos em torneios da WTA e tem mostrado que, no futuro, pode ser uma das maiores jogadoras do Brasil no circuito internacional.' },
];

const sources = [
  { id: 0, link: 'https://www.cbtenis.com.br', site: 'Confederação Brasileira de Tênis (CBT)' },
  { id: 1, link: 'https://www.itftennis.com', site: 'International Tennis Federation (ITF)' },
  { id: 3, link: '', site: 'História do Tênis - Brasil Escola' },
  { id: 3, link: 'https://www.wimbledon.com', site: 'Wimbledon - História e Curiosidades' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="TÊNIS" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/tenis/introduction.jpg" />
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
