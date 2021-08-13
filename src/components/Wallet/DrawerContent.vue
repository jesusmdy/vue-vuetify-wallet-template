<template>
  <v-sheet color="transparent">
    <v-toolbar color="transparent" flat>
      <v-img src="@/assets/logo.svg" height="40px" contain position="center center" />
    </v-toolbar>
    <v-list
      rounded
      :dense="$vuetify.breakpoint.mdAndUp"
      v-for="(list, n) in lists" :key="n"
    >
      <v-subheader>{{ list.title }}</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, ni) in list.items"
          :key="ni"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-sheet>
</template>
<script>
export default {
  name: 'DrawerContent',
  data () {
    return {
      lists: [
        {
          title: 'Quick actions',
          items: [
            {
              title: 'Balance',
              icon: 'mdi-wallet',
              to: '/'
            },
            {
              title: 'Profile',
              icon: 'mdi-account-circle',
              to: '/profile'
            }
          ]
        },
        {
          title: 'Transactions',
          items: [
            {
              title: 'Send/Receive',
              icon: 'mdi-repeat',
              to: '/transaction'
            },
            {
              title: 'Activity',
              icon: 'mdi-history',
              to: '/activity'
            }
          ]
        },
        {
          title: 'Options',
          items: [
            {
              title: 'Settings',
              icon: 'mdi-cog',
              to: '/settings'
            },
            {
              title: 'Sign Out',
              icon: 'mdi-location-exit',
              to: undefined
            }
          ]
        }
      ]
    }
  }
}
</script>
