<template>
  <div>
    <input type="text" v-model="text" />
    <button v-on:click="handleSubmitBtnClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    eventType: {
      type: String
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handleSubmitBtnClick() {
      this.$emit(this.eventType, this.text);
      this.text = "";
    }
  }
};
</script>
