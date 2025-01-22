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
  { id: 0, picture: '/sports/esgrima/banner/01.png' },
  { id: 1, picture: '/sports/esgrima/banner/02.png' },
  { id: 2, picture: '/sports/esgrima/banner/03.png' },
  { id: 3, picture: '/sports/esgrima/banner/04.png' },
  { id: 4, picture: '/sports/esgrima/banner/05.png' },
  { id: 5, picture: '/sports/esgrima/banner/06.png' }
];
const introductionText = 'A esgrima é um esporte de combate que envolve habilidade, agilidade e estratégia, sendo uma das mais antigas modalidades esportivas, com origem nas lutas medievais e nos duelos de espada. A esgrima moderna, praticada nos Jogos Olímpicos, é caracterizada por três tipos de armas: florete, espada e sabre. Os atletas competem em duelos rápidos e intensos, buscando tocar o adversário enquanto evitam ser tocados. A esgrima exige grande concentração, precisão e tempo de reação. No Brasil, a esgrima tem ganhado espaço, com destaque para atletas como a medalhista olímpica Yane Marques.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'A esgrima tem suas raízes na prática de duelos e no treinamento militar, com registros de combate com espada na Antiguidade. No entanto, a esgrima moderna, como a conhecemos hoje, começou a se formar no século XIX, na Europa, como um esporte regulamentado. A Federação Internacional de Esgrima (FIE) foi criada em 1913 para organizar o esporte a nível mundial. A esgrima foi incluída nos Jogos Olímpicos de Paris, em 1900, e desde então é uma das modalidades tradicionais dos Jogos. No Brasil, a esgrima foi introduzida no início do século XX e teve um grande desenvolvimento nas últimas décadas, com boas performances em competições internacionais.' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Modalidades e Armas</span> <p><span style="text-decoration: underline 3px">Florete:</span> A arma mais leve, utilizada para toques no tronco, excluindo os braços e cabeça.</p><p><span style="text-decoration: underline 3px">Sabre:</span> Uma espada leve e mais curta, com a qual os toques podem ser feitos no tronco, braços e cabeça.</p><p><span style="text-decoration: underline 3px">Espada:</span> A arma mais pesada, onde o toque é válido em qualquer parte do corpo.</p></li><li><span style="color: #D9B341";>Pontos:</span> O objetivo da esgrima é marcar pontos tocando o adversário de maneira controlada. O ponto é dado quando o toque é registrado no sistema eletrônico, que é acionado pelo contato com o adversário.</li><li><span style="color: #D9B341";>Sistema de Pontuação</span> <p>O duelo é dividido em "assaltos", geralmente de 3 a 5 minutos, dependendo da competição.</p><p>Para ganhar um ponto, o atleta precisa tocar o adversário de forma legal e dentro do tempo estipulado.</p><p>O primeiro a atingir a pontuação predeterminada vence o duelo.</p></li><li><span style="color: #D9B341";>Equipamento</span> <p><span style="text-decoration: underline 3px">Máscara de esgrima:</span> Protege o rosto e a cabeça.</p><p><span style="text-decoration: underline 3px">Roupas:</span> Uniforme de esgrima, incluindo jaqueta, luvas e calças, para proteger o corpo dos impactos.</p><p><span style="text-decoration: underline 3px">Espada ou sabre:</span> A arma utilizada, que deve estar devidamente registrada para garantir a segurança.</p><p><span style="text-decoration: underline 3px">Sistema eletrônico:</span> Dispositivo usado para registrar os toques e garantir que a pontuação seja correta.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Postura e Posições:</span> A postura inicial, conhecida como "en-garde", é fundamental para a defesa e ataque. O esgrimista deve estar equilibrado e pronto para se mover rapidamente.</li><li><span style="color: #D9B341";>Ataque e Defesa:</span> A esgrima exige um equilíbrio entre ataque e defesa. O movimento ofensivo pode incluir estocadas (ataques com a ponta da espada) ou cortes (ataques com a lâmina). A defesa envolve bloquear ou esquivar-se do adversário.</li><li><span style="color: #D9B341";>Movimentos:</span> A esgrima é um esporte de alta velocidade, onde os movimentos devem ser rápidos e precisos. O esgrimista deve ser capaz de se mover rapidamente para a frente e para trás, além de realizar mudanças de direção de maneira ágil.</li><li><span style="color: #D9B341";>Estratégia:</span> A esgrima exige uma estratégia apurada, pois cada esgrimista precisa antecipar as ações do adversário. A leitura do jogo é essencial, tanto para atacar quanto para defender com eficiência.</li><li><span style="color: #D9B341";>Tempo de Reação:</span> A capacidade de reagir rapidamente aos movimentos do adversário é um dos principais fundamentos do esporte. O esgrimista deve estar sempre alerta para aproveitar qualquer abertura no ataque.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> A esgrima promove a interação social através de clubes e competições, criando um ambiente de amizade e camaradagem entre os praticantes.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Espírito esportivo:</span> É um esporte com forte presença de valores de respeito e cortesia, fundamentais para manter o espírito esportivo durante as competições.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Aumenta a agilidade e a coordenação motora.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> Desenvolve a força muscular, especialmente nos membros superiores e core, devido à necessidade de realizar movimentos rápidos e controlados.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência cardiovascular:</span> Melhora a resistência cardiovascular devido à intensidade dos combates.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Equilíbrio e flexibilidade:</span> Trabalha o equilíbrio e a flexibilidade, essenciais para uma boa performance.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Concentração e foco:</span> Melhora a concentração e o foco, já que cada movimento deve ser calculado e preciso.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de decisões:</span> Desenvolve a tomada rápida de decisões e o controle emocional, pois os atletas enfrentam pressões durante os duelos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Estratégia:</span> Estimula a estratégia e o pensamento crítico, já que cada ação deve ser planejada para antecipar os movimentos do adversário.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha do Clube e Equipamento Básico', text: 'Procure um clube de esgrima ou um treinador qualificado para aprender as técnicas corretas e inicie com os equipamentos básicos, como máscara, jaqueta e espada.' },
  { id: 1, title: 'Treinamento Inicial', text: 'Comece com o treino das posturas e movimentos básicos, como a postura "en-garde", e evolua para os ataques e defesas.' },
  { id: 2, title: 'Competições', text: 'Após adquirir experiência e confiança, você pode começar a participar de competições locais.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'De 2 a 3 vezes por semana, com foco no aprendizado das técnicas básicas e desenvolvimento físico.' },
  { id: 1, title: 'Atletas Avançados', text: '4 a 6 vezes por semana, com treino técnico, tático e físico para melhorar a velocidade e a precisão.' }
];
const curiositiesItens = [
  { id: 'one', text: 'A esgrimista brasileira Yane Marques conquistou a medalha de bronze nos Jogos Olímpicos de Londres 2012, tornando-se a primeira atleta brasileira a conquistar uma medalha olímpica na esgrima.' },
  { id: 'two', text: 'A esgrima tem raízes em antigas técnicas de combate militar e de duelos entre cavaleiros na Idade Média.' },
  { id: 'three', text: 'A esgrima é um dos esportes mais antigos dos Jogos Olímpicos, tendo sido incluída desde a primeira edição moderna, em 1896, com exceção dos Jogos de Los Angeles 1932, quando não houve competições de esgrima.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/esgrima/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: "Fédération Internationale d'Escrime (FIE)" },
  { id: 1, link: '', site: 'Comitê Olímpico Internacional (COI)' },
  { id: 3, link: '', site: 'Associação Brasileira de Esgrima (ABAE)' },
  { id: 4, link: '', site: 'Journal of Sports Science' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="ESGRIMA" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/esgrima/introduction.jpg" />
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
