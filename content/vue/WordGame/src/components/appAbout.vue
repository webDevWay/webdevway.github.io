<template lang="pug">
  div
    h6.styleBtn.aboutBtn(@click="showAbout") {{ aboutBtnText }}
      div.aboutGame(v-show="about")
        p Кто-то перемешал буквы в наших словах!!!
        p Необходимо угадать правильное слово и собрать его в полях наверху, выбирая правильные буквы.
        p (или слова, да... их может быть несколько! Если в перепутанном слове есть пробелы, вставляй их тоже в слово наверху)
        p Если ошибся с буквой - не беда - всегда можно убрать последнюю обратно, нажав на неё в отгаданном слове.
        p Правильно угаданное слово +1 балл.
        p Пропущенное слово -1 балл.
        p Успехов в игре!)
</template>

<script>
  export default {
    name: "appAbout",
    data() {
      return {
        aboutBtnText: 'Об игре',
        about: false,
      }
    },
    methods: {
      //Покажет описание "Об игре"
      showAbout() {
        this.aboutBtnText = this.about ? 'Об игре' : 'Свернуть';
        return this.about = !this.about;
      },
    }
  }
</script>

<style lang="sass">
  .aboutBtn
    width: 200px
    margin: 10px 0
    padding: .5em 2em
    cursor: pointer
    
    .aboutGame
      max-width: 320px
      border: 1px dashed firebrick
      padding: 10px
      position: absolute
      background: linear-gradient(#f59500, #f5ae00) #f59500
      top: 60px
      left: 0
      right: 0
      z-index: 20
      margin: 0 auto
      @media screen and (max-device-width: 780px)
        left: 0
        right: 0
  
</style>
