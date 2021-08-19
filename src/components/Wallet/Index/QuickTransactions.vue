<template>
  <v-list class="pa-2 ma-1" color="transparent" dense>
    <v-list-item-group>
      <v-list-item v-for="(item, n) in items" :key="n" to="/activity">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ formatBalance({ total: item.ammount, currency: 'usd' }) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
import { formatBalance } from '@/utils/numberUtils'
export default {
  name: 'QuickTransactions',
  methods: { formatBalance },
  data () {
    return {
      items: [
        {
          title: 'Transport',
          icon: 'mdi-train-car',
          ammount: 148.00
        },
        {
          title: 'Shopping',
          icon: 'mdi-cart',
          ammount: 564.03
        },
        {
          title: 'Subscriptions',
          icon: 'mdi-ticket-confirmation',
          ammount: 217.06
        },
        {
          title: 'Services',
          icon: 'mdi-credit-card-outline',
          ammount: 467.99
        }
      ]
    }
  }
}
</script>
