<template>
  <div>
    <input type="text" v-model="formValue"/>
    <button v-on:click="handleAdd">Add</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    value: {
      type: String
    },
    handleAdd: {
      type: Function
    }
  },
  computed: {
    formValue: {
      get() {
        return this.value;
      },
      set() {
        return this.value;
      }
    }
  }
};
</script>
