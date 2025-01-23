<script setup>
import segurity from './segurity.vue';
import suport from './suport.vue';

const profile = {
  name: 'Nicole F. Mello',
  img: '/general/contact/dev/nicole.jpeg',
  email: 'nicfmello@gmail.com',
};
</script>

<template>
  <section class="is-desktop">
    <div id="profile">
      <div id="img">
        <img :src="profile.img" alt="Foto de perfil" />
      </div>
      <h2>{{ profile.name }}</h2>
      <p>Email: <span>{{ profile.email }}</span></p>
      <button>Edite seu perfil</button>
    </div>
    <div id="content">
      <h1>MEU PERFIL:</h1>

      <segurity />
      <suport />
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;

  #profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vw;
    background-color: #369950;
    width: 25vw;
    transition: all 0.5s ease;

    #img {
      width: 20vw;
      height: 20vw;
      border: solid 3px rgb(156, 156, 156);
      border-radius: 50%;
      margin-bottom: 2vw;
      overflow: hidden;

      img {
        width: 100%;
        transition: transform 0.5s ease;
        z-index: -1;
      }

      img:hover {
        transform: scale(1.02);
      }
    }

    h2 {
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 3vw;
      color: #fff;
      margin-bottom: 1vw;
      transition: all 0.5s ease;
    }

    h2:hover {
      font-size: 3.3vw;
    }

    p {
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 1.5vw;
      color: #f0f0f0;
      margin-bottom: 2vw;
      transition: all 0.5s ease;

      span {
        text-decoration: underline;
      }
    }

    p:hover {
      font-size: 1.7vw;
    }

    button {
      padding: 1.5vw 3vw 1.5vw 3vw;
      border: none;
      border-radius: 20px;
      background-color: #f0f0f0;
      font-family: 'Bebas Neue';
      font-weight: 400;
      font-size: 2.5vw;
      color: #0958b1;
      cursor: pointer;
      transition: all 0.5s ease;
    }

    button:hover {
      background-color: #0958b1;
      color: #f0f0f0;
    }
  }

  #profile:hover {
    background-color: #2f8345;
  }

  #content {
    padding: 5vw;
    background-color: #f0f0f0;
    width: 57vw;

    h1 {
      font-family: 'Bebas Neue';
      font-weight: 400;
      font-size: 4vw;
      color: #0958b1;
      margin-bottom: 2vw;
      border-bottom: 0.2vw solid #0958b1;
    }
  }
}
</style>
