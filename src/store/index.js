import Vue from 'vue'
import Vuex from 'vuex'
import {counter} from './modules/counter/index'
import {todo} from './modules/todo/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        counter,todo
    },
})
