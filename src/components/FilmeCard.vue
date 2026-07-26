<script setup>
defineProps({
  filme: Object
})
</script>

<template>
  <div>
    <h2>{{ filme.titulo }}</h2>
    <p>Ano: {{ filme.ano }}</p>
  </div>
</template>

<style scoped>
/* ====== CONTAINER DO CARD ====== */
div {
  width: 180px;        /* card compacto */
  height: 140px;       /* altura menor */
  padding: 1rem;
  margin: 0.8rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.05);
  transition: transform .3s ease, box-shadow .3s ease;
  animation: fadeIn .6s ease;
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center; /* centraliza conteúdo */
  align-items: center;     /* centraliza horizontal */
  text-align: center;
}

div:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 0 26px rgba(255, 200, 0, 0.25);
}

/* ====== TÍTULO DO FILME ====== */
h2 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text; /* compatibilidade com navegadores WebKit */
  background-clip: text;         /* versão padrão recomendada */
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(255, 200, 0, 0.25);
  animation: glow 3s infinite alternate;
}

/* ====== TEXTO DO ANO ====== */
p {
  font-size: 0.9rem;
  opacity: 0.85;
  color: #e6e6e6;
  text-shadow: 0 0 10px rgba(255,255,255,0.15);
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
  h2 {
    font-size: 1.4rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>