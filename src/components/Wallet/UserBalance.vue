<template>
  <v-btn rounded to="/history" color="primary" depressed>
    <v-icon left>mdi-wallet</v-icon>
    <span class="font-weight-black text-caption">
      {{ formatBalance(balance) }}
    </span>
  </v-btn>
</template>
<script>
import { formatBalance } from '@/utils/numberUtils'
export default {
  name: 'UserMenu',
  methods: { formatBalance },
  computed: {
    balance () {
      return this.$store.getters.getBalance
    }
  }
}
</script>
