<template lang="pug">
  //Modal Table
  div.scoreTable.modalWindowWrapper(v-show="isNeedShow")
    div.modalWindowContent.modalTable
      h5 Уже уходите? #[br] Посмотрите вашу статистику
        div.tableWrapper(v-show="tableSuccessWord.length > 0") Отгаданные слова:
          b-table(hover :items="tableSuccessWord" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc")
        div.tableWrapper(v-show="tableSkipWord.length > 0") Пропущенные слова:
          b-table(hover :items="tableSkipWord" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc")

</template>


<script>
  export default {
    name: "appModalTable",
    data() {
      return {
        fields: [
          {key: '№', sortable: true},
          {key: 'Слово', sortable: true},
          {key: 'Время', sortable: true},
        ],
        sortBy: 'age',
        sortDesc: false,
      }
    },
    computed: {
      isNeedShow() {
        return this.$store.state.modalScoreTable;
      },
      tableSuccessWord() {
        return this.$store.state.tableSuccessWord;
      },
      tableSkipWord() {
        return this.$store.state.tableSkipWord
      },
    },
  }
</script>


<style lang="sass">
  .modalTable
    height: auto
    
    .tableWrapper
      margin-top: 20px
      @media screen and (max-device-width: 770px)
        width: 90%
</style>
