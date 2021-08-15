<template>
  <div class="table">
    <div class="table-row header">
      <div
        class="table-row-cell"
        :key="index"
        v-for="(header, index) in headerData"
      >
        {{ header }}
      </div>
    </div>

    <div class="table-row" :key="item.id" v-for="item in data">
      <div class="table-row-cell">
        <p>{{ item.name }}</p>
      </div>
      <div class="table-row-cell">
        <p>{{ item.locale }}</p>
      </div>
      <div class="table-row-cell">
        <p>{{ item.status }}</p>
      </div>
      <div class="table-row-cell">
        <button @click="openDetail(item.id)">{{ item.detail }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  data() {
    return {};
  },
  props: {
    headerData: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
  methods: {
    openDetail(id) {
      store.dispatch("setSelectedEvent", id);
      this.$router.push({ name: "event", params: { id: id } });
    },
  },
};
</script>

<style lang="scss">
.table {
  border: 1px solid $black;
  border-radius: 4px;

  &-row {
    display: flex;
    border-bottom: 1px solid $black;

    &.header {
      font-weight: bold;
    }

    &-cell {
      flex: 1;
      padding: 5px 10px;
      min-width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:not(:last-child) {
        border-right: 1px solid $black;
      }
    }
  }

  &-row:last-child {
    border-bottom: none;
  }
}
</style>