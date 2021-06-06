<template>
  <div>
    <input type="text" v-model="value" />
    <button v-on:click="handleFormBtnClick">Add</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    handleAdd: {
      type: Function
    },
    todos: {
      type: Array
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handleFormBtnClick() {
      this.$emit("add-todo", this.value);
      this.value = "";
    }
  }
};
</script>
