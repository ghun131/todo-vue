<template>
  <div id="app">
    <Form :value="value" :handle-add="handleAdd" />

    <Todos :todos="todos" :handle-remove="handleRemove" />
  </div>
</template>

<script>
import Form from './components/Form'
import Todos from './components/Todos'

export default {
  name: "App",
  components: {
    Form,
    Todos
  },
  data() {
    return {
      value: "",
      todos: ["sample"]
    };
  },
  methods: {
    handleAdd() {
      this.todos.push(this.value);
      this.value = "";
    },
    handleRemove(currTodo) {
      const newTodos = this.todos.filter(todo => currTodo !== todo);
      this.todos = newTodos;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 45%;
  margin: 0 auto;
  text-align: left;
}
</style>
