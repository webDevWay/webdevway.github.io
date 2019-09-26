<template lang="pug">
  div.wrapper
    
    About
    
    h5 Набранные баллы: {{score}}
    h5 Время: {{ timer.minutes}} : {{ timer.seconds }}
    
    //Игра
    p.getDataBtn.styleBtn(@click="skipWord") Пропустить слово
    div.rightWordWrapper
      div.delBtn.styleBtn(@click="deleteInputWord" title="Удалить слово. Очистить поле.") &#10008;
      input.rightWord(placeholder="Отгадайте слово" v-text="newLetters" v-model="newLetters" v-on:input="modalQuestion")
      div.delBtn.styleBtn(@click="deleteLastLetter" title="Удалить символ") &#8656;
    
    Preloader(v-show="!img_src")
    
    img.descriptionImg(:src="img_src")
    
    div.randomLetterWrapper
      div.randomLetter(@click="inputFromShuffledWord" v-for="letter in shuffledWord") {{ letter.toUpperCase() }}
    <ModalTable />
    
    <ModalWindow @reRunGame="letStartTheGame"/>
</template>

<script>
  import * as axios from "axios";
  import About from "@/components/appAbout.vue"
  import ModalTable from "@/components/appModalTable.vue"
  import ModalWindow from "@/components/appModalWindow.vue"
  import Preloader from "@/components/appPreloader.vue"
  
  export default {
    name: 'Start',
    components: {
      About,
      Preloader,
      ModalWindow,
      ModalTable,
    },
    props: {},
    data() {
      return {
        newLetters: "",
        img_src: '',
        responseData: '',
        shuffledWord: '',
        hiddenWord: [],
        successWordCounter: 1,
        skipWordsCounter: 1,
        tableTime: '',
        score: 0,
        timer: {
          seconds: '00',
          minutes: '00',
        },
        startTimer: this.getStartTimer,
      }
    },
    created() {
      this.letStartTheGame();
    },
    methods: {
      //Проверка input для сравнения с правильным словом
      modalQuestion() {
        console.log('here');
        if (this.responseData.name) {
          if (this.newLetters.length === this.shuffledWord.length) {
            if (this.newLetters.toUpperCase() === this.responseData.name.toUpperCase()) {
              this.score++;
              this.tableTime = this.timer.minutes + ':' + this.timer.seconds;
          
              this.$store.commit('changeWordTable', {
                table: 'tableSuccessWord',
                pushing: {
                  '№': this.successWordCounter,
                  'Слово': this.responseData.name,
                  'Время': this.tableTime
                },
              });
              this.successWordCounter++;
              this.newLetters = "";
          
              this.$store.commit('changeModalState', 'modalWindow');
            }
          }
        }
        return this.newLetters;
      },
      
      //запуск таймера с интервалом
      getStartTimer() {
        return this.startTimer = setInterval(() => {
          this.setTimer(this.timer)
        }, 1000);
      },
      
      //Установка значений таймера в data
      setTimer(timer) {
        let {seconds, minutes} = timer;
        seconds++;
        seconds <= 9 ? seconds = '0' + seconds : seconds;
        if (seconds === 60) {
          minutes++;
          if (minutes <= 9) {
            minutes = '0' + minutes;
          }
          seconds = '00';
        }
        timer = {seconds, minutes};
        this.timer = timer;
      },
  
      //Получение данных с API
      getData() {
        let randomNumber = Math.floor(Math.random() * (1368 - 1) + 2);
        let url = "https://apidir.pfdo.ru/v1/directory-program-activities/" + randomNumber;
        return axios
          .get(url)
          .then(response => {
            return response
          })
          .catch(error => console.log(error));
  
      },
  
      //Добавить полученные данные в компонент
      setData(data) {
        if (data.data.result_message) {
          if (data.data.result_message === 'Запись не найдена' || data.data.data.img_src == null) {
            this.letStartTheGame();
          } else if (data.data.result_message === 'Полный успех') {
            this.responseData = data.data.data;
            this.img_src = this.responseData.img_src;
            return this.responseData.name;
          }
          return 'Ждём';
        }
      },
  
      //Асинхронный запуск игры
      letStartTheGame() {
        this.getData(this.url)
          .catch(error => console.log(error))
          .then(this.setData)
          .then(this.shuffle)
          .then(() => {
            this.timer = {
              seconds: '00',
              minutes: '00',
            };
            clearInterval(this.startTimer);
          })
          .then(this.getStartTimer)
          .catch(error => console.log(error));
      },
  
      //Перемешивание символов в строке
      shuffle(str) {
        let arr = str.split('');
        let j, temp;
        for (let i = arr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
        return this.shuffledWord = arr.join('');
      },
  
      //Удаление последней буквы
      deleteLastLetter() {
        this.newLetters = this.newLetters.slice(0, this.newLetters.length - 1);
      },
  
      //Полный сброс отгаданных букв
      deleteInputWord() {
        this.newLetters = "";
      },
  
      //Пропуск слова.
      //При пропуске слова - очки убавляются, пропущенное слово добавляется в массив, обнуляется таймер игра начинается заного
      skipWord() {
        this.score--;
        this.newLetters = '';
  
        this.tableTime = this.timer.minutes + ':' + this.timer.seconds;
        this.$store.commit('changeWordTable', {
          table: 'tableSkipWord',
          pushing: {
            '№': this.skipWordsCounter,
            'Слово': this.responseData.name,
            'Время': this.tableTime
          },
        });
        this.skipWordsCounter++;
        this.img_src = '';
        this.letStartTheGame();
      },
  
      //Функция для подстановки букв
      inputFromShuffledWord(e) {
        this.newLetters += e.target.textContent;
        this.modalQuestion();
      },
    },
  }
</script>

<style lang="sass">
  body
    height: 100%
    background-image: url("../assets/bkg.jpg")
    background-size: cover
    background-repeat: no-repeat
    
    .wrapper
      width: 90vw
      height: 100%
      margin: 0 auto
      display: flex
      flex-wrap: wrap
      flex-direction: column
      justify-content: center
      align-items: center
      @media screen and (max-device-width: 500px)
        width: 95vw
    
    .getDataBtn
      cursor: pointer
      border: 1px inset grey
      padding: .5em 2em
      transition: .5s
      
      &:active
        transform: scale(0.8)
        transition: .7s
    
    .descriptionImg
      justify-self: end
      width: 30vw
      @media screen and (max-device-width: 1100px)
        width: 50vw
      @media screen and (max-device-width: 700px)
        width: 70vw
      @media screen and (max-device-width: 535px)
        width: 90vw
    
    .rightWordWrapper
      width: 40%
      min-height: 40px
      display: flex
      margin-bottom: 10px
      text-align: center
      @media screen and (max-device-width: 1100px)
        width: 50vw
      @media screen and (max-device-width: 700px)
        width: 70vw
      @media screen and (max-device-width: 535px)
        width: 90vw
    
    .rightWord
      width: 79%
      height: 40px
      text-align: center
      cursor: pointer
      border-right: none
      border-top: none
      border-left: none
      border-bottom: 2px solid rebeccapurple
      background: rgba(0, 0, 0, 0.05)
      font-size: 1.5rem
      align-self: flex-end
      color: rebeccapurple
      @media screen and (max-device-width: 500px)
        width: 70vw
    
    .randomLetterWrapper
      display: flex
      flex-wrap: wrap
      justify-content: center
      align-items: center
      margin: 20px 0
      color: #eeeeee
      font-weight: 700
      @media screen and (max-device-width: 535px)
        width: 90vw
    
    .randomLetter
      width: 1.6em
      height: 1.5em
      display: flex
      justify-content: center
      align-items: center
      margin: 0 0 10px 10px
      padding: 15px
      border: 2px outset silver
      cursor: pointer
      background: rgba(#785ACD, 0.9)
      
      &:hover
        background: linear-gradient(#F3AE0F, #E38916) #E38916
        color: white
      
      &:active
        border: 2px inset silver
        color: #785ACD
    
    .delBtn
      width: 10%
      height: 100%
      font-size: 1.5em
      margin: 0 1px
      border: 2px inset silver
      
      &:active
        color: #785ACD
    
    input:focus
      line-height: 100px
      transition: line-height 0.5s ease
    
    .styleBtn
      color: #eee
      text-decoration: none
      outline: none
      border-width: 2px
      border-style: solid none
      border-color: #FDBE33 #000 #D77206
      background: linear-gradient(#F3AE0F, #E38916) #E38916
      transition: 0.2s
      cursor: pointer
      
      &:hover
        background: linear-gradient(#f5ae00, #f59500) #f5ae00
      
      &:active
        background: linear-gradient(#f59500, #f5ae00) #f59500
</style>
