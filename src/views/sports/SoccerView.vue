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
  { id: 0, picture: '/sports/futebol/banner/01.webp' },
  { id: 1, picture: '/sports/futebol/banner/02.jpg' },
  { id: 2, picture: '/sports/futebol/banner/03.jpg' },
  { id: 3, picture: '/sports/futebol/banner/04.jpg' },
  { id: 4, picture: '/sports/futebol/banner/05.jpg' }
];
const introductionText = '<p>O futebol é, sem dúvida, o esporte mais popular do Brasil e do mundo. Ele reúne milhões de adeptos em todos os continentes e transcende as fronteiras do esporte, tornando-se um fenômeno cultural, social e econômico. No Brasil, o futebol é considerado uma paixão nacional e está profundamente enraizado na história do país, com clubes renomados e jogadores que se tornaram ícones globais, como Pelé, Zico, Romário, Ronaldo Fenômeno, Ronaldinho Gaúcho e Neymar.</p><p>Além de ser um esporte profissional, o futebol também é amplamente praticado de forma recreativa em campos, praias e nas ruas de todas as cidades, tornando-o acessível a pessoas de todas as idades e origens. Com sua simplicidade nas regras e a necessidade de poucos recursos para a prática, o futebol é, sem dúvida, um esporte universal.</p>';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>A história do futebol remonta ao século XIX, com diversas versões de jogos semelhantes sendo praticadas em diferentes culturas. No entanto, o futebol moderno teve sua origem na Inglaterra, em 1863, quando a Football Association foi criada, estabelecendo as regras formais do jogo. A partir daí, o futebol se espalhou rapidamente por todo o mundo, sendo introduzido no Brasil no final do século XIX por imigrantes britânicos.</p><p>O futebol brasileiro começou a se destacar no início do século XX, com o surgimento de grandes clubes e a seleção nacional conquistando sua primeira Copa do Mundo em 1958, na Suécia. Desde então, o Brasil tem sido um dos países mais bem-sucedidos no futebol internacional, com cinco títulos mundiais e uma rica história de jogadores e equipes que marcaram o esporte globalmente.</p>' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo:</span> O objetivo do futebol é marcar mais gols que o adversário durante o tempo regulamentar de jogo. Um gol é marcado quando a bola atravessa completamente a linha de gol entre as traves e sob o travessão.</li><li><span style="color: #D9B341";>Estrutura do Jogo</span> <p>A partida de futebol é disputada entre duas equipes de 11 jogadores cada, incluindo o goleiro.</p><p>O tempo de jogo é dividido em dois tempos de 45 minutos, com um intervalo de 15 minutos entre eles. Em caso de empate em competições que exigem um vencedor, o jogo pode ser decidido por prorrogação e, se necessário, pênaltis.</p></li><li><span style="color: #D9B341";>Regras principais</span> <p><span style="text-decoration: underline 3px">Início do Jogo:</span> O jogo começa com uma cobrança de centro após o apito inicial do árbitro. A bola deve ser tocada para frente e os jogadores devem respeitar a linha central.</p><p><span style="text-decoration: underline 3px">Faltas:</span> São cometidas quando um jogador faz algo ilegal, como empurrar, agredir ou obstruir o adversário de maneira injusta. O árbitro pode aplicar cartões amarelos (advertência) ou vermelhos (expulsão) dependendo da gravidade da infração.</p><p><span style="text-decoration: underline 3px">Impedimento:</span> Um jogador está em posição de impedimento quando está mais próximo da linha de gol adversária do que o penúltimo defensor no momento do passe, a menos que esteja em sua metade do campo.</p><p><span style="text-decoration: underline 3px">Saque de Bola:</span> O saque de bola ocorre quando a bola sai pelas linhas laterais, sendo cobrada com as mãos, com ambas as mãos atrás da cabeça.</p><p><span style="text-decoration: underline 3px">Escanteio e Tiro de Meta:</span> O escanteio ocorre quando a bola sai pela linha de fundo após ser tocada por um jogador da defesa. Já o tiro de meta é cobrado quando a bola sai pela linha de fundo após ser tocada por um atacante.</p><p><span style="text-decoration: underline 3px">Gol:</span> Quando a bola cruza completamente a linha de gol entre as traves e sob o travessão.</p></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Passe:</span> O passe é um dos fundamentos mais importantes do futebol, utilizado para manter a posse de bola e criar oportunidades de gol. Pode ser feito com os pés, com a cabeça ou até com o peito, dependendo da situação.</li><li><span style="color: #D9B341";>Drible:</span> O drible é o movimento usado para enganar o adversário e ganhar terreno. Pode ser feito com qualquer parte do pé e envolve movimentos rápidos e precisos para desviar da marcação.</li><li><span style="color: #D9B341";>Finalização:</span> A finalização é a habilidade de chutar a bola em direção ao gol com precisão e força, visando marcar o gol. Existem diferentes tipos de finalização, como o chute colocado, o chute forte e o voleio.</li><li><span style="color: #D9B341";>Defesa e Bloqueio:</span> Os defensores têm como objetivo impedir que os atacantes marquem gols. A defesa pode envolver desarmes, interceptações e até mesmo a marcação individual e por zona.</li><li><span style="color: #D9B341";>Cabeceio:</span> O cabeceio é uma técnica usada para passar, defender ou finalizar a bola usando a cabeça. É fundamental em lances de bola aérea, como escanteios e cruzamentos.</li><li><span style="color: #D9B341";>Posicionamento e Tática:</span> O posicionamento é a chave para um bom desempenho coletivo, sendo que cada jogador deve ocupar sua posição de maneira estratégica para atacar e defender. A tática envolve o planejamento do jogo e a maneira como as equipes se organizam em campo.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Integração e sociabilidade:</span> O futebol promove o encontro de pessoas de diferentes culturas e origens, ajudando a criar laços de amizade e a melhorar a comunicação.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Disciplina e respeito:</span> O respeito às regras e à autoridade (árbitros) e a disciplina durante o treinamento são importantes para o desenvolvimento pessoal dos jogadores.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da resistência cardiovascular:</span> O futebol é um esporte aeróbico, o que significa que ele melhora a saúde do coração e a resistência do jogador.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Fortalecimento muscular:</span> O esporte trabalha todos os músculos do corpo, especialmente as pernas, devido aos constantes sprints e mudanças de direção.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhoria na coordenação motora:</span> O controle da bola, os passes e os dribles ajudam a melhorar a coordenação motora e os reflexos.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Aumento da concentração:</span> Os jogadores precisam se concentrar constantemente no jogo, prestando atenção à movimentação da bola e aos movimentos dos adversários.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O futebol é um esporte coletivo, que exige cooperação entre os jogadores, o que fortalece a habilidade de trabalhar em equipe.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Redução do estresse:</span> Como em outros esportes, o futebol é uma ótima maneira de liberar a tensão e reduzir o estresse.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Equipamento', text: 'Para jogar futebol, são necessários apenas tênis apropriados (ou chuteiras, no caso de campos de grama) e uma bola. Se for praticar em campo de futebol, uma camisa e shorts confortáveis também são ideais.' },
  { id: 1, title: 'Prática', text: 'Comece praticando com amigos em campos locais ou em escolas e clubes que oferecem aulas de futebol.' },
  { id: 2, title: 'Escolinhas de futebol', text: 'É fundamental buscar aulas com professores qualificados, que possam ensinar as técnicas básicas e fornecer o treinamento necessário.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Comece com 2 a 3 vezes por semana, para se acostumar com os fundamentos e melhorar a resistência física.' },
  { id: 1, title: 'Avançados', text: 'Para jogadores mais experientes, recomenda-se praticar 4 a 6 vezes por semana, incluindo treinos de técnica, condicionamento físico e tática.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O Brasil é o único país a ter conquistado cinco Copas do Mundo de Futebol, sendo as mais recentes em 1994 e 2002.' },
  { id: 'two', text: 'Pelé, considerado o maior jogador de todos os tempos, marcou mais de 1.000 gols na carreira e conquistou três Copas do Mundo.' },
  { id: 'three', text: 'O Maracanã, no Rio de Janeiro, é um dos estádios mais icônicos do mundo, tendo sediado a final da Copa do Mundo de 1950 e da Copa de 2014.' },
  { id: 'four', text: ' futebol feminino tem crescido em popularidade, com países como os Estados Unidos, Alemanha e Brasil investindo em ligas e seleções de destaque.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/futebol/athletes/.PNG', name: 'Pelé', about: 'Pelé é considerado o maior jogador de futebol de todos os tempos, não apenas no Brasil, mas no mundo. Tricampeão mundial (1958, 1962 e 1970), Pelé marcou mais de mil gols em sua carreira e é um ícone mundial do esporte. Sua habilidade técnica, visão de jogo e carisma ajudaram a popularizar o futebol e a consolidá-lo como o esporte mais popular do planeta.' },
  { id: 1, picture: '/sports/futebol/athletes/.PNG', name: 'Ronaldo Nazário', about: 'Ronaldo, conhecido como "Fenômeno", é outro ícone do futebol brasileiro e mundial. Bicampeão mundial (1994 e 2002), ele é amplamente reconhecido por sua habilidade, velocidade e dribles desconcertantes. Ronaldo também venceu o prêmio de Melhor Jogador do Mundo pela FIFA três vezes e teve uma carreira brilhante no Barcelona, Real Madrid e Inter de Milão, entre outros clubes.' },
  { id: 2, picture: '/sports/futebol/athletes/.PNG', name: 'Romário', about: 'Romário é outro gigante do futebol brasileiro, com uma carreira recheada de títulos e gols. Campeão mundial em 1994, Romário foi um dos maiores atacantes da história do futebol, com uma habilidade incomparável na finalização e um instinto matador na área. Além disso, Romário teve passagens brilhantes pelo Flamengo, Barcelona e Vasco da Gama, entre outros clubes.' },
  { id: 3, picture: '/sports/futebol/athletes/.PNG', name: 'Neymar Jr.', about: 'Neymar é o principal nome do futebol brasileiro contemporâneo. Com grandes passagens pelo Santos, Barcelona e Paris Saint-Germain, Neymar é conhecido por sua habilidade técnica, dribles e gols. Ele também é um dos maiores artilheiros da Seleção Brasileira e tem se destacado em Copas do Mundo e em competições internacionais.' },
  { id: 4, picture: '/sports/futebol/athletes/.PNG', name: 'Cafu', about: 'Cafu é o único jogador na história a ter disputado cinco Copas do Mundo, sendo campeão mundial em 1994 e 2002. Além disso, ele é amplamente reconhecido como um dos melhores laterais-direitos de todos os tempos, com grande contribuição para a Seleção Brasileira e para clubes como São Paulo, Roma e Milan.' },
  { id: 5, picture: '/sports/futebol/athletes/.PNG', name: 'Marta', about: 'Marta é considerada a maior jogadora de futebol feminino de todos os tempos. Com seis prêmios de Melhor Jogadora do Mundo pela FIFA, ela se destaca pela sua técnica, visão de jogo e habilidade no drible. Marta é a maior artilheira da história das Copas do Mundo e teve uma carreira brilhante tanto no Brasil quanto no exterior, com passagens por clubes como o Orlando Pride, da Liga dos Estados Unidos.' },
  { id: 6, picture: '/sports/futebol/athletes/.PNG', name: 'Formiga', about: 'Formiga é uma das maiores jogadoras de futebol feminino da história. Com cinco Copas do Mundo disputadas, ela é uma das jogadoras mais experientes e respeitadas na Seleção Brasileira. Formiga também teve uma carreira vitoriosa em clubes, com destaque no PSG e no São José. Sua habilidade no meio-campo e sua liderança são essenciais para o futebol feminino brasileiro.' },
  { id: 7, picture: '/sports/futebol/athletes/.PNG', name: 'Cristiane', about: 'Cristiane é uma das principais artilheiras da Seleção Brasileira, com passagens por várias edições de Copas do Mundo e Jogos Olímpicos. Sua habilidade de finalização e seu trabalho coletivo a tornaram uma das maiores jogadoras do futebol feminino brasileiro. Cristiane também teve passagens por clubes europeus, como o Paris Saint-Germain.' },
  { id: 8, picture: '/sports/futebol/athletes/.PNG', name: 'Andressa Alves', about: 'Andressa Alves é uma das jogadoras mais versáteis da Seleção Brasileira, atuando em diversas posições ofensivas. Com passagens por clubes de renome como Barcelona e Roma, ela é reconhecida pela sua visão de jogo e capacidade de fazer gols importantes para a Seleção Brasileira.' },
  { id: 9, picture: '/sports/futebol/athletes/.PNG', name: 'Debinha', about: 'Debinha é uma das jogadoras mais habilidosas do futebol feminino brasileiro, com grande destaque no Centroavante e meio-campo. Ela tem se mostrado uma artilheira, tanto na Seleção Brasileira quanto em clubes como o North Carolina Courage, nos Estados Unidos, e já conquistou títulos como a Copa América e medalhas olímpicas.' },
];

const sources = [
  { id: 0, link: '', site: 'FIFA (Federação Internacional de Futebol)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Futebol (CBF)' },
  { id: 3, link: '', site: 'Museu do Futebol, São Paulo' },
  { id: 4, link: '', site: 'História do Futebol - Portal Educação' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="FUTEBOL" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/futebol/introduction.jpg" />
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
