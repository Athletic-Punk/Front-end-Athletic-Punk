<script setup>

</script>

<template>
  <div id="suport" class="is-desktop">
    <h2>ROTINA DE TREINOS</h2>

    <form id="routineForm">
      <h3>Criar rotina de treinos:</h3>
      <RouterLink to="/formulario-rotina"><button>Criar rotina de treinos com IA</button></RouterLink>
    </form>
  </div>
</template>

<style scoped>
#suport {
  padding: 1vw 0 0 2vw;

  h2 {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 3vw;
    color: #0958b1;
    margin-bottom: 1vw;
  }

  form {
    padding: 1vw;
    margin: 1vw 0 2vw 0;
    border: 0.2vw solid #0958b1;
    border-radius: 20px;
    transition: all 0.5s ease;

    h3 {
      font-family: 'Aldrich';
      font-weight: 400;
      font-size: 1.5vw;
      color: #0958b1;
      margin-bottom: 0.5vw;
    }

    p {
      margin: 1vw 0 1vw 0;

      label {
        font-family: 'Ubuntu';
        font-weight: 400;
        font-size: 1.2vw;
        color: #0958b1;
        margin: 0 0.5vw 0.5vw 1vw;
      }

      input {
        padding: 0.3vw 0.5vw 0.3vw 0.5vw;
        width: 50%;
        height: 2vw;
        font-family: 'Ubuntu';
        font-size: 1.2vw;
        border: 0.1vw solid #0958b1;
        border-radius: 10px;
        transition: all 0.5s ease;
      }
    }

    button {
      padding: 0.5vw 1vw 0.5vw 1vw;
      border: none;
      border: 3px solid #0958b1;
      border-radius: 20px;
      background-color: #0958b1;
      font-family: 'Bebas Neue';
      font-weight: 400;
      font-size: 1.5vw;
      color: #f0f0f0;
      cursor: pointer;
      transition: all 0.5s ease;
      margin-left: -32vw;
    }

    button:hover {
      background-color: #f0f0f0;
      color: #0958b1;
    }
  }

  form:hover {
    background-color: #fff;
  }

  h3 {
    font-family: 'Aldrich';
    font-weight: 400;
    font-size: 1.5vw;
    color: #0958b1;
    margin-bottom: 0.5vw;
  }

  p {
    margin: 1vw 0 1vw 0;
    font-family: 'Ubuntu';
    font-weight: 400;
    font-size: 1.2vw;
    color: #0958b1;
  }

  button {
    padding: 0.5vw 1vw 0.5vw 1vw;
    border: none;
    border: 3px solid #0958b1;
    border-radius: 20px;
    background-color: #0958b1;
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-size: 1.5vw;
    color: #f0f0f0;
    cursor: pointer;
    transition: all 0.5s ease;
    transform: translateX(360%);
  }

  button:hover {
    background-color: #f0f0f0;
    color: #0958b1;
  }
}
</style>
