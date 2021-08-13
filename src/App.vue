<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  metaInfo: {
    title: 'Wallet · Balance'
  }
}
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, .20);
}

::-webkit-scrollbar-thumb{
  background:   rgba(0, 0, 0, .30);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #000;
}
</style>
