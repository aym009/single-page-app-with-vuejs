<template>
  <div class="display-switcher">
    <span>Display Mode</span>
    <input v-model="displayMode" id="grid-mode" class="toggle toggle-left" name="display-mode" value="grid" type="radio" checked>
    <label for="grid-mode" class="toggle-btn">Grid</label>
    <input v-model="displayMode" id="list-mode" class="toggle toggle-right" name="display-mode" value="list" type="radio">
    <label for="list-mode" class="toggle-btn">List</label>
  </div>
  <ul v-if="isSearchResults" :class="{ listMode: displayMode === 'list' }">
    <Show v-for="show in updatedShows" :key="show.show.id" :show="show.show" />
    <div ref="observe_element"></div>
  </ul>
  <ul v-else :class="{ listMode: displayMode === 'list' }">
    <Show v-for="show in updatedShows" :key="show.id" :show="show" />
    <div ref="observe_element"></div>
  </ul>
</template>

<script>
import Show from './Show.vue'

export default {
  components: { Show },
  props: ['shows', 'isSearchResults'],
  data() {
    return {
      displayMode: '',
      observer: null,
      updatedShows: [],
      startIndex: 0,
      endIndex: 0,
      // ToDo: showsPerPage should be configured via application configuration
      showsPerPage: 50
    }
  },
  mounted() {
    // Using Intersection Observer for Infinite Scroll
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry && entry.isIntersecting) {
        this.updateShowsArr()
      }
    })

    const observeElement = this.$refs.observe_element
    this.observer.observe(observeElement)
  },
  methods: {
    updateShowsArr() {
      this.endIndex += this.showsPerPage
      this.updatedShows = [...this.updatedShows, ...this.shows.slice(this.startIndex, this.endIndex)]
      this.startIndex = this.updatedShows.length + 1
    }
  },
  watch: {
    shows() {
      this.updatedShows = []
      this.startIndex = 0
      this.endIndex = this.showsPerPage
      this.updatedShows = [...this.updatedShows, ...this.shows.slice(this.startIndex, this.endIndex)]
      this.startIndex = this.updatedShows.length + 1
    }
  }
}
</script>

<style lang="scss">
.display-switcher {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin-bottom: 30px;

  span {
    font-size: .8em;
    line-height: 2.2em;
    margin-right: 10px;
  }
}

.toggle-btn{
  border: 3px solid #1a1a1a;
  display: inline-block;
  position: relative;
  text-align: center;
}

input[type="radio"].toggle {
  display: none;

  & + label{
    cursor: pointer;
    min-width: 60px;

    &:hover{
      background: none;
      color: #1a1a1a;
    }

    &:after{
      background: #1a1a1a;
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }
  }

  &.toggle-left + label {
    &:after{
      left: 100%
    }
  }

  &.toggle-right + label{
    margin-left: -5px;

    &:after{
      left: -100%;
    }
  }

  &:checked + label {
    cursor: default;
    color: #fff;
    transition: color 200ms;

    &:after{
      left: 0;
    }
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  li {
    text-align: center;
    width: 31%;
    min-width: 250px;
    margin-bottom: 20px;
  }

  &.listMode {
    display: block;

    li {
      text-align: left;
      height: 100px;
      width: 100%;
    }
  }
}
</style>