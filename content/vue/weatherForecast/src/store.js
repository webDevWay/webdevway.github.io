import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: '...',
        humidity: '...',
        temp: '...',
        maxTemp: '...',
        minTemp: '...',
        windSpeed: '...',
        windRoute: '...',
        cloudy: '...',
        cityUrl: '',

    },
    mutations: {
        getCity (state, city) {
            this.state.cityUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=768961b64b575e7d2ba21d75a986f6d6&units=metric&lang=ru';
        }
    },
    actions: {
        getData: function () {
            console.log(this.state.cityUrl);
            fetch(this.state.cityUrl, {
                method: 'get',
                mode: 'cors',
            })
                .then(response => response.json())
                .then(data => {
                    //City
                    this.state.city = data.name;
                    //Temperature
                    this.state.temp = Math.round(data.main.temp);
                    //Wind Speed
                    this.state.windSpeed = Math.round(data.wind.speed);
                    //Wind Route
                    switch (true) {
                        case data.wind.deg <= 22.5: this.state.windRoute = 'С'; break;
                        case data.wind.deg <= 67.5 || data.wind.deg > 337.5: this.state.windRoute = 'СВ'; break;
                        case data.wind.deg <= 112.5: this.state.windRoute = 'В'; break;
                        case data.wind.deg <= 157.5: this.state.windRoute = 'ЮВ'; break;
                        case data.wind.deg <= 202.5: this.state.windRoute = 'Ю'; break;
                        case data.wind.deg <= 247.5: this.state.windRoute = 'ЮЗ'; break;
                        case data.wind.deg <= 292.5: this.state.windRoute = 'З'; break;
                        case data.wind.deg <= 337.5: this.state.windRoute = 'CЗ'; break;
                    }
                    //Max.Temperature
                    this.state.maxTemp = Math.round(data.main.temp_max);
                    //Min.Temperature
                    this.state.minTemp = Math.round(data.main.temp_min);
                    //Cloud
                    this.state.cloudy = 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
                    //Humidity
                    this.state.humidity = data.main.humidity;
                })
        }
    }
});
