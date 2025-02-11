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
  { id: 0, picture: '/sports/badminton/banner/01.jpeg' },
  { id: 1, picture: '/sports/badminton/banner/02.jpg' },
  { id: 2, picture: '/sports/badminton/banner/03.jpg' },
  { id: 3, picture: '/sports/badminton/banner/04.jpg' },
  { id: 4, picture: '/sports/badminton/banner/05.jpg' }
];
const introductionText = 'O badminton é um esporte dinâmico e emocionante, praticado com uma raquete e uma peteca (ou shuttlecock). Pode ser jogado de maneira individual ou em duplas, e o objetivo principal é fazer com que a peteca caia no campo adversário. A modalidade exige muita agilidade, reflexos rápidos, resistência e técnicas precisas de ataque e defesa. Reconhecido pela sua inclusão nos Jogos Olímpicos desde 1992, o badminton é especialmente popular na Ásia, mas também tem se expandido globalmente.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O badminton tem suas raízes na Índia, onde era conhecido como "Poona", praticado no século XIX pelos britânicos coloniais. Durante o período colonial, o jogo se espalhou pela Europa, particularmente pela Inglaterra, onde foi refinado e tornou-se o que conhecemos hoje. A primeira competição organizada de badminton ocorreu em 1873, em Bath, na Inglaterra. O esporte logo ganhou popularidade entre os aristocratas e foi chamado de "badminton" devido ao Badminton House, residência do duque de Beaufort, onde o jogo era frequentemente praticado.</p><p>O badminton foi introduzido nos Jogos Olímpicos de 1992, em Barcelona, como esporte oficial, e desde então tem atraído atletas de várias partes do mundo. A Federação Internacional de Badminton (BWF) regula o esporte e organiza competições de nível mundial, incluindo os Campeonatos Mundiais e a Copa do Mundo de Badminton.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Modalidades:</span> Existem três modalidades principais no badminton: simples (um contra um), duplas (dois contra dois) e duplas mistas (um homem e uma mulher por equipe).</li><li><span style="color: #D9B341";>Pontos:</span> O jogo é disputado em sets, e cada set é jogado até que um jogador ou equipe marque 21 pontos. Se o placar chegar a 20-20, um jogador ou equipe precisa ganhar por uma margem de 2 pontos.</li><li><span style="color: #D9B341";>Saques:</span> O saque é realizado de forma alternada entre os jogadores ou duplas, e deve ser feito de forma cruzada para o lado oposto da quadra.</li><li><span style="color: #D9B341";>Duração:</span> Uma partida de badminton pode durar entre 30 minutos a 1 hora, dependendo da intensidade e da competição.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Posicionamento e Movimentação:</span> Manter-se sempre em movimento é crucial, já que o jogo exige reações rápidas. Jogadores devem se deslocar para a frente e para trás, assim como de um lado para o outro, para antecipar o golpe do adversário e responder de forma eficaz.</li><li><span style="color: #D9B341";>Técnica de Raquete:</span> A empunhadura e a técnica para golpear a peteca influenciam diretamente a precisão e a potência dos golpes. Golpes como o "smash" (golpe forte e rápido) e o "clear" (golpe para o fundo da quadra) são essenciais.</li><li><span style="color: #D9B341";>Resistência e Agilidade:</span> O badminton exige grande resistência cardiovascular, além de agilidade para executar movimentos rápidos e mudanças de direção.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<p><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> Jogar badminton em duplas ou em grupos fortalece as relações interpessoais e promove um ambiente colaborativo e de espírito de equipe.</p>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<p><span style="text-decoration: underline 3px white; font-size:1.7vw">Saúde, força e flexibilidade:</span> O badminton melhora a resistência cardiovascular, a força nas pernas, a flexibilidade e a coordenação motora. Além disso, por ser um esporte de alto impacto, também fortalece os músculos do core e dos membros superiores.</p>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<p><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e atenção:</span> A prática do badminton desenvolve habilidades cognitivas, como tomada de decisão rápida, concentração, foco e memorização dos padrões do jogo.</p>' }
];
const howStart = [
  { id: 0, title: 'Escolha de Equipamento', text: 'Para começar a praticar badminton, é importante escolher uma raquete leve e confortável, além de uma peteca de boa qualidade.' },
  { id: 1, title: 'Treinamento Inicial', text: 'Inicie com exercícios de movimentação básica, controle de raquete e saques. Participar de aulas ou treinar com um parceiro pode ajudar a desenvolver habilidades iniciais.' },
  { id: 2, title: 'Procure um Clube', text: 'Para um aprendizado mais profundo e competições locais, é aconselhável buscar um clube de badminton ou treinador especializado.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'É recomendado treinar 2 a 3 vezes por semana, com sessões focadas no desenvolvimento de técnicas básicas e resistência.' },
  { id: 1, title: 'Jogadores Experientes', text: 'Para melhorar o desempenho, é necessário treinar 4 a 5 vezes por semana, com sessões voltadas para a prática de técnicas avançadas, táticas e competições.' }
];
const curiositiesItens = [
  { id: 'one', text: 'A peteca usada no badminton tem uma estrutura muito diferente das bolas usadas em outros esportes. Ela é feita de penas de aves (geralmente ganso ou peru) presas a um fundo cônico de cortiça ou plástico, o que permite um voo muito mais controlado.' },
  { id: 'two', text: 'O badminton é um dos esportes mais populares na Índia, na China e na Indonésia, países que dominam as competições internacionais.' },
  { id: 'three', text: 'As grandes potências do badminton nas últimas décadas têm sido a China e a Indonésia, com atletas como Lin Dan e Saina Nehwal se destacando nas Olimpíadas e campeonatos mundiais.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/badminton/athletes/.PNG', name: 'Ygor Coelho', about: 'Ygor Coelho é o jogador de badminton mais destacado do Brasil na atualidade. Ele foi o primeiro brasileiro a competir em Jogos Olímpicos na modalidade, participando dos Jogos Olímpicos de Tóquio 2020. Coelho já foi campeão pan-americano e é considerado o maior talento do badminton brasileiro. Ele se destacou também no Circuito Mundial e em outros torneios de alto nível.' },
  { id: 1, picture: '/sports/badminton/athletes/.PNG', name: 'Rafael Rodrigues', about: 'Rafael Rodrigues é outro grande nome do badminton no Brasil, com várias vitórias em campeonatos nacionais e bons desempenhos em torneios internacionais. Ele tem sido uma referência no desenvolvimento do badminton brasileiro, com seu estilo técnico e competitivo.' },
  { id: 2, picture: '/sports/badminton/athletes/.PNG', name: 'Carlos Siqueira', about: 'Carlos Siqueira é um dos principais atletas de badminton do Brasil, com forte presença no cenário internacional. Ele foi campeão brasileiro várias vezes e é considerado um dos pilares do esporte no país.' },
  { id: 3, picture: '/sports/badminton/athletes/.PNG', name: 'Daniel Paiola', about: 'Daniel Paiola é um dos melhores jogadores brasileiros da atualidade no badminton. Ele vem se destacando em competições nacionais e internacionais, sendo uma peça-chave no desenvolvimento do esporte no Brasil, especialmente em torneios sul-americanos.' },
  { id: 4, picture: '/sports/badminton/athletes/.PNG', name: 'Vinícius Ferreira', about: 'Vinícius Ferreira é um nome em ascensão no badminton brasileiro, com destaque em torneios nacionais e uma crescente participação em competições internacionais. Ele é considerado uma das promessas do badminton no país.' },
  { id: 5, picture: '/sports/badminton/athletes/.PNG', name: 'Fabiana Silva', about: 'Fabiana Silva é uma das maiores jogadoras de badminton do Brasil. Ela teve uma carreira brilhante no cenário nacional, sendo campeã brasileira várias vezes, e também se destacou em competições internacionais. Fabiana foi fundamental para a popularização do esporte no Brasil, especialmente entre as mulheres.' },
  { id: 6, picture: '/sports/badminton/athletes/.PNG', name: 'Amanda Souza', about: 'Amanda Souza é uma atleta que tem mostrado grande evolução no badminton. Ela é campeã brasileira e também tem representado o Brasil em várias competições internacionais. Seu estilo técnico e competitivo a coloca como uma das melhores jogadoras da atualidade.' },
  { id: 7, picture: '/sports/badminton/athletes/.PNG', name: 'Danielle Oliveira', about: 'Danielle Oliveira é uma das principais jogadoras brasileiras de badminton, com um bom histórico de conquistas em torneios nacionais. Ela tem se destacado também nas competições sul-americanas, sendo uma das grandes representantes do esporte no Brasil.' },
  { id: 8, picture: '/sports/badminton/athletes/.PNG', name: 'Grazielle de Azevedo', about: 'Grazielle de Azevedo é uma jogadora de badminton com forte presença no cenário brasileiro. Ela é uma das principais competidoras nas categorias feminina e mista, com bons resultados em campeonatos nacionais e internacionais.' },
  { id: 9, picture: '/sports/badminton/athletes/.PNG', name: 'Thais Nunes', about: 'Thais Nunes é uma promessa do badminton brasileiro, com boas atuações em torneios internacionais e crescente reconhecimento no cenário nacional. Ela tem sido uma das figuras principais nas categorias de base e tem grande potencial para representar o Brasil em competições de alto nível.' },
];

const sources = [
  { id: 0, link: '', site: 'Badminton World Federation (BWF)' },
  { id: 1, link: '', site: 'International Badminton Federation (IBF)' },
  { id: 3, link: '', site: 'Sports Medicine Journal' },
  { id: 4, link: '', site: 'BBC Sport' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="BADMINTON" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/badminton/introduction.jpeg" />
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
