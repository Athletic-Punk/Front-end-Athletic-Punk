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
  { id: 0, picture: '/sports/volei/banner/01.webp' },
  { id: 1, picture: '/sports/volei/banner/02.webp' },
  { id: 2, picture: '/sports/volei/banner/03.jpg' },
  { id: 3, picture: '/sports/volei/banner/04.jpg' },
  { id: 4, picture: '/sports/volei/banner/05.jpg' }
];
const introductionText = '<p>O voleibol é um esporte coletivo praticado em diversas partes do mundo e é particularmente popular no Brasil. A modalidade é conhecida por sua dinâmica, exigindo rapidez, agilidade e trabalho em equipe. O Brasil é uma potência no voleibol, com equipes que se destacam tanto no masculino quanto no feminino, e que têm conquistado diversos títulos internacionais, como as medalhas de ouro olímpicas e campeonatos mundiais.</p><p>O jogo de voleibol envolve dois times de seis jogadores, que se enfrentam em uma quadra dividida por uma rede, com o objetivo de fazer a bola tocar o chão do lado adversário, ou forçar o adversário a cometer erros. Devido à sua praticidade e baixo custo para a prática, o voleibol também é bastante comum em escolas e comunidades ao redor do mundo.</p>';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O voleibol foi inventado em 1895 nos Estados Unidos por William G. Morgan, um educador físico, como uma alternativa ao basquete, e inicialmente foi chamado de "mintonette". A intenção era criar um esporte que combinasse elementos do basquete, do tênis e do handebol, com regras simples e sem a necessidade de muito contato físico entre os jogadores.</p><p>O nome "voleibol" foi adotado devido ao conceito central do jogo, que envolve "voleios" com a bola. O esporte se espalhou rapidamente para outros países, incluindo o Brasil, onde o voleibol se tornou um dos esportes mais populares, especialmente após o crescimento das ligas de clubes e a participação ativa de atletas em competições internacionais.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo:</span> O objetivo do voleibol é marcar pontos enviando a bola para o lado adversário, de forma que ela toque o chão ou que o time adversário não consiga retornar a bola corretamente. A quadra é dividida em dois lados, e cada time deve tentar evitar que a bola caia em seu próprio lado, ao mesmo tempo que tenta marcar pontos no lado do adversário.</li><li><span style="color: #D9B341";>Estrutura do Jogo:</span> <p>O jogo é disputado em sets. Normalmente, as partidas são compostas por 3 ou 5 sets. Para vencer um set, é necessário alcançar 25 pontos (com uma vantagem de pelo menos 2 pontos).</p><p>No caso de um 5º set (decisivo), ele é jogado até 15 pontos, também com a vantagem de pelo menos 2 pontos.</p><p>Cada time tem direito a três toques para passar a bola para o lado adversário, sendo que o toque pode ser feito com qualquer parte do corpo, embora os toques mais comuns sejam com as mãos e os braços.</p></li><li><span style="color: #D9B341";>Regras principais:</span> <p><span style="text-decoration: underline 3px">Serviço:</span> O serviço é feito atrás da linha de fundo e deve ser enviado por cima da rede. O jogador que serve tem direito a manter o saque enquanto sua equipe continuar vencendo pontos.</p><p><span style="text-decoration: underline 3px">Toques e Rotação:</span> A cada vez que um time ganha o saque, seus jogadores devem rotacionar, mudando de posição na quadra.</p><p><span style="text-decoration: underline 3px">Posição dos Jogadores:</span> Durante o jogo, cada jogador tem uma posição específica (atacante, levantador, líbero, etc.), e a movimentação de todos deve ser coordenada para garantir a defesa e o ataque eficientes.</p><p><span style="text-decoration: underline 3px">Faltas:</span> Faltas são cometidas quando a bola é tocada de forma irregular (como no "toque duplo", onde o jogador toca a bola mais de uma vez consecutiva), quando a bola toca o chão ou as linhas fora da quadra, ou quando um jogador invade o lado adversário da quadra de maneira irregular.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Saque:</span> O saque é a forma de iniciar a ação no jogo. Existem vários tipos de saque, sendo o mais comum o saque por cima (ou saque por força), onde o jogador lança a bola ao ar e a golpeia com a mão para enviá-la ao campo adversário. Também existe o saque por baixo, que é mais utilizado em categorias de base.</li><li><span style="color: #D9B341";>Recepção:</span> A recepção é o fundamento usado para devolver a bola vinda do saque adversário. A recepção pode ser feita por "banco" ou por um "levantamento", utilizando as mãos e braços de forma adequada.</li><li><span style="color: #D9B341";>Levantamento:</span> O levantamento é quando o jogador usa as mãos para enviar a bola para o alto, com o objetivo de posicioná-la para um atacante (geralmente um "central" ou "ponteiro"). Esse fundamento exige grande precisão e controle da bola.</li><li><span style="color: #D9B341";>Ataque (ou Cortada):</span> O ataque é a ação de tentar derrubar a bola no lado adversário. O jogador deve pular e golpear a bola com a mão de forma que ela vá para o lado adversário de maneira difícil de ser devolvida.</li><li><span style="color: #D9B341";>Bloqueio:</span> O bloqueio é uma tentativa de interceptar a bola vinda do ataque adversário. Os jogadores posicionam-se perto da rede, saltando para bloquear a bola, geralmente com as mãos e os braços esticados. O bloqueio eficaz pode anular o ataque e ser uma grande vantagem para a equipe.</li><li><span style="color: #D9B341";>Defesa e Digas:</span> A defesa é o fundamento usado para impedir que a bola toque o chão em sua quadra. O dig é um tipo de defesa que é realizado com os braços ou mãos unidas para "receber" a bola vinda do adversário.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Integração e amizade:</span> O voleibol promove um ambiente de socialização, onde as interações com os outros jogadores ajudam a desenvolver amizades e fortalecer vínculos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Espírito de equipe:</span> No voleibol, o espírito de equipe é fundamental para o sucesso. Jogadores precisam apoiar-se mutuamente, respeitar as funções e entender que todos são igualmente importantes para o resultado.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da força e resistência muscular:</span> O voleibol exige movimentos rápidos e fortes, o que ajuda a melhorar a força nos membros inferiores, superiores e no core (região central do corpo).</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhoria da agilidade e coordenação:</span> Como o jogo exige movimentos rápidos de corrida, salto e reação, o voleibol é excelente para melhorar a agilidade e a coordenação motora.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento ósseo e cardiovascular:</span> A atividade intensa e o salto constante ajudam no fortalecimento ósseo, além de melhorar a saúde do sistema cardiovascular.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O voleibol é um esporte coletivo onde o sucesso depende da colaboração entre os jogadores. Ele ensina a trabalhar com o time e a tomar decisões rápidas durante a partida.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Desenvolvimento da concentração:</span> A necessidade de se concentrar no jogo, desde o posicionamento até a execução de toques precisos, ajuda a melhorar a concentração mental.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Equipamento', text: 'Para praticar voleibol, basta ter uma bola e um espaço adequado, como uma quadra de vôlei ou até uma área de areia, para o voleibol de praia. Para jogar em quadra, é ideal usar tênis apropriados para esportes de impacto.' },
  { id: 1, title: 'Iniciar com as bases', text: 'O melhor caminho para começar é aprender os fundamentos básicos, como o saque, a recepção e o levantamento. Para iniciantes, é recomendável começar em equipes recreativas ou com aulas.' },
  { id: 2, title: 'Treinamento físico', text: 'O treinamento físico no voleibol é essencial para melhorar o desempenho, prevenir lesões e aumentar a resistência, força e agilidade dos jogadores. Ele serve para desenvolver capacidades específicas, como salto, velocidade, equilíbrio e potência.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Para quem está começando, 2 a 3 vezes por semana é uma boa frequência. Inicie com treinos leves e com foco na técnica.' },
  { id: 1, title: 'Avançados', text: 'Para praticantes mais experientes, a frequência ideal é de 3 a 5 vezes por semana, incluindo treinos de tática, condicionamento físico e jogos.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O voleibol de praia, também conhecido como beach volleyball, é uma das versões do esporte mais populares no Brasil e nas praias do mundo, com regras semelhantes, mas jogado em duplas e em uma quadra de areia.' },
  { id: 'two', text: 'O Brasil tem uma das seleções mais fortes no voleibol mundial, com a equipe masculina conquistando diversos títulos mundiais e olímpicos.' },
  { id: 'three', text: 'O voleibol feminino também possui grande destaque, com equipes como as brasileiras conquistando medalhas em Olimpíadas e campeonatos internacionais.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/volei/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'Federação Internacional de Voleibol (FIVB)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Voleibol (CBV)' },
  { id: 3, link: '', site: 'História do Voleibol - Portal Educação' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="VOLEIBOL" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/volei/introduction.jpg" />
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
