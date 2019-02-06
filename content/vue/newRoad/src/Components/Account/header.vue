<template>
    <!-- Fixed HEADER -->

    <header class="sticky-top">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-4 col-sm-6">
            <img src="../../assets/img/logo.png" alt="logo">
            <span class="h5 pl-3">{{ this.$store.state.content.txtLogo }}</span>
          </div>
          <div class="col-md-1 col-sm-6 py-1">
            <img src="../../assets/img/user-folder.png" alt="Avatar" title="avatar">
          </div>
          <div class="col-md-5 col-sm-6">
            <form class="form-inline justify-content-center">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success btn-sm" type="submit" v-on:submit.prevent="">Find</button>
            </form>
          </div>
          <div class="col-md-2 col-sm-6 justify-content-end">
            <button type="button" class="btn btn-info btn-sm" @click="LogOut">LogOut</button>
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
            }

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
    .right
        text-align: right
    header
        height: auto
        background: #3f51b5
        color: #fff

</style>
