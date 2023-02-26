import { createWebHistory, createRouter } from 'vue-router';
const Home = () => import('./../src/crud/Home.vue');
const Contacto = () => import('./../src/crud/Contacto.vue');

const Mostrar = () => import('./../src/crud/Mostrar.vue');
const Crear = () => import('./../src/crud/Crear.vue');
const Editar = () => import('./../src/crud/Editar.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'mostrarBlogs',
        path: '/blogs',
        component: Mostrar
    },
    {
        name: 'crearBlogs',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarBlogs',
        path: '/editar/:id',
        component: Editar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
  
export default router;  
    