<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const usuario = ref(null)
const router = useRouter()

onMounted(() => {
  const dados = localStorage.getItem('usuario')
  if (dados) {
    usuario.value = JSON.parse(dados)
  }
})

const logout = () => {
  localStorage.removeItem('usuario')
  router.push('/login')
}
</script>

<template>
  <div class="perfil-page">
    <h1>Perfil</h1>

    <button class="logout" @click="logout">Sair</button>


    <div v-if="usuario">
      <h2>Nome: {{ usuario.nome }}</h2>
      <p>Email: {{ usuario.email }}</p>
      <p>Hobby: {{ usuario.hobby }}</p>
      <p>Gênero favorito: {{ usuario.genero }}</p>
    </div>

    <div>
      <h2>Gênero favorito: {{ usuario?.genero }}</h2>   
      <p>
        Fascinado por universos futuristas, viagens espaciais, realidades alternativas
        e histórias que desafiam a imaginação.
      </p>
    </div>

    <div>
      <h2>O melhor do Cinema</h2>
      <p>
        Aqui você acompanha seus filmes favoritos, descobre novas obras e explora
        curiosidades do mundo do cinema.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* ====== CONTAINER DA PÁGINA ====== */
.perfil-page {
  min-height: 50vh;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;
  text-align: center;
  animation: fadeIn .6s ease;
}

/* ====== TÍTULO PRINCIPAL ====== */
.perfil-page h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(255, 200, 0, 0.25);
  animation: glow 3s infinite alternate;
}

/* ====== BOTÃO LOGOUT ====== */
.logout {
  display: block;
  margin: 1rem auto 2.5rem;
  padding: 0.9rem 2.4rem;
  background: linear-gradient(135deg, #ff3b3b, #b30000);
  border: none;
  border-radius: 14px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 0 18px rgba(255, 60, 60, 0.35);
  transition: transform .25s ease, box-shadow .25s ease, opacity .25s ease;
}

.logout:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 28px rgba(255, 60, 60, 0.55);
  opacity: 0.95;
}

.logout:active {
  transform: scale(0.96);
  box-shadow: 0 0 18px rgba(255, 60, 60, 0.4);
}

/* ====== CARDS DO PERFIL ====== */
.perfil-page > div {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 2rem;
  max-width: 650px;
  margin: 1.5rem auto;
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.06);
  animation: fadeInUp 1s ease;
  transition: transform .3s ease, box-shadow .3s ease;
}

/* Hover premium */
.perfil-page > div:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 40px rgba(255, 200, 0, 0.25);
}

/* ====== SUBTÍTULOS ====== */
.perfil-page h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 200, 0, 0.25);
  letter-spacing: 1px;
}

/* ====== TEXTOS ====== */
.perfil-page p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0.8rem auto;
  max-width: 520px;
  color: #e6e6e6;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
  line-height: 1.6;
}

/* ====== ANIMAÇÕES ====== */
@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(255, 200, 0, 0.2),
                 0 0 20px rgba(255, 200, 0, 0.15);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 200, 0, 0.4),
                 0 0 40px rgba(255, 200, 0, 0.3);
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ====== RESPONSIVO ====== */
@media (max-width: 600px) {
  .perfil-page h1 { font-size: 2.4rem; }
  .perfil-page h2 { font-size: 1.6rem; }
  .perfil-page p  { font-size: 1.15rem; }
}
</style>