//menu dinâmico e rotas nomeadas
<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Início</RouterLink>
    <RouterLink :to="{ name: 'filmes' }">Filmes</RouterLink>
    <RouterLink :to="{ name: 'favoritos' }">Favoritos</RouterLink>
    <RouterLink :to="{ name: 'perfil' }">Perfil</RouterLink>
  </nav>

  <RouterView />
</template>

<style>
/* ====== MENU PREMIUM ====== */
nav {
  display: flex;
  gap: 25px;
  padding: 1.2rem 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);
}

/* ====== LINKS DO MENU ====== */
nav a {
  color: #ffd95a;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 0.4rem 0.6rem;
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

/* ====== ÁREA DE CONTEÚDO ====== */
main, div, section {
  animation: fadeIn .6s ease;
}

/* ====== ANIMAÇÃO ====== */
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
  nav {
    flex-wrap: wrap;
    gap: 15px;
  }

  nav a {
    font-size: 1rem;
  }
}
</style>