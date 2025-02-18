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
  { id: 0, picture: '/sports/surf/banner/01.jpg' },
  { id: 1, picture: '/sports/surf/banner/02.jpg' },
  { id: 2, picture: '/sports/surf/banner/03.webp' },
  { id: 3, picture: '/sports/surf/banner/04.webp' },
  { id: 4, picture: '/sports/surf/banner/05.webp' }
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
  { id: 0, picture: '/sports/anomino.jpeg', name: 'Gabriel Medina', about: 'Gabriel Medina é, sem dúvida, o maior nome do surfe brasileiro e mundial na atualidade. Campeão mundial da WSL (World Surf League) por duas vezes, Medina foi o primeiro brasileiro a conquistar o título mundial em 2014, e consolidou seu legado ao vencer novamente em 2018. Ele é reconhecido pela sua agressividade nas ondas e por sua capacidade de realizar manobras inovadoras, além de ser uma grande inspiração para a nova geração de surfistas brasileiros.' },
  { id: 1, picture: '/sports/anomino.jpeg', name: 'Adriano de Souza (Mineirinho)', about: 'Adriano de Souza, conhecido como Mineirinho, é outro gigante do surfe brasileiro. Campeão mundial em 2015, ele foi o primeiro brasileiro a conquistar o título da WSL, colocando o Brasil de vez no mapa do surfe mundial. Mineirinho é conhecido pela sua habilidade de surfar em ondas grandes e sua consistência nas competições.' },
  { id: 2, picture: '/sports/anomino.jpeg', name: 'Italo Ferreira', about: 'Italo Ferreira é um dos maiores talentos do surfe brasileiro, sendo campeão mundial de surfe em 2021. Ele é reconhecido pela sua velocidade e habilidades aéreas, conquistando a medalha de ouro nos Jogos Olímpicos de Tóquio 2020, onde foi o primeiro brasileiro a conquistar o título olímpico no surfe. Italo tem sido uma referência para muitos surfistas, especialmente pela sua abordagem técnica e inovadora.' },
  { id: 3, picture: '/sports/anomino.jpeg', name: 'Felipe Toledo', about: 'Felipe Toledo é outro surfista brasileiro de destaque, conhecido pela sua habilidade em manobras rápidas e aéreas. Ele tem sido um dos principais nomes do surfe mundial, com várias vitórias em etapas do circuito mundial e atuações consistentes. Felipe é um dos grandes nomes da nova geração de surfistas.' },
  { id: 4, picture: '/sports/anomino.jpeg', name: 'Miguel Pupo', about: 'Miguel Pupo é um dos surfistas de destaque do Brasil, com um estilo que mistura potência e fluidez. Ele tem sido uma constante no circuito mundial da WSL, com boas performances nas etapas internacionais. Além disso, Miguel foi medalhista em competições de grande porte como o Quiksilver Pro.' },
  { id: 5, picture: '/sports/anomino.jpeg', name: 'Silvana Lima', about: 'Silvana Lima é uma das maiores surfistas brasileiras e uma das principais representantes do surfe feminino mundial. Ela foi a primeira brasileira a se classificar para o campeonato mundial de surfe feminino da WSL, e ao longo de sua carreira, conquistou várias vitórias em etapas internacionais. Silvana é uma referência para muitas mulheres no esporte.' },
  { id: 6, picture: '/sports/anomino.jpeg', name: 'Tatiana Weston-Webb', about: 'Tatiana Weston-Webb é uma das maiores surfistas brasileiras da atualidade. Natural de Porto Rico, mas com fortes raízes brasileiras, Tatiana tem se destacado no circuito mundial feminino da WSL, constantemente entre as melhores classificadas, com vitórias em etapas importantes e uma habilidade técnica impressionante.' },
  { id: 7, picture: '/sports/anomino.jpeg', name: 'Sophie McCulloch', about: 'Sophie McCulloch é uma das promessas do surfe brasileiro, destacando-se no cenário internacional por sua agressividade nas ondas. Ela foi uma das revelações mais promissoras do Brasil e continua a conquistar seu espaço no circuito mundial, sendo uma das principais figuras do surfe feminino.' },
  { id: 8, picture: '/sports/anomino.jpeg', name: 'Gabriela Dantas', about: 'Gabriela Dantas é uma das grandes promessas do surfe feminino no Brasil. Ela se destacou em campeonatos nacionais e em competições internacionais, mostrando grande habilidade nas ondas e uma excelente técnica. Gabriela tem se tornado cada vez mais reconhecida no cenário do surfe.' },
  { id: 9, picture: '/sports/anomino.jpeg', name: 'Lari Costa', about: 'Lari Costa é uma das surfistas brasileiras de destaque, com um estilo técnico e sólido nas competições nacionais e internacionais. Ela tem ganhado visibilidade e foi uma das principais representantes do Brasil em campeonatos mundiais, destacando-se entre as grandes promessas do surfe feminino no país.' },
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
