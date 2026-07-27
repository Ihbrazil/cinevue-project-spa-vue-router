/* recursos da Unidade 3:
✔ Rotas nomeadas
✔ Rotas dinâmicas com regex
✔ Rotas aninhadas
✔ Lazy‑loading
✔ Guard global
✔ Guard por rota
✔ Redirecionamento
✔ Página NotFound
*/

import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loading
const HomeView = () => import('../views/HomeView.vue')
const LoginView = () => import('../views/LoginView.vue')
const FilmesView = () => import('../views/FilmesView.vue')
const DetalhesView = () => import('../views/DetalhesView.vue')
const FavoritosView = () => import('../views/FavoritosView.vue')
const PerfilView = () => import('../views/PerfilView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

// Rotas aninhadas
const Info = () => import('../views/Detalhes/Info.vue')
const Avaliacoes = () => import('../views/Detalhes/Avaliacoes.vue')
const Questoes = () => import('../views/Detalhes/Questoes.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },

    { path: '/login', name: 'login', component: LoginView },

    { path: '/filmes', name: 'filmes', component: FilmesView },

    {
      path: '/filmes/:id(\\d+)',
      name: 'detalhes',
      component: DetalhesView,
      props: true,
      children: [
        { path: '', name: 'detalhes-info', component: Info },
        { path: 'avaliacoes', name: 'detalhes-avaliacoes', component: Avaliacoes },
        { path: 'questoes', name: 'detalhes-questoes', component: Questoes }
      ],
      beforeEnter: (to) => {
        if (isNaN(Number(to.params.id))) {
          return { name: 'notfound' }
        }
      }
    },

    { path: '/favoritos', name: 'favoritos', component: FavoritosView },

    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView,
      meta: { requiresAuth: true }
    },

    // Redirecionamento
    { path: '/meuperfil', redirect: '/perfil' },

    // NotFound
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFoundView }
  ]
})

// Guard global
router.beforeEach((to) => {
  const usuario = localStorage.getItem('usuario')

  if (to.meta.requiresAuth && !usuario) {
    alert('Você precisa estar logado!')
    return { name: 'login' }
  }
})

export default router