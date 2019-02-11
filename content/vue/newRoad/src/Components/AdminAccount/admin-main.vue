<template lang="html">
  <div class="col-md-10 col-sm-9 col-8 main">
    <div class="row mt-3 ">
      <div class="col-12">
        <!-- TEST Card -->
        <div class="card chart-card alert alert-warning">
          <!-- Card content -->
          <div class="card-body pb-0">
            <!-- Title -->
            <h5 class="card-title font-weight-bold mb-3">Пожелания</h5>
            <!-- Text -->
            <ul class="card-text mb-1" v-for="item in $store.state.ticketsAlert">
              <transition appear name="fade">
                <li>{{item}}</li>
              </transition>
            </ul>
          </div>
        </div>
        <!-- /Card -->
      </div>
      <div class="col-12">
        <!-- TEST Card -->
        <div class="card chart-card alert alert-danger">
          <!-- Card content -->
          <div class="card-body pb-0">
            <!-- Title -->
            <h5 class="card-title font-weight-bold mb-3">Жалобы</h5>
            <!-- Text -->
            <ul class="card-text mb-1 mt-0" v-for="item in $store.state.ticketsWarning">
              <li>{{item}}</li>
            </ul>
          </div>
        </div>
        <!-- /Card -->
      </div>
      <div class="col-12">
        <!-- TEST Card -->
        <div class="card chart-card alert alert-success">
          <!-- Card content -->
          <div class="card-body pb-0">
            <!-- Title -->
            <h5 class="card-title font-weight-bold mb-3">Благодарности</h5>
            <!-- Text -->
            <ul class="card-text mb-4" v-for="item in $store.state.ticketsSuccess">
              <li>{{item}}</li>
            </ul>
          </div>
        </div>
        <!-- /Card -->
      </div>
    </div>
  </div>
</template>

<script>
    import store from '../../Store/store.js'

    export default {
        name: 'acc-main',
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="sass">
    .main
        height: 100vh
        background: #F1F4F5
</style>
