import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//Modules
import user from './user.js';


export default new Vuex.Store({
    modules: {
        user,
    },
    state: {
        login: '',
        ticketsAlert: ['Всё хорошо!!!'],
        ticketsWarning: ['Что-то надо изменить'],
        ticketsSuccess: ['Здесь будут ваши благодарности'],
        tickets: [],
        content: {
          imgLogo: "../assets/img/logo.png",
          txtLogo: 'Ж. К. Х.',


        }
    },
    actions: {
        //Change state.login fo render
        loginClick(state, loginValue) {
            this.state.login = loginValue;
        },
        //Push tickets
        addTicketToArr(state, getTicket) {
            if (getTicket['type'] == 1) {
                if (this.state.ticketsAlert[0] === 'Здесь будут ваши пожелания') {
                    this.state.ticketsAlert = [];
                }
                this.state.ticketsAlert.push(getTicket['text']);
            } else if (getTicket['type'] == 2) {
                if (this.state.ticketsWarning[0] === 'Здесь будут ваши жалобы') {
                    this.state.ticketsWarning = [];
                }
                this.state.ticketsWarning.push(getTicket['text']);
            } else if (getTicket['type'] == 3) {
                if (this.state.ticketsSuccess[0] === 'Здесь будут ваши благодарности') {
                    this.state.ticketsSuccess = [];
                }
                this.state.ticketsSuccess.push(getTicket['text']);
            }
        },
    },
    getters: {

        getLoginState: () => {
            return this.state;
        },
    }
});
