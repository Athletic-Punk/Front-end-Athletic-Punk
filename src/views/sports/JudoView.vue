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
  { id: 0, picture: '/sports/judo/banner/01.webp' },
  { id: 1, picture: '/sports/judo/banner/02.jpg' },
  { id: 2, picture: '/sports/judo/banner/03.jpg' },
  { id: 3, picture: '/sports/judo/banner/04.jpg' },
  { id: 4, picture: '/sports/judo/banner/05.jpg' }
];
const introductionText = '<p>O judô é uma arte marcial de origem japonesa que combina técnica, disciplina e força, sendo também uma modalidade olímpica desde 1964. Criado pelo professor Jigoro Kano no final do século XIX, o judô destaca-se por sua filosofia de eficiência e respeito mútuo.</p><p>O Brasil é um dos países mais bem-sucedidos no judô mundial, com ícones como Aurélio Miguel, Rogério Sampaio, Rafaela Silva e Sarah Menezes, além de medalhas conquistadas em quase todas as edições dos Jogos Olímpicos.</p>';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: '<p>O judô foi criado em 1882 por Jigoro Kano, que adaptou técnicas do jiu-jitsu tradicional japonês para criar um método de combate mais seguro e educativo. Ele fundou o Kodokan, o primeiro centro de ensino de judô, onde desenvolveu seus princípios baseados na eficiência de movimentos e no desenvolvimento pessoal.</p><p>No Brasil, o judô chegou em meados do século XX por meio de imigrantes japoneses. Ele ganhou notoriedade rapidamente, especialmente após o título olímpico de Aurélio Miguel em 1988. Hoje, o Brasil é uma potência no esporte, com atletas reconhecidos internacionalmente.</p>' },
  { id: 'rules', text: '<p>O judô é disputado em um tatame, onde dois competidores, ou judocas, buscam derrubar, imobilizar ou realizar técnicas de finalização no adversário.</p><ul><li><span style="color: #D9B341";>Objetivo:</span> Marcar um "ippon" (ponto completo), que encerra imediatamente a luta, ou acumular pontuações menores, como "waza-ari".</li><li><span style="color: #D9B341";>Técnicas principais</span> <p><span style="text-decoration: underline 2px">Nage-waza (técnicas de projeção):</span> movimentos que visam derrubar o adversário com controle.</p><p><span style="text-decoration: underline 2px">Katame-waza (técnicas de imobilização):</span> incluem imobilizações, estrangulamentos e chaves de braço.</p><p><span style="text-decoration: underline 2px">Atemi-waza:</span> técnicas de ataque direto, utilizadas apenas em treinamento ou competições específicas.</p></li><li><span style="color: #D9B341";>Pontuação</span> <p><span style="text-decoration: underline 2px">Ippon:</span> vitória direta, obtida ao projetar o adversário de costas no tatame ou imobilizá-lo por 20 segundos.</p><p><span style="text-decoration: underline 2px">Waza-ari:</span> meia-pontuação. Dois waza-aris equivalem a um ippon.</p><p><span style="text-decoration: underline 2px">Shido:</span> penalidade dada por infrações, como evitar o combate ou realizar movimentos proibidos.</p></li><li><span style="color: #D9B341";>Tempo de luta</span> <p><span style="text-decoration: underline 2px">Adultos:</span> 4 minutos de combate (tempo efetivo).</p><p><span style="text-decoration: underline 2px">Categorias de base:</span> geralmente, 3 minutos.</p></li></ul>' },
  { id: 'fundamentals', text: '<p>O judô se baseia em princípios técnicos e filosóficos, como:</p><ul><li><span style="color: #D9B341";>Kuzushi:</span> desequilíbrio do adversário, essencial para aplicar projeções.</li><li><span style="color: #D9B341";>Tsukuri:</span> preparação e entrada para a técnica.</li><li><span style="color: #D9B341";>Kake:</span> execução da técnica, finalizando o movimento.</li></ul><p>Além disso, a disciplina e o respeito são pilares fundamentais do esporte, refletidos em gestos como o "rei" (reverência), feito antes e depois das lutas.</p>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> Estimula o respeito ao próximo e a construção de relacionamentos baseados em valores éticos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Inclusão social:</span> O ambiente inclusivo permite a prática por pessoas de diferentes idades e habilidades.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força e resistência muscular:</span> as técnicas de projeção e imobilização exigem força dos músculos do tronco e membros.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Flexibilidade:</span> os movimentos do judô promovem amplitude articular.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Condicionamento físico geral:</span> melhora da capacidade cardiovascular e aumento da agilidade.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Disciplina e autocontrole:</span> o judô incentiva a concentração e o controle emocional.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Resiliência:</span> ensina a lidar com derrotas e desafios.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Concentração:</span> a estratégia e técnica requerem foco total durante a luta.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Procure uma academia', text: 'Inscreva-se em uma academia de judô ou centro esportivo qualificado e adquira um judogi (kimono) adequado para prática.' },
  { id: 1, title: 'Aprenda os fundamentos', text: 'Aprenda as bases do judô, como quedas (ukemi) e pegadas (kumi-kata), para evitar lesões e desenvolver uma boa técnica.' },
  { id: 2, title: 'Treine com constância', text: 'Participe de treinos regulares e respeite os limites do seu corpo, especialmente no início.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: '2 a 3 treinos semanais, com duração de 1 hora cada.' },
  { id: 1, title: 'Intermediários e avançados', text: '4 a 5 vezes por semana, com treinos específicos para técnica, condicionamento e simulação de lutas.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O termo “judô” significa “caminho suave” ou “caminho da suavidade”.' },
  { id: 'two', text: 'Rafaela Silva foi a primeira mulher brasileira a conquistar um ouro olímpico no judô, nos Jogos de Londres 2012.' },
  { id: 'three', text: 'O judô é o esporte que mais trouxe medalhas olímpicas ao Brasil, somando mais de 20 pódios.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/anomino.jpeg', name: 'Rafael Silva', about: 'Rafael Silva, conhecido como "Baby", é um dos judocas mais exitosos do Brasil. Campeão mundial em 2013, ele também tem uma medalha olímpica de bronze, conquistada nos Jogos Olímpicos de 2016. Seu estilo de combate baseado em força e técnica de quedas o torna um dos grandes nomes do judô mundial.   ' },
  { id: 1, picture: '/sports/anomino.jpeg', name: 'Felipe Kitadai', about: 'Felipe Kitadai é um dos maiores judocas do Brasil, com destaque na categoria até 60 kg. Ele conquistou a medalha de bronze nas Olimpíadas de Londres 2012 e várias medalhas em competições internacionais, como o Campeonato Pan-Americano. Kitadai é um exemplo de perseverança e técnica no judô.' },
  { id: 2, picture: '/sports/anomino.jpeg', name: 'Leandro Guilheiro', about: 'Leandro Guilheiro é um dos principais nomes do judô brasileiro, com uma carreira vitoriosa, incluindo medalha de bronze nas Olimpíadas de Atenas 2004. Especialista na categoria até 66 kg, ele conquistou diversas medalhas em competições internacionais e foi uma referência no judô brasileiro por muitos anos.' },
  { id: 3, picture: '/sports/anomino.jpeg', name: 'Douglas Evangelista', about: 'Douglas Evangelista é outro judoca brasileiro que se destacou em competições internacionais. Ele foi medalhista em campeonatos Pan-Americanos e em competições de nível mundial, contribuindo significativamente para o crescimento do judô no Brasil.' },
  { id: 4, picture: '/sports/anomino.jpeg', name: 'David Moura', about: 'David Moura é um dos principais nomes do judô brasileiro na categoria acima de 100 kg. Ele conquistou o bronze no Campeonato Mundial de 2015 e tem se destacado como um dos maiores atletas da categoria no cenário internacional.' },
  { id: 5, picture: '/sports/anomino.jpeg', name: 'Sarah Menezes', about: 'Sarah Menezes é uma das maiores judocas do Brasil e uma das atletas mais vitoriosas. Ela se tornou campeã olímpica em Londres 2012, na categoria até 48 kg, sendo a primeira brasileira a conquistar o ouro olímpico no judô. Sarah também tem uma coleção de medalhas em campeonatos mundiais e Pan-americanos.' },
  { id: 6, picture: '/sports/anomino.jpeg', name: 'Rafaela Silva', about: 'Rafaela Silva é campeã olímpica e uma das maiores judocas da história do Brasil. Ela conquistou a medalha de ouro nas Olimpíadas do Rio 2016, na categoria até 57 kg, e foi uma das grandes responsáveis pelo sucesso do judô feminino brasileiro nas últimas décadas. Além disso, Rafaela tem sido uma presença constante nas medalhas de ouro em torneios internacionais.' },
  { id: 7, picture: '/sports/anomino.jpeg', name: 'Mayra Aguiar', about: 'Mayra Aguiar é uma das maiores judocas brasileiras, com três medalhas de bronze em campeonatos mundiais e várias vitórias em competições internacionais. Especialista na categoria até 78 kg, Mayra tem sido uma das atletas mais consistentes do judô feminino brasileiro.' },
  { id: 8, picture: '/sports/anomino.jpeg', name: 'Tamires Crude', about: 'Tamires Crude é uma judoca brasileira que se destacou nas competições internacionais, especialmente no Campeonato Pan-Americano. Ela tem sido uma grande representante do judô brasileiro em sua categoria e continua a ser uma forte presença em torneios de alto nível.' },
  { id: 9, picture: '/sports/anomino.jpeg', name: 'Jessica Pereira', about: 'Jessica Pereira tem se destacado no judô brasileiro, especialmente em competições internacionais como o Campeonato Pan-Americano e o Campeonato Mundial. Ela é uma das atletas mais promissoras do judô feminino no Brasil.' },
];
const sources = [
  { id: 0, link: 'https://www.cbj.com.br', site: 'Confederação Brasileira de Judô (CBJ)' },
  { id: 1, link: '', site: 'Olympics.com - Judô' },
  { id: 3, link: '', site: 'História do Judô - Brasil Escola' },
  { id: 4, link: 'https://swimchannel.net', site: 'Swim Channel - Judô no Brasil' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="JUDÔ" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/judo/introduction.jpg" />
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
