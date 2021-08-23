import { randomNumber } from '@/utils/numberUtils'

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
    },
    reduceBalance: (state, ammount) => {
      state.balance.total = (state.balance.total - ammount)
    },
    setTransaction: (state, transaction) => {
      state.transactions.push(transaction)
    }
  },
  actions: {
    alterBalance: async (context, { ammount, concept }) => {
      const transaction = {
        concept: concept,
        createdAt: new Date(),
        id: context.state.transactions.length + 1,
        total: ammount,
        type: 'outbound',
        transaction_id: randomNumber()
      }
      context.commit('reduceBalance', ammount)
      context.commit('setTransaction', transaction)
      return await transaction
    }
  },
  getters: {
    getBalance: state => state.balance,
    getTransactions: state => state.transactions,
    getLastsTransactions: state => state.transactions.reverse().slice(0, 5)
  }
}
