<template>
    <div>

        <login v-if="loginState == ''" ></login>
        <account v-else-if="loginState == true"></Account>
        <admin-account v-else-if="loginState == 'isAdmin'"></admin-account>


    </div>
</template>

<script>
    import store from './Store/store.js';
    export default {
       store,
       name: 'app',
       data() {
           return {
               state: {},
               users: [],
           }
       },
       methods: {},
       computed: {
           loginState() {
               return store.state.login;
           },
       },

//       firestore() {
//           return {
//               locations: db.collection('').orderBy('')
//           }
//       },
   };
</script>

<!--    // <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase.js">

-->
<style lang="sass" scoped>

</style>
