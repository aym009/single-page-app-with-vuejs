<template>
  <header>
    <input type="text" placeholder="Search..." v-model="searchQuery" />
    <button
      @click="$router.push({name: 'SearchResults', params: { searchQuery: searchQuery }})"
      :disabled="!searchQuery">
      Search
    </button>
  </header>
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

<style lang="scss">
header {
  background: #fff;
  padding: 30px 0;
  margin-bottom: 30px;
}

input[type="text"] {
  border: 3px solid #1a1a1a;
  border-radius: 2px 0 0 2px;
  padding: 8px 10px;
  width: 400px;
}

button {
  background: #1a1a1a;
  border: 3px solid #1a1a1a;
  border-radius: 0 2px 2px 0;
  color: #fff;
  padding: 8px;
}
</style>