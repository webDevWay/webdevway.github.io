<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="./">Играть</router-link> |-->
      <!--<router-link to="./about">Об игре</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
    <MainScreen />
  </div>
</template>

<script>
  import MainScreen from '@/views/appMainScreen.vue';

  export default {
    name: "app",
    components: {
      MainScreen,
    }
  };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 5px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
