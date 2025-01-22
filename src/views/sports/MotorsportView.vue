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
  { id: 0, picture: '/sports/automobilismo/banner/01.png' },
  { id: 1, picture: '/sports/automobilismo/banner/02.png' },
  { id: 2, picture: '/sports/automobilismo/banner/03.png' },
  { id: 3, picture: '/sports/automobilismo/banner/04.png' },
  { id: 4, picture: '/sports/automobilismo/banner/05.png' },
  { id: 5, picture: '/sports/automobilismo/banner/06.png' }
];
const introductionText = 'O automobilismo é um esporte a motor que envolve competições em alta velocidade, nas quais pilotos conduzem carros especialmente projetados em circuitos fechados ou pistas de rua. É uma das modalidades esportivas mais emocionantes e perigosas, combinando habilidade técnica, estratégia e avanços tecnológicos. No Brasil, o automobilismo ganhou notoriedade com nomes como Ayrton Senna, Nelson Piquet e Emerson Fittipaldi, que conquistaram múltiplos títulos na Fórmula 1 e elevaram o país ao topo da categoria.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O automobilismo surgiu no final do século XIX, logo após a invenção do automóvel. A primeira corrida reconhecida aconteceu em 1894, entre as cidades de Paris e Rouen, na França. Com o passar do tempo, surgiram categorias organizadas, como a Fórmula 1, criada em 1950, e competições icônicas, como as 24 Horas de Le Mans e a Indy 500.</p><p>No Brasil, o automobilismo começou a se popularizar nos anos 1930, com provas realizadas em circuitos improvisados. O autódromo de Interlagos, inaugurado em 1940, consolidou o esporte no país. Desde então, o Brasil se destacou na Fórmula 1, acumulando títulos e reconhecimento global.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Categorias:</span> O automobilismo é dividido em diversas categorias, sendo as mais conhecidas: <p><span style="text-decoration: underline 2px">Fórmula 1:</span> A principal competição de monopostos do mundo, com 22 etapas realizadas anualmente em diferentes países.</p><p><span style="text-decoration: underline 2px">Fórmula Indy:</span> Conhecida pelas corridas em circuitos ovais e pela famosa Indy 500.</p><p><span style="text-decoration: underline 2px">Endurance:</span> Competições de longa duração, como as 24 Horas de Le Mans.</p><p><span style="text-decoration: underline 2px">Turismo:</span> Carros baseados em modelos de rua, adaptados para corridas.</p><p><span style="text-decoration: underline 2px">Rally:</span> Disputado em estradas e trilhas, com veículos adaptados para terrenos acidentados.</p></li><li><span style="color: #D9B341";>Regulamentos Gerais</span> <p>Cada categoria possui especificações técnicas rigorosas para os carros, como potência do motor, peso mínimo e dimensões aerodinâmicas.</p><p>Pilotos devem respeitar bandeiras e sinalizações durante a corrida, como a bandeira amarela (cuidado), vermelha (interrupção) e azul (dar passagem).</p><p>O uso do Safety Car regula o ritmo da prova em situações de perigo na pista.</p></li><li><span style="color: #D9B341";>Pontuação:</span> Nas competições de campeonato, os pilotos acumulam pontos com base na posição de chegada em cada corrida. Na Fórmula 1, por exemplo, o vencedor recebe 25 pontos.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Habilidade de Condução:</span> Inclui controle do carro em alta velocidade, frenagem precisa e capacidade de ultrapassagem em situações de disputa acirrada.</li><li><span style="color: #D9B341";>Conhecimento do Circuito:</span> Pilotos estudam o traçado de cada pista, incluindo curvas, áreas de escape e pontos de frenagem ideais.</li><li><span style="color: #D9B341";>Resistência Física e Mental:</span> Apesar de o carro ser a máquina principal, os pilotos precisam de excelente preparo físico e concentração para suportar forças gravitacionais intensas e manter foco durante horas.</li><li><span style="color: #D9B341";>Estratégia:</span> Inclui a gestão de pneus, combustível e decisões como a escolha do momento ideal para pit stops.</li><li><span style="color: #D9B341";>Trabalho em Equipe:</span> O sucesso no automobilismo depende da colaboração entre pilotos, engenheiros e mecânicos para ajustar o carro às condições da pista e da prova.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O automobilismo promove o trabalho em equipe, essencial para o sucesso de pilotos e escuderias.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Aproxima fãs e atletas em eventos globais, criando uma comunidade apaixonada pelo esporte.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Melhora da coordenação motora devido à necessidade de realizar movimentos precisos ao volante.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência:</span> Resistência muscular e cardiovascular, especialmente do pescoço e braços, devido às forças G durante as curvas.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de decisão:</span> Desenvolvimento da capacidade de tomada de decisão rápida e sob pressão.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e resiliência:</span> Aumento do foco e da resiliência mental em situações adversas.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha uma modalidade', text: 'Inicie com competições locais, como kart, que é a base para a formação de pilotos.' },
  { id: 1, title: 'Treinamento', text: 'Busque escolas especializadas para aprender técnicas de direção esportiva.' },
  { id: 2, title: 'Equipamentos', text: 'Capacetes, macacões de proteção, luvas e sapatos específicos são obrigatórios.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Treinos semanais no kartódromo ou simuladores para adquirir habilidades básicas.' },
  { id: 1, title: 'Profissionais', text: 'Treinamentos diários, incluindo simulações de corrida, estudos técnicos e atividades físicas.' }
];
const curiositiesItens = [
  { id: 'one', text: 'Ayrton Senna é considerado um dos maiores pilotos da história da Fórmula 1, com 41 vitórias e 3 títulos mundiais.' },
  { id: 'two', text: 'A primeira corrida de Fórmula 1 no Brasil aconteceu em 1973, no autódromo de Interlagos.' },
  { id: 'three', text: 'O Grande Prêmio de Mônaco é um dos circuitos mais emblemáticos do automobilismo, conhecido por suas curvas estreitas e glamour.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/automobilismo/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: "Fédération Internationale de l'Automobile (FIA)" },
  { id: 1, link: '', site: 'Confederação Brasileira de Automobilismo (CBA)' },
  { id: 3, link: '', site: 'Artigo "Evolution of Motorsport Technology" - ResearchGate' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="AUTOMOBILISMO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/automobilismo/introduction.jpg" />
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
