import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import wallet from './wallet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user, wallet
  }
})
