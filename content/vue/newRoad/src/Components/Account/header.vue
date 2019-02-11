<template>
    <!-- Fixed HEADER -->
    <header class="sticky-top user-header">
      <div class="container-fluid">
        <div class="row align-items-center d-sm-flex justify-content-center p-0">
          <div class="col-md-3 col-sm-4 col-8">
            <img src="../../assets/img/logo.png" alt="logo">
            <span class="h5 pl-3">{{ this.$store.state.content.txtLogo }}</span>
          </div>
          <div class="col-md-3 col-sm-3 col-4 d-flex justify-content-end py-1">
            <img src="../../assets/img/user-folder.png" alt="Avatar" title="avatar">
          </div>
          <div class="col-lg-4 d-none d-lg-block p-0">
            <form class="form-inline justify-content-center">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success btn-sm" type="submit" v-on:submit.prevent="">поиск</button>
            </form>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-5 col-3 d-flex justify-content-end">
            <button type="button" class="btn btn-info btn-sm" @click="LogOut">Выйти</button>
          </div>
        </div>
      </div>
    </header>

</template>

<script>
    export default {
        name: 'acc-header',
        data() {
          return {
            state: {
              logo: this.$store.state.content.imgLogo,
            },
          }
        },
        methods: {
            LogOut() {
                let question = confirm('Вы действительно хотите выйти?');
                if (question) {
                    this.$store.dispatch('loginClick', '');
                }
            },
        },
      computed: {
        loginState() {
          return this.$store.state.content.imgLogo;
        },
      },
    }
</script>

<style lang="sass">
    .user-header
        background: #3f51b5
        color: #fff
</style>
