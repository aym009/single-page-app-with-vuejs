<template>
  <input type="text" placeholder="Search shows" v-model="searchQuery" />
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