<template>
  <div id="app">
    <div
      :style="{
        display: 'flex',
        width: '170px',
        margin: '0 auto',
        justifyContent: 'space-between',
        cursor: 'pointer'
      }"
    >
      <div
        v-for="tab in tabs"
        :style="currentRoute === tab ? { color: 'blue' } : ''"
        v-on:click="handleChangeRoute(tab)"
      >
        {{ tab }}
      </div>
    </div>
    <br>
    <br>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["todos", "counter", "echo"]
    };
  },
  methods: {
    handleChangeRoute(route) {
      this.$router.push({ path: route });
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name;
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
</style>
