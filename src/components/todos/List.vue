<template>
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
</template>

<script>
export default {
  name: "List",
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
  width: 20%;
  margin: 0 auto;
  text-align: left;
}
</style>
