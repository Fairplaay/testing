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
  updateName (state, name) {
    state.name = name.toLowerCase()
  },
  updateLastName (state, lastName) {
    state.lastName = lastName.toLowerCase()
  },
  updateGender (state, gender) {
    state.gender = gender
  },
  updateDoc (state, doc) {
    state.doc = doc
  },
  updateNumber (state, number) {
    state.number = number
  },
  updateBlood (state, blood) {
    state.blood = blood
  },
  updateTel (state, tel) {
    state.tel = tel
  },
  updateEmail (state, email) {
    state.email = email
  }
}

const store = new Vuex.Store({
  state, mutations, plugins: [vuexLocal.plugin]
})

export default store
