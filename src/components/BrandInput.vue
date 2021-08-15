<template>
  <div class="input">
    <h4 v-if="title" class="input-title">{{ title }}</h4>
    <input
      class="input-main"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
    },
  },
  watch: {
    value(newVal) {
      this.$emit("onChange", newVal);
    },
  },
};
</script>

<style lang="scss">
.input {
  padding: 10px;

  &-title {
    margin-top: 0;
    margin-bottom: 10px;
  }

  &-main {
    padding: 5px 10px;
    min-width: 250px;
    border: 1px solid $darkBlue;
    border-radius: 4px;
  }
}
</style>