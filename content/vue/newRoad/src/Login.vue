<template>
  <div id="login">
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-7 col-sm-9 col-xs-12 main">
            <img src="./assets/logo.png" alt="logo">
            <h5>Remark</h5>
            <input type="email" placeholder="Email">
            <br>
            <input type="password" placeholder="Password">
            <br>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Remember me</span>
            </label>

            <a href="#">Forgot Password?</a>
            <br>
            <div class="btn btn-primary">Sign in</div>
            <p>Still no account? Please go to <a href="#">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'login',
  }
</script>


<style lang="sass" scoped>
  #login

    .main
      margin: 150px auto
      border-radius: 5px
      background: #fff
      height: 550px


</style>


