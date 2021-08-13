<template>
  <v-list
    dense
    class="pa-0 ma-0"
    :width="$vuetify.breakpoint.smAndDown ? '50px' : '200px'"
    rounded
  >
    <v-list-item double-line to="/profile">
      <v-list-item-avatar>
        <v-img :src="user.avatar.tiny" />
      </v-list-item-avatar>
      <v-list-item-content class="hidden-sm-and-down">
        <v-list-item-title>{{ user.fullName }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  name: 'UserMenu',
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
