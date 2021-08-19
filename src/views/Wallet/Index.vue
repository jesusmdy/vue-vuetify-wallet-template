<template>
  <v-sheet class="pa-5" color="transparent">
    <v-row>
      <v-col cols="12">
        <h1>Your Credit Card</h1>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <CreditCard />
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <QuickTransactions />
      </v-col>
      <v-col cols="12">
        <Charts />
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  name: 'Index',
  components: {
    CreditCard: () => import('@/components/Wallet/Index/CreditCard'),
    QuickTransactions: () => import('@/components/Wallet/Index/QuickTransactions'),
    Charts: () => import('@/components/Wallet/Index/Charts')
  },
  metaInfo: {
    title: 'Wallet · Dashboard'
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    balance () {
      return this.$store.getters.getBalance
    },
    transactions () {
      return this.$store.getters.getLastsTransactions
    }
  }
}
</script>
