<template>
  <v-sheet
    :class="{
      'credit-card rounded-xl': true,
      'light': !$vuetify.theme.dark
    }"
    dark
  >
    <div class="shape rounded-xl"></div>
    <v-toolbar color="transparent" flat>
      <v-img height="20" width="20px" contain position="center left" src="@/assets/visa.png" />
      <v-spacer></v-spacer>
      <v-icon>mdi-memory</v-icon>
    </v-toolbar>
    <v-sheet class="pa-4" color="transparent">
      <span class="text-subtitle">Balance</span>
      <h4 class="text-h4">{{ formatBalance(balance) }}</h4>
    </v-sheet>
    <ul class="identifier">
      <li v-for="(part, n) in user['wallet_id_format']" :key="n">{{ part }}</li>
    </ul>
  </v-sheet>
</template>
<script>
import { formatBalance } from '@/utils/numberUtils'
export default {
  name: 'CreditCard',
  methods: { formatBalance },
  computed: {
    balance () {
      return this.$store.getters.getBalance
    },
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
<style scoped lang="scss">
.credit-card {
  background: linear-gradient(135deg,#033395,#27F0F0);
  background-position: center;
  background-size: contain;
  transition: .2s;
  position: relative;
  &.light {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  &:hover {
    transform: scale(1.05);
    transition: .2s;
  }
  .shape {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url('~@/assets/dots.svg');
    background-position: center;
    background-size: 40%;
    opacity: .2;
  }
}
.identifier {
  display: flex;
  list-style: none;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  background: rgba(0,0,0,.10);
  border-radius: 0 0 23px 23px;
  li {
    margin-right: 1rem;
    font-weight: 600;
  }
}
</style>
