<template>
  <ul v-for="show in shows" :key="show.id">
    <Show :show="show" />
  </ul>
</template>

<script>
import Show from './Show.vue'
export default {
  components: { Show },
  props: ['shows']
}
</script>

<style>

</style>