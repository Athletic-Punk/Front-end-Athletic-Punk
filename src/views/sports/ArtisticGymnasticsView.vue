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
  { id: 0, picture: '/sports/ginastica-artistica/banner/01.png' },
  { id: 1, picture: '/sports/ginastica-artistica/banner/02.png' },
  { id: 2, picture: '/sports/ginastica-artistica/banner/03.png' },
  { id: 3, picture: '/sports/ginastica-artistica/banner/04.png' },
  { id: 4, picture: '/sports/ginastica-artistica/banner/05.png' },
  { id: 5, picture: '/sports/ginastica-artistica/banner/06.png' }
];
const introductionText = '<p>A ginástica artística é um dos esportes mais antigos e prestigiados nas competições olímpicas. Reconhecida por sua combinação de força, flexibilidade, agilidade, controle corporal e precisão, a ginástica artística encanta tanto os praticantes quanto o público com suas rotinas emocionantes e desafiadoras. O esporte inclui uma série de exercícios realizados em equipamentos especializados, como barras, argolas, solo, trave de equilíbrio e cavalo com alças.</p><p>No Brasil, a ginástica artística tem conquistado destaque, especialmente nas últimas décadas, com atletas como Daiane dos Santos, que brilhou em competições internacionais, incluindo o Campeonato Mundial de Ginástica Artística.</p>';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'equipment', section: 'EQUIPAMENTOS PRINCIPAIS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>A ginástica tem suas origens na Grécia Antiga, onde era praticada como parte do treinamento militar e de saúde. No entanto, a ginástica artística como a conhecemos hoje começou a se formar na Europa durante o século XIX, com pioneiros como Friedrich Ludwig Jahn, que é considerado o pai da ginástica moderna. Ele fundou a primeira escola de ginástica na Alemanha, que ensinava exercícios sistemáticos e com foco no desenvolvimento físico.</p><p>Em 1896, a ginástica foi incluída no programa dos Jogos Olímpicos para homens, e em 1928 as mulheres passaram a competir na modalidade. Desde então, a ginástica artística se consolidou como um dos esportes mais exigentes e belos da Olimpíada.</p>' },
  { id: 'rules', text: '<p><span style="color: #D9B341";>Objetivo:</span> O objetivo da ginástica artística é realizar uma série de exercícios, ou rotinas, em diferentes aparelhos, que são avaliados por juízes com base na técnica, execução e dificuldade. O atleta é pontuado por cada movimento, e a soma das notas de todos os aparelhos compõe a nota final.</p>' },
  { id: 'equipment', text: '<ul><li><span style="color: #D9B341";>Solo:</span> Os ginastas executam uma série de saltos, giros e acrobacias no chão, demonstrando flexibilidade, força e controle corporal.</li><li><span style="color: #D9B341";>Trave de Equilíbrio:</span> As ginastas realizam movimentos acrobáticos em uma trave estreita, com 10 cm de largura.</li><li><span style="color: #D9B341";>Barras Assimétricas:</span> A ginasta executa saltos, giros e acrobacias entre duas barras com diferentes alturas.</li><li><span style="color: #D9B341";>Cavalo com Alças:</span> Usado pelos ginastas masculinos, é um aparelho que exige força e controle para realizar movimentos e impulsos com as alças.</li><li><span style="color: #D9B341";>Argolas:</span> A ginástica masculina realiza movimentos suspensos, com controle corporal enquanto usa as argolas.</li><li><span style="color: #D9B341";>Barras Fixas:</span> Também utilizado por homens, os movimentos são feitos em uma única barra de altura fixa, com foco em força e técnica.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Força e Potência:</span> A ginástica exige muita força para realizar os saltos e movimentos acrobáticos, especialmente nos aparelhos como barras assimétricas, cavalo com alças e argolas. A força do core (centro do corpo) é fundamental para controlar os movimentos.</li><li><span style="color: #D9B341";>Flexibilidade:</span> A flexibilidade é uma habilidade essencial, especialmente em rotinas que exigem a realização de movimentos amplos, como os giros e as acrobacias no solo e na trave. Ginastas trabalham regularmente para aumentar a amplitude de movimento, essencial para executar os movimentos com perfeição.</li><li><span style="color: #D9B341";>Equilíbrio e Coordenação:</span> A trave de equilíbrio é o melhor exemplo de como o equilíbrio é crucial na ginástica. Além disso, a coordenação entre os movimentos de braços, pernas e tronco é essencial para a execução perfeita das rotinas.</li><li><span style="color: #D9B341";>Precisão e Técnica:</span> A técnica deve ser impecável, com a execução precisa de cada movimento. Isso inclui a posição do corpo, o controle da velocidade e a transição entre os exercícios.</li><li><span style="color: #D9B341";>Agilidade e Velocidade:</span> A ginástica também exige agilidade para realizar movimentos rápidos, como nos saltos e giros. A velocidade é necessária para a execução de saltos mais altos e acrobacias complexas.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> Em competições de ginástica por equipes, o trabalho conjunto entre os membros é essencial, desenvolvendo o espírito de colaboração.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Atletas de ginástica frequentemente treinam em grupos ou academias, permitindo o desenvolvimento de laços sociais com outros praticantes.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular:</span> O treinamento de ginástica artística fortalece todos os grupos musculares, especialmente os músculos centrais (core), superiores (braços, ombros) e inferiores (pernas).</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Flexibilidade:</span> A ginástica melhora significativamente a flexibilidade, aumentando a amplitude de movimento das articulações e músculos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Equilíbrio e coordenação:</span> A prática contínua melhora a habilidade de equilibrar o corpo e realizar movimentos coordenados.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Desenvolvimento motor:</span> O esporte ajuda no aprimoramento das habilidades motoras finas e grossas.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e disciplina:</span> A ginástica exige uma atenção constante aos detalhes técnicos, que desenvolvem um alto nível de concentração e disciplina.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resiliência:</span> O processo de treinamento intenso e o enfrentamento de desafios durante as competições ensinam os ginastas a lidarem com a pressão e a perseverar diante de dificuldades.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Aulas de Ginástica', text: 'Para iniciantes, é fundamental buscar aulas com instrutores qualificados, que possam ensinar as técnicas básicas e fornecer o treinamento necessário para os exercícios iniciais.' },
  { id: 1, title: 'Equipamentos', text: 'Embora o treinamento seja o mais importante, os ginastas precisam de roupas adequadas, como o uniforme de ginástica (collant), além de tapetes de acolchoamento, barras e outros equipamentos específicos para treinos em ginásios.' },
  { id: 2, title: 'Treinamento físico', text: 'A ginástica requer um preparo físico de base, incluindo força, flexibilidade e resistência. Portanto, trabalhar essas habilidades fora dos treinos também é fundamental.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'O treino inicial pode ser realizado de 2 a 3 vezes por semana, com duração de 1 a 2 horas.' },
  { id: 1, title: 'Avançados', text: 'Atletas experientes treinam de 4 a 6 vezes por semana, com treinos focados em diferentes aparelhos, além de sessões específicas de força e flexibilidade.' }
];
const curiositiesItens = [
  { id: 'one', text: 'Daiane dos Santos é uma das ginastas brasileiras mais famosas, sendo campeã mundial de salto em 2003 e um ícone do esporte.' },
  { id: 'two', text: 'O Brasil possui um grande histórico na ginástica artística, com diversos atletas ganhando medalhas em Campeonatos Mundiais e Jogos Pan-Americanos.' },
  { id: 'three', text: 'A ginástica artística feminina foi incluída nos Jogos Olímpicos de 1928, e a modalidade masculina, em 1896.' },
  { id: 'four', text: 'O treinamento de ginástica artística pode começar desde muito cedo, com ginastas iniciando a prática aos 3 ou 4 anos.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/ginastica-artistica/athletes/arthur-zanetti.PNG', name: 'Arthur Zanetti', about: 'Arthur Zanetti é um ginasta brasileiro, especializado nas argolas. Ele entrou para a história ao conquistar a <span style="text-decoration: underline 3px">medalha de ouro nas argolas nos Jogos Olímpicos de Londres 2012</span>, tornando-se o primeiro brasileiro a ganhar ouro na ginástica. Ele também conquistou uma medalha de prata na mesma modalidade nos Jogos Olímpicos do Rio 2016, além de títulos mundiais e pan-americanos. É reconhecido por sua força, técnica impecável e contribuições para a ginástica artística brasileira.' },
  { id: 1, picture: '/sports/ginastica-artistica/athletes/caio-souza.PNG', name: 'Caio Souza', about: 'Caio Souza é um ginasta brasileiro versátil, competindo em várias modalidades. Ele se destacou no cenário internacional com conquistas importantes, como medalhas em Jogos Pan-Americanos e boas performances em Mundiais. Entre suas principais conquistas, estão <span style="text-decoration: underline 3px">ouro no individual geral nos Jogos Pan-Americanos de Lima 2019</span> e medalhas por equipes. É conhecido por sua consistência e contribuição para o time masculino.' },
  { id: 2, picture: '/sports/ginastica-artistica/athletes/rebeca-andrade.PNG', name: 'Rebeca Andrade', about: '' },
  { id: 3, picture: '/sports/ginastica-artistica/athletes/flavia-saraiva.PNG', name: 'Flávia Saraiva', about: 'Flávia Saraiva é uma ginasta brasileira conhecida por sua graça e técnica. Ela ganhou destaque ao conquistar três medalhas nos Jogos Pan-Americanos de Toronto 2015, incluindo um ouro na trave. Flávia também competiu em duas Olimpíadas e frequentemente alcança finais em competições internacionais. Apesar de sua pequena estatura, é conhecida por sua grande habilidade e carisma.' },
  { id: 4, picture: '/sports/ginastica-artistica/athletes/diego-hypolito.PNG', name: 'Diego Hypólito', about: 'Diego Hypólito é um dos maiores nomes da ginástica brasileira. Ele foi o primeiro brasileiro a conquistar uma medalha mundial na ginástica artística, com o <span style="text-decoration: underline 3px">ouro no solo em 2005</span>. Ao longo de sua carreira, acumulou dois títulos mundiais no solo e uma <span style="text-decoration: underline 3px">medalha de prata nos Jogos Olímpicos do Rio 2016</span>. Diego é reconhecido por sua inovação e impacto no crescimento da ginástica artística no Brasil.' },
  { id: 5, picture: '/sports/ginastica-artistica/athletes/lucas-bitencourt.PNG', name: 'Lucas Bitencourt', about: 'Lucas Bitencourt é um ginasta brasileiro que se destacou em competições continentais. Ele ganhou notoriedade com medalhas em competições pan-americanas, como o <span style="text-decoration: underline 3px">ouro por equipes nos Jogos Pan-Americanos de Toronto 2015</span>. Sua contribuição ao time brasileiro tem sido consistente, especialmente nas provas de paralelas e barra fixa.' },
  { id: 6, picture: '/sports/ginastica-artistica/athletes/jade-barbosa.PNG', name: 'Jade Barbosa', about: 'Jade Barbosa é uma das pioneiras da ginástica artística brasileira no cenário internacional. Ela se destacou ao conquistar o <span style="text-decoration: underline 3px">bronze no individual geral no Mundial de 2007</span>, uma conquista inédita para o Brasil na época. Jade também é medalhista pan-americana e participou de várias edições dos Jogos Olímpicos. É conhecida por sua longevidade no esporte e por superar diversas lesões ao longo de sua carreira.' },
  { id: 7, picture: '/sports/ginastica-artistica/athletes/julia-soares.PNG', name: 'Júlia Soares', about: 'Júlia Soares é uma jovem promessa da ginástica artística brasileira, nascida em 23 de setembro de 2005. Especialista no solo e na trave, destacou-se ao conquistar medalhas em competições juvenis e adultas, incluindo os Jogos Pan-Americanos. Sua elegância nas apresentações e potencial técnico a colocam como um dos grandes nomes da nova geração da ginástica do Brasil.' },
  { id: 8, picture: '/sports/ginastica-artistica/athletes/arthur-nory.PNG', name: 'Arthur Nory', about: 'Arthur Nory, nascido em 18 de setembro de 1993, em Campinas, São Paulo, é especialista na barra fixa e medalhista olímpico. Conquistou a medalha de bronze nesse aparelho nos Jogos Olímpicos do Rio 2016 e é campeão mundial de barra fixa em 2019, em Stuttgart. Além de seu talento, Nory é admirado por sua determinação e carisma.' },
  { id: 9, picture: '/sports/ginastica-artistica/athletes/francisco-barretto.PNG', name: 'Francisco Barretto', about: 'Francisco Barretto, nascido em 19 de junho de 1989, em Ribeirão Preto, São Paulo, é um ginasta brasileiro com destaque em aparelhos como cavalo com alças e barra fixa. Conquistou medalhas em Jogos Pan-Americanos, incluindo ouro por equipes em 2019. Barretto é reconhecido por sua experiência e contribuição para o sucesso da equipe masculina brasileira em competições internacionais.' },
];
const sources = [
  { id: 0, link: 'https://www.gymnastics.sport/site/', site: 'Federação Internacional de Ginástica (FIG)' },
  { id: 1, link: 'https://cbginastica.com.br/', site: 'Confederação Brasileira de Ginástica (CBG)' },
  { id: 3, link: 'https://blog.portaleducacao.com.br/', site: 'História da Ginástica Artística - Portal Educação' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="GINÁSTICA ARTÍSTICA" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/ginastica-artistica/introduction.jpg" />
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
