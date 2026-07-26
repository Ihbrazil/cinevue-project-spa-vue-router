<script setup>
import { ref, onMounted } from 'vue'
import { toggleFavorito, isFavorito } from '@/utils/favoritos.js'

const filmes = ref([])

onMounted(async () => {
  const response = await fetch('/data.json')
  const dados = await response.json()
  filmes.value = dados.filmes
})

function favoritar(id) {
  toggleFavorito(id)
}
</script>

<template>
  <div>
    <h1>Filmes</h1>

    <div v-for="filme in filmes" :key="filme.id" class="card">
      <h3>{{ filme.titulo }} {{ filme.ano }}</h3>

      <button @click="favoritar(filme.id)">
        {{ isFavorito(filme.id) ? '★ Favorito' : '☆ Favoritar' }}
      </button>

      <RouterLink :to="`/filmes/${filme.id}`">Detalhes</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* ====== CONTAINER ====== */
div {
  padding: 2rem;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;
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
}

/* ====== CARD ====== */
.card {
  display: flex;
  justify-content: space-between; /* título à esquerda, botão à direita */
  align-items: center;            /* alinha verticalmente */
  gap: 1rem;

  background: rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);
  transition: transform .3s ease, box-shadow .3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 0 35px rgba(255, 200, 0, 0.25);
}

/* ====== TÍTULO DO FILME ====== */
h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffd95a;
  text-shadow: 0 0 8px rgba(255, 200, 0, 0.4);
}

/* ====== BOTÃO FAVORITO ====== */
button {
  background: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: gold;
  margin-right: 1rem;
  transition: transform .2s ease, text-shadow .2s ease;
}

button:hover {
  transform: scale(1.3);
  text-shadow: 0 0 12px gold;
}

/* ====== LINK DETALHES ====== */
a {
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #ff8800, #ff5500);
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: background .3s ease, transform .2s ease;
}

a:hover {
  background: linear-gradient(90deg, #ffaa00, #ff7700);
  transform: scale(1.05);
}

/* ====== RESPONSIVO ====== */
@media (max-width: 600px) {
  h1 {
    font-size: 2.2rem;
  }
  .card {
    padding: 1rem;
  }
}
</style>