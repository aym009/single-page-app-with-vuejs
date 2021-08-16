<template>
  <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  <div v-if="shows.length">
    <ShowList :shows="shows" />
  </div>
</template>

<script>
import ShowList from '../components/ShowList.vue'

export default {
  components: { ShowList },
  data() {
    return {
      shows: [],
      errorMessage: ''
    }
  },
  mounted() {
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => this.shows = data)
      .catch(err => this.errorMessage = err.message)
  }
}
</script>
