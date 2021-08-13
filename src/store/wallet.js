export default {
  state: {
    balance: null,
    transactions: null
  },
  mutations: {
    setBalance: (state, balance) => {
      state.balance = balance
    },
    setTransactions: (state, transactions) => {
      state.transactions = transactions
    }
  },
  getters: {
    getBalance: state => state.balance,
    getTransactions: state => state.transactions,
    getLastsTransactions: state => state.transactions.reverse().slice(0, 5)
  }
}
