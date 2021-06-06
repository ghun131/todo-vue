import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
        todos: ["placeholder"]
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        add(state, todo) {
            console.log('HIT');
            
            state.todos.push(todo);
        },
        remove(state, currTodo) {
            const newTodos = state.todos.filter(todo => currTodo !== todo);
            state.todos = newTodos;
        }
    }
})