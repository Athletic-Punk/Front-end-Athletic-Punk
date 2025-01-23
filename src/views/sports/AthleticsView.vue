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
  { id: 0, picture: '/sports/atletismo/banner/01.jpg' },
  { id: 1, picture: '/sports/atletismo/banner/02.jpg' },
  { id: 2, picture: '/sports/atletismo/banner/03.jpg' },
  { id: 3, picture: '/sports/atletismo/banner/04.jpg' },
  { id: 4, picture: '/sports/atletismo/banner/05.jpg' }
];
const introductionText = 'O atletismo é considerado o esporte base, sendo um dos mais antigos e tradicionais do mundo. Inclui uma variedade de provas como corridas, saltos, lançamentos e marchas. Por sua versatilidade, é conhecido como "o esporte número um" e tem grande relevância nos Jogos Olímpicos. No Brasil, atletas como Adhemar Ferreira da Silva, Maurren Maggi e Thiago Braz conquistaram medalhas históricas, consolidando o país no cenário mundial.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'O atletismo tem origens que remontam à Antiguidade, com competições registradas nos Jogos Olímpicos da Grécia Antiga, em 776 a.C. O esporte moderno foi estruturado no século XIX, na Inglaterra, com o estabelecimento de regras organizadas e competições oficiais. A primeira edição dos Jogos Olímpicos modernos, em 1896, já incluiu o atletismo como destaque. No Brasil, o atletismo ganhou força no início do século XX e, em 1924, o país participou pela primeira vez dos Jogos Olímpicos, enviando atletas da modalidade.' },
  { id: 'rules', text: '<ul><li style="font-size: 1.7vw;">Provas de Pista <ol><li style="font-size: 1.5vw">As provas de corrida incluem distâncias curtas (100m, 200m, 400m), médias (800m, 1500m) e longas (5000m, 10000m).</li><li style="font-size: 1.5vw"><span style="color: #D9B341">Revezamentos:</span> As provas 4x100m e 4x400m exigem a troca de bastões entre os corredores da equipe.</li><li style="font-size: 1.5vw"><span style="color: #D9B341">Barreiras e obstáculos:</span> As corridas com barreiras (110m, 400m) e com obstáculos (3000m) desafiam os atletas a superar barreiras durante o percurso.</li><ol></li><li style="margin-top: 1.5vw; font-size: 1.7vw;">Provas de Campo <ol><li style="font-size: 1.5vw"><span style="color: #D9B341">Saltos:</span> Incluem salto em altura, salto em distância, salto triplo e salto com vara.</li><li style="font-size: 1.5vw"><span style="color: #D9B341">Lançamentos:</span> São as provas de arremesso de peso, lançamento de disco, lançamento de martelo e lançamento de dardo.</li></ol></li><li style="margin-top: 1.5vw; font-size: 1.7vw;">Provas Combinadas <ol><li style="font-size: 1.5vw"><span style="color: #D9B341";>Decatlo (masculino) e heptatlo (feminino):</span> Envolvem a combinação de várias modalidades de corrida, salto e lançamento em uma única competição.</li></ol></li><li style="margin-top: 1.5vw; font-size: 1.7vw;">Marcha Atlética <ol><li style="font-size: 1.5vw">Consiste em percorrer longas distâncias mantendo sempre um pé em contato com o solo e sem dobrar os joelhos durante a passada.</li></ol></li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341">Corrida:</span> Envolve técnica de postura, pisada e respiração. A eficiência na saída e no ritmo constante é essencial para provas curtas e longas.</li><li><span style="color: #D9B341">Saltos:</span> A impulsão correta e a coordenação no momento do salto são cruciais. Cada modalidade exige técnicas específicas, como o uso da vara no salto com vara ou a sequência de três impulsos no salto triplo.</li><li><span style="color: #D9B341">Lançamentos:</span> Requerem força, técnica e precisão. O arremesso ou lançamento deve ser feito respeitando os limites da área de arremesso e com o máximo de alcance possível.</li><li><span style="color: #D9B341">Resistência:</span></li> Treinamento físico e mental para suportar o desgaste das provas de longa distância ou combinadas.<li><span style="color: #D9B341">Táticas:</span> Estratégias para economizar energia, ultrapassar adversários e gerenciar a velocidade ao longo das provas.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O atletismo, mesmo sendo um esporte individual em muitas provas, promove o espírito de equipe em modalidades como revezamento.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Estimula a interação em clubes e competições locais, regionais e nacionais.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Saúde cardiovascular:</span> Aumento da resistência cardiovascular.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> Desenvolvimento da força muscular, especialmente nas pernas e no core.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Coordenação motora:</span> Melhora da coordenação motora e da flexibilidade.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resiliência e foco:</span> Aumento da resiliência e do foco, devido à necessidade de disciplina nos treinos e competições.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora no humor:</span> Redução do estresse e melhora no bem-estar geral.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolha uma modalidade', text: 'Identifique a prova que mais combina com suas habilidades e interesses.' },
  { id: 1, title: 'Procure um clube ou treinador', text: 'Para orientação técnica e preparação adequada.' },
  { id: 2, title: 'Equipamentos', text: 'Use tênis apropriados para corrida ou sapatilhas específicas para saltos e lançamentos.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'Treinos 3 vezes por semana, intercalando sessões técnicas e de resistência.' },
  { id: 1, title: 'Avançados', text: 'Treinos de 5 a 6 vezes por semana, incluindo sessões de força, técnica e competição.' }
];
const curiositiesItens = [
  { id: 'one', text: 'Adhemar Ferreira da Silva foi o primeiro bicampeão olímpico brasileiro no atletismo, vencendo o salto triplo em 1952 e 1956.' },
  { id: 'two', text: 'A marca de Usain Bolt nos 100 metros (9,58s) ainda é o recorde mundial.' },
  { id: 'three', text: 'A maratona tem origem na Grécia Antiga, em homenagem à lenda do soldado Pheidippides, que correu de Maratona a Atenas.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/atletismo/athletes/douglas-mendes.PNG', name: 'Douglas Mendes', about: 'Nascido em 4 de agosto de 2001, Douglas Hernandes Mendes da Silva é um velocista brasileiro especializado nos 400 metros rasos. No Grande Prêmio Internacional Brasil Loterias Caixa de Atletismo, realizado em 2023, ele alcançou a marca de 46.22 segundos, conquistando a segunda colocação na prova dos 400 metros. Douglas também integrou a equipe brasileira de revezamento 4x400 metros nos Jogos Pan-Americanos de 2023.' },
  { id: 1, picture: '/sports/atletismo/athletes/welington-silva.PNG', name: 'Welington da Silva', about: 'Welington da Silva Morais, nascido em 6 de setembro de 1996, é um atleta brasileiro especializado no arremesso de peso. No Grande Prêmio Internacional Brasil Loterias Caixa de Atletismo de 2023, ele alcançou a marca de 20,38 metros, garantindo a quarta posição na competição. Nos Jogos Pan-Americanos de 2023, Welington obteve a quinta colocação no arremesso de peso, com uma marca de 20,26 metros.' },
  { id: 2, picture: '/sports/atletismo/athletes/erica-sena.PNG', name: 'Érica de Sena', about: 'Érica de Sena é uma das maiores marchadoras do Brasil, com reconhecimento internacional em provas de 20 km marcha. Com uma carreira marcada por inúmeras conquistas, ela representou o Brasil nos Jogos Olímpicos de 2024, terminando na 13ª colocação com o tempo de 1:29:32. Érica já conquistou medalhas em campeonatos sul-americanos e nos Jogos Pan-Americanos, solidificando sua posição como referência na marcha atlética.' },
  { id: 3, picture: '/sports/atletismo/athletes/viviane-lyra.PNG', name: 'Viviane Lyra', about: 'Viviane Lyra é marchadora brasileira com crescente destaque no cenário internacional. Competiu nos 20 km marcha nos Jogos Olímpicos de 2024, onde terminou na 18ª posição com o tempo de 1:30:31. Viviane vem se consolidando como uma das melhores do Brasil na modalidade, tendo participado de eventos importantes como o Campeonato Sul-Americano e os Jogos Pan-Americanos.' },
  { id: 4, picture: '/sports/atletismo/athletes/caio-bonfin.PNG', name: 'Caio Bonfin', about: 'Caio Bonfim é um dos mais renomados marchadores brasileiros, reconhecido por seu talento e consistência em competições de alto nível. Ele fez história nos Jogos Olímpicos de 2024 ao conquistar a medalha de prata nos 20 km marcha, sendo o primeiro brasileiro a alcançar esse feito na modalidade. Além disso, Bonfim acumula medalhas em competições mundiais, sul-americanas e pan-americanas, consolidando sua carreira como uma das mais brilhantes do atletismo brasileiro.' },
  { id: 5, picture: '/sports/atletismo/athletes/matheus-lima.PNG', name: 'Matheus Lima', about: 'Matheus Lima é um velocista brasileiro especializado em provas de revezamento, destacando-se no 4x400 metros. Participou dos Jogos Olímpicos de 2024, onde sua equipe alcançou resultados expressivos. Matheus tem mostrado um progresso constante em sua carreira, sendo reconhecido por sua dedicação ao esporte e por sua contribuição ao atletismo brasileiro em competições regionais e internacionais.' },
  { id: 6, picture: '/sports/atletismo/athletes/ana-caroline.PNG', name: 'Ana Caroline', about: 'Ana Caroline Miguel da Silva é uma atleta brasileira que compete no arremesso de peso. Ela foi convocada para representar o Brasil no Campeonato Sul-Americano de Atletismo de 2023, realizado em São Paulo. No evento, Ana Caroline alcançou a marca de 16,07 metros, destacando-se entre as competidoras.' },
  { id: 7, picture: '/sports/atletismo/athletes/eliane-martins.PNG', name: 'Eliane Martins', about: 'Eliane Martins é uma das principais saltadoras em distância do Brasil. Reconhecida por sua consistência em competições internacionais, participou dos Jogos Pan-Americanos de 2023, alcançando a marca de 6,49 metros. Eliane tem uma trajetória marcada por medalhas em campeonatos sul-americanos e um papel importante no desenvolvimento do salto em distância no Brasil.' },
  { id: 8, picture: '/sports/atletismo/athletes/erick-cardoso.PNG', name: 'Erick Cardoso', about: 'Erik Felipe Barbosa Cardoso é um velocista brasileiro especializado nos 100 metros rasos. No Campeonato Sul-Americano de Atletismo de 2023, ele registrou o tempo de 10,08 segundos na semifinal dos 100 metros, demonstrando seu potencial na prova.' },
  { id: 9, picture: '/sports/atletismo/athletes/lissandra-maysa.PNG', name: 'Lissandra Maysa', about: 'Nascida em 6 de fevereiro de 2002, Lissandra Maysa Campos é uma saltadora em distância brasileira. Ela estabeleceu sua melhor marca pessoal de 6,69 metros durante o Troféu Adhemar Ferreira da Silva em 2023, estabelecendo um recorde sul-americano sub-23. Lissandra conquistou a medalha de prata no salto em distância no Campeonato Sul-Americano de Atletismo de 2023, realizado em São Paulo. Além disso, representou o Brasil no Campeonato Mundial de Atletismo de 2023, em Budapeste, e nos Jogos Olímpicos de Paris em 2024.' },
];
const sources = [
  { id: 0, link: '', site: 'World Athletics' },
  { id: 1, link: '', site: 'Confederação Brasileira de Atletismo (CBAt)' },
  { id: 3, link: '', site: 'Artigo "History and Evolution of Athletics" - ResearchGate' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="ATLETISMO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/atletismo/introduction.jpg" />
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
