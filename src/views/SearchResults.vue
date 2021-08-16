<template>
  <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  <p v-else-if="!shows.length">"{{ searchQuery }}" has no search result</p>
  <p v-else>Search results of "{{ searchQuery }}"</p>
  <ShowList :shows="shows" :isSearchResults="true" />
</template>

<script>
import ShowList from '../components/ShowList.vue'

export default {
  components: { ShowList },
  props: ['searchQuery'],
  data() {
    return {
      shows: [],
      errorMessage: ''
    }
  },
  mounted() {
    this.getResults()
  },
  methods: {
    getResults() {
      const query = this.searchQuery
      const url = `https://api.tvmaze.com/search/shows?q=${query}`

      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.shows = data
            .filter(item => {
              if(item.show.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1) {
                return item
              }
            })
        })
        .catch(err => this.errorMessage = err.message)
    }
  },
  watch: { 
    searchQuery() {
      this.getResults()
    }
  }
}
</script>
