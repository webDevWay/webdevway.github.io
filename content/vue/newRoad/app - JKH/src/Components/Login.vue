<template>
    <div id="login">
        <div class="container login-wrapper">
            <div class="row justify-content-center mb-4">
                <div class="col-lg-4 col-md-7 col-sm-12 main self-align-middle">
                    <img class="mt-4" src="../img/logo.png" alt="logo">
                    <h5>Remark</h5>
                    <br>
                    <div class="md-form">
                            <input type="email" placeholder="Email" id="Email" class="form-control">
                            <label for="Email"></label>
                        </div>
                        <div class="md-form">
                            <input type="password" placeholder="Password" id="Password" class="form-control">
                            <label for="Password"></label>
                        </div>
                        <div class="col-6 pb-3 md-form">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-indicator"></span>
                                <span class="custom-control-description">Remember me</span>
                            </label>
                        </div>
                        <div class="col-6 mt-3">
                            <a href="#" class="">Forgot Password?</a>
                            </div>
                            <div class="btn btn-primary" @click.prevent="loginClick(true)">Sign in</div>
                        <p>Still no account? Please go to <a href="#">Sign up</a></p>
                    <p><a href="" data-value="isAdmin" @click.prevent="loginClick('isAdmin')">Admin</a></p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <footer class="footer">
                        <p>WEBSITE BY Creation Studio</p>
                        <p>© 2018. All RIGHT RESERVED.</p>
                        <div class="social">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        </div>

</template>


<script>
    import store from '../Store/store.js'
    export default {
        name: 'login',
        methods: {
            loginClick(value) {
                console.log(store.state.login);
                store.dispatch('loginClick', value);
            },
        }
    }
</script>


<style lang="sass">
    #login
        background: linear-gradient(to top, #283593, #3949AB) no-repeat
        height: 100vh
        display: flex
        flex-direction: row
        align-items: center
        text-align: center
    .main
        height: 50%
        border-radius: 5px
        background: #fff
    footer
        color: white
</style>


