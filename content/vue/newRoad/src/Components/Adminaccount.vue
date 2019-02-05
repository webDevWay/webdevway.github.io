<template>
    <div id="account">
        <acc-header></acc-header>
        <!--  Nav + Main -->
        <div class="container-fluid">
            <div class="row">
                <!-- Fixed Left Nav -->
                <acc-leftNav></acc-leftNav>
                <!-- Main -->
                <!-- First Row -->
                <acc-main></acc-main>
                <!-- /Cards -->

            </div>
        </div>
    </div>
</template>


<script>
    import store from '../Store/store.js'
    import accHeader from "./AdminAccount/admin-header.vue";
    import accLeftNav from "./AdminAccount/admin-leftNav.vue";
    import accMain from "./AdminAccount/admin-main.vue";

    export default {
        components: {
            accHeader,
            accLeftNav,
            accMain,
        },
        name: 'admin-account',
    }
</script>


<style lang="sass">


</style>