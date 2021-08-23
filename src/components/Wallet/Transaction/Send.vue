<template>
  <v-sheet class="my-3">
    <v-row no-gutters>
      <v-col sm="12" md="6" lg="6" class="left">
        <v-sheet class="text-center item pa-5">
          <h4 class="text-title">Current balance</h4>
          <h4 class="text-h3">
            {{
              formatBalance(
                {
                  total: current_balance - transaction.ammount,
                  currency: 'usd'
                }
              )
            }}
          </h4>
        </v-sheet>
        <v-sheet class="pa-5 item">
          <v-text-field
            outlined
            prefix="$"
            v-model="transaction.ammount"
            :label="transaction.ammount ? formatBalance({ total: transaction.ammount, currency: 'usd' }) : 'Type ammount'"
            placeholder="Ammount"
            type="number"
            minlength="0.1"
            :maxlength="current_balance"
            :rules="ammountRules"
            class="input"
          />
        </v-sheet>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <v-sheet class="parent rounded-lg" dark>
          <v-card class="children rounded-lg pa-5">
            <v-card-title>Transfer Details</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="transaction.cardNumber"
                  filled
                  placeholder="XXXX · XXXX · XXXX · XXXX"
                  label="Card number"
                  outlined
                />
                <v-text-field
                  v-model="transaction.fullName"
                  filled
                  placeholder="Full name"
                  outlined
                  label="Receiver full name"
                />
                <v-textarea
                  filled
                  placeholder="Ex... Fruit payment, Bills, etc..."
                  label="Concept"
                  height="80"
                  outlined
                  v-model="transaction.concept"
                />
                <v-btn
                  @click="send"
                  x-large
                  block
                  color="secondary"
                >
                  Confirm
                </v-btn>
                <Result @wasClosed="clearFields" v-if="result" :result="result" :transaction="transaction" />
              </v-form>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
import { formatBalance } from '@/utils/numberUtils'
export default {
  name: 'TransactionSend',
  components: {
    Result: () => import('./_result.vue')
  },
  data () {
    return {
      current_balance: 0,
      dialog: false,
      transaction: {
        ammount: 33000,
        concept: 'Car reparation payment',
        fullName: 'Dimitri Sanchez',
        cardNumber: 4012888888881881
      },
      result: null,
      ammountRules: [
        v => !!v || 'Ammount is required',
        v => v <= this.current_balance || 'Not enough balance',
        v => v >= '0.1' || 'Minimum ammount is $0.1'
      ]
    }
  },
  mounted () {
    if (this.balance) this.current_balance = this.balance.total
    console.log(typeof this.current_balance)
  },
  methods: {
    formatBalance,
    async send () {
      this.result = await this.$store.dispatch('alterBalance', this.transaction)
    },
    clearFields () {
      this.transaction.ammount = null
      this.transaction.concept = null
      this.transaction.fullName = null
      this.transaction.cardNumber = null
    }
  },
  computed: {
    balance () {
      return this.$store.getters.getBalance
    }
  }
}
</script>
<style scoped lang="scss">
.parent {
  background: linear-gradient(135deg, #033395, #27F0F0);
  .children {
    background: linear-gradient(135deg, rgba(0, 0, 0, .30), rgba(0, 0, 0, .10));
  }
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: red;
  .item {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .input {
      width: 100%;
    }
  }
}
</style>
