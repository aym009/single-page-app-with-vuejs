<template>
<li class="show-item">
  <img v-if="show.image" :src="show.image.medium" alt="">
  <p v-else class="no-image">No Image Available</p>
  <div class="show-details">
    <h4>{{ show.name }}</h4>
    <div v-if="show.genres.length" class="genres">
      <span v-for="genre in show.genres" :key="genre">{{ genre }}</span>
    </div>
    <div class="show-details-actions">
      <a :href="show.url" target="_blank">Show Details</a>
      <a :href="show.officialSite" target="_blank">Official Site</a>
    </div>
  </div>
</li>
</template>

<script>
export default {
  props: ['show']
}
</script>

<style lang="scss">
.show-item {
  background: #fff;
  border-radius: 2px;
  height: 100%;
  padding: 20px;

  img {
    margin: 0 auto;
  }

  h4 {
    margin-bottom: 5px;
  }

  a {
    display: inline-block;
    font-size: .8em;
    color: #1a1a1a;
    border: 2px solid #1a1a1a;
    text-decoration: none;
    padding: 3px 5px;

    &:hover {
      color: #fff;
      background: #1a1a1a;
    }

    &:first-of-type {
      margin-right: 5px;
    }
  }

  .no-image {
    background: #bbb;
    padding: 50px 0;
    margin-bottom: 20px;
  }

  .show-details {
    text-align: left;

    .genres {
      margin-bottom: 10px;

      span {
        display: inline-block;
        font-size: .6em;
        font-weight: bold;
        background: #333;
        color: #fff;
        padding: 5px 8px;
        border-radius: 20px;
        margin-right: 5px;
      }
    }
  }
}

.listMode {
  .show-item {
    display: grid;
    grid-template-columns: 45px 1fr;
  }

  img {
    height: 60px;
  }

  .show-details {
    // display: inline-block;
    padding-left: 15px;

    h4, .genres {
      display: inline-block;
      margin-right: 20px;
    }

    a {
      display: inline-block;
    }
  }
}
</style>
