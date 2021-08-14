<template>
  <div>
    <p>Display Mode</p>
    <input v-model="displayMode" id="grid-mode" class="toggle toggle-left" name="display-mode" value="grid" type="radio" checked>
    <label for="grid-mode" class="toggle-btn">Grid</label>
    <input v-model="displayMode" id="list-mode" class="toggle toggle-right" name="display-mode" value="list" type="radio">
    <label for="list-mode" class="toggle-btn">List</label>
  </div>
  <ul :class="{ listMode: displayMode === 'list' }">
    <li v-for="show in shows" :key="show.id">
      <Show :show="show" />
    </li>
  </ul>
</template>

<script>
import Show from './Show.vue'
export default {
  components: { Show },
  props: ['shows'],
  data() {
    return {
      displayMode: ''
    }
  }
}
</script>

<style lang="scss">
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
    border-right: 0;

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
</style>