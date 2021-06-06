import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
        size: 60,
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        shrink(state, value) {
            state.size -= value;
        },
        restore(state) {
            state.size = 60;
        }
    },
    actions: {
        shrinkAction({ commit }) {
            commit('shrink', 20);
        }
    }
})