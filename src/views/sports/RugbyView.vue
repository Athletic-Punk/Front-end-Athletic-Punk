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
  { id: 0, picture: '/sports/rugby/banner/01.webp' },
  { id: 1, picture: '/sports/rugby/banner/02.webp' },
  { id: 2, picture: '/sports/rugby/banner/03.webp' },
  { id: 3, picture: '/sports/rugby/banner/04.webp' },
  { id: 4, picture: '/sports/rugby/banner/05.webp' }
];
const introductionText = 'O rugby é um esporte coletivo que combina força, estratégia e trabalho em equipe. No Brasil, a modalidade tem ganhado popularidade nos últimos anos, especialmente após a inclusão do rugby sevens nos Jogos Olímpicos. Embora o rugby ainda não seja um dos esportes mais praticados no país, a seleção brasileira, conhecida como "Tupis" (masculino) e "Yaras" (feminino), tem apresentado desempenhos notáveis em competições internacionais.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O rugby foi criado em 1823 na Inglaterra, na Rugby School, quando o estudante William Webb Ellis, em um jogo de futebol, pegou a bola com as mãos e correu em direção ao gol adversário. Essa atitude deu origem a uma nova modalidade esportiva, que foi oficialmente codificada em 1845.</p><p>O esporte chegou ao Brasil em 1891, trazido por Charles Miller, considerado o “pai do futebol” no país. Apesar de o futebol ter se tornado a paixão nacional, o rugby permaneceu como um esporte de nicho por muitos anos. Nas últimas décadas, no entanto, com a criação de ligas regionais e a participação em eventos internacionais, o rugby brasileiro começou a se destacar, especialmente no formato de rugby sevens.</p>' },
  { id: 'rules', text: '<p>O rugby possui diferentes formatos, sendo os mais populares o rugby union (15 jogadores) e o rugby sevens (7 jogadores).</p><ul><li><span style="color: #D9B341";>Objetivo:</span> Avançar pelo campo adversário e marcar pontos ao levar a bola até a área de in-goal (zona de pontuação) ou ao chutá-la entre os postes do gol adversário.</li><li><span style="color: #D9B341";>Pontuação</span> <p><span style="text-decoration: underline 3px">Try (ensaio):</span> 5 pontos ao cruzar a linha de in-goal e tocar a bola no chão.</p><p><span style="text-decoration: underline 3px">Conversão:</span> 2 pontos adicionais ao chutar a bola entre os postes após um try.</p><p><span style="text-decoration: underline 3px">Penalidade:</span> 3 pontos ao chutar a bola entre os postes em decorrência de uma infração adversária.</p><p><span style="text-decoration: underline 3px">Drop goal:</span> 3 pontos ao chutar a bola entre os postes durante o jogo, após ela quicar no chão.</p></li><li><span style="color: #D9B341";>Campo e bola</span> <p>O campo tem dimensões máximas de 100 metros de comprimento e 70 metros de largura.</p><p>A bola é ovalada, permitindo passes e chutes específicos.</p></li><li><span style="color: #D9B341";>Regras principais</span> <p>A bola só pode ser passada para trás ou lateralmente, nunca para frente.</p><p>O jogador deve correr com a bola, passá-la ou chutá-la para avançar.</p><p>O jogo é dividido em dois tempos de 40 minutos (15 jogadores) ou dois tempos de 7 minutos (rugby sevens).</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Passe:</span> O passe é sempre feito para trás ou para os lados, com um movimento que favoreça a continuidade da jogada. A precisão e a força do passe são essenciais para o sucesso de uma equipe.</li><li><span style="color: #D9B341";>Tackle:</span> É a ação de derrubar o jogador adversário que está com a posse da bola. Deve ser realizado de forma segura, com contato abaixo da linha dos ombros.</li><li><span style="color: #D9B341";>Scrum:</span> Formação em que os jogadores das duas equipes se agrupam para disputar a posse da bola. Geralmente ocorre após infrações menores, como passes para frente.</li><li><span style="color: #D9B341";>Line-out:</span> É o reinício do jogo após a bola sair pela linha lateral. Os jogadores formam fileiras e disputam a bola arremessada no meio.</li><li><span style="color: #D9B341";>Chute (Kick):</span> Pode ser usado para avançar no campo, marcar pontos ou reposicionar a bola. Inclui técnicas como o drop kick, o place kick e o punt kick.</li><li><span style="color: #D9B341";>Ruck e Maul:</span> Ruck: ocorre quando a bola está no chão e os jogadores das equipes competem pela posse. Maul: acontece quando o jogador com a posse está em pé, sendo empurrado por colegas e adversários.</li><li><span style="color: #D9B341";>Posicionamento:</span> Jogadores são divididos em forwards (linha de frente) e backs (linha de trás), com funções específicas.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O esporte promove a cooperação entre os jogadores.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Respeito:</span> Há uma forte cultura de fair play no rugby, tanto dentro quanto fora de campo.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> O rugby exige força para tackles, scrums e corridas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência cardiovascular:</span> A intensidade das partidas melhora o condicionamento físico.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Movimentos como passes e tackles requerem controle corporal preciso.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de decisão:</span> Situações de jogo rápidas demandam estratégias eficazes.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Disciplina:</span> O rugby ensina respeito às regras e ao adversário.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Redução do estresse:</span> A prática esportiva ajuda a liberar endorfinas.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Busque um clube', text: 'Busque um clube local ou participe de grupos de rugby iniciante e familiarize-se com as regras básicas.' },
  { id: 1, title: 'Equipamentos', text: 'Invista em um bom par de chuteiras e, se necessário, protetores bucais.' },
  { id: 2, title: 'Treine os fundamentos', text: 'Treine passes, tackles e chutes em ambientes controlados.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '2 a 3 treinos por semana, com duração de 1 a 1,5 horas.' },
  { id: 1, title: 'Avançados', text: '4 a 5 treinos por semana, incluindo preparo físico e tático.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O troféu da Copa do Mundo de Rugby se chama William Webb Ellis, em homenagem ao criador do esporte.' },
  { id: 'two', text: 'O Haka, dança tradicional dos All Blacks (seleção da Nova Zelândia), é um símbolo cultural do rugby.' },
  { id: 'three', text: 'O Brasil foi medalhista de ouro no rugby feminino nos Jogos Sul-Americanos de 2018.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/rugby/athletes/.PNG', name: 'Luiz Felipe Contepomi', about: '   Luiz Felipe Contepomi é um dos maiores nomes do rugby brasileiro. Ele teve uma carreira internacional notável, atuando na seleção argentina, mas sua influência no Brasil foi grande, ajudando a desenvolver o esporte no país, especialmente como um dos líderes do time do Rio Branco Rugby Clube.' },
  { id: 1, picture: '/sports/rugby/athletes/.PNG', name: 'Rafael Simões', about: '   Rafael Simões é um jogador de rugby de destaque no Brasil, conhecido por sua força e habilidade no campo. Ele tem sido um dos principais jogadores da seleção brasileira e tem participado de diversas competições internacionais, incluindo o Campeonato Sul-Americano de Rugby.' },
  { id: 2, picture: '/sports/rugby/athletes/.PNG', name: 'André Santos', about: '   André Santos é um dos maiores nomes do rugby brasileiro. Ele jogou em diversos clubes e na seleção nacional, sendo reconhecido pela sua habilidade em atacar e defender, além de ser um dos principais responsáveis pela evolução do esporte no Brasil.' },
  { id: 3, picture: '/sports/rugby/athletes/.PNG', name: 'Rodrigo Cruz', about: '   Rodrigo Cruz é um dos principais atletas do rugby no Brasil, atuando como jogador de linha e sendo uma referência nas competições internacionais. Seu estilo de jogo agressivo e habilidoso fez dele uma figura importante para o crescimento do rugby no Brasil.' },
  { id: 4, picture: '/sports/rugby/athletes/.PNG', name: 'Marco Antônio', about: '   Marco Antônio é outro nome importante do rugby brasileiro, com uma carreira marcante tanto em clubes quanto na seleção. Ele é conhecido pela sua habilidade de liderança e por ajudar o time a alcançar bons resultados em torneios internacionais.' },
  { id: 5, picture: '/sports/rugby/athletes/.PNG', name: 'Isabel Nunes', about: '   Isabel Nunes é uma das jogadoras de rugby feminino mais reconhecidas do Brasil. Ela tem sido uma das principais responsáveis pelo desenvolvimento do esporte no Brasil e já participou de diversas edições do Campeonato Sul-Americano e outras competições internacionais.' },
  { id: 6, picture: '/sports/rugby/athletes/.PNG', name: 'Carla Borges', about: '   Carla Borges é uma das jogadoras mais importantes do rugby feminino no Brasil. Com grande experiência em competições nacionais e internacionais, ela tem sido uma das figuras centrais no crescimento do rugby feminino no país.' },
  { id: 7, picture: '/sports/rugby/athletes/.PNG', name: 'Mayara Siqueira', about: '   Mayara Siqueira é uma das principais jogadoras de rugby no Brasil, com grande experiência e habilidade. Ela se destacou por sua versatilidade em campo e pela liderança em várias competições nacionais e internacionais.' },
  { id: 8, picture: '/sports/rugby/athletes/.PNG', name: 'Monique Dallagnol', about: '   Monique Dallagnol é uma das promessas do rugby feminino brasileiro. Com boa técnica e habilidade, ela tem mostrado grande potencial em torneios nacionais e competições internacionais, sendo uma das grandes apostas para o futuro do esporte.' },
  { id: 9, picture: '/sports/rugby/athletes/.PNG', name: 'Thais Ueno', about: '   Thais Ueno é uma das jogadoras mais habilidosas do rugby feminino brasileiro, com uma carreira sólida em campeonatos sul-americanos. Sua técnica e espírito de equipe são características que fazem dela uma das maiores promessas do esporte.' },
];
const sources = [
  { id: 0, link: 'https://www.brasilrugby.com.br', site: 'Confederação Brasileira de Rugby (CBRu)' },
  { id: 1, link: 'https://www.world.rugby', site: 'World Rugby' },
  { id: 3, link: '', site: 'História do Rugby - Brasil Escola' },
  { id: 4, link: '', site: 'Regras de Rugby - Olimpíada Todo Dia' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="RUGBY" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/rugby/introduction.jpg" />
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
