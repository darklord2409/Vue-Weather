<template>
  <header class="header">
    <nav class="header__nav">
      <a href="" class="logo">
        <img src="@/assets/images/logo.svg" alt="" />
        <span>Azizka weather</span>
      </a>
      <div class="header__search">
        <img src="@/assets/images/water.svg" alt="" />
        <input
          type="text"
          placeholder="Выбрать город"
          class="header__search-input"
          v-model="query"
          @keydown.enter="getWeather(query)"
        />
        <button class="header__search-poisk" 
        @click="getWeather(query)">Поиск</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(['getWeather'])
    // setWeather() {
    //   this.$store.dispatch('getWeather', this.query)
    // },
  },
};
</script>

<style>
</style>