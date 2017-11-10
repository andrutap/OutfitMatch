import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    buttons: [
      { name: 'Facebook' },
      { name: 'Twitter' }
    ],
    user: {
      name: undefined,
      last_name: undefined,
      email: undefined,
      rut: undefined,
      profile: undefined,
      picture: undefined,
      phone: undefined,
      login_type: undefined,
      score: 0
    },
    login: false
  },
  getters: {
    buttons: state => {
      return state.buttons
    },
    user: state => {
      return state.user
    },
    login: state => {
      return state.login
    }
  },
  mutations: {
    didLogin: (state, payload) => {
      state.login = payload
    }
  },
  actions: {
    didLogin: ({commit}, payload) => {
      commit('didLogin', payload)
    }
  }
})
