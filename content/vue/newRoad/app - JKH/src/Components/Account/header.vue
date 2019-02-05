<template>
    <!-- Fixed HEADER -->

    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg">
            <img src="../../assets/img/logo.png" alt="logo">
            <span class="h5 pl-3">Remark</span>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <div class="col-2 ">
                    <img src="../../assets/img/user-folder.png" alt="Avatar" title="avatar">
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col-6" id="navbarSupportedContent">
                    <form class="form-inline justify-content-center">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success py-1 btn-sm" type="submit" v-on:submit.prevent="">Find</button>
                    </form>
                </div>
                <div class="col-2 justify-content-end">
                    <button type="button" class="btn btn-info btn-sm" @click="LogOut">LogOut</button>
                </div>
            </div>
        </nav>

    </header>

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