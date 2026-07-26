<template>
  <div>
    <h1>Bem-vindo ao Mundo dos Filmes</h1>

    <p>Prepare-se para explorar histórias que emocionam, surpreendem e ficam na memória.</p>

    <p>Descubra detalhes, avaliações, curiosidades e mergulhe no universo cinematográfico como nunca antes.</p>

    <p>Do clássico ao lançamento, sua próxima experiência inesquecível começa aqui.</p>

    <p>Seu espaço para navegar pelo universo do cinema com estilo e simplicidade.</p>
  </div>
</template>

<style scoped>
/* ====== CONTAINER ====== */
div {
  min-height: 80vh;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;
  animation: fadeIn .6s ease;
  text-align: center;
}

/* ====== TÍTULO ====== */
h1 {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(255, 200, 0, 0.25);
  animation: glow 3s infinite alternate;
}

/* ====== PARÁGRAFOS ====== */
p {
  font-size: 1.4rem;
  max-width: 800px;
  margin: 1rem auto;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(255,255,255,0.15);
  animation: fadeInUp .8s ease;
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
  p {
    font-size: 1.2rem;
  }
}
</style>