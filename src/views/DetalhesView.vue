<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { toggleFavorito, isFavorito } from '@/utils/favoritos.js'

const route = useRoute()
const id = Number(route.params.id)
const filme = ref(null)

onMounted(async () => {
  const response = await fetch('/src/assets/data.json')
  const dados = await response.json()
  filme.value = dados.filmes.find(f => f.id === id)
})

function favoritar() {
  toggleFavorito(id)
}
</script>

<template>
  <div>
    <h1>{{ filme?.titulo }}</h1>

    <button @click="favoritar">
      {{ isFavorito(id) ? '★ Remover dos Favoritos' : '☆ Adicionar aos Favoritos' }}
    </button>

    <!-- ⭐ NAVEGAÇÃO DAS SUBROTAS -->
    <nav>
      <RouterLink :to="{ name: 'detalhes-info', params: { id } }">Informações</RouterLink>
      <RouterLink :to="{ name: 'detalhes-avaliacoes', params: { id } }">Avaliações</RouterLink>
      <RouterLink :to="{ name: 'detalhes-questoes', params: { id } }">Questões</RouterLink>
    </nav>

    <!-- ⭐ Aqui aparece o conteúdo da sub-rota -->
    <RouterView />
  </div>
</template>

<style scoped>
/* ====== CONTAINER ====== */
div {
  min-height: 50vh;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;
  animation: fadeIn .6s ease;
}

/* ====== TÍTULO DO FILME ====== */
h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(255, 200, 0, 0.25);
  animation: glow 3s infinite alternate;
}

/* ====== BOTÃO FAVORITO ====== */
button {
  display: block;
  margin: 1rem auto 2rem auto;
  padding: 0.7rem 1.4rem;
  background: transparent;
  border: 2px solid gold;
  border-radius: 10px;
  color: gold;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform .3s ease, box-shadow .3s ease, background .3s ease;
}

button:hover {
  transform: scale(1.1);
  background: rgba(255, 215, 0, 0.15);
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.4);
}

/* ====== MENU DE SUBROTAS ====== */
nav {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* ====== LINKS DO MENU ====== */
nav a {
  color: #ffd95a;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color .3s ease, transform .3s ease, text-shadow .3s ease;
  text-shadow: 0 0 8px rgba(255, 200, 0, 0.4);
}

nav a:hover {
  color: #ffea9a;
  transform: scale(1.15);
  text-shadow: 0 0 12px rgba(255, 200, 0, 0.6);
}

/* ====== LINK ATIVO ====== */
nav a.router-link-active {
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid #ffd95a;
  padding-bottom: 0.3rem;
}

/* ====== ÁREA DAS SUBROTAS ====== */
section, div > *:not(h1):not(button):not(nav) {
  animation: fadeInUp .6s ease;
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(18px);
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
  nav a {
    font-size: 1rem;
  }
  button {
    font-size: 1.1rem;
  }
}
</style>