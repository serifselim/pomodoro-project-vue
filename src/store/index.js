import Vue from 'vue'
import Vuex from 'vuex'
import {counter} from './modules/counter/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        counter
    },
})
