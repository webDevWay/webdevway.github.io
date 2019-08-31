<template lang="pug">
  div.wrapper
    h6.styleBtn.aboutBtn(@click="showAbout") {{ aboutBtnText }}
    div.aboutGame(v-show="about")
      p Кто-то перемешал буквы в наших словах!!!
      p Необходимо угадать правильное слово и собрать его в полях наверху, выбирая правильные буквы.
      p (или слова, да... их может быть несколько! Если в перепутанном слове есть пробелы, вставляй их тоже в слово наверху)
      p Если ошибся с буквой - не беда - всегда можно убрать последнюю обратно, нажав на неё в отгаданном слове.
      p Правильно угаданное слово +1 балл.
      p Пропущенное слово -1 балл.
      p Успехов в игре!)
    
    h5 Набранные баллы: {{score}}
    h5 Время: {{ timer.minutes }} : {{ timer.seconds }}
    
    //Игра
    p.getDataBtn.styleBtn(@click="skipWord") Пропустить слово
    div.randomLetterWrapper
      div.randomLetter(v-if="hiddenWord.length > 1"
      v-for="letter in hiddenWord"
      v-model="hiddenWord"
      @click="correctLetter") {{ letter }}
      div.delBtn.styleBtn(@click="createHiddenWord" title="Сбросить") &#10008;
    img.descriptionImg(:src="img_src")
    div.randomLetterWrapper
      div.randomLetter(@click="updateHiddenWord" v-for="letter in shuffledWord") {{ letter.toUpperCase() }}
    
    //Modal Table
    div.scoreTable.modalWindowWrapper(v-show="scoreTable")
      div.modalWindowContent.modalTable
        h5 Уже уходите? #[br] Посмотрите вашу статистику
          div.tableWrapper(v-show="tableSuccessWord.length > 0") Отгаданные слова:
            b-table(hover :items="tableSuccessWord" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc")
          div.tableWrapper(v-show="tableSkipWord.length > 0") Пропущенные слова:
            b-table(hover :items="tableSkipWord" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc")
    
    //Modal Window
    div.modalWindowWrapper(v-show="modal")
      div.modalWindowContent.modalWin
        h3.modalWindow_title(      ) Поздравляем, вы выиграли!!!
        h2.modalWindow_title(      ) Хотите повторить?
        span.modalWindow_onemore(@click="continueGame" ) Конечно!
        span.modalWindow_exit(@click="endGame") Я уже устал
          span.modalWindow_exit_smile  :(

</template>

<script>
  import * as axios from "axios";
  
  export default {
    name: 'Start',
    props: {},
    data() {
      return {
        img_src: require("../assets/noimage.png"),
        aboutBtnText: 'Об игре',
        responseData: null,
        shuffledWord: '',
        hiddenWord: [],
        tableSuccessWord: [],
        successWordCounter: 1,
        tableSkipWord: [],
        fields: [
          {key: '№', sortable: true},
          {key: 'Слово', sortable: true},
          {key: 'Время', sortable: true},
        ],
        skipWordsCounter: 1,
        tableTime: '',
        score: 0,
        timer: {
          start: true,
          seconds: '00',
          minutes: '00',
        },
        clickCounter: 0,
        modal: false,
        about: false,
        scoreTable: false,
        sortBy: 'age',
        sortDesc: false,
      }
    },
    created() {
      this.getData();
    },
    mounted() {
      setInterval(this.goTimer, 1000);
    },
    computed: {},
    methods: {
      //Получение данных с API
      getData() {
        this.responseData = null;
        this.img_src = require("../assets/noimage.png");
        let randomNumber = Math.floor(Math.random() * (1368 - 1) + 2);
        let url = "https://apidir.pfdo.ru/v1/directory-program-activities/" + randomNumber;
        axios
          .get(url)
          .then(response => {
            if (response.data.result_message === 'Запись не найдена' || !response.data.data.img_src) {
              this.getData();
            } else {
              this.responseData = response.data.data;
              if (response.data.data.img_src) {
                this.img_src = response.data.data.img_src;
              }
            }
            return this.responseData;
          })
          .then((ourDataReady) => {
            if (ourDataReady) {
              this.shuffle(ourDataReady.name);
            }
            return this.shuffledWord;
          })
          .then((ifShuffled) => {
            if (ifShuffled) {
              this.createHiddenWord();
            }
            return this.hiddenWord;
          })
          .then((ifHidden) => {
            if (ifHidden) {
              this.timer.seconds = '00';
              this.timer.minutes = '00';
            }
          })
          .catch(function (error) {
            // console.log(error);
          })
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
      
      //Таймер
      goTimer() {
        this.timer.seconds++;
        this.timer.seconds <= 9 ? this.timer.seconds = '0' + this.timer.seconds : this.timer.seconds;
        if (this.timer.seconds === 59) {
          if (this.timer.minutes <= 9) {
            this.timer.minutes = '0' + this.timer.minutes;
          }
          this.timer.minutes++;
          this.timer.seconds = 0;
        }
        if (this.timer.minutes <= 9) {
          this.timer.minutes = '00';
        }
        
      },
      
      //Возврат '?' вместо 'неправильной' буквы
      correctLetter() {
        this.$set(this.hiddenWord, this.clickCounter - 1, '?');
        this.clickCounter--;
      },
      
      //Полный сброс отгаданных букв
      createHiddenWord() {
        this.clickCounter = 0;
        let tempArr = [];
        for (let i = 0; i < this.shuffledWord.length; i++) {
          tempArr[i] = '?';
        }
        this.hiddenWord = tempArr;
      },
      
      //Покажет описание "Об игре"
      showAbout() {
        this.aboutBtnText = this.about ? 'Об игре' : 'Свернуть';
        return this.about = !this.about;
      },
      
      //Пропуск слова (пришлось сделать, т.к. слова порой очень непонятные, люди жаловались))
      skipWord() {
        this.shuffledWord = '';
        this.score--;
        this.tableTime = this.timer.minutes + ':' + this.timer.seconds;
        this.tableSkipWord.push({'№': this.skipWordsCounter, 'Слово': this.responseData.name, 'Время': this.tableTime});
        this.getData();
        this.skipWordsCounter++;
      },
      
      //Функция для подстановки букв вместо знака вопроса
      updateHiddenWord(e) {
        if (this.clickCounter < this.shuffledWord.length) {
          this.$set(this.hiddenWord, this.clickCounter, e.target.textContent);
          this.clickCounter++;
        }
        if (this.clickCounter === this.shuffledWord.length) {
          if (this.hiddenWord.join('') === this.responseData.name.toUpperCase()) {
            this.score++;
            this.tableTime = this.timer.minutes + ':' + this.timer.seconds;
            this.tableSuccessWord.push({
              '№': this.successWordCounter,
              'Слово': this.responseData.name,
              'Время': this.tableTime
            });
            this.modal = true;
          }
        }
      },
      
      //Новая игра, после нажатия кнопки "Конечно"
      continueGame() {
        this.modal = false;
        this.getData();
        this.successWordCounter++;
      },
      
      //Таблица рекордов
      endGame() {
        this.modal = false;
        return this.scoreTable = !this.scoreTable;
      },
    }
  }
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0
    box-sizing: border-box
    
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
    
    .aboutBtn
      width: 200px
      margin: 10px 0 25px
      padding: .5em 2em
      cursor: pointer
    
    .aboutGame
      border: 1px dashed firebrick
      padding: 10px
      position: absolute
      background: linear-gradient(#f59500, #f5ae00) #f59500
      top: 60px
      z-index: 20
      margin: auto
      @media screen and (max-device-width: 780px)
        left: 0
        right: 0
    
    .getDataBtn
      cursor: pointer
      border: 1px inset grey
      padding: .5em 2em
      border-radius: 15px
      transition: .5s
      margin-top: 20px
      
      &:active
        transform: scale(0.8)
        transition: .7s
    
    .descriptionImg
      justify-self: end
      border-radius: 10px
      @media screen and (max-device-width: 1100px)
        width: 50vw
      @media screen and (max-device-width: 700px)
        width: 70vw
    
    .randomLetterWrapper
      display: flex
      flex-wrap: wrap
      justify-content: center
      align-items: center
      margin: 20px 0
      
      color: #785ACD
      font-weight: 700
    
    .randomLetter
      width: 1.5em
      height: 1.5em
      display: flex
      justify-content: center
      align-items: center
      align-self: center
      margin: 0 0 10px 10px
      padding: 15px
      border: 1px solid silver
      border-radius: 10px
      cursor: pointer
      background: #eee
      
      &:hover
        background: linear-gradient(#F3AE0F, #E38916) #E38916
        color: white
    
    .delBtn
      background: red
      font-size: 1em
      padding: 5px 20px
      margin: 0 0 10px 10px
    
    .styleBtn
      color: #eee
      text-decoration: none
      outline: none
      border-width: 2px 0
      border-style: solid none
      border-color: #FDBE33 #000 #D77206
      border-radius: 6px
      background: linear-gradient(#F3AE0F, #E38916) #E38916
      transition: 0.2s
      
      &:hover
        background: linear-gradient(#f5ae00, #f59500) #f5ae00
      
      &:active
        background: linear-gradient(#f59500, #f5ae00) #f59500
    
    .modalWindowWrapper
      width: 100%
      height: 90%
      position: absolute
      background: rgba(0, 0, 0, 0.5)
      top: 10%
      display: flex
      flex-direction: column
      justify-content: center
      align-content: center
    
    .modalWindowContent
      flex-direction: column
      justify-content: center
      align-self: center
      background: #F1F3F4
      margin-top: 20px
      padding: 50px
      overflow-y: auto
    
    .modalWin
      display: flex
      margin-top: 0
    
    .modalTable
      height: auto
    
    .modalWindow_onemore, .modalWindow_exit
      margin: 0 auto
      text-align: center
      justify-content: center
      border-radius: 1000px
      padding: .8em 2em
      color: #fff0e3
      font-size: 1.3em
      cursor: pointer
    
    .modalWindow_onemore
      margin-top: 20px
      margin-bottom: 20px
      background: green
    
    .modalWindow_exit
      background: rebeccapurple
    
    .modalWindow_exit_smile
      color: red
    
    .tableWrapper
      margin-top: 20px
      @media screen and (max-device-width: 770px)
        width: 90%

</style>
