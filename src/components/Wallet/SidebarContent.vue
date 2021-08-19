<template>
  <v-sheet color="transparent" class="pb-5">
    <v-card color="$vuetify.theme.dark ? null : 'grey lighten-4'" class="mx-3 rounded-xl" flat>
      <v-sheet class="text-center pb-0 pt-5 transparent">
        <v-avatar width="150" height="150">
          <v-img :src="user.avatar.medium" />
        </v-avatar>
      </v-sheet>
      <v-card-text class="text-center">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ user.fullName }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ user.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>

    <v-toolbar color="transparent" flat>
      <v-toolbar-title>Activity</v-toolbar-title>
    </v-toolbar>
    <v-sheet
      :class="{
        'rounded-xl mx-3 pb-2': true,
        'grey lighten-4': !$vuetify.theme.dark
      }"
    >
      <v-list color="transparent" dense>
        <v-list-item v-for="(item, n) in transactions" :key="n">
          <v-list-item-icon class="ma-0 pt-5">
            <v-icon small color="success" v-if="item.type == 'inbound'">mdi-plus</v-icon>
            <v-icon small color="error" v-else>mdi-minus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.concept }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-btn
                x-small
                :color="item.type == 'inbound' ? 'success' : 'error'"
                outlined
              >
                {{ formatBalance({ currency: 'usd', total: item.total }) }}
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn block rounded text small color="primary" to="/history">
        View full history
      </v-btn>
    </v-sheet>

  </v-sheet>
</template>
<script>
import { formatBalance } from '@/utils/numberUtils'
export default {
  name: 'Sidebar',
  methods: { formatBalance },
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
