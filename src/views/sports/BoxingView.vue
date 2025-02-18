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
  { id: 0, picture: '/sports/boxe/banner/01.jpg' },
  { id: 1, picture: '/sports/boxe/banner/02.jpg' },
  { id: 2, picture: '/sports/boxe/banner/03.jpg' },
  { id: 3, picture: '/sports/boxe/banner/04.jpg' },
  { id: 4, picture: '/sports/boxe/banner/05.jpg' }
];
const introductionText = 'O boxe é um esporte de combate que combina força, resistência, estratégia e agilidade. É disputado entre dois atletas em um ringue, com o objetivo de acumular mais pontos ou conseguir o nocaute (KO) sobre o oponente. Popularizado globalmente por ícones como Muhammad Ali, Mike Tyson e, no Brasil, Éder Jofre, o boxe é reconhecido tanto como uma modalidade esportiva quanto uma prática para desenvolvimento físico e mental. No Brasil, a popularidade do boxe tem crescido, tanto em competições profissionais quanto como forma de treinamento físico em academias.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O boxe tem origens que remontam à Antiguidade. Registros indicam que o esporte era praticado em civilizações como Egito, Grécia e Roma, onde combates com os punhos eram uma forma de entretenimento e treino militar. No entanto, o boxe moderno foi regulamentado na Inglaterra durante o século XVIII, com a criação das Regras de Queensberry em 1867, que introduziram o uso obrigatório de luvas e estipularam limites de tempo para os rounds.</p><p>No Brasil, o boxe começou a ganhar destaque na década de 1920, mas foi na década de 1950 que o país alcançou projeção internacional com Éder Jofre, considerado um dos maiores pugilistas da história. Mais recentemente, nomes como Acelino "Popó" Freitas mantiveram a relevância do país no cenário do boxe mundial.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo:</span> O objetivo no boxe é derrotar o adversário marcando pontos ou alcançando um nocaute técnico (quando o oponente não pode continuar lutando).</li><li><span style="color: #D9B341";>Estrutura de uma luta</span> <p>Dividida em rounds de 3 minutos, com 1 minuto de descanso entre eles.</p><p>As lutas podem ter 4, 6, 8, 10 ou 12 rounds, dependendo do nível de competição.</p><p>A pontuação é atribuída por juízes com base na quantidade e qualidade dos golpes aplicados.</p></li><li><span style="color: #D9B341; font-size: 1.7vw">Regras gerais</span> <ol><li><span style="color: #D9B341";>Golpes válidos:</span> Apenas socos com a parte frontal da luva, direcionados à cabeça ou ao torso, são permitidos.</li><li><span style="color: #D9B341";>Proibições:</span> Golpes abaixo da linha da cintura, Agarrar ou empurrar o adversário e Utilizar a cabeça, cotovelos ou joelhos.</li><li><span style="color: #D9B341";>Proteção:</span> É obrigatório o uso de luvas, protetores bucais e, para os homens, protetores genitais e Os combates amadores exigem capacetes de proteção.</li></ol></li><li><span style="color: #D9B341";>Condições de vitória</span> <p><span style="text-decoration: underline 2px">Nocaute (KO):</span> Quando o adversário é incapaz de continuar após uma contagem de 10 segundos.</p><p><span style="text-decoration: underline 2px">Nocaute técnico (TKO):</span> Quando o árbitro ou o médico interrompe a luta por razões de segurança.</p><p><span style="text-decoration: underline 2px">Decisão dos juízes:</span> Baseada na pontuação acumulada ao longo dos rounds.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Postura:</span> Manter uma base sólida é essencial para estabilidade e equilíbrio e Os pés devem estar espaçados, com o peso distribuído entre as pernas.</li><li><span style="color: #D9B341";>Movimentação:</span> O deslocamento constante evita ser um alvo fixo e facilita os contra-ataques e Movimentos incluem avanços, recuos e laterais.</li><li><span style="color: #D9B341";>Golpes principais:</span> <p><span style="text-decoration: underline 2px">Jab:</span> Soco rápido e direto, usado para manter a distância ou iniciar combinações.</p><p><span style="text-decoration: underline 2px">Direto:</span> Soco potente, geralmente usado para finalizar ataques.</p><p><span style="text-decoration: underline 2px">Hook:</span> Soco em arco direcionado à lateral da cabeça ou do torso.</p><p><span style="text-decoration: underline 2px">Uppercut:</span> Soco ascendente, eficiente em curta distância.</p></li><li><span style="color: #D9B341";>Defesa:</span> Inclui bloqueios, esquivas, clinches (agarrões permitidos) e movimentação de cabeça.</li><li><span style="color: #D9B341";>Condicionamento físico:</span> O boxe exige treinamento aeróbico e anaeróbico intenso, além de exercícios específicos para força, resistência e explosão muscular.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Espírito esportivo:</span> O boxe promove respeito mútuo entre os atletas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Comunidade:</span> Academias de boxe são espaços de convivência e incentivo coletivo.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora da capacidade cardiovascular:</span> Treinos de boxe aumentam a resistência cardíaca e pulmonar.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da força muscular:</span> Os golpes exigem força dos braços, ombros, costas e pernas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Queima de calorias:</span> Uma sessão intensa pode queimar até 800 calorias por hora.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> O boxe melhora a sincronização entre os movimentos do corpo.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Alívio do estresse:</span> O esporte ajuda a liberar tensões acumuladas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da confiança:</span> A prática constante melhora a autoestima e a sensação de controle.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Disciplina e foco:</span> O treinamento regular ensina a importância da dedicação e do planejamento.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Equipamento inicial', text: 'Luvas, bandagens para as mãos, protetor bucal e roupas confortáveis.' },
  { id: 1, title: 'Local', text: 'Procure uma academia de boxe ou treinador qualificado.' },
  { id: 2, title: 'Aulas iniciais', text: 'Treinos para iniciantes geralmente incluem técnica de golpes, postura e exercícios de condicionamento.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '2 a 3 vezes por semana, com sessões de 1 hora.' },
  { id: 1, title: 'Avançados', text: '4 a 6 treinos semanais, incluindo sparrings e treinos específicos para força e resistência.' }
];
const curiositiesItens = [
  { id: 'one', text: 'Muhammad Ali, considerado o maior pugilista da história, ganhou o ouro olímpico em 1960.' },
  { id: 'two', text: 'Éder Jofre foi o primeiro brasileiro a se tornar campeão mundial de boxe.' },
  { id: 'three', text: 'O boxe feminino foi introduzido nos Jogos Olímpicos apenas em 2012.' },
  { id: 'four', text: 'O maior peso-pesado de todos os tempos, Mike Tyson, tornou-se campeão mundial aos 20 anos.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/boxe/athletes/popó.webp', name: 'Acelino "Popó" Freitas', about: 'Um dos maiores nomes do boxe brasileiro, Popó Freitas foi bicampeão mundial nas categorias superpena e leve. Conhecido por sua técnica refinada e potência nos socos, Popó se destacou tanto no Brasil quanto no exterior, conquistando títulos mundiais na WBA e WBO. Ele também teve passagens memoráveis pelas grandes arenas de boxe, sendo um dos esportistas mais respeitados no país. Popó foi uma grande inspiração para o boxe brasileiro e se aposentou com uma carreira vitoriosa, marcada por vitórias contra grandes nomes internacionais.' },
  { id: 1, picture: '/sports/boxe/athletes/robson-conseição.avif', name: 'Robson Conceição', about: 'Robson Conceição é o primeiro brasileiro a conquistar uma medalha de ouro olímpica no boxe, feita nos Jogos Olímpicos de 2016, no Rio de Janeiro. Além disso, Robson se destacou como campeão mundial no boxe profissional, sendo um dos maiores talentos da nova geração de pugilistas brasileiros. Sua técnica apurada e sua calma dentro do ringue são suas marcas registradas, o que o coloca como uma grande promessa para o boxe mundial.' },
  { id: 2, picture: '/sports/boxe/athletes/éder-jofre.jpg', name: 'Éder Jofre', about: 'Considerado um dos maiores boxeadores da história do Brasil, Éder Jofre foi campeão mundial nas categorias galo e supergalo, com destaque por sua habilidade técnica e destreza dentro do ringue. Jofre, também conhecido como "Galinho de Ouro", teve uma carreira impressionante e é amplamente reconhecido por seu legado, sendo considerado o melhor boxeador brasileiro de todos os tempos.' },
  { id: 3, picture: '/sports/anomino.jpeg', name: 'Vanderlei "Cavalo de Aço" Silva', about: 'Vanderlei Silva é um boxeador famoso por sua força e resistência, tendo sido campeão mundial nos anos 1980. Durante sua carreira, ele conquistou respeito nas maiores arenas de boxe ao redor do mundo, sendo um ícone do esporte no Brasil.' },
  { id: 4, picture: '/sports/boxe/athletes/michael-oliveira.webp', name: 'Michel Oliveira', about: 'Michel Oliveira tem sido um nome crescente no boxe brasileiro, com uma carreira de sucesso em competições internacionais. Ele já conquistou títulos nacionais e possui um futuro promissor, se destacando por sua versatilidade e força no ringue.' },
  { id: 5, picture: '/sports/boxe/athletes/regiane-da-silva.jpg', name: 'Regiane da Silva', about: 'Regiane da Silva é uma das maiores boxeadoras brasileiras da história, com uma carreira de destaque nas competições internacionais. Ela foi campeã mundial de boxe e é considerada uma das pioneiras do boxe feminino no Brasil, representando o país em campeonatos mundiais e Jogos Olímpicos.' },
  { id: 6, picture: '/sports/anomino.jpeg', name: 'Edivania Santos', about: 'Edivania Santos tem sido uma das boxeadoras mais talentosas do Brasil. Ela conquistou medalhas de destaque em campeonatos internacionais, incluindo o Campeonato Mundial de Boxe. Sua habilidade técnica e sua experiência dentro do ringue a colocam entre as melhores do país.' },
  { id: 7, picture: '/sports/boxe/athletes/barbara-dos-santos.jpg', name: 'Bárbara dos Santos', about: 'Bárbara dos Santos é uma boxeadora em ascensão no Brasil. Com uma carreira crescente, ela tem se destacado nas categorias de base do boxe brasileiro, e tem sido uma das grandes promessas do esporte.' },
  { id: 8, picture: '/sports/boxe/athletes/jucielen-romeu.webp', name: 'Jucielen Romeu', about: 'Jucielen Romeu é uma boxeadora talentosa que já conquistou vitórias importantes em torneios nacionais e internacionais. Ela foi campeã brasileira e tem se preparado para representações no cenário internacional.' },
  { id: 9, picture: '/sports/boxe/athletes/chris-namus.png', name: 'Chris Namús', about: 'Natural do Uruguai, mas radicada no Brasil, Chris Namús é uma das grandes referências do boxe feminino na América Latina. Com uma carreira de sucesso e títulos mundiais, ela é uma das principais representantes do boxe feminino no Brasil.' },
];

const sources = [
  { id: 0, link: '', site: 'Federação Internacional de Boxe (IBF)' },
  { id: 1, link: '', site: 'Associação Mundial de Boxe (WBA)' },
  { id: 3, link: '', site: '"História do Boxe" - Enciclopédia Britânica' },
  { id: 4, link: '', site: 'Confederação Brasileira de Boxe (CBBoxe)' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="BOXE" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/boxe/introduction.jpeg" />
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
