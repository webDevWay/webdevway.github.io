<template>
    <div>
        <login v-if="loginState == ''" ></login>
        <account v-else-if="loginState == true"></Account>
        <admin-account v-else-if="loginState == 'isAdmin'"></admin-account>
    </div>
</template>

<script>
    import store from './Store/store.js';
    import firebase from 'firebase/app';

    const config = {
      apiKey: 'AIzaSyAD_tnNHwsRPz3tt0Dn3e1dWcWraUWQSFY',
      authDomain: 'testnewroad.firebaseapp.com',
      databaseURL: 'https://testnewroad.firebaseio.com',
      projectId: 'testnewroad',
      storageBucket: 'testnewroad.appspot.com',
      messagingSenderId: '681769695460'
    };
    let loginDB = firebase.initializeApp(config);
    let db = loginDB.database();
    let usersRef = db.ref('users');
    console.log('firebase.auth.signInWithEmailAndPassword()', firebase.auth().currentUser);
    // console.log('db', db);

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
