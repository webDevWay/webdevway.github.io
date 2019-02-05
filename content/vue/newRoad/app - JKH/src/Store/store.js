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
        ticketsWarning: ['Что-то надо сгенерить'],
        ticketsSuccess: ['Здесь будут ваши благодарности'],
        tickets: [],
    },
    actions: {
        //Change state.login fo render
        loginClick(state, loginValue) {
            this.state.login = loginValue;
        },
        //Push tickets
        addTicketToArr(state, getTicket) {
            console.log('from store', this.state.ticketsAlert[0]);
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
            console.log('from store', this.state.tickets);
        },
    },
    getters: {

        getLoginState: () => {
            console.log(this.state);
            return this.state;
        },
    }
});
