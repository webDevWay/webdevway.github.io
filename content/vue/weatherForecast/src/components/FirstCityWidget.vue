<template>
    <div class="wrapper">
        <label class="">Сменить город:
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
        data: function() {
            return {
                userCity: ''

                }
        },
        created() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;
                    this.$store.cityUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=768961b64b575e7d2ba21d75a986f6d6&units=metric&lang=ru`;
                })
            } else {
                }
            // this.userCity = prompt('Введите свой город', '');
            // this.$store.commit('getCity', this.userCity);
            // this.userCity = '';
            this.$store.dispatch('getData');
        },
        methods: {
            updateUserCity: function() {
                this.$store.commit('getCity', this.userCity || 'London');
                this.$store.dispatch('getData');
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
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
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
        border: 1px solid grey;
        border-radius: 20px;
        overflow: hidden;
        min-width: 320px;
        width: 320px;
        background-image: radial-gradient(ellipse farthest-corner at left top,rgb(226, 226, 226) 0%,rgb(254, 254, 254) 30%,rgb(219, 219, 219) 57%,rgb(209, 209, 209) 100%);
    }
.w-container__header {
    height: 75px;
    border-bottom: 3px inset grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    color: yellowgreen;
    text-shadow: black 2px 1px 2px;
    }
    .header__city {
        letter-spacing: 3px;
        text-transform: uppercase;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
    }
    .main-row {
        display: flex;
        height: 40px;
        border-bottom: 1px dotted grey;
        font-family: Arial, sans-serif;
    }
    .main-row:hover {
        background: lightgrey;
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
        border-right: 1px dotted black;
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