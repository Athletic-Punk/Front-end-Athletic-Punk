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
  { id: 0, picture: '/sports/golfe/banner/01.jpg' },
  { id: 1, picture: '/sports/golfe/banner/02.webp' },
  { id: 2, picture: '/sports/golfe/banner/03.jpg' },
  { id: 3, picture: '/sports/golfe/banner/04.jpg' },
  { id: 4, picture: '/sports/golfe/banner/05.jpg' }
];
const introductionText = 'O golfe é um esporte de precisão e estratégia, amplamente praticado em todo o mundo. Consiste em acertar uma bola com um taco em direção a uma série de buracos, com o objetivo de completar o percurso utilizando o menor número de tacadas possível. Embora o golfe seja tradicionalmente visto como um esporte de elite, sua popularidade tem crescido entre pessoas de todas as idades e origens. O golfe foi introduzido nos Jogos Olímpicos modernos em 1900 e voltou a ser incluído no programa olímpico em 2016. No Brasil, o golfe vem ganhando mais destaque, com atletas como Adilson da Silva e Miguel Tabuena conquistando resultados expressivos em torneios internacionais.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'O golfe tem suas origens na Escócia, no século XV, onde se jogava uma versão primitiva do esporte em campos abertos. Em 1744, o primeiro clube de golfe foi fundado, e as regras do jogo começaram a ser estabelecidas. O esporte se espalhou pelo mundo durante o século XIX, especialmente para os Estados Unidos, onde se consolidou como uma atividade de lazer e competição. O golfe foi introduzido no programa olímpico nos Jogos de Paris, em 1900, mas foi retirado até os Jogos de Rio 2016. No Brasil, o golfe começou a ser popularizado no final do século XIX, com a construção de campos de golfe em cidades como São Paulo e Rio de Janeiro.' },
  { id: 'rules', text: '<ul><li><span style="color: #D9B341";>Objetivo do Jogo:</span> O objetivo principal do golfe é acertar a bola em uma série de buracos no menor número de tacadas possível, percorrendo o campo em uma sequência preestabelecida de buracos.</li><li><span style="color: #D9B341";>Campos:</span> O campo de golfe é composto por 18 buracos, com diferentes distâncias e obstáculos. Cada buraco tem uma área chamada "green", onde o buraco está localizado, e um "fairway", que é o caminho principal até o buraco.</li><li><span style="color: #D9B341";>Tacos:</span> Os jogadores usam diferentes tipos de tacos para realizar as tacadas. O taco é escolhido com base na distância e no tipo de golpe necessário. Os principais tipos de tacos são o driver, ferro, wedge e putter.</li><li><span style="color: #D9B341";>Sistema de Pontuação:</span> A pontuação é contada pelo número de tacadas necessárias para completar o percurso de cada buraco. O "par" de um buraco é o número de tacadas que um jogador deveria levar para completá-lo com uma boa técnica. Tacadas a mais que o par são chamadas de "bogeys", enquanto tacadas a menos que o par são chamadas de "birdies".</li><li><span style="color: #D9B341";>Partidas e Torneios:</span> O golfe pode ser jogado de forma individual ou em duplas, com diferentes formatos de competição, como stroke play (onde o jogador com o menor número total de tacadas vence) e match play (onde o jogador que vence o maior número de buracos vence a partida).</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Postura e Posição:</span> Uma boa postura é crucial no golfe, pois ela influencia diretamente a precisão e a potência das tacadas. O jogador deve se manter com os pés afastados na largura dos ombros, flexionando levemente os joelhos e mantendo as costas retas.</li><li><span style="color: #D9B341";>Grip (Empunhadura):</span> A empunhadura correta do taco é essencial para controlar a direção e a força das tacadas. Existem diferentes tipos de grip, como o grip intercalado, o grip de base e o grip de uma mão, e a escolha depende do conforto e estilo de cada jogador.</li><li><span style="color: #D9B341";>Golpes:</span> O golfe envolve uma variedade de golpes, incluindo o "drive" (primeira tacada do buraco, geralmente a mais longa), o "approach" (golpe feito para aproximar a bola do green) e o "putt" (golpe final para colocar a bola no buraco).</li><li><span style="color: #D9B341";>Leitura do Campo:</span> Uma habilidade importante no golfe é a capacidade de ler o campo, ou seja, entender como os obstáculos (como bunkers, lagos e árvores) e as condições do terreno (como a inclinação do solo) podem influenciar a trajetória da bola.</li><li><span style="color: #D9B341";>Estratégia e Planejamento:</span> O golfe exige um bom planejamento, já que o jogador deve decidir qual taco usar em cada situação e planejar as tacadas para evitar obstáculos e minimizar os erros.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> O golfe é um esporte social, frequentemente jogado em grupos ou duplas, o que incentiva a interação e o networking.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Espírito esportivo:</span> Ele promove o espírito esportivo e o respeito, já que as partidas costumam ser jogadas em ambientes de tranquilidade e civilidade.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Amizade:</span> Estimula a amizade e a convivência em clubes e torneios locais e internacionais.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Melhora a coordenação motora e a precisão nos movimentos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resistência cardiovascular:</span> Aumenta a resistência cardiovascular, especialmente em jogos longos que exigem caminhada pelo campo.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Equilíbrio e flexibilidade:</span> Promove o equilíbrio e a flexibilidade devido ao movimento constante e à necessidade de alongamento durante as tacadas.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> Melhora a força nas pernas, braços e core, já que o golfe exige movimentos de rotação e equilíbrio.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e concentração:</span> Aumenta o foco e a concentração, já que o golfe é um esporte de paciência e precisão.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Reduz o estresse:</span> Reduz o estresse e melhora o bem-estar mental, pois muitos jogadores consideram o golfe uma atividade relaxante e meditativa.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Tomada de decisões:</span> Desafia a mente com estratégias e tomada de decisões em tempo real durante o jogo.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolher um Clube ou Campo de Golfe', text: 'Procure um campo de golfe ou clube que ofereça aulas e condições para iniciantes.' },
  { id: 1, title: 'Aulas e Equipamento Básico', text: 'Comece com aulas de golfe para aprender as regras, fundamentos e técnica adequada e inicialmente, você pode começar a praticar com tacos fornecidos pelo clube, mas depois de algum tempo é recomendável investir em um set de tacos pessoal.' },
  { id: 2, title: 'Prática no Driving Range e Putting Green', text: 'Utilize o driving range para melhorar o seu swing e o putting green para aprimorar sua habilidade no "putt".' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Para iniciantes, é recomendável treinar 2 a 3 vezes por semana, combinando aulas com prática individual.' },
  { id: 1, title: 'Avançados', text: 'Jogadores avançados podem treinar de 4 a 6 vezes por semana, com foco em aperfeiçoamento técnico e participação em torneios.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O golfe é um dos poucos esportes que têm uma "habilidade" reconhecida pela tradição, com regras e práticas imutáveis que remontam ao século XV.' },
  { id: 'two', text: 'O golfe profissional é amplamente promovido por grandes torneios, como o Masters Tournament, o US Open e o PGA Championship, que atraem milhares de espectadores e geram milhões em receitas.' },
  { id: 'three', text: 'O campo de golfe mais longo do mundo está localizado em Lytham St Annes, na Inglaterra, com 7.000 metros de extensão.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/anomino.jpeg', name: 'Adilson da Silva', about: '   Adilson da Silva é o principal nome do golfe brasileiro, tendo sido o primeiro brasileiro a competir no PGA Tour. Ele é um dos maiores jogadores do esporte no Brasil, com uma carreira sólida no golfe internacional. Adilson já conquistou títulos importantes no PGA Tour Latinoamérica e é um exemplo de dedicação e perseverança, elevando o golfe brasileiro no cenário internacional.' },
  { id: 1, picture: '/sports/anomino.jpeg', name: 'Alexandre Rocha', about: '   Alexandre Rocha é um dos jogadores de golfe mais conhecidos do Brasil. Ele tem uma carreira internacional sólida, com passagens pelo PGA Tour e pelo European Tour. Alexandre é considerado um dos maiores talentos do golfe brasileiro, tendo sido o primeiro brasileiro a conquistar uma vaga no PGA Tour, o que foi um marco para o esporte no Brasil.' },
  { id: 2, picture: '/sports/anomino.jpeg', name: 'Lucas Lee', about: 'Lucas Lee é uma das jovens promessas do golfe brasileiro. Ele tem se destacado nos campeonatos nacionais e internacionais, e sua habilidade e constância nas competições de golfe estão gerando expectativas para o futuro do esporte no Brasil.' },
  { id: 3, picture: '/sports/anomino.jpeg', name: 'Rafael Becker', about: '   Rafael Becker é outro atleta de destaque no golfe brasileiro, com boa performance no PGA Tour Latinoamérica. Ele tem sido uma peça importante para a equipe brasileira em competições internacionais, consolidando seu nome no cenário do golfe nacional.' },
  { id: 4, picture: '/sports/anomino.jpeg', name: 'Ricardo Gouveia', about: '   Ricardo Gouveia é um talentoso jogador de golfe que se destacou nas competições de golfe profissionais europeias, e também teve boas colocações no PGA Tour Latinoamérica. Com grande precisão e técnica, ele tem sido uma das grandes promessas do golfe brasileiro.' },
  { id: 5, picture: '/sports/anomino.jpeg', name: 'Gabriela Muniz', about: '   Gabriela Muniz é uma das principais jogadoras de golfe do Brasil. Ela tem se destacado em torneios internacionais, sendo a única brasileira a se classificar para o US Open. Gabriela é uma das principais promessas do golfe feminino brasileiro, com uma carreira crescente e performances sólidas nos principais campeonatos.' },
  { id: 6, picture: '/sports/anomino.jpeg', name: 'Victoria Lovelady', about: '   Victoria Lovelady é uma das jogadoras de golfe mais talentosas do Brasil. Ela se destacou no cenário internacional por sua habilidade com os ferros e sua consistência no campo. Já representou o Brasil em várias competições internacionais e é uma das maiores esperanças para o golfe feminino brasileiro.' },
  { id: 7, picture: '/sports/anomino.jpeg', name: 'Bárbara Nogueira', about: '   Bárbara Nogueira é uma jogadora em ascensão no golfe, com destaque nos campeonatos nacionais e em algumas competições internacionais. Sua técnica e precisão nas tacadas a colocaram como uma das jovens promessas do golfe feminino brasileiro.' },
  { id: 8, picture: '/sports/anomino.jpeg', name: 'Juliana Piva', about: '   Juliana Piva é uma das representantes do golfe brasileiro no cenário internacional. Ela tem se destacado em competições latino-americanas e é uma das jogadoras que vêm conquistando destaque nas competições mais importantes.' },
  { id: 9, picture: '/sports/anomino.jpeg', name: 'Letícia Tavares', about: '   Letícia Tavares é uma das grandes promessas do golfe brasileiro, com boas performances em torneios nacionais e competições internacionais. Ela tem demonstrado grande talento e potencial para representar o Brasil nas maiores competições internacionais do esporte.' },
];

