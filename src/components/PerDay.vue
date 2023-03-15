<template>
  <div class="main__week-day">
    <h3 class="main__week-title">{{ getWeekDay  }}</h3>
    <p class="main__week-date">{{ getDay }} {{ getMonth }}</p>
    <div class="main__week-img">
       <img src="@/assets/images/sun.svg" alt="" v-if="descr == 'ясно'">
        <img src="@/assets/images/cloud.svg" alt="" v-else-if="descr == 'пасмурно'">
        <img src="@/assets/images/minirain.svg" alt="" v-else-if="descr == 'небольшой дождь'">
        <img src="@/assets/images/proyasneniya.png" alt="" v-else-if="descr == 'небольшая облачность'">
        <img src="@/assets/images/proyasneniya.png" alt="" v-else-if="descr == 'переменная облачность'">
        <img src="@/assets/images/newrain.svg" alt="" v-else-if="descr == 'дождь'">
        <img src="@/assets/images/snow.png" alt="" v-else-if="descr == 'снег'">
        <img src="@/assets/images/snow-rain.png" alt="" v-else-if="descr == 'снег с дождём'">
        <img src="@/assets/images/proyasneniya.png" alt="" v-else-if="descr == 'облачно с прояснениями'">
        <img src="@/assets/images/snow-light.png" alt="" v-else-if="descr == 'небольшой снег'">
        <img src="@/assets/images/newrain.svg" alt="" v-else-if="descr == 'сильный дождь'">
        
    </div>
    <div class="main__week-temp">{{ Math.round(day.temp.day) }}°</div>
    <p class="main__week-descr">{{ descr }}</p>
  </div>
</template>

<script>
import unix from "@/timestamp";
export default {
  props: {
    day: Object,
  },
  computed: {
      descr(){
      return  this.day.weather[0].description
    },
    getWeekDay() {
      return unix(this.day.dt, "weekday");
    },
    getDay() {
      return unix(this.day.dt, "day");
    },
    getMonth() {
      return unix(this.day.dt, "month");
    },
  },
};
</script>

<style>
</style>