<template>
  <div class="main__week">
    <div class="main__week-btns">
      <button class="main__week-btn">На неделю</button>
      <button class="main__week-btn" @click="getWeather('Tashkent')">Отменить</button>
    </div>
    <div class="main__week-days">
      <PerDay 
      v-for="(day, index) in getDailyWeather"
      :key="index"
      :day="day"
      />
    </div>
  </div>
</template>

<script>
import PerDay from "@/components/PerDay.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    PerDay,
  },
  computed:{
    ...mapGetters(['getDailyWeather'])
  },
  methods:{
    ...mapActions(['getWeather'])
  }
};
</script>

<style>
</style>