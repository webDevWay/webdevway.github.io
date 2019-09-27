<template lang="html">
  <div class="col-md-10 col-12 main">
    <div class="row mt-3">
      <div class="col-md-5 col-sm-7 col-8 mx-auto">
        <div class="md-form m-0">
          <input type="text" placeholder="Добавить обращение в ЖКХ" id="text" class="form-control"
                 v-model="ticket.text">
        </div>
      </div>
      <div class="col-md-2 col-sm-5 col-4 px-0 align-self-center mx-auto">
        <select class="custom-select" id="inputGroupSelect04" v-model="ticket.type">
          <option value="1" selected>Пожелание</option>
          <option value="2">Жалоба</option>
          <option value="3">Благодарность</option>
        </select>
      </div>
      <div class="col-md-2 col-sm-12  px-0 p-0 align-self-center d-flex d-md-block justify-content-center mx-auto">
        <div class="btn btn-success p-2" v-on:click="submitTicketToStore">Добавить</div>
      </div>
      <div class="col-md-2"></div>
      <div class="col-12 mt-3">
        <!-- TEST Card -->
        <div class="card chart-card alert alert-warning">
          <!-- Card content -->
          <div class="card-body pb-0">
            <!-- Title -->
            <h5 class="card-title font-weight-bold mb-3">Мои пожелания</h5>
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
            <h5 class="card-title font-weight-bold mb-3">Мои жалобы</h5>
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
            <h5 class="card-title font-weight-bold mb-3">Мои благодарности</h5>
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
    export default {
        name: 'acc-main',
        data() {
            return {
                ticket: {
                    text: "",
                    type: 1
                },
            }
        },
        methods: {
            submitTicketToStore() {
                if (this.ticket.text) {
                    this.$store.dispatch('addTicketToArr', this.ticket);
                    this.ticket = {
                        text: "",
                        type: 1
                    };
                }
            },
        }
    }
</script>

<style lang="sass">
    .main
        height: 100vh
        background: #F1F4F5
</style>
