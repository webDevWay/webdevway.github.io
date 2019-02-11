<template>
    <div id="login" class="login-wrapper">
        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-10 col-xl-4 col-lg-5 col-md-6 self-align-middle login-content">
                    <img class="my-4 " src="../assets/img/logo.png" alt="logo">
                    <h5 class="text-info font-weight-bold">{{ this.$store.state.content.txtLogo }}</h5>
                    <div class="md-form">
                            <input type="email" placeholder="Email" id="Email" class="form-control">
                            <label for="Email"></label>
                        </div>
                        <div class="md-form">
                            <input type="password" placeholder="Password" id="Password" class="form-control">
                            <label for="Password"></label>
                        </div>
                        <div class="col-md-12 p-0 d-flex justify-content-between">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-indicator"></span>
                                <span class="custom-control-description">Remember me</span>
                            </label>
                          <a href="#" class="">Forgot Password?</a>
                        </div>
                            <div class="btn btn-primary mb-4" @click.prevent="loginClick(true)">ВОЙТИ</div>
                  <div class="col-12 d-flex justify-content-center p-0">
                    <p>Still no account?</p> &nbsp;&nbsp; <p> Please go to <a href="#"> Sign up </a></p>
                  </div>
                    <div class="mb-3"><a href="" data-value="isAdmin" @click.prevent="loginClick('isAdmin')">Admin</a></div>

                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <footer class="login-footer">
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
                store.dispatch('loginClick', value);
            },
        }
    }
</script>

<style lang="sass">
    .login-wrapper
        background: linear-gradient(to top, #283593, #3949AB) no-repeat
        height: 100vh
        display: flex
        flex-direction: row
        align-items: center
        text-align: center
    .login-content
        height: 50%
        border-radius: 5px
        background: #fff
    .login-footer
        color: white
</style>


