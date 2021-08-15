<template>
  <div class="event">
    <div v-if="event">
      <h1 class="event-header">EVENT</h1>
      <h3 class="event-name">{{ event.name }}</h3>
      <p class="event-desc">{{ event.description }}</p>
      <p v-if="event._embedded && event._embedded.venues">
        Location: {{ event._embedded.venues[0].name }},
        {{ event._embedded.venues[0].city.name }}
      </p>
      <a :href="event.url" target="_blank">Go to external Event Detail</a>
      <button class="event-btn" @click="goHome">Ana Sayfaya Dön</button>
      <div class="event-images">
        <a
          :href="image.url"
          v-for="(image, index) in event.images"
          :key="index"
          target="_blank"
        >
          <img :src="image.url" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
import Events from "../services/service.js";

export default {
  data() {
    return {
      event: {},
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    getEventDetail() {
      let eventId = store.getters.getSelectedEvent;

      Events.getEventDetail(eventId).then((res) => {
        this.event = res.data;
      });
    },
  },
  created() {
    this.getEventDetail();
  },
};
</script>

<style lang="scss">
.event {
  &-header {
    font-size: 40px;
    font-weight: bold;
  }

  &-name {
    font-size: 24px;
    margin: 20px 0;
  }

  &-btn {
    margin-top: 20px;
    margin-left: 20px;
  }

  &-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0 10px;

    a {
      padding: 10px;
      margin-right: 10px;
      margin-bottom: 20px;
      border: 1px solid $darkBlue;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        border-color: orange;
      }

      img {
        width: 250px;
      }
    }
  }
}
</style>