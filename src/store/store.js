import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const state = {
  name: '',
  lastName: '',
  gender: '',
  doc: '',
  number: '',
  blood: '',
  tel: '',
  email: ''
}
const mutations = {
  SET_NAME (state, name) {
    state.name = name.toLowerCase()
  },
  SET_LASTNAME (state, lastName) {
    state.lastName = lastName.toLowerCase()
  },
  SET_GENDER (state, gender) {
    state.gender = gender
  },
  SET_TYPE_DOCUMENT (state, doc) {
    state.doc = doc
  },
  SET_NUMBER_DOCCUMENT (state, number) {
    state.number = number
  },
  SET_TYPE_BLOOD (state, blood) {
    state.blood = blood
  },
  SET_PHONE (state, tel) {
    state.tel = tel
  },
  SET_EMAIL (state, email) {
    state.email = email
  }
}

const actions = {
  setName: ({commit}, name) => {
    commit('SET_NAME', name)
  },
  setLastname: ({commit}, lastName) => {
    commit('SET_LASTNAME', lastName)
  },
  setGender: ({commit}, gender) => {
    commit('SET_GENDER', gender)
  },
  setTypeDocument: ({commit}, typeDocument) => {
    commit('SET_TYPE_DOCUMENT', typeDocument)
  },
  setNumberDocument: ({commit}, NumberDocument) => {
    commit('SET_NUMBER_DOCCUMENT', NumberDocument)
  },
  setTypeBlood: ({commit}, typeBlood) => {
    commit('SET_TYPE_BLOOD', typeBlood)
  },
  setPhone: ({commit}, phone) => {
    commit('SET_PHONE', phone)
  },
  setEmail: ({commit}, email) => {
    commit('SET_EMAIL', email)
  }
}

const store = new Vuex.Store({
  state, mutations, actions, plugins: [vuexLocal.plugin]
})

export default store
