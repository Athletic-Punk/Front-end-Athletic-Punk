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
  { id: 0, picture: '/sports/ciclismo/banner/01.webp' },
  { id: 1, picture: '/sports/ciclismo/banner/02.webp' },
  { id: 2, picture: '/sports/ciclismo/banner/03.jpg' },
  { id: 3, picture: '/sports/ciclismo/banner/04.jpg' }
];
const introductionText = 'O ciclismo é um dos esportes mais populares do mundo, abrangendo uma grande variedade de disciplinas, incluindo competições de estrada, pista, mountain bike, BMX e ciclismo de pista. Além de ser um esporte competitivo de grande prestígio, também é uma atividade recreativa e de transporte amplamente praticada. O ciclismo tem grande relevância nos Jogos Olímpicos e é celebrado por sua capacidade de promover a saúde física e mental, sendo ideal para o fortalecimento cardiovascular e a melhoria da resistência muscular. No Brasil, o esporte ganhou destaque com grandes nomes como o ciclista Henrique Avancini, que se destacou no mountain bike, e a seleção nacional de estrada, que tem conquistado títulos internacionais.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'O ciclismo como esporte surgiu no final do século XIX, logo após a invenção da bicicleta. A primeira competição de ciclismo foi realizada em 1868, na França, e, a partir de então, o esporte começou a se popularizar, especialmente na Europa. As primeiras edições do Tour de France, uma das mais famosas corridas de ciclismo do mundo, ocorreram em 1903 e se tornaram um ícone da modalidade. O ciclismo foi incluído nos Jogos Olímpicos pela primeira vez em 1896, com provas de estrada, e desde então tem sido uma das modalidades mais disputadas nos Jogos. No Brasil, o ciclismo foi impulsionado principalmente a partir da década de 1980, com a popularização do mountain bike e o aumento das competições internacionais.' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Modalidades</span> <p><span style="text-decoration: underline 2px">Ciclismo de Estrada:</span> Corridas em estrada aberta, realizadas em distâncias que variam de 100 a 250 quilômetros, dependendo da competição. A prova de estrada mais famosa é o Tour de France.</p><p><span style="text-decoration: underline 2px">Ciclismo de Pista:</span> Realizado em velódromos, com provas de sprints e resistência, como a perseguição individual e a corrida de pontos.</p><p><span style="text-decoration: underline 2px">Mountain Bike (MTB):</span> Realizado em terrenos acidentados e trilhas, onde os ciclistas enfrentam subidas, descidas e obstáculos naturais.</p><p><span style="text-decoration: underline 2px">BMX:</span> Modalidade que se caracteriza por corridas em circuitos curtos com rampas e obstáculos.</p><p><span style="text-decoration: underline 2px">Ciclismo de Revezamento:</span> Provas em que as equipes se revezam para completar uma certa distância em um tempo determinado.</p></li><li><span style="color: #D9B341";>Equipamento</span> <p><span style="text-decoration: underline 2px">Bicicleta:</span> A bicicleta utilizada depende da modalidade. As bicicletas de estrada são mais leves e aerodinâmicas, enquanto as de mountain bike possuem pneus mais largos e suspensão para lidar com terrenos acidentados.</p><p><span style="text-decoration: underline 2px">Capacete:</span> O uso do capacete é obrigatório para garantir a segurança do atleta.</p><p><span style="text-decoration: underline 2px">Roupa de Ciclismo:</span> O vestuário adequado inclui roupas justas e aerodinâmicas, como o macacão de ciclismo, que melhora o desempenho e reduz o atrito do vento.</p><p><span style="text-decoration: underline 2px">Pedais e Sapatos:</span> Pedais específicos, como os de clip, ajudam a melhorar a eficiência da pedalada e proporcionam mais controle da bicicleta.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Postura:</span> Manter uma postura adequada é crucial para garantir eficiência e conforto durante as competições. A posição do corpo deve ser aerodinâmica, sem comprometer a resistência e a estabilidade da bicicleta.</li><li><span style="color: #D9B341";>Técnica de Pedalada:</span> O movimento de pedalar deve ser fluido e contínuo, utilizando toda a força das pernas de forma equilibrada para maximizar a eficiência.</li><li><span style="color: #D9B341";>Controle da Bicicleta:</span> A habilidade de controlar a bicicleta é essencial, especialmente nas modalidades de mountain bike e BMX, onde os ciclistas precisam navegar por terrenos irregulares e saltos.</li><li><span style="color: #D9B341";>Estratégia:</span> Em competições de estrada, a estratégia de posicionamento, economia de energia e trabalho em equipe são fundamentais. O trabalho coletivo nas equipes de ciclismo de estrada, onde os atletas se revezam para puxar o pelotão e proteger o líder, é uma técnica crucial para o sucesso.</li><li><span style="color: #D9B341";>Resistência e Força:</span> O ciclismo exige grande resistência cardiovascular e força muscular, principalmente nas pernas, para suportar as longas distâncias ou os esforços intensos de sprints.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> Incentiva o trabalho em equipe, especialmente nas provas de estrada, onde os ciclistas precisam colaborar para alcançar um objetivo comum.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> A prática em grupos ou clubes fortalece os laços sociais e promove interações entre ciclistas de diferentes níveis.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação com outras culturas:</span> Em nível competitivo, as provas internacionais de ciclismo reúnem atletas de todo o mundo, promovendo um ambiente multicultural.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência cardiovascular:</span> umenta a resistência cardiovascular e melhora a saúde do sistema circulatório.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento do corpo:</span> Fortalece as pernas, os músculos do core e os glúteos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> A prática regular melhora a coordenação motora e a flexibilidade das articulações.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora a respiração:</span> Melhora a capacidade respiratória, especialmente nas modalidades de alta intensidade.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Ajuda no estresse:</span> O ciclismo ajuda a reduzir o estresse e a ansiedade, devido ao ritmo repetitivo e à concentração exigida durante os treinos e competições.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e constância:</span> Desenvolve a disciplina e o foco, já que é necessário manter a motivação ao longo de longos períodos de treino ou competições.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora no humor:</span> Proporciona um sentimento de liberdade e prazer, especialmente para os ciclistas recreativos, que exploram a natureza e as paisagens ao pedalar.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha uma Modalidade', text: 'Determine a modalidade de ciclismo que mais lhe interessa. Se for iniciante, o ciclismo de estrada ou MTB pode ser uma boa opção para começar.' },
  { id: 1, title: 'Equipamento Básico e Treinamento', text: 'Comece com uma bicicleta simples, adequada à sua modalidade escolhida. Inicie com treinos leves, focando em aumentar a resistência física e a familiaridade com o controle da bicicleta.' },
  { id: 2, title: 'Aprenda as Técnicas Básicas', text: 'Aplique a técnica correta de pedalada, postura e controle da bicicleta.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Realizar treinos de 2 a 3 vezes por semana, com sessões de resistência e prática técnica.' },
  { id: 1, title: 'Atletas Avançados', text: 'Treinos de 4 a 6 vezes por semana, com variações de intensidade, incluindo sprints, longas distâncias e treinos específicos para competições.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O ciclista brasileiro Henrique Avancini é um dos principais atletas de mountain bike do mundo, com várias vitórias em competições internacionais.' },
  { id: 'two', text: 'A prova mais famosa do ciclismo de estrada, o Tour de France, é realizada anualmente desde 1903 e atrai atletas e fãs de todo o mundo.' },
  { id: 'three', text: ' O ciclismo é promovido como uma forma de transporte sustentável, pois é uma alternativa ecológica aos veículos motorizados, reduzindo as emissões de carbono.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/anomino.jpeg', name: 'Marcio May', about: 'Maior ciclista de mountain bike do Brasil, Marcio May foi campeão pan-americano e se destacou em várias competições de ciclismo de estrada e mountain bike. Ele foi um dos pioneiros do ciclismo de aventura no país, levando o Brasil para o pódio de grandes competições.' },
  { id: 1, picture: '/sports/anomino.jpeg', name: 'Murilo Fischer', about: 'Murilo Fischer é um dos maiores ciclistas de estrada do Brasil. Ele competiu em algumas das maiores provas do mundo, como o Tour de France, e foi campeão brasileiro de ciclismo por várias edições. Sua experiência e resistência o tornaram uma referência na modalidade.' },
  { id: 2, picture: '/sports/anomino.jpeg', name: 'Ricardo Pscheidt', about: 'Ricardo Pscheidt se destaca no ciclismo de estrada, com vitórias importantes em campeonatos nacionais e internacionais. Ele é um dos atletas de maior renome no cenário do ciclismo brasileiro e tem sido uma peça chave na seleção nacional.' },
  { id: 3, picture: '/sports/anomino.jpeg', name: 'Gustavo Diniz', about: 'Gustavo Diniz é um nome emergente no ciclismo brasileiro, com destaque em provas de resistência e competições de mountain bike. Ele tem sido um dos representantes do Brasil em competições internacionais.' },
  { id: 4, picture: '/sports/anomino.jpeg', name: 'Guilherme Muller', about: 'Guilherme Muller é um dos maiores talentos da nova geração do ciclismo brasileiro, com grandes performances nas competições nacionais e internacionais. Ele está se tornando uma das principais apostas para o futuro do esporte no país.' },
  { id: 5, picture: '/sports/anomino.jpeg', name: 'Jaqueline Mourão', about: 'Jaqueline Mourão é uma das ciclistas mais importantes da história do Brasil, com diversas conquistas internacionais, incluindo participações nos Jogos Olímpicos e campeonatos mundiais. Ela é a principal representante do ciclismo feminino no Brasil e também uma das grandes atletas do esporte de aventura no país.' },
  { id: 6, picture: '/sports/anomino.jpeg', name: 'Flávia Oliveira', about: 'Flávia Oliveira é uma das maiores ciclistas de estrada do Brasil. Com um histórico impressionante em competições nacionais e internacionais, ela se destacou por sua força e persistência, sendo uma das grandes representantes do Brasil em provas de alto nível.' },
  { id: 7, picture: '/sports/anomino.jpeg', name: 'Renata Cacau', about: 'Renata Cacau é uma ciclista que se destacou em competições internacionais, principalmente no ciclismo de estrada. Ela é uma das grandes promessas do ciclismo feminino no Brasil e tem se mostrado forte nas competições de resistência.' },
  { id: 8, picture: '/sports/anomino.jpeg', name: 'Mariana Azevedo', about: 'Mariana Azevedo é uma das jovens promessas do ciclismo feminino brasileiro, com grandes performances no ciclismo de estrada. Ela foi medalhista no Campeonato' },
  { id: 9, picture: '/sports/anomino.jpeg', name: 'Ana Paula Polegatch', about: 'Ana Paula Polegatch é uma das atletas mais consistentes do ciclismo feminino brasileiro, com um bom histórico em campeonatos de mountain bike e ciclismo de estrada. Ela é uma das principais representantes da modalidade no Brasil e está constantemente se aprimorando para se tornar uma referência internacional.' },
];

const sources = [
  { id: 0, link: '', site: 'Union Cycliste Internationale (UCI)' },
  { id: 1, link: '', site: 'Olympic.org' },
  { id: 3, link: '', site: 'Brazilian Cycling Confederation (CBC)' },
  { id: 4, link: '', site: 'Sports Medicine Journal' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="CICLISMO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/ciclismo/introduction.jpg" />
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
