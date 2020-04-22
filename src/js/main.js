import css from '../style/main.scss';

import Vue from 'vue';
import App from './components/App';
import MainScreen from './components/MainScreen';
import TicTacToe from './components/TicTacToe';
import Cell from './components/Cell';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.component('main-screen', MainScreen);
Vue.component('tic-tac-toe', TicTacToe);
Vue.component('cell', Cell);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    el: '#app',
    render: h => h(App)
});
