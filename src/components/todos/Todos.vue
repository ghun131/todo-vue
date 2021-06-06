<template>
  <div>
    <Form v-on:add-todo="handleAdd" :todos="todos" />

    <List :todos="todos" :handle-remove="handleRemove" />
  </div>
</template>

<script>
import List from "./List";
import Form from "./Form";

export default {
  name: "Todos",
  components: {
    List,
    Form
  },
  data() {
    return {
      todos: ["sample"]
    };
  },
  methods: {
    handleAdd(todo) {
      this.todos.push(todo);
    },
    handleRemove(currTodo) {
      const newTodos = this.todos.filter(todo => currTodo !== todo);
      this.todos = newTodos;
    }
  }
};
</script>
