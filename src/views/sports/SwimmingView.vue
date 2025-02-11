v
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
  { id: 0, picture: '/sports/natacao/banner/01.webp' },
  { id: 1, picture: '/sports/natacao/banner/02.webp' },
  { id: 2, picture: '/sports/natacao/banner/03.jpg' },
  { id: 3, picture: '/sports/natacao/banner/04.webp' },
  { id: 4, picture: '/sports/natacao/banner/05.webp' }
];
const introductionText = 'A natação é um dos esportes mais populares e acessíveis no Brasil, além de ser uma das modalidades mais tradicionais dos Jogos Olímpicos. O esporte é conhecido por sua capacidade de melhorar a saúde cardiovascular, aumentar a resistência e fortalecer a musculatura. No Brasil, a natação tem uma história rica, com grandes atletas, como Gustavo Borges, César Cielo e Ana Marcela Cunha, que se destacaram em competições internacionais.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'A natação, como atividade, é praticada desde a Antiguidade, com evidências de sua prática em civilizações como Egito, Grécia e Roma. No entanto, a modalidade organizada como esporte surgiu no século XIX, quando a Federação Internacional de Natação (FINA) foi fundada em 1908. No Brasil, a prática da natação começou no início do século XX, com a popularização de piscinas em clubes e escolas. O país conquistou destaque no cenário internacional a partir da década de 1950, com o crescimento de atletas que se destacaram em campeonatos mundiais e Jogos Olímpicos.' },
  { id: 'rules', text: '<p>A natação inclui várias modalidades, sendo as mais conhecidas o crawl, costas, peito, e borboleta. Cada uma dessas modalidades possui regras específicas em termos de técnica, viradas e viragens, bem como a maneira de completar a distância determinada pela competição.</p><ul><li><span style="color: #D9B341";>Objetivo:</span> O objetivo da natação é completar uma determinada distância no menor tempo possível, competindo contra outros nadadores. As distâncias mais comuns são 50 metros, 100 metros, 200 metros, 400 metros, 800 metros, e 1500 metros, tanto em provas individuais quanto de revezamento.</li><li><span style="color: #D9B341";>Regras principais</span> <p><span style="text-decoration: underline 3px">Provas de Estilo Livre (Crawl):</span> Os nadadores podem usar qualquer estilo de nado, mas o estilo mais eficiente e rápido é o crawl.</p><p><span style="text-decoration: underline 3px">Provas de Costas:</span> O nadador deve nadar de costas durante toda a prova, sendo proibido virar para o peito.</p><p><span style="text-decoration: underline 3px">Provas de Peito:</span> O nadador deve usar um estilo específico, com movimentos simétricos das pernas e braços.</p><p><span style="text-decoration: underline 3px">Provas de Borboleta:</span> Um estilo caracterizado pelo movimento simultâneo dos dois braços e a batida simultânea das pernas.</p><p><span style="text-decoration: underline 3px">Revezamento:</span> Em provas de revezamento, quatro nadadores de uma equipe nadam em sequência, sendo necessário um toque na borda da piscina para a troca de nadadores.</p></li><li><span style="color: #D9B341";>Viradas e Partidas</span> <p><span style="text-decoration: underline 3px">Partida:</span> O nadador começa a prova em uma plataforma de partida, no ponto de largada determinado.</p><p><span style="text-decoration: underline 3px">Viradas:</span> Ao atingir a borda da piscina, o nadador realiza uma virada, que deve ser feita de acordo com as regras da modalidade, sem a ajuda das paredes para impulsionar o corpo.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Técnica de Nado:</span> A técnica de nado é a base da natação e inclui o uso correto das braçadas, pernas e respiração. Cada estilo exige uma técnica específica para ser mais eficiente e rápido.</li><li><span style="color: #D9B341";>Respiração:</span> A respiração adequada é fundamental na natação. Em estilos como o crawl, a respiração deve ser feita durante a braçada, virando o rosto para o lado e não parando de nadar. No estilo peito, a respiração ocorre quando a cabeça sai da água, durante a fase de braçada.</li><li><span style="color: #D9B341";>Bateção de Pernas:</span> As pernas têm um papel importante no impulso do nadador. No crawl e no borboleta, as pernas fazem um movimento rápido e contínuo. No peito, as pernas realizam um movimento de "rã", com flexão e extensão.</li><li><span style="color: #D9B341";>Viradas:</span> As viradas são fundamentais para a continuidade da prova. As viradas mais comuns incluem a virada tipo "rolamento" (usada em provas de estilo livre e costas) e a virada de peito (no estilo peito).</li><li><span style="color: #D9B341";>Técnica de Revezamento:</span> Em provas de revezamento, é essencial que a troca entre os nadadores seja feita corretamente. A equipe que completa a prova com o menor tempo total vence, e a troca de nadadores é feita com base no toque na borda da piscina.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Espírito de equipe:</span> Em provas de revezamento, a natação promove o trabalho em equipe, onde cada membro contribui para o desempenho coletivo.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação em clubes:</span> A natação é praticada em clubes e academias, o que facilita a formação de amizades e interações sociais entre os praticantes.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da resistência cardiovascular:</span> A natação melhora a capacidade do sistema circulatório e respiratório, aumentando a resistência física do nadador.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento muscular:</span> A natação é uma atividade de baixo impacto que fortalece os músculos do corpo todo, trabalhando especialmente o core, braços e pernas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora da flexibilidade:</span> A amplitude de movimento exigida nas braçadas e no movimento das pernas aumenta a flexibilidade.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Queima de calorias:</span> A natação é uma atividade aeróbica eficaz para quem busca perder peso e manter a saúde.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Redução do estresse:</span> A prática regular de natação ajuda a aliviar tensões e ansiedade, promovendo um estado de relaxamento.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da concentração:</span> O foco necessário para a técnica de nado e a performance nas provas ajuda a melhorar a concentração mental.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Encontre uma piscina adequada', text: ' Comece procurando uma piscina com boas condições de higiene e profundidade ideal para iniciantes.' },
  { id: 1, title: 'Aprenda os estilos de nado e Equipamentos', text: 'É importante aprender as técnicas básicas de cada estilo. Muitos nadadores iniciantes começam com o crawl ou o peito. Utilize roupas de banho confortáveis, como maiôs, sungas, toucas de natação e óculos.' },
  { id: 2, title: 'Considere aulas com um instrutor', text: 'Aulas de natação podem ser muito úteis para aprender as técnicas corretamente e melhorar o desempenho.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Pelo menos 2 a 3 vezes por semana, com duração de 30 a 60 minutos.' },
  { id: 1, title: 'Avançados', text: 'Para nadadores mais experientes, a frequência pode ser de 4 a 6 vezes por semana, incluindo treinos de resistência e velocidade.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O nadador brasileiro César Cielo é o único atleta da história a conquistar medalhas de ouro em duas edições consecutivas dos Jogos Olímpicos (2008 e 2012).' },
  { id: 'two', text: 'A natação é um dos esportes mais completos, pois trabalha todos os grupos musculares de forma equilibrada.' },
  { id: 'three', text: 'A piscina olímpica tem 50 metros de comprimento e 25 metros de largura.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/natacao/athletes/.PNG', name: 'César Cielo', about: 'César Cielo é amplamente considerado o maior nadador brasileiro de todos os tempos. Ele conquistou duas medalhas de ouro nas Olimpíadas de Pequim 2008, nas provas de 50m e 100m livre, além de ser o atual recordista mundial nas mesmas provas. Cielo tem sido uma verdadeira lenda da natação, com um vasto número de recordes e conquistas internacionais.' },
  { id: 1, picture: '/sports/natacao/athletes/.PNG', name: 'Thiago Pereira', about: 'Thiago Pereira é um dos maiores nadadores brasileiros, com uma carreira marcada por múltiplas medalhas em campeonatos mundiais e Pan-americanos. Ele conquistou a medalha de prata nos Jogos Olímpicos de Londres 2012, além de vários títulos em Mundiais e Jogos Pan-Americanos.' },
  { id: 2, picture: '/sports/natacao/athletes/.PNG', name: 'Gustavo Borges', about: 'Gustavo Borges é uma das maiores figuras da natação brasileira. Com um total de 4 medalhas olímpicas (duas de prata e duas de bronze) e diversos títulos em campeonatos mundiais, Borges se destacou nas provas de nado livre e é um dos maiores ícones da história da natação do Brasil.' },
  { id: 3, picture: '/sports/natacao/athletes/.PNG', name: 'Bruno Fratus', about: 'Bruno Fratus é um dos maiores nadadores brasileiros da atualidade, especializado na prova de 50m livre. Ele conquistou medalhas em Campeonatos Mundiais e foi medalhista olímpico, se destacando por sua velocidade e consistência nas competições internacionais.' },
  { id: 4, picture: '/sports/natacao/athletes/.PNG', name: 'Fernando Scherer', about: 'Fernando Scherer, conhecido como "Xuxa", foi um dos maiores nadadores brasileiros, especialmente nas provas de nado livre e borboleta. Ele conquistou medalhas nos Jogos Olímpicos e Mundiais, além de ser o primeiro nadador brasileiro a se destacar mundialmente na década de 90.' },
  { id: 5, picture: '/sports/natacao/athletes/.PNG', name: 'Rebeca Gusmão', about: 'Rebeca Gusmão é uma das maiores nadadoras brasileiras, com destaque nas provas de 50m e 100m livre. Ela conquistou várias medalhas no Campeonato Pan-Americano e foi uma das grandes atletas da natação brasileira nos anos 2000, embora sua carreira tenha sido marcada por polêmicas.' },
  { id: 6, picture: '/sports/natacao/athletes/.PNG', name: 'Larissa Oliveira', about: 'Larissa Oliveira é uma nadadora de destaque nas provas de nado costas e nado livre. Ela teve uma carreira vitoriosa em campeonatos Pan-Americanos e Mundiais, sendo uma das principais representantes da natação feminina brasileira.' },
  { id: 7, picture: '/sports/natacao/athletes/.PNG', name: 'Giovanna Diamante', about: 'Giovanna Diamante é uma nadadora que vem ganhando destaque nos últimos anos, especialmente nas provas de nado borboleta. Ela tem se mostrado uma das promessas da natação brasileira e tem obtido bons resultados em competições internacionais.' },
  { id: 8, picture: '/sports/natacao/athletes/.PNG', name: 'Etiene Medeiros', about: 'Etiene Medeiros é uma das maiores nadadoras brasileiras da atualidade. Ela foi campeã mundial nos 50m costas em 2015, tornando-se a primeira mulher brasileira a conquistar um título mundial na natação. Etiene também tem sido uma das grandes representantes do Brasil nas Olimpíadas e Mundiais.' },
  { id: 9, picture: '/sports/natacao/athletes/.PNG', name: 'Maria Lenk', about: 'Maria Lenk é um nome histórico da natação brasileira e internacional. Ela foi a primeira mulher brasileira a competir em Jogos Olímpicos e é considerada uma pioneira da natação feminina no Brasil. Maria Lenk foi uma das maiores atletas da história da natação brasileira e quebrou recordes mundiais na sua época.' },
];
const sources = [
  { id: 0, link: 'https://www.cbda.org.br', site: 'Confederação Brasileira de Desportos Aquáticos (CBDA)' },
  { id: 1, link: 'https://www.fina.org', site: 'FINA (Federação Internacional de Natação)' },
  { id: 3, link: '', site: 'História da Natação - Brasil Escola' },
  { id: 4, link: '', site: 'Regras de Natação - Olimpíada Todo Dia' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="NATAÇÃO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/natacao/introduction.jpg" />
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
