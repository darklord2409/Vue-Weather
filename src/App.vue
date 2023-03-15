<template>
  <div class="container" v-if="getFullWeather">
    <Header />
    <Main />
  </div>
  <div class="loading" v-else>
    <div class="loading-element">
      
    </div>
  </div>
  
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Header,
    Main,
  },
  computed: {
    ...mapGetters(["getFullWeather"]),
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  created() {
    setTimeout(() => {
      this.getWeather("Tashkent");
    }, 1000);
  },
};
</script>

<style>
</style>