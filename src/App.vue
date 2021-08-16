<template>
  <SearchBar />
  <router-view />
</template>

<script>
import SearchBar from './components/SearchBar.vue'

export default {
  components: { SearchBar }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
