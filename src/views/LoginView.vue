/*
  Login teste
  email 'admin@teste.com' senha: '123456'
*/
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const erro = ref('')
const router = useRouter()

const acessar = () => {
  // Simulação de autenticação
  if (email.value === 'admin@teste.com' && senha.value === '123456') {
    const usuario = {
      nome: 'Isaias',
      email: email.value,
      hobby: 'Filmes',
      genero: 'Ficção Científica'
    }

    localStorage.setItem('usuario', JSON.stringify(usuario))
    router.push('/perfil')
  } else {
    erro.value = 'Usuário ou senha inválidos'
  }
}
</script>

<template>
  <div class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="acessar">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="senha" type="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>

    <p v-if="erro" class="erro">{{ erro }}</p>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  background: #222;
  border-radius: 12px;
  color: #fff;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 0.8rem 0;
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
}
button {
  width: 100%;
  padding: 0.8rem;
  background: #ff8800;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.erro {
  margin-top: 1rem;
  color: #ff4444;
}
</style>