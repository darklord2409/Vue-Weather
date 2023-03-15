<template>
  <div class="main__content">
    <div class="main__content-left">
      <p class="main__content-degree">{{ Math.round(getFullWeather.current.temp) }}°</p>
      <p class="main__content-today">Сегодня</p>
      <p class="main__content-time">Время: {{timeSet}}</p>
      <p class="main__content-city">Город: {{getFullWeather.name}}</p>
      <div class="main__content-img">
        <img src="@/assets/images/sun.svg" alt="" v-if="description == 'ясно'">
        <img src="@/assets/images/cloud.svg" alt="" v-else-if="description == 'пасмурно'">
        <img src="@/assets/images/minirain.svg" alt="" v-else-if="description == 'небольшой дождь'">
        <img src="@/assets/images/rainsun.svg" alt="" v-else-if="description == 'небольшая облачность'">
        <img src="@/assets/images/proyasneniya.png" alt="" v-else-if="description == 'переменная облачность'">
        <img src="@/assets/images/snow.png" alt="" v-else-if="description == 'снег'">
        <img src="@/assets/images/snow-light.png" alt="" v-else-if="description == 'небольшой снег'">
        <img src="@/assets/images/snow-rain.png" alt="" v-else-if="description == 'снег с дождём'">
        <img src="@/assets/images/proyasneniya.png" alt="" v-else-if="description == 'облачно с прояснениями'" >
        <img src="@/assets/images/newrain.svg" alt="" v-else-if="description == 'дождь'">
        <img src="@/assets/images/newrain.svg" alt="" v-else-if="description == 'сильный дождь'">
      </div>
    </div>
    <div class="main__content-right">
      <img src="@/assets/images/headerBg.svg" alt="" class="main__content-bg" />
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/temp.svg" alt="" />
        </div>
        <span>Температура</span>
        <span>
          {{ Math.round(getFullWeather.current.temp) }}° - ощущается как
          {{ Math.round(getFullWeather.current.feels_like) }}°</span>
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/pressure.svg" alt="" />
        </div>
        <span>Давление </span>
        <span>{{getFullWeather.current.pressure}} мм   ртутного столба</span>
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/rain.svg" alt="" />
        </div>
        <span>Осадки</span>
        <span>{{ getFullWeather.current.weather[0].description }}</span>
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/wind.svg" alt="" />
        </div>
        <span>Ветер</span>
        <span>{{getFullWeather.current.wind_speed}}м/с юго-запад - легкий ветер</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone';
import { mapActions, mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters(['getFullWeather']),
    description(){
      return this.getFullWeather.current.weather[0].description
    },
    timeSet(){
      return moment().tz(`${this.getFullWeather.timezone}`).format('H:mm');
    }
  },
};
</script>

<style>
</style>