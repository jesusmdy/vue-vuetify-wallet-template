<template>
  <v-dialog v-model="dialog" width="500">
    <v-card class="rounded-lg">
      <v-card-text>
        <div class="text-center pt-5 text-h3">
          <v-icon size="70" color="success">mdi-check-decagram</v-icon>
        </div>
        <h4 class="text-center pa-5 text-h4">Transaction complete!</h4>
        <v-sheet class="ma-2 rounded-lg" outlined>
          <v-list disabled color="transparent" class="pa-5">
            <v-subheader>Transaction details</v-subheader>
            <v-list-item-group>
              <v-list-item double-line>
                <v-list-item-content>
                  <v-list-item-title>Transaction number</v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold">
                    {{ `#${result.transaction_id}` }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item double-line>
                <v-list-item-content>
                  <v-list-item-title>Receiver</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.fullName }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item double-line>
                <v-list-item-content>
                  <v-list-item-title>Sender</v-list-item-title>
                  <v-list-item-subtitle>{{ user.fullName }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item double-line>
                <v-list-item-content>
                  <v-list-item-title>Card Number</v-list-item-title>
                  <v-list-item-subtitle>
                    {{
                      transaction.cardNumber
                      .toString()
                      .replace(/\d(?=\d{4})/g, "●")
                    }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-toolbar
            flat
            color="transparent"
            :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-btn
              color="secondary"
              to="/activity"
              text
              :icon="$vuetify.breakpoint.smAndDown"
            >
              <v-icon left>mdi-history</v-icon>
              <span v-if="$vuetify.breakpoint.mdAndUp">View Activity</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :large="$vuetify.breakpoint.mdAndUp"
              depressed
              @click="closeDialog"
            >Accept</v-btn>
          </v-toolbar>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'Result',
  props: {
    transaction: null,
    result: null
  },
  data () {
    return {
      dialog: true
    }
  },
  methods: {
    closeDialog () {
      this.dialog = false
      this.$emit('wasClosed')
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
