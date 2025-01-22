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
  { id: 0, picture: '/sports/triatlo/banner/01.png' },
  { id: 1, picture: '/sports/triatlo/banner/02.png' },
  { id: 2, picture: '/sports/triatlo/banner/03.png' },
  { id: 3, picture: '/sports/triatlo/banner/04.png' },
  { id: 4, picture: '/sports/triatlo/banner/05.png' },
  { id: 5, picture: '/sports/triatlo/banner/06.png' }
];
const introductionText = 'O triatlo é um esporte multidisciplinar que combina três modalidades: natação, ciclismo e corrida, praticadas em sequência, sem interrupções. Ele é considerado um dos esportes mais exigentes fisicamente, pois exige resistência, velocidade e força de maneira simultânea em suas três fases. O triatlo ganhou popularidade nos Jogos Olímpicos, sendo uma das provas mais desafiadoras e emocionantes. A sua diversidade e a necessidade de dominar três esportes diferentes tornam-no um grande desafio para os atletas.';
const menuItensSections = [
  { id: 'history', section: 'HISTÓRIA' },
  { id: 'rules', section: 'REGRAS BÁSICAS' },
  { id: 'fundamentals', section: 'FUNDAMENTOS' }
];
const infoItensText = [
  { id: 'history', text: 'O triatlo tem suas origens nos Estados Unidos, nas décadas de 1970 e 1980, como uma forma de criar um novo tipo de competição que testasse a resistência física de maneira mais abrangente. A primeira competição de triatlo moderna aconteceu em 1974, na cidade de San Diego, Califórnia, organizada pelo Clube de Atletismo de San Diego. A modalidade foi incorporada aos Jogos Olímpicos em 2000, em Sydney, com a prova olímpica sendo realizada em distâncias padrão. O triatlo tem se expandido globalmente, com competições realizadas em diversos níveis, desde amadores até atletas profissionais.' },
  { id: 'rules', text: '<p>O triatlo segue um formato específico de prova, com distâncias variáveis conforme a categoria (sprint, olímpico, meio Ironman, Ironman). As regras básicas incluem:</p><ul><li><span style="color: #D9B341";>Transições (T1 e T2):</span> As transições entre as modalidades de natação, ciclismo e corrida são parte fundamental da competição. T1 é a transição da natação para o ciclismo, e T2 é a transição do ciclismo para a corrida. O tempo gasto nas transições pode impactar significativamente o desempenho geral.</li><li><span style="color: #D9B341";>Distâncias:</span> O triatlo olímpico é composto por 1500 metros de natação, 40 km de ciclismo e 10 km de corrida. Outras distâncias incluem o sprint (750m de natação, 20 km de ciclismo e 5 km de corrida) e o Ironman (3,8 km de natação, 180 km de ciclismo e 42,195 km de corrida).</li><li><span style="color: #D9B341";>Equipamentos:</span> Cada fase do triatlo exige equipamentos específicos. Para a natação, são usados trajes de banho ou wetsuits, dependendo da temperatura da água. Para o ciclismo, os atletas utilizam bicicletas específicas para estrada ou triatlo, com capacetes obrigatórios por questões de segurança. Na corrida, os atletas devem usar tênis apropriados para suportar a intensidade e o terreno da prova.</li><li><span style="color: #D9B341";>Pacing e Estratégia:</span> Como o triatlo envolve três esportes de resistência, a estratégia de pacing (gerenciamento da intensidade de esforço) é crucial. Os atletas devem dosar seu esforço nas três etapas para garantir que não se exaustem precocemente e consigam concluir a prova com o melhor desempenho possível.</li></ul>' },
  { id: 'fundamentals', text: '<ul><li><span style="color: #D9B341";>Natação:</span> A primeira fase do triatlo exige uma excelente técnica de natação, já que ela define o ritmo inicial da prova. A natação é realizada geralmente em águas abertas (rios, lagos ou mar), o que pode tornar a prova ainda mais desafiadora devido às condições ambientais, como ondas e correntezas.</li><li><span style="color: #D9B341";>Ciclismo:</span> O ciclismo é a segunda fase e uma das mais exigentes, pois os atletas precisam gerenciar sua resistência e velocidade. Além da habilidade de pedalar, é importante ter técnicas de descida e subida e um bom posicionamento aerodinâmico para melhorar a eficiência.</li><li><span style="color: #D9B341";>Corrida:</span> A corrida é a última fase do triatlo, sendo onde a resistência do atleta é colocada à prova. Após nadar e pedalar, o corredor precisa manter uma boa postura e estratégia de pacing para garantir que o esforço final seja suficiente para completar os 10 km (ou mais, em provas maiores) com alta performance.</li><li><span style="color: #D9B341";>Transições:</span> O tempo de transição entre cada modalidade pode ser decisivo. Durante a transição, os atletas devem ser rápidos para trocar de roupa, equipamentos e se preparar para a próxima fase da prova, sem desperdiçar tempo.</li></ul>' }
];
const benefitsItens = [
  { id: 'sociais', benefit: 'SOCIAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Trabalho em equipe:</span> O triatlo pode ser praticado tanto individualmente quanto em equipes, com muitas competições oferecendo categorias para ambos.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Interação social:</span> As competições de triatlo também têm uma forte componente comunitária, com grupos e clubes dedicados a treinos e eventos, onde os atletas compartilham dicas, experiências e motivação.</li></ul>' },
  { id: 'fisicos', benefit: 'FÍSICOS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora resistência:</span> O triatlo é um excelente exercício cardiovascular, que melhora a saúde do coração, a capacidade pulmonar e a resistência geral do corpo.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Força muscular e flexibilidade:</span> O esporte também ajuda no desenvolvimento da força muscular, com foco especial nas pernas, core e braços, além de promover a coordenação motora e a flexibilidade.</li></ul>' },
  { id: 'mentais', benefit: 'MENTAIS', text: '<ul><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Foco e disciplina:</span> O triatlo requer uma grande resistência mental, já que os atletas enfrentam três disciplinas intensas consecutivas. Isso ajuda no fortalecimento da disciplina, foco e resiliência.</li><li style="margin-top: 1vw;"><span style="text-decoration: underline 3px white; font-size:1.7vw">Melhora no humor:</span> Além disso, o triatlo é eficaz na redução do estresse, pois exige concentração no presente, o que pode ser uma excelente forma de escapismo para aqueles que buscam alívio da pressão cotidiana.</li></ul>' }
];
const howStart = [
  { id: 0, title: 'Escolher a Modalidade', text: 'O triatlo oferece diferentes distâncias, sendo o triatlo sprint um bom ponto de partida para iniciantes.' },
  { id: 1, title: 'Treinamento Individual', text: 'Para se preparar para um triatlo, é necessário treinar as três modalidades. O ideal é começar com treinos focados em resistência, depois incluir treinos de transição e técnicas específicas de cada esporte.' },
  { id: 2, title: 'Planos de Treino e Equipamentos', text: 'Um treinador especializado pode ser fundamental para ajudar no planejamento de treinos eficientes. Invista em equipamentos, como um bom par de tênis de corrida, uma bicicleta adequada e trajes de natação confortáveis.' }
];
const whatOften = [
  { id: 0, title: 'Iniciantes', text: 'O treinamento básico pode ser feito de 4 a 5 vezes por semana, combinando sessões de natação, ciclismo e corrida, além de focar em transições.' },
  { id: 1, title: 'Avançados', text: 'Para quem já tem experiência, treinos 6 vezes por semana com foco em cada uma das modalidades e estratégias de transição se tornam necessários. Os atletas também precisam incorporar treinos de alta intensidade, recuperação e nutrição.' }
];
const curiositiesItens = [
  { id: 'one', text: 'O Ironman, uma das competições mais famosas de triatlo, foi realizado pela primeira vez em 1978 em Honolulu, no Havai, e é conhecido por sua extrema exigência física.' },
  { id: 'two', text: 'O triatlo foi originalmente criado como uma competição entre soldados para testar sua resistência em diferentes condições físicas.' },
  { id: 'three', text: 'A modalidade feminina foi introduzida nos Jogos Olímpicos de 2000, em Sydney, e desde então a participação feminina no triatlo tem crescido consideravelmente.' }
];
const ourAthletes = [
  { id: 0, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 1, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 2, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 3, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 4, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 5, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 6, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 7, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 8, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
  { id: 9, picture: '/sports/triatlo/athletes/.PNG', name: '', about: '' },
];
const sources = [
  { id: 0, link: '', site: 'International Triathlon Union (ITU)' },
  { id: 1, link: '', site: 'Confederação Brasileira de Triatlo (CBTri)' },
  { id: 3, link: '', site: 'Journal of Sports Medicine' },
];
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner sport-title="TRIATLO" :imgsTitle="titleImg" />
    <introduction :introduction="introductionText" introductionImage="/sports/triatlo/introduction.jpg" />
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
