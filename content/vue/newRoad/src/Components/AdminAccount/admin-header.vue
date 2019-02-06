<template>
  <!-- Fixed HEADER -->
  <header class="sticky-top">
    <div class="container-fluid">
      <div class="row align-items-center d-sm-flex justify-content-center p-0">
        <div class="col-md-3 col-sm-4 col-8">
          <img src="../../assets/img/logo.png" alt="logo">
          <span class="h5 pl-3">{{ this.$store.state.content.txtLogo }}</span>
        </div>
        <div class="col-md-3 col-sm-3 col-4 d-flex justify-content-end py-2">
          <img src="../../assets/img/admin.png" alt="Avatar" title="avatar">
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
<!--<template>-->
    <!--&lt;!&ndash; Fixed HEADER &ndash;&gt;-->

    <!--<header class="sticky-top">-->
        <!--<nav class="navbar navbar-expand-lg">-->
            <!--<img src="../../assets/img/logo.png" alt="logo">-->
            <!--<span class="h5 pl-3">{{ this.$store.state.content.txtLogo }}</span>-->
            <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">-->
                <!--<span class="navbar-toggler-icon"></span>-->
            <!--</button>-->
            <!--<div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">-->
                <!--<div class="col-2 ">-->

                    <!--<img src="../../assets/img/admin.png" alt="Avatar" title="avatar">-->

                <!--</div>-->
                <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
                    <!--<span class="navbar-toggler-icon"></span>-->
                <!--</button>-->
                <!--<div class="col-6" id="navbarSupportedContent">-->
                    <!--<form class="form-inline justify-content-center">-->
                        <!--<input class="form-control" type="search" placeholder="Search" aria-label="Search">-->
                        <!--<button class="btn btn-outline-success py-1 btn-sm" type="submit" v-on:submit.prevent="">Find</button>-->
                    <!--</form>-->
                <!--</div>-->
                <!--<div class="col-2 justify-content-end">-->
                    <!--<button type="button" class="btn btn-info btn-sm" @click="LogOut">LogOut</button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</nav>-->

    <!--</header>-->

</template>

<script>

    export default {
        name: 'acc-header',
        methods: {
            LogOut() {
                let question = confirm('Вы действительно хотите выйти?');
                if (question) {
                    this.$store.dispatch('loginClick', '');
                }
            },
        }
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
