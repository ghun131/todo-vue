<template>
  <div>
    <Form event-type="shout" v-on:shout="handleClick">
      Shout
    </Form>

    <br /><br /><br />
    <div :style="{ fontSize: size + 'px', fontWeight: 'bold' }">
      {{ value }}
    </div>
  </div>
</template>

<script>
import Form from "../Form";

export default {
  name: "Echo",
  components: {
    Form
  },
  data() {
    return {
      value: "",
      isShout: false,
      savedInterval: null
    };
  },
  computed: {
    size() {
      return this.$store.state.size;
    }
  },
  methods: {
    handleClick(value) {
      this.value = value;
      const interval = setInterval(() => {
        this.$store.dispatch("shrinkAction");
      }, 700);
      this.savedInterval = interval;
    }
  },
  watch: {
    size: function(oldSize, newSize) {
      if (oldSize === 0) {
        this.value = "";
        this.$store.commit("restore");
        clearInterval(this.savedInterval);
      }
    }
  }
};
</script>
