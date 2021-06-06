import Vue from 'vue';
import VueRouter from 'vue-router';
import Todos from './components/todos/Todos';
import Counter from './components/counter/Counter';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "todos",
        component: Todos
    },
    {
        path: "/todos",
        name: "todos",
        component: Todos
    },
    {
        path: "/counter",
        name: "counter",
        component: Counter
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;