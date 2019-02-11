<template>
    <!-- Fixed HEADER -->
    <header class="sticky-top user-header">
      <div class="container-fluid">
        <div class="row align-items-center p-0">
          <div class="col-sm-1 col-2 d-md-none pr-4">
            <a href="#" class="menu-btn" @click="showBurgerMenu">
              <span></span>
            </a>
          </div>
          <div class="col-md-3 col-5 pr-0 d-flex justify-content-md-start justify-sm-content-center justify-content-end">
            <img src="../../assets/img/logo.png" alt="logo">
            <span class="h5 pl-sm-3 pl-0 align-self-center d-none d-sm-block">{{ this.$store.state.content.txtLogo }}</span>
          </div>
          <div class="col-lg-2 col-md-4 col-5 d-flex justify-content-end">
            <img src="../../assets/img/user-folder.png" alt="Avatar" title="avatar">
          </div>
          <div class="col-lg-4 d-none d-lg-block p-0">
            <form class="form-inline justify-content-center">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success btn-sm" type="submit" v-on:submit.prevent="">поиск</button>
            </form>
          </div>
          <div class="col-lg-3 col-md-5 col-12 d-flex justify-content-md-end justify-content-center">
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
            showBurgerMenu(e) {
              e.preventDefault();
              this.$store.dispatch('showBurgerMenu', '');
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
    .menu-btn
        display: block
        width: 50px
        height: 50px
        background-color: #fff
        border-radius: 50%
        position: relative

    .menu-btn span,
    .menu-btn span::before,
    .menu-btn span::after
      position: absolute
      top: 50%
      margin-top: -1px
      left: 50%
      margin-left: -10px
      width: 20px
      height: 2px
      background-color: #222

    .menu-btn span::before,
    .menu-btn span::after
      content: ''
      display: block
      transition: 0.2s

    .menu-btn span::before
      transform: translateY(-5px)

    .menu-btn span::after
      transform: translateY(5px)
</style>
