import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 5000
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

export default store
