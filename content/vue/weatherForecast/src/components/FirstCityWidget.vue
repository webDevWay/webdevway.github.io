<template>
  <div class="wrapper">
    <label class="w-choice-input">Сменить город:
      <input class="w-user_input" type="text" v-model="userCity" placeholder="Введите город">
      <button class="w-user_button" @click="updateUserCity">+</button>
    </label>
    <div class="w-container">
      <div class="w-container__header">
        <div class="header__city">{{ city }}</div>
        <div class="header__temp">{{temp}} &deg;C</div>
      </div>
      <div class="w-container__main">
        <div class="main-row">
          <div class="main-col col__left">Макс. температура:</div>
          <div class="main-col col__right">{{maxTemp}} &deg;C</div>
        </div>
        <div class="main-row">
          <div class="main-col col__left">Мин. температура:</div>
          <div class="main-col col__right">{{minTemp}} &deg;C</div>
        </div>
        <div class="main-row">
          <div class="main-col col__left">Скорость ветра:</div>
          <div class="main-col col__right">{{windSpeed}} м/с, {{windRoute}}</div>
        </div>
        <div class="main-row">
          <div class="main-col col__left">Облачность:</div>
          <div class="main-col col__right"><img class="list__item-img" v-bind:src='cloudy' alt="clouds"></div>
        </div>
        <div class="main-row">
          <div class="main-col col__left">Влажность:</div>
          <div class="main-col col__right">{{ humidity }} %</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data: function () {
      return {
        userCity: '',
        cityLink: '',

      }
    },
    created() {
      this.getLocation();
    },

    methods: {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoords);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      },
      getCoords(position) {
        let coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        this.$store.state.cityUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&APPID=768961b64b575e7d2ba21d75a986f6d6&units=metric';
        this.$store.dispatch('getData');

      },
      updateUserCity() {
        this.$store.commit('getCity', this.userCity);
        this.$store.dispatch('getData');
        this.userCity = '';
      }
    },
    computed: {
      city() {
        return this.$store.state.city;
      },
      temp() {
        return this.$store.state.temp;
      },
      maxTemp() {
        return this.$store.state.maxTemp;
      },
      minTemp() {
        return this.$store.state.minTemp;
      },
      windSpeed() {
        return this.$store.state.windSpeed;
      },
      windRoute() {
        return this.$store.state.windRoute;
      },
      cloudy() {
        return this.$store.state.cloudy;
      },
      humidity() {
        return this.$store.state.humidity;
      },
    }

  };
</script>


<style>
  .wrapper {
    width: 100vw;
    margin: 0 auto;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
  }
  
  .w-choice-input {
    width: 300px;
  }
  
  .w-user_input {
    background: transparent;
    border: none;
    border-bottom: 1px solid grey;
    margin: 0 5px;
    font-style: italic;
  }
  
  .w-user_button {
    width: 40px;
    padding: 5px 0;
    border: none;
    background: transparent;
    transition: 1s;
    color: grey;
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .w-user_button:active {
    transform: scale(0.5);
    transition: 1ms;
  }
  
  .w-container {
    margin: 50px auto;
    border: 1px solid #EEEEEE;
    overflow: hidden;
    min-width: 300px;
    width: 300px;
  }
  
  .w-container__header {
    height: 75px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    background: #EEEEEE;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .header__city {
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  
  .main-row {
    display: flex;
    height: 40px;
    border-bottom: 1px dotted #EEEEEE;
    
  }
  
  .main-row:hover {
    background: #EEEEEE;
    cursor: default;
  }
  
  .main-row:last-child {
    border-bottom: none;
  }
  
  .main-col {
    padding: 0;
    margin: 7px 0 7px 0;
    align-self: center;
  }
  
  .col__left {
    width: 65%;
    border-right: 1px solid #EEEEEE;
  }
  
  .col__right {
    padding-left: 5%;
  }
  
  .list__item-img {
    /*display: inline;*/
    width: 40px;
    padding-left: -5%;
  }

</style>