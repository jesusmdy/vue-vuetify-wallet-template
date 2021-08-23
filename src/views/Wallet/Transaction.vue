<template>
  <v-sheet class="pa-5">
    <v-tabs
      v-model="tab"
      grow
      background-color="secondary"
      class="rounded-lg"
      dark
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="(item, n) in items"
        :key="n"
      >
        {{ item.title }}
        <v-icon>{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Send />
      </v-tab-item>
      <v-tab-item>2</v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>
<script>
import Send from '@/components/Wallet/Transaction/Send'
export default {
  title: 'Transaction',
  components: { Send },
  data () {
    return {
      tab: null,
      items: [
        {
          title: 'Send',
          icon: 'mdi-arrow-top-right-thick'
        },
        {
          title: 'Receive',
          icon: 'mdi-arrow-bottom-left-thick'
        }
      ]
    }
  }
}
</script>
