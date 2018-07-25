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
  documentOne: '',
  numberOne: '',
  documentTwo: '',
  numberTwo: '',
  blood: '',
  tel: '',
  email: '',
  rules: {
    required: value => !!value || 'Requerido.',
    email: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'Correo invalido'
    },
    phone: value => {
      const pattern = /[0-9]{7}/; // /[0-9]{10}/
      return pattern.test(value) || 'Inserte solo numeros y un minimo de 7 numeros'
    },
    doc: value => {
      const pattern = /[0-9]/
      return pattern.test(value) || 'Solo numeros por favor'
    }
  }
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
  SET_TYPE_DOCUMENT_ONE (state, doc) {
    state.documentOne = doc
  },
  SET_NUMBER_DOCUMENT_ONE (state, number) {
    state.numberOne = number
  },
  SET_TYPE_DOCUMENT_TWO (state, doc) {
    state.documentTwo = doc
  },
  SET_NUMBER_DOCUMENT_TWO (state, number) {
    state.numberTwo = number
  },
  CLEAR_DOCUMENT (state) {
    state.documentTwo = null
    state.numberTwo = null
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
  setTypeDocumentOne: ({commit}, doc) => {
    commit('SET_TYPE_DOCUMENT_ONE', doc)
  },
  setNumberDocumentOne: ({commit}, doc) => {
    commit('SET_NUMBER_DOCUMENT_ONE', doc)
  },
  setTypeDocumentTwo: ({commit}, doc) => {
    commit('SET_TYPE_DOCUMENT_TWO', doc)
  },
  setNumberDocumentTwo: ({commit}, doc) => {
    commit('SET_NUMBER_DOCUMENT_TWO', doc)
  },
  clearDocument: ({commit}) => {
    commit('CLEAR_DOCUMENT')
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
