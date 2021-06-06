<template>
  <div>
    <h1>{{ counter }}</h1>
    <button v-on:click="increment">INCREMENT</button>
    <button v-on:click="decrement">DECREMENT</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "Counter",
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement',
    })
  }
};
</script>
