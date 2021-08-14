<template>
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
      shows: []
    }
  },
  mounted() {
    fetch('https://api.tvmaze.com/shows?page=1')
      .then(res => res.json())
      .then(data => this.shows = data)
      .catch(err => console.log(err.message))
  }
}
</script>
