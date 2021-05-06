import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pomoTimer : null,
        pomoShortBreak : null,
        pomoLongBreak : null,
        taskList : []
    },
    actions: {
        helloWorld(){
            console.log("hello world");
        }
    },
    mutations: {
        
    },
    getters: {
        
    }
})