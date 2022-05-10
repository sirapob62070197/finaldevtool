export const state = () => ({
  account: [],
  accessToken: null
})

export const actions = {
  setAccount ({ commit }, payload) {
    commit('setAccount', payload)
  },

  setAccessToken ({ commit }, payload) {
    commit('setAccessToken', payload)
  }
}

export const mutations = {
  setAccount (state, payload) {
    state.account = payload || []
  },

  setAccessToken (state, payload) {
    state.accessToken = payload || null
  }
}

export const getters = {
  getAccount: (state) => {
    return state.account
  },

  getAccessToken: (state) => {
    return state.accessToken
  }
}
