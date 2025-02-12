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
  { id: 0, picture: '/sports/tenis-de-mesa/banner/01.jpg' },
  { id: 1, picture: '/sports/tenis-de-mesa/banner/02.webp' },
  { id: 2, picture: '/sports/tenis-de-mesa/banner/03.webp' },
  { id: 3, picture: '/sports/tenis-de-mesa/banner/04.jpg' },
  { id: 4, picture: '/sports/tenis-de-mesa/banner/05.jpg' }
];
const introductionText = 'O tênis de mesa, conhecido popularmente como ping-pong, é um dos esportes mais rápidos e dinâmicos do mundo. Ele combina reflexos rápidos, precisão e estratégia, sendo praticado em todos os continentes. Reconhecido tanto como esporte recreativo quanto competitivo, o tênis de mesa possui milhões de adeptos, com destaque em países como China, Japão, Alemanha e Brasil. No cenário brasileiro, Hugo Hoyama e Hugo Calderano são nomes que ajudaram a popularizar o esporte, destacando-se em competições internacionais.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'equipment', section: 'EQUIPAMENTOS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O tênis de mesa surgiu na Inglaterra, no final do século XIX, como uma adaptação do tênis de quadra para espaços fechados. Utilizando mesas, bolinhas improvisadas e raquetes rudimentares, o esporte rapidamente se popularizou entre a elite britânica.</p><p>Em 1926, a Federação Internacional de Tênis de Mesa (ITTF) foi criada, estabelecendo regras e organizando competições oficiais. O esporte tornou-se olímpico em 1988, nos Jogos de Seul, consolidando sua relevância no cenário esportivo global.</p><p>No Brasil, o tênis de mesa começou a se desenvolver no início do século XX, com a chegada de imigrantes japoneses. Hugo Hoyama foi o principal nome do esporte no país durante os anos 1990, enquanto Hugo Calderano, atualmente, figura entre os melhores do mundo, levando o Brasil a patamares inéditos na modalidade.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo:</span> O objetivo do tênis de mesa é marcar pontos enviando a bola para o lado adversário, de modo que o oponente não consiga devolvê-la de acordo com as regras.</li><li><span style="color: #D9B341";>Estrutura do jogo</span> <p>Cada partida é composta por sets, normalmente jogados em melhor de 5 ou 7 sets.</p><p>O jogador vence um set ao alcançar 11 pontos, com pelo menos 2 pontos de vantagem sobre o adversário.</p></li><li><span style="color: #D9B341";>Regras gerais</span> <p><span style="text-decoration: underline 3px">Saque:</span> O saque deve ser realizado com a bola lançada verticalmente a uma altura mínima de 16 cm e batida atrás da linha de base. A bola deve tocar primeiro o lado do sacador antes de ultrapassar a rede e atingir o lado do oponente.</p><p><span style="text-decoration: underline 3px">Troca de saques:</span> Os saques alternam a cada 2 pontos, exceto quando o placar está empatado em 10-10 (deuce), momento em que os jogadores alternam o saque a cada ponto.</p><p><span style="text-decoration: underline 3px">Pontuação:</span> Um ponto é marcado quando o adversário não consegue devolver a bola dentro das regras ou comete uma infração, como errar o saque ou bater a bola duas vezes.</p></li></ul>' },
  { id: 'equipment', text: '<ul><li><span style="color: #D9B341";>Mesa:</span> Mede 2,74 m de comprimento, 1,52 m de largura e 76 cm de altura, com uma rede central de 15,25 cm de altura.</li><li><span style="color: #D9B341";>Raquete:</span> Pode ser personalizada, com borrachas de diferentes texturas e espessuras para favorecer o ataque ou a defesa.</li><li><span style="color: #D9B341";>Bola:</span> Feita de celuloide ou plástico, com 40 mm de diâmetro e peso de 2,7 g.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Posição básica:</span> O jogador deve adotar uma postura de semi-agachamento, com os pés separados na largura dos ombros, para garantir mobilidade.</li><li><span style="color: #D9B341";>Tipos de golpes:</span> <p><span style="text-decoration: underline 3px">Forehand (direita):</span> Golpe realizado do lado dominante, geralmente usado para atacar.</p><p><span style="text-decoration: underline 3px">Backhand (esquerda):</span> Golpe realizado do lado oposto, essencial para a defesa e contra-ataque.</p><p><span style="text-decoration: underline 3px">Smash:</span> Um golpe rápido e potente para finalizar pontos.</p><p><span style="text-decoration: underline 3px">Loop:</span> Um golpe com muito efeito, usado para criar dificuldades ao adversário.</p><p><span style="text-decoration: underline 3px">Drive:</span> Um golpe ofensivo mais controlado, utilizado para manter a pressão.</p></li><li><span style="color: #D9B341";>Saque:</span> Pode ser realizado com diferentes efeitos, como topspin, sidespin ou backspin, para dificultar a devolução do adversário.</li><li><span style="color: #D9B341";>Tática:</span> Estratégias incluem variações de velocidade, colocação da bola e uso de efeitos para confundir o adversário.</li><li><span style="color: #D9B341";>Defesa e contra-ataque:</span> A defesa é fundamental para resistir a ataques potentes, enquanto o contra-ataque permite transformar situações defensivas em ofensivas.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Integração:</span> O esporte é acessível a todas as idades, sendo amplamente praticado em escolas, clubes e eventos recreativos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Competitividade saudável:</span> Promove o respeito mútuo entre os jogadores.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora da coordenação motora:</span> A prática exige reflexos rápidos e precisão nos movimentos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Condicionamento cardiovascular:</span> Apesar de ser um esporte de curta distância, as partidas exigem movimentação constante.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento muscular:</span> Principalmente nos membros inferiores e superiores.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da concentração:</span> O jogador precisa estar atento à velocidade e ao efeito da bola.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Raciocínio estratégico:</span> As partidas exigem planejamento e adaptação constante às ações do oponente.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Redução do estresse:</span> Assim como outros esportes, ajuda no alívio das tensões do dia a dia.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Equipamento básico', text: 'Raquete e bolinhas de qualidade são os primeiros investimentos.' },
  { id: 1, title: 'Espaço', text: 'Encontre uma mesa de tênis de mesa em um clube, escola ou academia.' },
  { id: 2, title: 'Aulas', text: 'Considere aulas com um treinador experiente para aprender as técnicas básicas e progredir rapidamente.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '2 a 3 vezes por semana, com treinos de 1 hora.' },
  { id: 1, title: 'Avançados', text: '4 a 6 treinos semanais, incluindo prática de golpes específicos e jogos simulados.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O tênis de mesa é o esporte mais popular na China, com milhões de praticantes.' },
  { id: 'two', text: 'A bola pode atingir velocidades superiores a 100 km/h em golpes como o smash.' },
  { id: 'three', text: 'Hugo Calderano é o primeiro latino-americano a figurar entre os 5 melhores do ranking mundial da ITTF.' },
  { id: 'four', text: 'O maior evento de tênis de mesa é o Campeonato Mundial, realizado a cada dois anos.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Hugo Calderano', about: 'Hugo Calderano é o maior nome do tênis de mesa brasileiro e um dos melhores do mundo. Ele é um dos primeiros brasileiros a chegar à elite do esporte, alcançando a 5ª posição no ranking mundial da ITTF. Calderano conquistou medalhas em campeonatos mundiais e Pan-Americanos e é uma grande referência no esporte.' },
  { id: 1, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Hugo Cunha', about: 'Hugo Cunha é um dos principais atletas do Brasil no tênis de mesa, com bons desempenhos em competições internacionais, como o Campeonato Pan-Americano e outros torneios da ITTF. Ele tem se destacado por sua habilidade técnica e consistência nas competições.' },
  { id: 2, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Thiago Monteiro', about: 'Thiago Monteiro é outro jogador de destaque, conhecido por sua habilidade estratégica no tênis de mesa. Ele tem se mantido entre os principais jogadores brasileiros, conquistando vitórias em torneios regionais e internacionais.' },
  { id: 3, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Cazuo Matsumoto', about: 'Cazuo Matsumoto é um dos jogadores mais veteranos do tênis de mesa no Brasil, com uma carreira internacional consolidada. Ele foi campeão Pan-Americano e se destacou por sua técnica refinada e constância nas competições internacionais.' },
  { id: 4, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Gustavo Tsuboi', about: 'Gustavo Tsuboi é um dos maiores nomes do tênis de mesa brasileiro, conhecido por sua habilidade técnica e bom desempenho em competições de nível internacional, incluindo campeonatos mundiais e Pan-Americanos.' },
  { id: 5, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Jessica Yamada', about: 'Jessica Yamada é uma das principais atletas do tênis de mesa feminino no Brasil. Ela tem se destacado nas competições internacionais e foi medalhista em campeonatos Pan-Americanos. Sua técnica refinada e constância nas competições a tornaram uma referência para o esporte.' },
  { id: 6, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Lin Gui', about: 'Lin Gui é uma das jogadoras mais experientes do tênis de mesa feminino brasileiro, com uma carreira sólida e destacada por várias vitórias em campeonatos internacionais. Ela tem sido uma grande representante do Brasil nas competições mundiais.' },
  { id: 7, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Carolina Kumahara', about: 'Carolina Kumahara é uma das maiores jogadoras de tênis de mesa do Brasil, com boas performances em torneios internacionais e importantes conquistas no cenário regional. Ela tem sido uma das maiores promessas para o futuro do esporte feminino no Brasil.' },
  { id: 8, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Bruna Takahashi', about: 'Bruna Takahashi é uma jogadora de destaque no tênis de mesa, conhecida por sua habilidade técnica e consistência nas competições. Ela tem representado o Brasil em várias competições internacionais e é uma das apostas para o futuro do esporte.' },
  { id: 9, picture: '/sports/tenis-de-mesa/athletes/.PNG', name: 'Daniele Azevedo', about: 'Daniele Azevedo tem se destacado no tênis de mesa brasileiro, com boas atuações em competições nacionais e internacionais, conquistando medalhas em eventos regionais e ampliando as possibilidades para o esporte feminino no Brasil' },
];

const sources = [
  { id: 0, link: '', site: 'Federação Internacional de Tênis de Mesa (ITTF)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Tênis de Mesa (CBTM)' },
  { id: 3, link: '', site: 'História do Tênis de Mesa - Portal Educação' },
  { id: 4, link: '', site: 'Benefícios do Tênis de Mesa - Harvard Health' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="TÊNIS DE MESA" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/tenis-de-mesa/introduction.jpg" />
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
