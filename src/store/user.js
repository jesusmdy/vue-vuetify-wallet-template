export default {
  state: {
    user: null
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    }
  },
  getters: {
    getUser: state => state.user
  }
}
