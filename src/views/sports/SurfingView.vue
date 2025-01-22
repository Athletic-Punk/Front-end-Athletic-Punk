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
  { id: 0, picture: '/sports/surf/banner/01.png' },
  { id: 1, picture: '/sports/surf/banner/02.png' },
  { id: 2, picture: '/sports/surf/banner/03.png' },
  { id: 3, picture: '/sports/surf/banner/04.png' },
  { id: 4, picture: '/sports/surf/banner/05.png' },
  { id: 5, picture: '/sports/surf/banner/06.png' }
];
const introductionText = 'O surf é um dos esportes aquáticos mais populares e de maior conexão com a natureza. Praticado em praias ao redor do mundo, ele combina equilíbrio, força e técnica para deslizar sobre ondas usando uma prancha. No Brasil, o surf é amplamente difundido, com atletas como Gabriel Medina, Ítalo Ferreira e Maya Gabeira, que são referência internacional. O esporte também reflete um estilo de vida que valoriza a liberdade e o respeito ao meio ambiente.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O surf tem origens milenares, sendo inicialmente praticado pelos povos polinésios, especialmente no Havaí. Para essas culturas, o esporte tinha um significado espiritual e social. Foi no século XX que o surf ganhou projeção global, especialmente com o avanço da indústria de pranchas e o surgimento de competições organizadas.</p><p>No Brasil, o surf começou a ser praticado nas décadas de 1930 e 1940, mas ganhou força a partir dos anos 1970. A criação de associações, como a Confederação Brasileira de Surf (CBSurf), impulsionou o desenvolvimento do esporte no país.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Modalidades</span> <p>O surf possui diferentes categorias e formas de competição:</p><p><span style="text-decoration: underline 3px">Surf de Ondas Grandes:</span> Praticado em ondas que ultrapassam 6 metros de altura, geralmente com auxílio de jet skis para o resgate.</p><p><span style="text-decoration: underline 3px">Surf Clássico:</span> Realizado em ondas de altura moderada, focando em manobras técnicas.</p><p><span style="text-decoration: underline 3px">Longboard:</span> Modalidade que utiliza pranchas maiores, destacando-se pelo estilo fluido e manobras tradicionais.</p><p><span style="text-decoration: underline 3px">Tow-In Surfing:</span> Utiliza jet skis para impulsionar o surfista até ondas gigantes, permitindo surfar em condições extremas.</p></li><li><span style="color: #D9B341";>Sistema de Pontuação</span> <p>Avaliação feita por juízes com base em critérios como criatividade, dificuldade, fluidez e controle durante as manobras.</p><p>Cada onda recebe uma nota de 0 a 10. Os surfistas somam as duas melhores notas para formar a pontuação final.</p></li><li><span style="color: #D9B341";>Regras Gerais</span> <p><span style="text-decoration: underline 3px">Prioridade:</span> O surfista mais próximo da formação da onda tem o direito de surfá-la.</p><p><span style="text-decoration: underline 3px">Penalidades:</span> Interferir na onda de outro surfista pode resultar em perda de pontos.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Remada:</span> Técnica para alcançar a área onde as ondas estão quebrando. É essencial para pegar a onda com velocidade e eficiência.</li><li><span style="color: #D9B341";>Drop:</span> Movimento de descida inicial na onda, determinando o posicionamento do surfista na parede da onda.</li><li><span style="color: #D9B341";>Manobras</span> <p><span style="text-decoration: underline 3px">Cutback:</span> Consiste em fazer uma curva de retorno para a parte crítica da onda.</p><p><span style="text-decoration: underline 3px">Floater:</span> O surfista desliza sobre a parte superior da onda antes de descer novamente.</p><p><span style="text-decoration: underline 3px">Aéreo:</span> Manobra avançada onde o surfista salta da onda e aterrissa com a prancha.</p></li><li><span style="color: #D9B341";>Equilíbrio e Postura:</span> Posicionar os pés corretamente na prancha e manter o centro de gravidade baixo são cruciais para estabilidade.</li><li><span style="color: #D9B341";>Leitura de Ondas:</span> Identificar e prever como a onda se comportará é fundamental para escolher a melhor onda e realizar manobras eficazes.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Integração em comunidades de surfistas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Vida mais saudável:</span> Promoção de um estilo de vida sustentável e respeitoso com o meio ambiente.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora na resistência:</span> Melhora da resistência cardiovascular e muscular.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento do corpo:</span> Fortalecimento do core, braços e pernas devido à remada e ao equilíbrio.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Flexibilidade e coordenação motora:</span> Aumento da flexibilidade e coordenação motora.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora no humor:</span> Conexão com a natureza e redução do estresse.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Concentração e foco:</span> Aumento da concentração e do foco durante as sessões.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha da prancha', text: 'Para iniciantes, recomenda-se pranchas maiores (longboards), que oferecem maior estabilidade.' },
  { id: 1, title: 'Aprenda com um instrutor', text: 'Aulas básicas ajudam a entender o mar, técnicas de segurança e primeiros movimentos.' },
  { id: 2, title: 'Conheça o mar', text: 'Estude as condições do mar, como correntes, ventos e marés.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '1 a 2 vezes por semana, com sessões de 1 hora, priorizando a adaptação ao ambiente aquático.' },
  { id: 1, title: 'Intermediários e Avançados', text: '3 a 5 vezes por semana, incluindo treinos técnicos e de resistência.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O Brasil é conhecido como a "Tempestade Brasileira" no surf mundial, graças ao domínio de seus atletas no circuito profissional.' },
  { id: 'two', text: 'Ítalo Ferreira foi o primeiro campeão olímpico de surf, conquistando o ouro nos Jogos de Tóquio 2020.' },
  { id: 'three', text: 'A maior onda já surfada foi registrada em Nazaré, Portugal, com cerca de 26 metros de altura.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/surf/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'Confederação Brasileira de Surf (CBSurf)' },
  { id: 1, link: '', site: 'World Surf League (WSL)' },
  { id: 3, link: '', site: '"História do Surf" - Encyclopedia of Surfing' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="SURF" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/surf/introduction.jpg" />
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
