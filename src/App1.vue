<template>
  <div id="app">
    <div>
      <input type="text" v-model="value" />
      <button v-on:click="handleAdd">Add</button>
    </div>

    <div class="container">
      <h1>What to do?</h1>
      <ul>
        <li v-for="todo in todos">
          {{ todo }}
          &nbsp;
          <button v-on:click="handleRemove(todo)">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Input from './components/Input'
// import Todos from './components/Todos'

export default {
  name: "App",
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
