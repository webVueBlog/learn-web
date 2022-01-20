import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import moduleA from './modules/app'

const modules = {
  app: moduleA,
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
