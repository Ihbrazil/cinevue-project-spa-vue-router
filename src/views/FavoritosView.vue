<script setup>
  import { ref, onMounted } from 'vue'
  import { getFavoritos } from '@/utils/favoritos.js'

  const filmes = ref([])
  const favoritos = getFavoritos()

  onMounted(async () => {
    const response = await fetch('/data.json')
    const dados = await response.json()

    filmes.value = dados.filmes.filter(f => favoritos.includes(f.id))
  })
</script>

<template>
  <div>
    <h1>Meus Favoritos</h1>

    <div v-if="filmes.length === 0">
      Nenhum filme favoritado ainda.
    </div>

    <div v-for="filme in filmes" :key="filme.id">
      <h3>{{ filme.titulo }}</h3>
      <RouterLink :to="`/filmes/${filme.id}`">Ver detalhes</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* ====== CONTAINER ====== */
div {
  min-height: 60vh;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;
  animation: fadeIn .6s ease;
}

/* ====== TÍTULO ====== */
h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text; /* compatibilidade com navegadores WebKit */
  background-clip: text;         /* versão padrão recomendada */
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(255, 200, 0, 0.25);
  animation: glow 3s infinite alternate;
}

/* ====== MENSAGEM DE VAZIO ====== */
div:nth-child(2) {
  text-align: center;
  font-size: 1.4rem;
  opacity: 0.85;
  margin-top: 1rem;
  text-shadow: 0 0 10px rgba(255,255,255,0.15);
}

/* ====== CARD DE FILME ====== */
div:nth-child(n+3) {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1.2rem auto;
  max-width: 600px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);
  transition: transform .3s ease, box-shadow .3s ease;
}

div:nth-child(n+3):hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 35px rgba(255, 200, 0, 0.25);
}

/* ====== TÍTULO DO FILME ====== */
h3 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffd95a;
  text-shadow: 0 0 8px rgba(255, 200, 0, 0.4);
}

/* ====== LINK DETALHES ====== */
a {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(90deg, #ff8800, #ff5500);
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
}

a:hover {
  background: linear-gradient(90deg, #ffaa00, #ff7700);
  transform: scale(1.08);
  box-shadow: 0 0 18px rgba(255, 150, 50, 0.4);
}

/* ====== ANIMAÇÕES ====== */
@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(255, 200, 0, 0.2),
                 0 0 20px rgba(255, 200, 0, 0.15),
                 0 0 30px rgba(255, 200, 0, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 200, 0, 0.4),
                 0 0 40px rgba(255, 200, 0, 0.3),
                 0 0 60px rgba(255, 200, 0, 0.25);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ====== RESPONSIVO ====== */
@media (max-width: 600px) {
  h1 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  a {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>