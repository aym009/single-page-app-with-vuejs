<template>
  <input type="text" placeholder="Search shows" v-model="searchQuery" />
  <button
    @click="$router.push({name: 'SearchResults', params: { searchQuery: searchQuery }})"
    :disabled="!searchQuery">
    Search
  </button>
  <p>{{ searchQuery }}</p>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>

<style>

</style>