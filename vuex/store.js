import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      if (userData.Success == true){
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
          userData.JWT.bearer_token
        }`
      }
    },
    SET_MASTER_DATA (state, MasterData) {
      state.Master = MasterData
    },
    LOGOUT () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    login ({ commit }, credentials) {
      return axios
       .post('/api/user/signin', credentials)
        .then(({ data }) => {
             commit('SET_USER_DATA', data)
        })
    },
    logout ({ commit }) {
      commit('LOGOUT')
    },
    SaveAndUpdate ({ commit }, masterData) {
      return axios
        .post('/api/master', masterData)
        .then(({ data }) => {
           commit('SET_MASTER_DATA', data)
        })
    },
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})
