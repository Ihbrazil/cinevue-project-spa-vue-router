<template>
  <h1>Página não encontrada</h1>
  <RouterLink to="/">Voltar ao início</RouterLink>
</template>

<style scoped>
/* ====== CONTAINER ====== */
template + * {
  display: block;
  min-height: 100vh;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #fff;
  font-family: 'Segoe UI', Roboto, sans-serif;
  text-align: center;
  animation: fadeIn .6s ease;
}

/* ====== TÍTULO ====== */
h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ff4444, #ff8800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(255, 100, 100, 0.25);
  animation: glow 3s infinite alternate;
}

/* ====== LINK DE VOLTAR ====== */
a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.4rem;
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
    text-shadow: 0 0 10px rgba(255, 100, 100, 0.2),
                 0 0 20px rgba(255, 100, 100, 0.15),
                 0 0 30px rgba(255, 100, 100, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 120, 120, 0.4),
                 0 0 40px rgba(255, 120, 120, 0.3),
                 0 0 60px rgba(255, 120, 120, 0.25);
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
  a {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>