<template lang="pug">
  //Modal Window
  div.modalWindowWrapper(v-show="isNeedShow")
    div.modalWindowContent.modalWin
      h3.modalWindow_title(      ) Поздравляем, вы выиграли!!!
      h2.modalWindow_title(      ) Хотите повторить?
      span.modalWindow_onemore(@click="continueGame" ) Конечно!
      span.modalWindow_exit(@click="endGame") Я уже устал
        span.modalWindow_exit_smile  :(
</template>

<script>
  export default {
    name: "appModalWindow",
    data() {
      return {
      }
    },
    computed: {
      isNeedShow() {
        return this.$store.state.modalWindow;
      }
    },
    methods: {
      //Новая игра, после нажатия кнопки "Конечно"
      continueGame() {
        this.$store.commit('changeModalState', 'modalWindow');
        this.$emit('reRunGame');
      },
      //Таблица рекордов
      endGame() {
        this.$store.commit('changeModalState', 'modalWindow');
        this.$store.commit('changeModalState', 'modalScoreTable');
      },
    },
  }
</script>

<style lang="sass">
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
  
    .modalWin
      display: flex
      margin-top: 0
    
    .modalWindow_exit
      background: rebeccapurple
    
    .modalWindow_exit_smile
      color: red
</style>
