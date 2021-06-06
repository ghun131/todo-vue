<template>
  <div id="app">
    <div
      :style="{
        display: 'flex',
        width: '130px',
        margin: '0 auto',
        justifyContent: 'space-between',
        cursor: 'pointer'
      }"
    >
      <div
        v-for="tab in tabs"
        :style="currentTab === tab ? { color: 'blue' } : ''"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </div>
    </div>

    <br />
    <br />
    <br />

    <component :is="currentTab"></component>
  </div>
</template>

<script>
import Todos from "./components/todos/Todos";
import Counter from "./components/counter/Counter";

export default {
  name: "App",
  components: {
    Todos,
    Counter
  },
  data() {
    return {
      currentTab: "Todos",
      tabs: ["Todos", "Counter"]
    };
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
