<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import "~bulma"
@import "~bulma-timeline"
@import "~bulma-divider/divider"
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

body { font-family: 'PT Sans', sans-serif; }
</style>
