<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :color="$vuetify.breakpoint.smAndDown ? null : 'transparent'"
      app
      v-model="drawer"
      floating
    >
      <DrawerContent />
      <template v-slot:append>
        <v-toolbar flat color="transparent">
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="toggleDrawer"
            class="hidden-lg-and-up"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-toolbar flat>
        <v-app-bar-nav-icon
          class="hidden-lg-and-up"
          @click="toggleDrawer"
        />
        <v-spacer />
        <v-img
          src="@/assets/logo.svg"
          height="40px"
          contain
          position="center center"
          class="hidden-lg-and-up"
        />
        <v-spacer />
        <v-btn icon v-if="!sidebar" @click="toggleSidebar">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </v-toolbar>
      <router-view />
    </v-main>

    <v-navigation-drawer
      :color="$vuetify.breakpoint.smAndDown ? null : 'transparent'"
      app
      clipped
      right
      v-model="sidebar"
      class="aside"
      floating
    >
      <v-toolbar flat color="transparent">
        <v-toolbar-title>Profile</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="toggleSidebar" v-if="sidebar">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <SidebarContent />
    </v-navigation-drawer>
  </v-app>
</template>
<script>
import user from '@/api/user.json'
import balance from '@/api/balance.json'
import transactions from '@/api/transaction_history.json'
export default {
  components: {
    // UserBalance: () => import('@/components/Wallet/UserBalance'),
    // UserChip: () => import('@/components/Wallet/UserChip'),
    DrawerContent: () => import('@/components/Wallet/DrawerContent'),
    SidebarContent: () => import('@/components/Wallet/SidebarContent')
  },
  data () {
    return {
      drawer: null,
      sidebar: null
    }
  },
  mounted () {
    this.$store.commit('setUser', user)
    this.$store.commit('setBalance', balance)
    this.$store.commit('setTransactions', transactions)
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    },
    toggleSidebar () {
      this.sidebar = !this.sidebar
    }
  }
}
</script>
<style scoped lang="scss">
.aside {
  border: none !important;
}
</style>
