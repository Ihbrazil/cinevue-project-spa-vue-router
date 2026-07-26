<script setup>
defineProps({
  avaliacao: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <h4>{{ avaliacao.autor }} — Nota {{ avaliacao.nota }}</h4>
    <p>{{ avaliacao.comentario }}</p>
  </div>
</template>

<style scoped>
/* CONTAINER DO ITEM */
div {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #e6e6e6;
  text-shadow: 0 0 10px rgba(255,255,255,0.15);
  transition: transform .3s ease, box-shadow .3s ease;
  animation: fadeIn .6s ease;
}

div:hover {
  transform: translateX(10px);
  box-shadow: 0 0 20px rgba(255, 200, 0, 0.25);
}

/* TÍTULO (AUTOR + NOTA) */
h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  background: linear-gradient(90deg, #ffcc00, #ff8800);
  -webkit-background-clip: text; /* compatibilidade com navegadores WebKit */
  background-clip: text;         /* versão padrão recomendada */
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(255, 200, 0, 0.25);
}

/* COMENTÁRIO */
p {
  font-size: 1rem;
  opacity: 0.9;
  color: #fff;
  text-shadow: 0 0 8px rgba(255,255,255,0.2);
}

/* ANIMAÇÕES */
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

/* RESPONSIVO */
@media (max-width: 600px) {
  h4 {
    font-size: 1.05rem;
  }
  p {
    font-size: 0.9rem;
  }
}
</style>
