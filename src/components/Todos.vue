<template>
  <div>
    <h1>What to do?</h1>
    <ul>
      <li v-for="todo in todos">
        {{ todo }}
        &nbsp;
        <button v-on:click="handleRemove(todo)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: {
    todos: {
      type: Array
    },
    handleRemove: {
      type: Function
    }
  }
};
</script>

<style scoped>
.container {
  width: 45%;
  margin: 0 auto;
  text-align: left;
}
</style>
