<template>
  <div class="home">
    <BrandInput
      placeholder="Write the event you are looking for..."
      :value="inputVal"
      @onChange="onInputChange"
    />
    <button class="home-search" @click="search">Ara</button>
    <BrandTable v-if="events.length" :headerData="headerData" :data="events" />
    <div v-else>Aradığınız Kriterlere Uygun Sonuç Bulunamadı</div>
  </div>
</template>

<script>
import store from "../store/index";
import Events from "../services/service.js";
import BrandInput from "../components/BrandInput.vue";
import BrandTable from "../components/BrandTable.vue";

export default {
  name: "App",
  components: { BrandInput, BrandTable },
  data() {
    return {
      inputVal: "",
      events: [],
      headerData: ["Event Name", "Locale", "Status", "Detail"],
    };
  },
  methods: {
    search() {
      store.dispatch("setSearchedVal", this.inputVal);
      this.getEvents(this.inputVal);
    },
    onInputChange(val) {
      this.inputVal = val;
    },
    getEvents(keyWord) {
      this.events = [];

      Events.getEvents("keyword", keyWord).then((res) => {
        if (!res || !res.data) {
          return;
        }

        if (res.data._embedded && res.data._embedded.events) {
          let events = res.data._embedded.events;

          events.forEach((elem) => {
            this.events.push({
              id: elem.id,
              name: elem.name,
              locale: elem.locale,
              status: "on Sale",
              detail: "Details",
            });
          });
        }
      });
    },
  },
  created() {
    this.inputVal = store.getters.getSearchedVal
      ? store.getters.getSearchedVal
      : null;
    if (this.inputVal) {
      this.search();
    }
  },
};
</script>

<style lang="scss">
.home {
  padding: 0 20px;

  &-search {
    margin: 20px 0;
  }
}
</style>