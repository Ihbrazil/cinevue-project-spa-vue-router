<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const filme = ref(null)

    onMounted(async () => {
        const response = await fetch("/data.json")
        const dados = await response.json()
        filme.value = dados.filmes.find(f => f.id == route.params.id)
    })
</script>

<template>
  <div v-if="filme">
    <h2>{{ filme.titulo }}</h2>
    <img :src="filme.poster" width="250" />
    <p>{{ filme.descricao }}</p>
  </div>
</template>

<style scoped>
/* ====== CONTAINER ====== */
div {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);
  animation: fadeIn .6s ease;
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;
}

/* ====== TÍTULO ====== */
h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text; /* compatibilidade com navegadores WebKit */
  background-clip: text;         /* versão padrão recomendada */
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(255, 200, 0, 0.25);
  animation: glow 3s infinite alternate;
}

/* ====== LISTA ====== */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  font-size: 1.2rem;
  color: #e6e6e6;
  text-shadow: 0 0 10px rgba(255,255,255,0.15);
  transition: transform .3s ease, box-shadow .3s ease;
}

li:hover {
  transform: translateX(10px);
  box-shadow: 0 0 20px rgba(255, 200, 0, 0.25);
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
  h3 {
    font-size: 1.6rem;
  }
  li {
    font-size: 1rem;
  }
}
</style>