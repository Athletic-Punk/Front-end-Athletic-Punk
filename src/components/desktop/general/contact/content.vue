<script setup>
const developers = [
  {
    id: 0,
    name: 'Filipe B. dos Santos',
    position: '<span style="color: #FF007F">DESIGN</span>',
    picture: '/general/contact/dev/filipe.jpg',
    github: 'https://github.com/FilipeBento19',
    githubNickname: 'FilipeBento19',
    instagram: 'https://www.instagram.com/_filipe_bentoo_/',
    instagramNickname: '_filipe_bentoo_',
    whatsapp: '(47) 99613-8142',
  },
  {
    id: 1,
    name: 'Higor T. A. de Braga',
    position: 'FRONT-END',
    picture: '/general/contact/dev/higor.jpg',
    github: 'https://github.com/higorifc',
    githubNickname: 'higorifc',
    instagram: 'https://www.instagram.com/bragaxzh_/',
    instagramNickname: 'bragaxzh_',
    whatsapp: '(47) 99120-7647',
  },
  {
    id: 2,
    name: 'Nicole Ferreira Mello',
    position: '<span style="color: #D9B341">FULLSTACK</span>',
    picture: '/general/contact/dev/nicole.jpeg',
    github: 'https://github.com/nicolefemello',
    githubNickname: 'nicolefemello',
    instagram: 'https://www.instagram.com/nicolefemello/',
    instagramNickname: 'nicolefemello',
    whatsapp: '(47) 99113-8151',
  },
  {
    id: 3,
    name: 'William Chormiak',
    position: '<span style="color: #D9B341">FULLSTACK</span>',
    picture: '/general/contact/dev/william.jpg',
    github: 'https://github.com/WILLIAMCHOR',
    githubNickname: 'WILLIAMCHOR',
    instagram: 'https://www.instagram.com/chormiak_junior/',
    instagramNickname: 'chormiak_junior',
    whatsapp: '(47) 99138-0305',
  },
]
</script>

<template>
  <section class="is-desktop">
    <h1>CONTATE-NOS</h1>

    <div id="viewport">
      <div id="developers">
        <div v-for="dev in developers" :key="dev.id" class="developer">
          <h3 v-html="dev.position"></h3>
          <img :src="dev.picture" :alt="dev.name" />
          <p>{{ dev.name }}</p>
          <ul>
            <li>
              <a :href="dev.github"><img src="/general/contact/tec/github.png" alt="GitHub Icon" />{{
                dev.githubNickname
              }}</a>
            </li>
            <li>
              <a :href="dev.instagram"><img src="/general/contact/tec/instagram.png" alt="Instagram Icon" />{{
                dev.instagramNickname
              }}</a>
            </li>
            <li>
              <a href=""><img src="/general/contact/tec/whatsapp.png" alt="WhatsApp Icon" />{{
                dev.whatsapp
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  h1 {
    font-family: 'Aldrich';
    font-weight: 400;
    font-size: 3.533vw;
    line-height: 2.604vw;
    text-align: center;
    color: #2bb24f;
    margin: 3vw 0 7vw 0;
  }

  #viewport {
    background-color: #0958b1;
    padding-bottom: 2vw;

    #developers {
      display: flex;
      justify-content: center;
      background-color: #369950;

      .developer {
        margin: 2vw 3vw 2vw 3vw;
        width: 16.406vw;
        height: 30vw;
        background-color: #2bb24f;
        border-radius: 5px;
        text-align: center;

        h3 {
          font-family: 'Aldrich';
          font-weight: 400;
          font-size: 1.458vw;
          line-height: 2.604vw;
          color: #0958b1;
          margin-top: 1vw;
        }

        img {
          border-radius: 100px;
          width: 10.677vw;
          margin: 1vw 0 1vw 0;
        }

        p {
          font-family: 'Aldrich';
          font-weight: 400;
          font-size: 1.258vw;
          line-height: 2.604vw;
          color: #000000;
        }

        ul {
          li {
            a {
              font-family: 'Aldrich';
              font-weight: 400;
              font-size: 1vw;
              line-height: 2.604vw;
              color: #ffffff;
              text-decoration: none;
              display: flex;
              justify-content: center;
              text-align: left;

              img {
                width: 1.563vw;
                margin: 0.5vw 1vw 0.5vw 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
