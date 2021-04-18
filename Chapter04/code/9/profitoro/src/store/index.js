import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import firebase from 'firebase'
import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex)

let app = firebase.initializeApp({
  databaseURL: 'https://chapter5-633c3-default-rtdb.firebaseio.com/'
})

let configRef = app.database().ref('/configuration/test')
let statisticsRef = app.database().ref('/statistics')
export default new Vuex.Store({
  state: {
    ...state,
    configRef,
    statisticsRef
  },
  getters,
  mutations: {
    ...mutations,
    ...vuexfireMutations
  },
  actions
})

