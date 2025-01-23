<script setup>
function updateEmail() {
}
function updatePassword() {
}
function deleteAccount() {
}
</script>

<template>
  <div class="is-desktop">
    <details id="segurity">
      <summary>
        <h2>SEGURANÇA <i class="fa-solid fa-chevron-down"></i></h2>
      </summary>

      <form id="emailForm">
        <h3>Atualizar e-mail:</h3>
        <p><label for="email">Novo E-mail:</label>
          <input type="email" id="email" placeholder="Digite o novo e-mail..." required />
        </p>
        <button type="submit" @click="updateEmail">Atualizar E-mail</button>
      </form>

      <form id="passwordForm">
        <h3>Atualizar senha:</h3>
        <p><label for="currentPassword">Senha Atual:</label>
          <input type="password" id="current-password" placeholder="Digite sua senha atual..." required minlength="8"
            maxlength="20" />
        </p>
        <p><label for="new-password">Nova Senha:</label>
          <input type="password" id="new-password" placeholder="Digite sua nova senha..." required minlength="8"
            maxlength="20" />
        </p>

        <button type="submit" @click="updatePassword">Atualizar Senha</button>
      </form>

      <h3>Excluir Conta</h3>
      <p>Esta ação é irreversível. Você realmente deseja excluir sua conta?</p>
      <button type="button" @click="deleteAccount">Excluir sua conta</button>
    </details>
  </div>
</template>

<style scoped>
div {
  #segurity {
    overflow: hidden;
    transition: all 0.5s ease;
    border-radius: 20px;
    padding: 1vw 2vw 2vw 2vw;

    summary {
      list-style: none;
      cursor: pointer;

      h2 {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 3vw;
        color: #0958b1;
        margin-bottom: 1vw;
      }

      i {
        transition: all 0.5s ease;
        font-size: 3vw;
      }
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
        margin-left: 37vw;
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
      margin-left: 38vw;
    }

    button:hover {
      background-color: #f0f0f0;
      color: #0958b1;
    }
  }

  details[open] {
    background-color: #d8d7d7;

    i {
      transform: rotate(180deg);
    }
  }
}
</style>