/* 
### **Handebol**
**Homens**  
1. **Thiago Alves**  
   Thiago Alves é um dos maiores jogadores de handebol do Brasil, com uma carreira marcada por grandes vitórias tanto em clubes nacionais quanto internacionais. Ele foi parte fundamental da seleção brasileira que conquistou a medalha de prata no Campeonato Mundial de 2013 e tem uma trajetória vitoriosa no esporte, com títulos no Campeonato Brasileiro e na Liga Nacional.

2. **Bruno Souza**  
   Bruno Souza é um dos atletas mais experientes da seleção brasileira de handebol, com passagens por clubes da Europa e um grande número de títulos em competições nacionais. Ele tem sido peça-chave para a seleção brasileira, representando o Brasil em campeonatos mundiais e Jogos Pan-Americanos.

3. **Hugo Nascimento**  
   Hugo Nascimento é um dos principais jogadores de handebol do Brasil na posição de goleiro. Ele tem sido um dos destaques da seleção brasileira, com boas performances em torneios internacionais, como o Campeonato Mundial e os Jogos Pan-Americanos. Hugo é conhecido pela sua agilidade e reflexos rápidos.

4. **Fábio Chiuffa**  
   Fábio Chiuffa é um dos principais atletas da seleção brasileira de handebol. Ele tem se destacado como um dos melhores armadores do país, com uma habilidade incrível para finalizar e criar jogadas. Chiuffa tem sido um dos pilares da equipe nacional em competições internacionais, como o Campeonato Pan-Americano e o Campeonato Mundial.

5. **Ricardo Moreira**  
   Ricardo Moreira é um dos grandes nomes do handebol brasileiro. Com uma carreira consolidada no Brasil e no exterior, ele é um dos principais pontuadores da seleção brasileira e teve uma carreira brilhante no clube espanhol BM Granollers. Ricardo também foi medalhista de ouro no Campeonato Pan-Americano.

**Mulheres**  
1. **Alexandra Nascimento**  
   Alexandra Nascimento é uma das maiores jogadoras de handebol do Brasil. Ela foi fundamental na conquista da medalha de ouro nos Jogos Pan-Americanos de 2011 e 2015 e tem uma carreira internacional consolidada, com passagens por clubes de destaque na Europa. Alexandra é uma referência para as futuras gerações do esporte.

2. **Fernanda da Silva**  
   Fernanda da Silva é uma das melhores jogadoras de handebol do Brasil, com um grande número de títulos no Campeonato Pan-Americano e competições internacionais. Sua habilidade na defesa e no ataque foi crucial para o sucesso da seleção brasileira.

3. **Gabi Baccarani**  
   Gabi Baccarani é uma das atletas mais promissoras do handebol feminino brasileiro. Ela tem se destacado tanto no Campeonato Brasileiro quanto em competições internacionais, sendo uma das jogadoras mais versáteis e de destaque no time nacional.

4. **Juliana Moraes**  
   Juliana Moraes é uma das grandes jogadoras de handebol do Brasil, com destaque pela sua habilidade na defesa e na finalização. Ela tem sido uma das principais jogadoras da seleção brasileira, com boas performances no Campeonato Pan-Americano e em competições internacionais.

5. **Raquel Pereira**  
   Raquel Pereira é uma das atletas mais consistentes da seleção brasileira de handebol. Sua capacidade de liderança e sua experiência em competições internacionais ajudaram a elevar o nível do time nas últimas edições do Campeonato Mundial e dos Jogos Pan-Americanos.

---

### **Hipismo**
**Homens**  
1. **Rodrigo Pessoa**  
   Rodrigo Pessoa é o maior nome do hipismo brasileiro e um dos maiores do mundo. Campeão olímpico e mundial, ele se destacou por sua habilidade com os cavalos e suas vitórias em competições de saltos internacionais, incluindo a medalha de ouro nos Jogos Olímpicos de Atenas em 2004. Rodrigo é uma verdadeira lenda do esporte, com uma carreira vitoriosa.

2. **César Almeida**  
   César Almeida é um dos principais cavaleiros do Brasil, com grandes vitórias no hipismo de saltos. Ele foi medalhista de ouro no Campeonato Pan-Americano e tem se destacado em competições internacionais, sendo uma referência no esporte.

3. **Marcos Pessoa**  
   Marcos Pessoa é um dos nomes mais reconhecidos do hipismo brasileiro. Ele tem se destacado nas competições de saltos, com uma carreira internacional de sucesso, com vitórias no circuito internacional de saltos.

4. **Felipe Amaral**  
   Felipe Amaral é um cavaleiro de destaque no Brasil, com passagens importantes por torneios internacionais e resultados expressivos. Sua habilidade e sucesso no hipismo de saltos o tornaram uma das promessas do esporte.

5. **Andre Paro**  
   Andre Paro é um cavaleiro em ascensão no cenário internacional. Ele se destacou nas competições de saltos e tem se mostrado uma das grandes promessas para o futuro do hipismo no Brasil.

**Mulheres**  
1. **Ana Carolina Santucci**  
   Ana Carolina Santucci é uma das melhores cavaleiras do Brasil, com títulos importantes em competições internacionais e campeonatos nacionais. Ela se destaca pela sua habilidade em competições de salto e também por sua liderança na equipe brasileira de hipismo.

2. **Maria Luiza Ladeira**  
   Maria Luiza Ladeira é uma cavaleira de destaque no Brasil. Com vitórias importantes no Campeonato Brasileiro e competições internacionais, ela tem sido uma das principais promessas do hipismo feminino brasileiro.

3. **Karla Rangel**  
   Karla Rangel tem sido uma das principais representantes do hipismo feminino no Brasil. Ela se destaca pela sua técnica e habilidade no salto, sendo uma das favoritas em competições nacionais e internacionais.

4. **Renata Ribeiro**  
   Renata Ribeiro é uma cavaleira em crescimento no Brasil, com boas performances em campeonatos nacionais e internacionais. Ela está se tornando uma das principais atletas do hipismo feminino no Brasil.

5. **Juliana Carvalho**  
   Juliana Carvalho é uma das promessas do hipismo no Brasil, com boa performance em torneios nacionais e internacionais. Ela é conhecida pela sua habilidade em saltos e sua dedicação ao esporte.
*/

const sources = [
  { id: 0, link: '', site: 'The Royal and Ancient Golf Club of St Andrews' },
  { id: 1, link: '', site: 'International Golf Federation (IGF)' },
  { id: 3, link: '', site: 'Associação Brasileira de Golfe (ABG)' },
  { id: 4, link: '', site: 'Journal of Sports Science' }
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="GOLFE" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/golfe/introduction.jpg" />
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
